<script>
  import { onMount } from "svelte";

  export let className = "";
</script>

<style>
  @keyframes rotate360 {
    to {
      transform: rotate(360deg);
    }
  }
  .loader img {
    animation: 0.8s rotate360 infinite linear;
  }
</style>

<div class="loader {className}">
  <img src="images/loading/puff-loading.png" alt="puff loader" />
</div>
