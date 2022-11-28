<script>
  import * as prismicH from '@prismicio/helpers'

  export let slice

  let scrollY, innerHeight, el

  const { text, image } = slice.primary
  const { alt, dimensions } = image
  const { width, height } = dimensions
  const { src, srcset } = prismicH.asImageWidthSrcSet(image)

  function getElementScrollCoefficient(scrollY, innerHeight, el) {
    if (el) {
      const { top, bottom, height } = el.getBoundingClientRect()
      const elementScrollCoefficient =
        (innerHeight - top) / (innerHeight + height)

      switch (true) {
        case elementScrollCoefficient < 0:
          // Element is above the screen
          return 0
        case elementScrollCoefficient > 1:
          // Element is below the screen
          return 1
        case top + scrollY < innerHeight:
          // Element starts above the fold
          return scrollY / (bottom + innerHeight)
        default:
          // Element starts below the fold
          return elementScrollCoefficient
      }
    }
    // Element doesn't exist
    return 0
  }
</script>

<svelte:window bind:scrollY bind:innerHeight />

<section class="hero">
  <img
    style:--scroll-coefficient={getElementScrollCoefficient(
      scrollY,
      innerHeight,
      el,
    )}
    bind:this={el}
    {src}
    {srcset}
    {alt}
    {width}
    {height}
  />

  <div class="bound">
      <p>{text}</p>
  </div>
</section>

<style>
  section {
    /* position: relative; */
    display: grid;
    grid-template: "container";
    place-items: center;
    place-content: center;
    overflow: hidden;
    max-height: 100vh;
  }

  section > * {
    grid-area: container;
  }

  img {
    height: auto;
    width: auto;
    object-fit: cover;
    min-height: 100%;
    display: block;
    filter: hue-rotate(calc(var(--scroll-coefficient) * 180deg));
    z-index: -1;
  }
  
  p {
    z-index: 1;
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
</style>
