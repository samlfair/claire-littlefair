import { createClient } from '$lib/prismicio'
import { error } from '@sveltejs/kit'

export async function load({ request, params }) {
  console.log(params)
  const client = createClient({ request })

  try {
    const document = await client.getByUID('page', params.uid || 'homepage')
  } catch (e) {
    console.error(e)
    throw error(404, 'Not found')
  }

  if (document) {
    return { document }
  }

  throw error(404, 'Not found')
}
