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

<hr />
<hr />
<hr />
<hr />
<hr />
<hr />
<hr />
<hr />
<hr />
<hr />
<hr />
<hr />
<hr />
<hr />
<hr />
<hr />
<hr />
<hr />
<hr />
<hr />
<hr />
<hr />
<hr />

<section class="hero">
  <div class="image" bind:this={el}>
    <img
      style:--scroll-coefficient={getElementScrollCoefficient(
        scrollY,
        innerHeight,
        el,
      )}
      {src}
      {srcset}
      {alt}
      {width}
      {height}
    />
  </div>
  <div class="bound">
    <div class="text">
      <p>{slice.primary.text}</p>
    </div>
  </div>
</section>

<style>
  section {
    position: relative;
  }

  .image {
    width: 100vw;
    overflow: hidden;
  }
  img {
    min-width: 100%;
    object-fit: cover;
    min-height: 40vh;
    display: block;
    filter: hue-rotate(calc(var(--scroll-coefficient) * 180deg));
  }

  .text {
    height: 100%;
    width: 100%;
    top: 0;
    position: absolute;
    display: flex;
    align-items: center;
  }

  p {
    margin: 1rem;
    width: 520px;
    text-align: left;
    hyphens: none;
    color: white;
    font-family: Americana;
    font-style: italic;
    font-size: 2.5rem;
    line-height: 4rem;
    text-shadow: 1px 1px 10px rgba(130, 130, 130, 0.4);
  }
</style>
