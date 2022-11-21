<script>
  import { SliceZone } from '@prismicio/svelte'
  import { dev } from '$app/environment'
  import components from '$lib/components/slices'

  export let data
  // $: data
</script>

{#key data.document.id}
  <div class="perspective">
    <SliceZone slices={data.document.data.body} {components} {dev} />
  </div>
{/key}

<style>
  .perspective {
    perspective: 10px;
    transform-style: preserve-3d;
  }
</style>