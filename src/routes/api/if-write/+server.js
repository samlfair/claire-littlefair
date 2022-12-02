import { error } from '@sveltejs/kit'
import fetch from 'node-fetch'
import { Client, Environment } from 'square'
import { env } from '$env/dynamic/private'
import JSONbig from 'json-bigint'

const prismicEndpoint =
  'https://if-api.prismic.io/if/write/clairelittlefair--square'

const logoURL =
  'https://images.prismic.io/clairelittlefair/37d63355-8d65-408e-b001-8824280ef046_02cfe0ec-0922-4c00-8887-a779e56d34ce_logo.png?auto=compress%2Cformat&width=2048'

/** @type {import('./$types').RequestHandler} */
export async function GET({ fetch }) {
  const client = new Client({
    accessToken: env.SQUARE_ACCESS_TOKEN,
  })

  const { catalogApi, checkoutApi } = client

  const {
    result: { objects: catalogObjects },
  } = await catalogApi.listCatalog(undefined, 'ITEM')

  const objectIds = catalogObjects.map((object) => object.id)

  const squareResponse = await catalogApi.batchRetrieveCatalogObjects({
    objectIds,
    includeRelatedObjects: true,
  })

  const {
    result: { relatedObjects },
  } = squareResponse

  const imageURLs = new Object()

  relatedObjects.forEach((object) => {
    if (object.type === 'IMAGE') {
      if (!imageURLs[object.id]) {
        Object.assign(imageURLs, {
          [object.id]: object.imageData.url,
        })
      }
    }
  })

  const results = catalogObjects.map((item) => {
    const {
      id,
      updatedAt,
      itemData: {
        name: title,
        description,
        imageIds,
        variations: [
          {
            itemVariationData: {
              priceMoney: { amount, currency },
              locationOverrides: [{ soldOut }],
            },
          },
        ],
      },
    } = item

    const last_update = new Date(updatedAt).getTime()
    const image_url = imageIds ? imageURLs[imageIds[0]] : logoURL
    const price = Number(amount)

    return {
      id,
      title,
      description,
      image_url,
      last_update,
      blob: {
        title,
        description,
        image_url,
        price,
        currency,
        soldOut,
      },
    }
  })

  const prismicResponse = await fetch(prismicEndpoint, {
    method: 'POST',
    body: JSON.stringify(results),
    headers: {
      authorization: `Bearer ${env.PRISMIC_IF_ACCESS_TOKEN}`,
    },
  })

  if (prismicResponse.status === 200) {
    const vercelResponse = await fetch(env.VERCEL_WEBHOOK)
    if (vercelResponse.status === 201) {
      return new Response('Success')
    }
  }

  return new Response('Error')
}
