<script>
  export let tabs = [];
  export let onChange;

  let handleClick = tabIndex => {
    let _tabText = "";
    tabs = tabs.map((tab, i) => {
      if (i == tabIndex) {
        _tabText = tab.text;
        return { ...tab, active: true };
      }
      return { ...tab, active: false };
    });

    onChange(_tabText);
  };
</script>

<style>
  .switcher {
    display: flex;
  }

  .switch {
    padding: 10px;
    display: flex;
    margin: 0 5px;
    border: 1px solid #00000017;
    border-radius: 5px;
    cursor: pointer;
  }

  .switch.active {
    background: gainsboro;

    color: rgb(var(--color-on-primary-900));
    background: rgb(var(--color-primary-900));
    border: 1px solid rgb(var(--color-primary-900));
  }
</style>

<div class="switcher">
  {#each tabs as tab, i}
    <div
      on:click={() => {
        handleClick(i);
      }}
      class="switch active"
      class:active={tab.active}>
      {tab.text}
    </div>
  {/each}
</div>
