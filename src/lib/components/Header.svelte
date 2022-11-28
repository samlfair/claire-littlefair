<script>
  import * as prismicH from '@prismicio/helpers'
  import { beforeNavigate } from '$app/navigation'

  export let menu, header_image, site_title

  const {
    alt,
    dimensions: { width, height },
  } = header_image
  const { srcset, src } = prismicH.asImageWidthSrcSet(header_image)

  let hamburger = true
</script>

<header>
  {#each menu as item}
    <li>
      <a
        prefetch
        on:click={() => (hamburger = !hamburger)}
        href={prismicH.asLink(item.link)}
      >
        {item.label}
      </a>
    </li>
  {/each}
  <li class="title"><a href="/">{site_title}</a></li>
  <li>Newsletter</li>
  <li>Instagram</li>
</header>

<style>
  header {
    border: 1px solid black;
    border-right: none;
    display: flex;
    background: var(--lightblue);
  }

  li {
    list-style: none;
    border-collapse: collapse;
    border-right: 1px solid black;
    flex-grow: 0;
    text-align: center;
    padding: 0.7rem 1.1rem;
    font-size: 0.9rem;
  }

  li.title {
    flex-grow: 1;
    font-family: Americana;
    font-size: 1.3em;
  }

  a {
    color: black;
    text-decoration: none;
  }
</style>
