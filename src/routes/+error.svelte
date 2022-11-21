<script>
  import { page } from '$app/stores'
</script>

<section class="error bound">
  <h2>This page can't be found 𓃠</h2>
  <p>The server returned an error {$page.status}.</p>
</section>

<style>
  .error {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
</style>
