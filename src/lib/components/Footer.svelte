<script>
  import * as prismicH from '@prismicio/helpers'
  export let menu, config_theme, header_image

  const {
    alt,
    dimensions: { width, height },
  } = header_image
  const { srcset, src } = prismicH.asImageWidthSrcSet(header_image)
</script>

<footer style:background={config_theme.data.color}>
  <img {src} {srcset} {alt} {width} {height} />
  <menu>
    {#each menu as item}
      <a href={prismicH.asLink(item.link)}>{item.label}</a>
    {/each}
  </menu>
  <span class="copyright">
    © Claire Littlefair Jewellery {new Date().getFullYear()}
  </span>
</footer>

<style>
  footer {
    display: flex;
    gap: 3rem;
    flex-direction: column;
    align-items: center;
    font-family: 'Sweet Sans Pro';
    padding: 4rem 15vw;
  }

  img {
    width: 40%;
    object-fit: contain;
    height: auto;
  }

  menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.2rem;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: black;
  }
</style>
