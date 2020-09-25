<script>
  import { onMount } from "svelte";

  export let className = "";
  export let style = "";
  export let type = "h1";
</script>

<style>
  .h1 {
    font-size: 32px;
    font-weight: 600;
  }
</style>

<div class="text {className} {type}" {style}>
  <slot />
</div>
