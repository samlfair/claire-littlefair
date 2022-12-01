<script>
  import Header from '$lib/components/Header.svelte'
  import Footer from '../lib/components/Footer.svelte'
  import { repositoryName } from '$lib/prismicio'

  export let data

  const { config } = data

  const {
    site_title,
    config_theme,
    header_image,
    menu,
    menu_right,
    favicon = '𓍰',
  } = config.data
</script>

<svelte:head>
  <script
    async
    defer
    src="https://static.cdn.prismic.io/prismic.js?new=true&repo={repositoryName}"
  ></script>
  <title>{site_title}</title>
  <link rel="icon" type="image/svg+xml" href="./favicon.png" />
</svelte:head>

<Header {menu} {menu_right} {config_theme} {site_title} {header_image} />

<main>
  <slot />
</main>

<Footer {menu} {config_theme} {header_image} />

<style>
  @font-face {
    font-family: 'Americana';
    src: local('Americana'), local('americana'), url('/fonts/americana.ttf');
    font-style: regular;
    font-weight: normal;
  }

  @font-face {
    font-family: 'Americana';
    src: local('Americana Italic'), local('americana-italic'),
      url('/fonts/americana-italic.otf');
    font-style: italic;
    font-weight: normal;
  }

  @font-face {
    font-family: 'Sweet Sans Pro';
    src: local('Sweet Sans Pro'), local('sweet sans pro'),
      url('/fonts/sweet-sans-pro-regular.ttf');
    font-style: regular;
    font-weight: normal;
  }

  @font-face {
    font-family: 'Sweet Sans Pro';
    src: local('Sweet Sans Pro'), local('sweet sans pro'),
      url('/fonts/sweet-sans-pro-medium.ttf');
    font-style: regular;
    font-weight: bold;
  }

  @font-face {
    font-family: 'Sweet Sans Pro';
    src: local('Sweet Sans Pro'), local('sweet sans pro'),
      url('/fonts/sweet-sans-pro-light.otf');
    font-style: regular;
    font-weight: normal;
  }

  :global(body) {
    margin: 0;
    min-height: 100vh;
    font-weight: normal;
  }

  :global(body > div) {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  main {
    flex: 1;
  }

  :global(:root) {
    --gold: #e7a85d;
    --lightblue: #d6eaea;
    --blue: #52a3a3;
  }

  :global(h2) {
    font-family: 'Americana';
  }

  :global(h2) {
    font-size: 2rem;
    letter-spacing: 1px;
  }

  :global(h3) {
    text-transform: uppercase;
    font-family: 'Sweet Sans Pro';
    font-weight: bold;
    font-size: 1.3rem;
  }

  :global(h2 + h3) {
    font-family: 'Americana';
    letter-spacing: 1px;
    color: #666;
    margin-top: -1.3rem;
    line-height: 1.3;
  }

  :global(p, li) {
    font-weight: 500;
    font-family: 'Sweet Sans Pro';
    text-align: justify;
    line-height: 1.4rem;
  }

  :global(p + p) {
    margin-top: 0.6rem;
    text-indent: 0;
  }

  :global(button) {
    font-family: 'Sweet Sans Pro';
  }

  :global(.bound) {
    width: 100%;
    max-width: min(calc(100vw - 5rem), 900px);
    margin: auto;
  }
</style>
