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
    <article>
      <a href={url} target="_blank" rel="noreferrer">
        <img src={image_url} alt={description} />
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
    </article>
  {/each}
</section>

<style>
  section {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  article {
    flex: 1;
    min-width: 30%;
  }

  a {
    text-decoration: none;
    color: initial;
  }

  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
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
