<script>
  export let items = [];

  let selected = "";

  let show = false;

  let selectItem = val => () => {
    selected = val;
    show = false;
  };

  let clickSelect = val => () => {
    show = !show;
  };
</script>

<style>
  .select {
    background: white;
  }
</style>

<div class="select bg-white p-2 rounded">
  <div class="value" on:click={clickSelect()}>{selected || 'none'}</div>
  {#if show}
    <div class="items">
      {#each items as item}
        <div class="item px-2" on:click={selectItem(item.value)}>
          {item.text}
        </div>
      {/each}
    </div>
  {/if}

</div>
