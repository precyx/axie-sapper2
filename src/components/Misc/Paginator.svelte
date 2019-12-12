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

<div class="paginator">

  <div class="flex items-center">
    <button on:click={clickPrev()}>left</button>
    <div class="px-2">{currentpage}</div>
    <div>/</div>
    <div class="px-2">{totalpages}</div>
    <button on:click={clickNext()}>right</button>
  </div>

</div>
