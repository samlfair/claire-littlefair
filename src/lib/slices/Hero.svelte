<script>
  import * as prismicH from '@prismicio/helpers'
  import { getElementScrollCoefficient } from '$lib/helpers'

  export let slice

  let scrollY, innerHeight, el

  const { text, image } = slice.primary
  const { alt, dimensions } = image
  const { width, height } = dimensions
  const gif = prismicH.asImageWidthSrcSet(image, {
    widths: [640, 828, 1200],
  })

  const jpg = prismicH.asImageWidthSrcSet(image, {
    widths: [640, 828, 1200],
    fm: 'jpg',
    auto: false,
  })
</script>

<svelte:window bind:scrollY bind:innerHeight />

<!-- <section style:aspect-ratio={width / height} class="hero"> -->
<section class="hero">
  <img
    style:--scroll-coefficient={getElementScrollCoefficient(
      scrollY,
      innerHeight,
      el,
    )}
    bind:this={el}
    src={jpg.src}
    srcset={jpg.srcset}
    {alt}
    {width}
    {height}
  />
  <img
    style:--scroll-coefficient={getElementScrollCoefficient(
      scrollY,
      innerHeight,
      el,
    )}
    bind:this={el}
    src={gif.src}
    srcset={gif.srcset}
    {alt}
    {width}
    {height}
    loading="lazy"
  />

  <div class="bound front">
    <p>{text}</p>
  </div>
</section>

<style>
  section {
    display: grid;
    grid-template: 'container';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    place-items: center;
    place-content: center;
    overflow: hidden;
    max-height: 100vh;
    background: #ddd;
  }

  section > * {
    grid-area: container;
  }

  img {
    min-height: 100%;
    width: auto;
    object-fit: cover;
    display: block;
    filter: hue-rotate(calc(var(--scroll-coefficient) * 180deg));
    z-index: 1;
  }

  p {
    margin: 0;
    max-width: 520px;
    text-align: left;
    hyphens: none;
    color: white;
    font-family: Americana;
    font-style: italic;
    font-size: 2.4rem;
    font-size: clamp(2.4rem, 6vw, 2.6rem);
    line-height: clamp(3.5rem, 8vw, 4rem);
    text-shadow: 1px 1px 10px rgba(130, 130, 130, 0.4);
    padding: 3.5rem 1rem 2.5rem;
  }

  .front {
    z-index: 2;
  }
</style>
