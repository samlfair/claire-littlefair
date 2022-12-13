<script>
  import { Product } from '$lib/components'

  export let slice
</script>

<section class="bound">
  {#each slice.items as { product }}
    <Product {product} />
  {/each}
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
</style>
