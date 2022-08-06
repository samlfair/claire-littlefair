<script>
  import { colord } from "colord"
  import * as prismicH from "@prismicio/helpers"
  import { linkResolver } from "$lib/prismicio"

  export let config_theme, menu

  const color = colord(config_theme?.data?.color).darken(0.5).toHex()
</script>

<nav style:color>
  <ul class="bound">
    {#each menu as item}
      <a href={prismicH.asLink(item.link, linkResolver)}>
        <li>{item.label}</li>
      </a>
    {/each}
  </ul>
</nav>

<style>
  ul {
    margin: 0 auto 2rem;
    padding: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
    background: white;
    position: sticky;
    top: 0px;
    padding: 1rem;
    font-family: "Sweet Sans Pro";
    font-size: 0.8em;
    text-transform: uppercase;
    z-index: 2;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  nav li:hover {
    color: var(--gold);
  }
</style>