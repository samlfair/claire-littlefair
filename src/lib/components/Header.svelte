<script>
  import HeaderMenu from '$lib/components/HeaderMenu.svelte'

  export let site_title, menu_right, menu_left
</script>

<input type="checkbox" id="checkbox" />

<header class="checkbox-sibling">
  <HeaderMenu items={menu_left} alignment="left" />
  <div class="menu-item title">
    <a href="/">
      {site_title}
    </a>
    <label class="burger" for="checkbox" />
  </div>
  <HeaderMenu items={menu_right} alignment="right" />
</header>

<style>
  header {
    display: flex;
    background: var(--lightblue);
  }

  header :global(.menu-item) {
    border-bottom: 1px solid black;
    flex-grow: 0;
    font-size: 0.9rem;
  }

  header :global(.menu-item a) {
    padding: 0.7rem 1.1rem;
    display: block;
  }

  header :global(.menu-item:not(:last-child)) {
    border-right: 1px solid black;
  }

  .title {
    flex-grow: 1;
    position: relative;
    text-align: center;
  }

  .title a {
    padding: 0.5rem 1.1rem;
    display: inline-block;
    width: 100%;
    font-family: Americana;
    display: inline-block;
    font-size: 1.4em;
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
      text-align: center;
    }

    /* Selectors necessary for specificity */
    header :global(.menu-item:not(:last-child)) {
      border-right: none;
    }

    .menu-item:not(.title) {
      display: none;
    }

    .title {
      order: -1;
      display: flex;
    }

    :global(.menu-item:not(.title)) {
      display: none;
    }

    label.burger {
      display: initial;
      width: 0px;
      position: relative;
      right: 0.2em;
      top: 0.2em;
    }

    label.burger:after {
      position: absolute;
      right: 0px;
      font-size: 1.5rem;
    }

    #checkbox:not(:checked) ~ .checkbox-sibling label.burger:after {
      content: '☰';
    }

    #checkbox:checked ~ .checkbox-sibling label.burger:after {
      content: '×';
    }

    #checkbox:checked ~ .checkbox-sibling :global(.menu-item:not(.title)) {
      display: initial;
    }
  }
</style>
