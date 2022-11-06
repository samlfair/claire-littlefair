import { error } from '@sveltejs/kit'
import { Client, Environment } from 'square'
import { env } from '$env/dynamic/private'

/** @type {import('./$types').RequestHandler} */
export async function GET({}) {
  const client = new Client({
    accessToken: env.SQUARE_ACCESS_TOKEN,
    types: 'ITEM',
  })

  const { catalogApi } = client

  const response = await catalogApi.listCatalog()

  const items = response.result.objects.filter(
    (objects) => objects.type === 'ITEM',
  )

  const results = items.map((item) => {
    const {
      id,
      updatedAt: last_update,
      itemData: {
        name: title,
        description,
        imageIds: [image_url],
      },
    } = item
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
      },
    }
  })

  const data = {
    results_size: items.length,
    results,
  }

  const string = JSON.stringify(data)

  return new Response(string)
}