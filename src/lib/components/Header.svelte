<script>
  import * as prismicH from "@prismicio/helpers"

  export let menu, header_image

  const srcset = prismicH.asImageWidthSrcSet(header_image)
</script>

<header>
  <div class="image">
    <img src={srcset.src} srcset={srcset.srcset} alt={header_image.alt}>
  </div>
  <input checked type="checkbox" id="menu">
  <menu>
    {#each menu as item}
      <li>
        <a href={prismicH.asLink(item.link)}>
          {item.label}
        </a>
      </li>
    {/each}
  </menu>
  <label tabindex=0 for="menu" />
</header>

<style>
header {
  min-height: 40vh;
  position: relative;
  margin-bottom: 10vh;
}

.image {
  width: 100%;
  height: 100%;
  display: flex;
  border: 10px solid var(--lightblue);
  box-sizing: border-box;
}

img {
  width: 30%;
  padding: 5%;
  display: block;
  margin: auto;
}

menu {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: stretch;
  justify-content: space-around;
  height: 100%;
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  flex-grow: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--lightblue);
  transition: all 1s;
}

input {
  display: none;
}

label {
  position: absolute;
  user-select: none;
  top: 2px;
  right: 22px;
}

label:after {
  content: "×";
  display: block;
  font-size: 3rem;
  width: 1em;
  height: 1em;
  text-align: center;
}

a {
  line-height: 100%;
  flex-grow: 1;
  text-align: center;
  transition: all 0.5s;
  color: unset;
  text-decoration: none;
  overflow: hidden;
  text-transform: uppercase;
}

:checked ~ menu a {
  transition-delay: 0.5s;
  line-height: 0rem;
}

:checked ~ menu li {
  flex-grow: 0;
}

:checked ~ label:after {
  content: "☰";
}
</style>