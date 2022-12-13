<script>
  import { HeaderMenuItem } from '$lib/components'

  export let items, alignment
</script>

{#each items as item}
  <HeaderMenuItem {item} {alignment} />
{/each}
