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

  .h3 {
    font-size: 18px;
    font-weight: 500;
  }

  .infobar {
    text-transform: uppercase;
    font-weight: 600;
    color: var(--color-dark-1);
    font-size: 12px;
    letter-spacing: 1px;
    opacity: 0.5;
  }
</style>

<div class="text {className} {type}" {style}>
  <slot />
</div>
