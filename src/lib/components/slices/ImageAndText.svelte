<script>
  import * as prismicH from "@prismicio/helpers"
  import { linkResolver } from "$lib/prismicio"

  export let slice

  const reverse = slice.primary.reverse
  imageSrc = prismicH.asImageWidthSrcSet(slice.primary.image)  
</script>

<section class="bound">
  <article>
    <div class="padding" class:reverse>
      <div class="image">
        <img 
        src={imageSrc?.src}
        srcset={imageSrc?.srcset}
        alt={slice.primary?.image?.alt}
        />
      </div>
      <div class="text">
        {@html prismicH.asHTML(slice.primary.description, linkResolver)}
      </div>
    </div>
  </article>
</section>


<style>
  article {
    margin: min(10vw, 4rem) 0;
  }

  .padding {
    align-items: flex-start;
    gap: 4vw;
    margin: -1rem;
    padding: 1rem;
    display: flex;
    transition: box-shadow 0.6s, transform 0.6s;
  }
  
  .padding.reverse {
    flex-direction: row-reverse;
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