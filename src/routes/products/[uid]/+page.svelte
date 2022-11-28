<script>
  import * as prismicH from '@prismicio/helpers'
  import { SoldOut } from '$lib/components'

  export let data

  const { description, square_item, images } = data.document.data
  const { title, price, currency } = square_item

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price / 100)
</script>

<main class="bound">
  <section class="images">
    <div class="image-container">
      {#each images as { image }}
        {@const { alt, url, dimensions } = image}
        {@const { width, height } = dimensions}
        {@const { src, srcset } = prismicH.asImageWidthSrcSet(image)}
        <div class="image" {width} {height}>
          <img {src} {alt} />
        </div>
      {/each}
    </div>
  </section>
  <section class="details">
    <h2>{title}</h2>
    <p>{formattedPrice}<SoldOut /></p>
    <button disabled>Add to cart</button>
    {@html prismicH.asHTML(description)}
  </section>
</main>

<style>
  main {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    min-height: 50vh;
  }

  section {
    flex: 1;
  }

  section.images {
    overflow-y: auto;
    position: relative;
    scrollbar-width: none;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
  }

  section.images::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  .image-container {
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .image {
    width: 100%;
    height: auto;
    background: radial-gradient(circle, white 0%, #eee 100%);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    mix-blend-mode: darken;
  }

  @media only screen and (max-width: 600px) {
    main {
      flex-direction: column;
    }

    section.images {
      flex-direction: row;
      min-height: 250px;
      width: 100%;
    }

    .image-container {
      flex-direction: row;
      gap: 1rem;
      height: 100%;
    }

    img {
      width: auto;
      height: 100%;
      display: block;
    }
  }

  section.details {
    align-self: flex-start;
  }

  section.details button {
    display: block;
    width: 100%;
    height: 1.8rem;
    margin-bottom: 1rem;
  }
</style>
