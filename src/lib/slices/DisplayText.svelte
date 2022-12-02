<script>
  import * as prismicH from '@prismicio/helpers'

  export let slice
</script>

<section class="bound">
  {@html prismicH.asHTML(slice.primary.text)}
</section>

<style>
  section {
    margin-top: 20vh;
    margin-bottom: 20vh;
  }

  section :global(p) {
    font-size: 1.3rem;
    text-align: center;
    line-height: 2.5rem;
  }

  section :global(.serif) {
    font-family: 'Americana';
    font-style: italic;
    letter-spacing: 0.5px;
  }
</style>
