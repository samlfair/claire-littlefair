<script>
  import { SliceZone } from '@prismicio/svelte'
  import * as prismicH from '@prismicio/helpers'
  import { dev } from '$app/environment'
  import components from '$lib/slices'

  export let data
</script>

{#if prismicH.isFilled.richText(data.document.data.banner_text)}
  <div class="banner">
    <div class="bound">
      {@html prismicH.asHTML(data.document.data.banner_text)}
    </div>
  </div>
{/if}

{#key data.document.id}
  <SliceZone slices={data.document.data.body} {components} {dev} />
{/key}

<style>
  .banner {
    background: var(--lightblue);
    border: 1px solid black;
    border-top: none;
    padding-top: 0.7rem;
    padding-bottom: 0.6rem;
    font-size: 0.9rem;
  }

  .banner :global(p) {
    margin-top: 0px;
    margin-bottom: 0px;
    text-align: center;
  }
</style>
