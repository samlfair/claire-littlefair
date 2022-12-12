import { createClient } from '$lib/prismicio'

export async function load({ fetch }) {
  const client = createClient({ fetch })

  const config = await client.getSingle('config')
  const menu = await client.getSingle('menu')

  return {
    config,
    menu,
  }
}
