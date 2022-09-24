import { createClient } from '$lib/prismicio'

export const get = async ({ request }) => {
  const client = createClient({ request })

  const url = await client.resolvePreviewURL({
    defaultURL: '/',
  })

  return {
    status: 307,
    headers: {
      location: url,
    },
  }
}
