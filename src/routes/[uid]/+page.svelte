<script>
  import { SliceZone } from '@prismicio/svelte'
  import { dev } from '$app/environment'
  import components from '$lib/components/slices'

  export let data
  const { document } = data
</script>

{#key document.uid}
  <SliceZone slices={document?.data?.body} {components} {dev} />
{/key}
