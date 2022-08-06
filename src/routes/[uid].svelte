<script>
  import {SliceZone} from "@prismicio/svelte"
  import { dev } from "$app/env"
  import components from "$lib/components/slices"
  export let document
</script>

<SliceZone slices={document?.data?.body} {components} {dev} />
