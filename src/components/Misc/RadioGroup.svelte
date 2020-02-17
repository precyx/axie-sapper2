<script>
  import Check from "../Misc/Icons/general/check-24px.svelte";

  export let checked;
  export let defaultChecked = false;
  export let value;
  export let onChange;

  $: _checked = checked != null ? checked : defaultChecked;

  function handleChange(e) {
    if (onChange) onChange(e.target.value);
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
    fill: white;
  }
</style>

<div class="radiogroup">

  {#each items as item}
    <div class="radioitem">item</div>
  {/each}

</div>
