<script>
  export let total = 0;
  export let pagesize = 0;
  export let currentpage = 0;
  export let onNext;
  export let onPrev;

  $: totalpages = Math.floor(total / pagesize);

  const clickPrev = () => () => {
    if (onPrev) onPrev();
  };
  const clickNext = () => () => {
    if (onNext) onNext();
  };
</script>

<style>
  .text {
    font-size: 14px;
  }
</style>

<div class="paginator">

  <div class="flex items-center justify-center">
    <button on:click={clickPrev()} class="btn_primary">left</button>
    <div class="text ml-3 mr-3 flex color-dark-1">
      <div class="px-2">{currentpage}</div>
      <div>/</div>
      <div class="px-2">{totalpages}</div>
    </div>
    <button on:click={clickNext()} class="btn_primary">right</button>
  </div>

</div>
