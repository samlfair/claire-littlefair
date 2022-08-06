import { createClient } from '$lib/prismicio'

export async function get({ request, params }) {
  const client = createClient({ request })

  const document = await client.getByUID('page', params.uid)

  if (document) {
    return {
      body: { document },
    }
  }

  return {
    status: 404,
  }
}
