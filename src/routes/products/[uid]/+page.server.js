import { createClient } from '$lib/prismicio'
import { error } from '@sveltejs/kit'

export async function load({ request, params }) {
  const client = createClient({ request })

  try {
    const document = await client.getByUID('product', params.uid)
    if (document) {
      return { document }
    }
    throw error(404, 'Not found')
  } catch (e) {
    console.error(e)
    throw error(404, 'Not found')
  }
}
