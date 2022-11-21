<script>
  import * as prismicH from '@prismicio/helpers'
  import { SoldOut } from '$lib/components'

  export let slice

  const { items } = slice
</script>

<section class="bound">
  {#each items as { product }}
    {@const { images, square_item } = product.data}
    {@const { price, currency, description, soldOut } = square_item}
    {@const { src, srcset } = prismicH.asImageWidthSrcSet(images[0].image)}
    {@const formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(price / 100)}
    <a href={prismicH.asLink(product)}>
      <div
        class="img"
        role="img"
        aria-label={square_item.description}
        style:background-image={`url("${src}"), radial-gradient(circle, white 0%, #eee 100%)`}
      />
      <h2>{square_item.title}</h2>
      <p class="details">
        <span class="price">
          £{(price / 100).toFixed(2)}
          {currency}
        </span>
        {#if soldOut}
          <SoldOut />
        {/if}
      </p>
    </a>
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

  a {
    text-decoration: none;
    color: initial;
  }

  .img {
    width: 100%;
    aspect-ratio: 1;
    background-size: cover;
    background-blend-mode: darken;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.8rem;
  }
</style>
