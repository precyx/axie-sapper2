<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>

</style>

{#if false}
  <Nav {segment} />
{/if}

<main>
  <slot />
</main>
