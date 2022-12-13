<script>
  import * as prismicH from '@prismicio/helpers'
  import { Product } from '$lib/components'

  export let slice
</script>

<section class="bound">
  <div class="grid">
    {#each slice.items as { product }}
      <Product {product} />
    {/each}
  </div>
  {#if slice.primary.see_all}
    <div class="see-all bound">
      <a href={prismicH.asLink(slice.primary.link)}>{slice.primary.label}</a>
    </div>
  {/if}
</section>

<style>
  section {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1rem;
  }

  .see-all {
    display: flex;
    justify-content: flex-end;
  }

  .see-all a {
    text-align: right;
    padding: 0.7rem 0.8rem 0.4rem 1.2rem;
    border-top-left-radius: 5rem;
    border-bottom-left-radius: 5rem;
    font-family: Sweet Sans Pro;
    border: 1px solid var(--blue);
  }

  .see-all a:hover {
    background: var(--lightblue);
  }
</style>
