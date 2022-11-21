<script>
  import { SliceZone } from '@prismicio/svelte'
  import { dev } from '$app/environment'
  import components from '$lib/components/slices'

  export let data
</script>

{#key data.document.id}
  <SliceZone slices={data.document.data.body} {components} {dev} />
{/key}
