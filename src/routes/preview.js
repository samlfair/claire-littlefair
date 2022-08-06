import { createClient, linkResolver } from '$lib/prismicio'

export const get = async ({ request }) => {
  const client = createClient({ request })

  const url = await client.resolvePreviewURL({
    defaultURL: '/',
    linkResolver,
  })

  return {
    status: 307,
    headers: {
      location: url,
    },
  }
}
