<script>
    import logo from "./logo.png"

    export let subtitle, site_title
</script>

<header class="bound">
  <img src={logo} alt="{site_title} Logo">
  <p>{subtitle}</p>
</header>

<style>
  header {
    margin-top: 3rem;
    margin-bottom: 3rem;
    text-align: center;
    color: rgba(0,0,0,0.7);
  }


  header p {
    font-size: clamp(1rem,3vw,1.3rem);
    font-weight: lighter;
    letter-spacing: 1px;
  }

  img {
    max-width: clamp(200px, 30vw, 400px);
    margin: 0 auto 3rem;
    display: block;
  }
</style>