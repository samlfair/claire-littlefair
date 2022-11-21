import { createClient } from '$lib/prismicio'

export async function load({ request, params }) {
  console.log(params)
  const client = createClient({ request })

  const document = await client.getByUID('page', params.uid || 'homepage')

  if (document) {
    return { document }
  }

  throw error(404, 'Not found')
}
