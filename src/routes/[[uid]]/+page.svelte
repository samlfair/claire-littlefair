<script>
  import { SliceZone } from '@prismicio/svelte'
  import * as prismicH from '@prismicio/helpers'
  import { dev } from '$app/environment'
  import components from '$lib/slices'
  import { Banner } from '$lib/components'

  export let data
</script>

{#if prismicH.isFilled.richText(data.document.data.banner_text)}
  <Banner banner_text={data.document.data.banner_text} />
{/if}

{#key data.document.id}
  <SliceZone slices={data.document.data.body} {components} {dev} />
{/key}
