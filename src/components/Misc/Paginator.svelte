<script>
  import ArrowRightIcon from "../Misc/Icons/general/keyboard-arrow-right.svelte";
  import ArrowLeftIcon from "../Misc/Icons/general/keyboard-arrow-left.svelte";
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

  .paginator .btn :global(svg) {
    fill: rgb(var(--color-on-primary-800));
  }

  .paginator .btn :global(.button) {
    padding: 0 5px;
  }

  .btn {
    display: flex;
  }
</style>

<div class="paginator">

  <slot {currentpage}>

    <div class="flex items-center justify-center">
      <div class="btn">
        <Button on:click={clickPrev()}>
          <ArrowLeftIcon />
        </Button>
      </div>
      <div class="text ml-3 mr-3 flex color-dark-1">
        <div class="px-2">{currentpage}</div>
        <div>/</div>
        <div class="px-2">{totalpages}</div>
      </div>
      <div class="btn">
        <Button on:click={clickNext()}>
          <ArrowRightIcon />
        </Button>
      </div>
    </div>

  </slot>
</div>
