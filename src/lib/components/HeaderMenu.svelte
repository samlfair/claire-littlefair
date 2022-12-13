<script>
  import * as prismicH from '@prismicio/helpers'

  export let items
</script>

{#each items as item}
  <a prefetch href={prismicH.asLink(item.primary.link)}>
    {item.primary.label}
  </a>
{/each}

<style>
  a {
    list-style: none;
    border-collapse: collapse;
    border-bottom: 1px solid black;
    flex-grow: 0;
    text-align: center;
    padding: 0.7rem 1.1rem;
    font-size: 0.9rem;
    color: black;
    text-decoration: none;
    font-family: Sweet Sans Pro;
  }
</style>
