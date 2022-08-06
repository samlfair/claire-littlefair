<script context="module">
  import Header from "$lib/components/Header.svelte"
  import Nav from "$lib/components/Nav.svelte"
  import Footer from "../lib/components/Footer.svelte";
  import { repositoryName } from "$lib/prismicio"
  import { createClient } from '$lib/prismicio'


  export async function load({ fetch }) {
    const client = createClient({ fetch })

    const config = await client.getSingle('config')

    

    return {
      props: {
        config
      }
    };
  }
</script>

<script>
  export let config

  const { site_title, subtitle, config_theme, menu, favicon = "𓍰" } = config.data
</script>

<svelte:head>
  <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo={repositoryName}"></script>
  <title>{site_title}</title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2284%22>{favicon}</text></svg>"/>
  <link
    rel="preload"
    href="/fonts/americana.ttf"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
</svelte:head>

<Header {site_title} {subtitle} />
<Nav {menu} {config_theme} />

<main>
  <slot />
</main>
<Footer />

<style>
  @font-face {
    font-family: "Americana";
    src: local('Americana'), local('americana'),
        url('/fonts/americana.ttf');
    font-style: regular;
    font-weight: normal;
  }

  @font-face {
    font-family: "Sweet Sans Pro";
    src: local('Sweet Sans Pro'), local('sweet sans pro'),
        url('/fonts/sweet-sans-pro-regular.ttf');
    font-style: regular;
    font-weight: 400;
  }

  @font-face {
    font-family: "Sweet Sans Pro";
    src: local('Sweet Sans Pro'), local('sweet sans pro'),
        url('/fonts/sweet-sans-pro-medium.ttf');
    font-style: regular;
    font-weight: bold;
  }

  @font-face {
    font-family: "Sweet Sans Pro";
    src: local('Sweet Sans Pro'), local('sweet sans pro'),
        url('/fonts/sweet-sans-pro-thin.ttf');
    font-style: regular;
    font-weight: lighter;
  }

  :global(body) {
    margin: 0;
    min-height: 100vh;
    font-weight: normal;
  }

  :global(:root) {
    --gold: #E7A85D;
    --lightblue: #D6EAEA;
    --blue: #52A3A3;
  }

    
  :global(h2, h3) {
    font-family: "Americana";
    font-size: 2rem;
  }

  :global(p, li) {
    font-family: "Sweet Sans Pro";
  }

  :global(.bound) {
    width: 100%;
    max-width: min(calc(100vw - 5rem), 800px);
    margin: auto;
  }
</style>