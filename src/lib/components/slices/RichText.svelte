<script>
  import * as prismicH from "@prismicio/helpers"
  import { linkResolver } from "$lib/prismicio"
  export let slice
</script>

<section class="bound richtext">
  {@html prismicH.asHTML(slice.primary.text, linkResolver)}
</section>

<style>
  .richtext :global(a) {
    color: unset;
  }
</style>