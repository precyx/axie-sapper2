<script>
  import Check from "../Misc/Icons/general/check-24px.svelte";

  export let checked;
  export let value;
  export let group = [];

  $: updateChekbox(group);
  $: updateGroup(checked);

  function updateChekbox(group) {
    checked = group.indexOf(value) >= 0;
  }
  /* handle update group cause of svelte not correctly binding bind:group on custom component */
  function updateGroup(checked) {
    const index = group.indexOf(value);
    if (checked) {
      if (index < 0) {
        group.push(value);
        group = group;
      }
    } else {
      if (index >= 0) {
        group.splice(index, 1);
        group = group;
      }
    }
  }
</script>

<style>
  .checkbox {
    display: inline-flex;
  }

  input {
    display: none;
  }

  .checker {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border-radius: 4px;
    background: var(--color-light-3);
    background: rgba(var(--color-primary-900), 0.2);

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.15s;
  }

  input:checked + label .checker {
    background: rgb(var(--color-primary-800));
  }

  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }

  label:hover .checker {
    opacity: 0.65;
  }

  .checkbox .checker :global(svg) {
    fill: rgb(var(--color-on-primary-800));
  }
</style>

<div class="checkbox">

  <input id="check_{value}" type="checkbox" {value} bind:checked />

  <label for={'check_' + value} class="flex">
    <div class="checker">
      {#if checked}
        <Check />
      {/if}
    </div>
    <slot />
  </label>

</div>
