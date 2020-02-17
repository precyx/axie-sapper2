<script>
  import Button from "./Button.svelte";

  export let total = 0;
  export let pagesize = 0;
  export let currentpage = 1;

  $: totalpages = Math.ceil(total / pagesize);

  const clickPrev = () => () => {
    currentpage = Math.max(1, currentpage - 1);
  };
  const clickNext = () => () => {
    currentpage = Math.min(totalpages, currentpage + 1);
  };
</script>

<style>
  .text {
    font-size: 14px;
  }
</style>

<div class="paginator">

  <slot {currentpage}>

    <div class="flex items-center justify-center">
      <Button on:click={clickPrev()}>left</Button>
      <div class="text ml-3 mr-3 flex color-dark-1">
        <div class="px-2">{currentpage}</div>
        <div>/</div>
        <div class="px-2">{totalpages}</div>
      </div>
      <Button on:click={clickNext()} class="btn_primary">right</Button>
    </div>

  </slot>
</div>
