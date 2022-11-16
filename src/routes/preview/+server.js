import { redirect } from '@sveltejs/kit'
import { createClient } from '$lib/prismicio'

export const GET = async ({ request }) => {
  const client = createClient({ request })

  const url = await client.resolvePreviewURL({
    defaultURL: '/',
  })

  throw redirect(307, url)
}
