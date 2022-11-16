import { error } from '@sveltejs/kit'
import { Client, Environment } from 'square'
import { env } from '$env/dynamic/private'
import JSONbig from 'json-bigint'

const prismicEndpoint =
  'https://if-api.prismic.io/if/write/clairelittlefair--square'

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

  // const {
  //   result: { relatedObjects },
  // } = await catalogApi.batchRetrieveCatalogObjects({
  //   objectIds,
  //   includeRelatedObjects: true,
  // })
  const squareResponse = await catalogApi.batchRetrieveCatalogObjects({
    objectIds,
    includeRelatedObjects: true,
  })

  const {
    result: { relatedObjects },
  } = squareResponse

  console.log(JSONbig.stringify(squareResponse, null, 2))

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
        imageIds: [image_id],
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
    const image_url = imageURLs[image_id]
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

  const response = await fetch(prismicEndpoint, {
    method: 'POST',
    body: JSON.stringify(results),
    headers: {
      authorization: `Bearer ${env.PRISMIC_IF_ACCESS_TOKEN}`,
    },
  })

  return new Response(JSON.stringify(response))
}
