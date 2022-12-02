<script>
  import * as prismicH from '@prismicio/helpers'
  import { beforeNavigate } from '$app/navigation'

  export let menu, header_image, site_title, menu_right

  const {
    alt,
    dimensions: { width, height },
  } = header_image
  const { srcset, src } = prismicH.asImageWidthSrcSet(header_image)

  let hamburger = true
</script>

<header>
  <input type="checkbox" id="burger" />
  {#each menu as item}
    <li>
      <a prefetch href={prismicH.asLink(item.link)}>
        {item.label}
      </a>
    </li>
  {/each}
  <li class="title">
    <a href="/">{site_title}</a>
    <label class="burger" for="burger" />
  </li>
  {#each menu_right as item}
    <li>
      <a href={prismicH.asLink(item.link)}>
        {item.label}
      </a>
    </li>
  {/each}
</header>

<style>
  header {
    border-right: none;
    display: flex;
    background: var(--lightblue);
  }

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

  li.title {
    flex-grow: 1;
    font-family: Americana;
    font-size: 1.3em;
    white-space: pre;
  }

  a {
    color: black;
    text-decoration: none;
  }

  input#burger,
  label.burger {
    display: none;
  }

  @media only screen and (max-width: 900px) {
    header {
      flex-direction: column;
      align-items: stretch;
    }

    li:not(:last-child) {
      border-right: none;
    }

    li:not(.title) {
      display: none;
    }

    .title {
      order: -1;
      display: flex;
    }

    .title a {
      flex-grow: 1;
    }

    label.burger {
      display: initial;
      width: 0px;
      position: relative;
    }

    label.burger:after {
      position: absolute;
      right: 0px;
    }

    #burger:not(:checked) ~ li.title label.burger:after {
      content: '☰';
    }

    #burger:checked ~ li.title label.burger:after {
      content: '×';
    }

    #burger:checked ~ li:not(.title) {
      display: initial;
    }
  }
</style>
