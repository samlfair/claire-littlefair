<script>
  import * as prismicH from '@prismicio/helpers'

  export let banner_text
</script>

<div class="banner">
  <div class="bound">
    {@html prismicH.asHTML(banner_text)}
  </div>
</div>

<style>
  .banner {
    background: var(--lightblue);
    border-bottom: 1px solid black;
    padding-top: 0.7rem;
    padding-bottom: 0.6rem;
    font-size: 0.9rem;
  }

  .banner :global(p) {
    margin-top: 0px;
    margin-bottom: 0px;
    text-align: center;
  }
</style>
