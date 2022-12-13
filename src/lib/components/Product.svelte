<script>
  import * as prismicH from '@prismicio/helpers'
  import { SoldOut } from '$lib/components'
  export let product

  const { images, square_item } = product.data
  const { price, currency, description, soldOut } = square_item
  const { alt, dimensions } = images[0].image
  const { height, width } = dimensions
  const firstImage = prismicH.asImageWidthSrcSet(images[0].image)
  const secondImage = prismicH.asImageWidthSrcSet(
    images[1]?.image || images[0].image,
  )

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price / 100)
</script>

<a href={prismicH.asLink(product)}>
  <div class="image" {width} {height}>
    <img
      class="first-image"
      src={firstImage.src}
      srcset={firstImage.srcset}
      {alt}
    />
    <img
      class="second-image"
      src={secondImage.src}
      srcset={secondImage.srcset}
      {alt}
    />
  </div>
  <h2>{square_item.title}</h2>
  <p class="details">
    <span class="price">
      {formattedPrice}
    </span>
    {#if soldOut}
      <SoldOut />
    {/if}
  </p>
</a>

<style>
  .image {
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    background: radial-gradient(circle, white 0%, #eee 100%);
  }

  img {
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    mix-blend-mode: darken;
    margin-bottom: 1rem;
    display: block;
    object-fit: cover;
  }

  .second-image {
    display: none;
  }

  .image:hover .first-image {
    display: none;
  }

  .image:hover .second-image {
    display: block;
  }

  h2 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.8rem;
  }
</style>
