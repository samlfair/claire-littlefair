<script>
  export let slice

  const { items } = slice
</script>

<section class="bound">
  {#each items as item}
    {@const {
      link_to_square_page: { url },
      square_products: {
        image_url,
        description,
        title,
        price,
        currency,
        soldOut,
      },
    } = item}
    <a href={url} target="_blank" rel="noreferrer">
      <div
        class="img"
        role="img"
        aria-label={description}
        style:background-image={`url("${image_url}"), radial-gradient(circle, white 0%, #eee 100%)`}
      />
      <!-- <img src={image_url} alt={description} /> -->
      <h2>{title}</h2>
      <p class="details">
        <span class="price">
          £{(price / 100).toFixed(2)}
          {currency}
        </span>
        {#if soldOut}
          <span class="sold-out"> Sold out </span>
        {/if}
      </p>
    </a>
  {/each}
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(230px, 1fr) );
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

  p .sold-out {
    display: inline-block;
    transform: translateY(-1px);
    color: rgb(187, 0, 0);
    text-transform: uppercase;
    margin: 0 -8px 0 10px;
    padding: 3px 8px 0px;
    background: #eee;
    font-size: 0.6rem;
  }
</style>
