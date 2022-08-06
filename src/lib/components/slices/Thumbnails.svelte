<script>
  import * as prismicH from "@prismicio/helpers"
  import { linkResolver } from "$lib/prismicio"

  export let slice
</script>

{#each slice.items as item}
  {@const reverse = item.reverse}
  {@const imageSrc = prismicH.asImageWidthSrcSet(item.image)}
  <section class="bound">
    <article>
      <a class="padding" href={prismicH.asLink(item.link, linkResolver)} class:reverse>
        <div class="image">
          <img 
            src={imageSrc.src}
            srcset={imageSrc.srcset}
            alt={item.image.alt}
          />
        </div>
        <div class="text">
          <h2>{prismicH.asText(item.heading)}</h2>
          {@html prismicH.asHTML(item.description)}
        </div>
      </a>
    </article>
  </section>
{/each}

<style>
  article {
    margin: min(10vw, 4rem) 0;
  }

  .padding {
    align-items: center;
    gap: 4vw;
    margin: -1rem;
    padding: 1rem;
    display: flex;
    transition: box-shadow 0.6s, transform 0.6s;
  }
  
  .padding.reverse {
    flex-direction: row-reverse;
  }

  .padding:hover {
    box-shadow: 
      0px 4px 20px 14px rgba(0,0,0,0.08), 
      0px 2px 5px 1px rgba(0,0,0,0.1);
    transform: translateY(-1px);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .text {
    flex: 2;
  }
  
  .image {
    /* aspect-ratio: 1.8; */
    background: grey;
    flex: 1.2vw;
    align-self: flex-start;
  }

  img {
    width: 100%;
    aspect-ratio: 1.2;
    object-fit: cover;
    display: block;
  }

  h2 {
    margin-bottom:  0.5rem;
    font-size: 1.4rem;
  }
</style>