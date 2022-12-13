<script>
  import HeaderMenu from '$lib/components/HeaderMenu.svelte'

  export let site_title, menu_right, menu_left
</script>

<input type="checkbox" id="checkbox" />

<header class="checkbox-sibling">
  <HeaderMenu items={menu_left} />
  <a class="title" href="/">
    <h1>
      {site_title}
    </h1>
    <label class="burger" for="checkbox" />
  </a>
  <HeaderMenu items={menu_right} />
</header>

<style>
  header {
    display: flex;
    background: var(--lightblue);
  }

  header :global(a) {
    border-bottom: 1px solid black;
    flex-grow: 0;
    text-align: center;
    padding: 0.7rem 1.1rem;
    font-size: 0.9rem;
  }

  header :global(a:not(:last-child)) {
    border-right: 1px solid black;
  }

  a.title {
    flex-grow: 1;
    position: relative;
  }

  h1 {
    font-family: Americana;
    font-size: 1.3em;
    white-space: pre;
    color: black;
    text-decoration: none;
    margin: 0;
    margin-block-end: 0;
    margin-block-start: 0;
  }

  input#checkbox,
  label.burger {
    display: none;
  }

  @media only screen and (max-width: 900px) {
    header {
      flex-direction: column;
      align-items: stretch;
    }

    /* Selectors necessary for specificity */
    header :global(a:not(:last-child)) {
      border-right: none;
    }

    a:not(.title) {
      display: none;
    }

    .title {
      order: -1;
      display: flex;
    }

    .title h1 {
      flex-grow: 1;
    }

    :global(a:not(.title)) {
      display: none;
    }

    label.burger {
      display: initial;
      width: 0px;
      position: relative;
      right: 0px;
    }

    label.burger:after {
      position: absolute;
      right: 0px;
      font-size: 1.2rem;
    }

    #checkbox:not(:checked) ~ .checkbox-sibling label.burger:after {
      content: '☰';
    }

    #checkbox:checked ~ .checkbox-sibling label.burger:after {
      content: '×';
    }

    #checkbox:checked ~ .checkbox-sibling :global(a:not(.title)) {
      display: initial;
    }
  }
</style>
