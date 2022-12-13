<script>
  import * as prismicH from '@prismicio/helpers'

  export let item, alignment

  let left = alignment === 'left',
    right = alignment === 'right'
</script>

<div class="menu-item">
  <a prefetch href={prismicH.asLink(item.primary.link)}>
    {item.primary.label}
  </a>
  {#if item.items[0]}
    <div class="sub-menu" class:left class:right>
      {#each item.items as subItem}
        <a class="sub-item" href={prismicH.asLink(subItem.link)}>
          {subItem.label}
        </a>
      {/each}
    </div>
  {/if}
</div>

<style>
  .menu-item {
    border-bottom: 1px solid black;
    flex-grow: 0;
    font-size: 0.9rem;
    color: black;
    text-decoration: none;
    font-family: Sweet Sans Pro;
    overflow: visible;
    position: relative;
  }

  .sub-menu {
    display: none;
  }

  @media only screen and (min-width: 900px) {
    .menu-item:hover .sub-menu {
      z-index: 10;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: left;
      top: 100%;
      background: white;
    }

    .menu-item:hover .sub-menu.left {
      left: -1px;
    }
    .menu-item:hover .sub-menu.right {
      right: -1px;
    }

    .menu-item:hover .sub-item {
      border: 1px solid black;
      white-space: nowrap;
    }
    .menu-item:hover .sub-item:not(:first-child) {
      border-top: none;
    }

    .menu-item:hover .sub-item:hover {
      background: #efefef;
    }
  }
</style>
