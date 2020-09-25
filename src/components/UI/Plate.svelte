<script>
  import { onMount } from "svelte";

  export let className = "";
  export let style = "";
</script>

<style>
  .plate {
    background-color: var(--color-light-1);
    border-radius: 20px;
    padding: 25px;
  }
</style>

<div class="plate {className}" {style}>
  <slot />
</div>
