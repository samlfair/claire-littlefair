import { createClient } from '$lib/prismicio'

export async function get({ request }) {
  const client = createClient({ request })

  const document = await client.getByUID('page', 'homepage')

  if (document) {
    return {
      body: { document },
    }
  }

  return {
    status: 404,
  }
}
