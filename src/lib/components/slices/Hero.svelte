<script>
  export let slice
</script>

<section class="hero">
  <img src={slice.primary.image.url} alt="" />
  <div class="bound">
    <div class="text">
      <p>{slice.primary.text}</p>
    </div>
  </div>
</section>

<style>
  section {
    position: relative;
  }

  img {
    min-width: 100%;
    min-height: 50vh;
    display: block;
  }

  .text {
    height: 100%;
    width: 100%;
    top: 0;
    position: absolute;
    display: flex;
    align-items: center;
  }

  p {
    margin: 1rem;
    width: 520px;
    text-align: left;
    hyphens: none;
    color: white;
    font-family: Americana;
    font-style: italic;
    font-size: 2.5rem;
    line-height: 4rem;
    text-shadow: 1px 1px 10px rgba(130, 130, 130, 0.4);
  }
</style>
