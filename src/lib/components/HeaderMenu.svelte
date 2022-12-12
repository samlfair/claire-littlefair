<script>
  import * as prismicH from '@prismicio/helpers'

  export let items
</script>

{#each items as item}
  <li>
    <a prefetch href={prismicH.asLink(item.primary.link)}>
      {item.primary.label}
    </a>
  </li>
{/each}

<style>
  li {
    list-style: none;
    border-collapse: collapse;
    border-bottom: 1px solid black;
    flex-grow: 0;
    text-align: center;
    padding: 0.7rem 1.1rem;
    font-size: 0.9rem;
  }

  li:not(:last-child) {
    border-right: 1px solid black;
  }

  a {
    color: black;
    text-decoration: none;
  }

  @media only screen and (max-width: 900px) {
    li:not(:last-child) {
      border-right: none;
    }

    li:not(.title) {
      display: none;
    }
  }
</style>
