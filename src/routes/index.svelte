<script>
  import { goto } from "@sapper/app";
  import { onMount } from "svelte";

  onMount(async () => {
    await goto("Market");
  });
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<div class="bg-black p-2" />
