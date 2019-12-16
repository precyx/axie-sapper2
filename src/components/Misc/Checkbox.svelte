<script>
  import Check from "../Misc/Icons/general/check-24px.svelte";

  let checked;
  export let defaultChecked;
  export let value;
  export let onChange;

  function handleChange(e) {
    checked = !checked;
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
    border-radius: 4px;
    background: var(--color-light-3);

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.15s;
  }

  input:checked + label .checker {
    background: var(--color-accent-1);
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

<div class="checkbox">

  <input
    id="check_{value}"
    type="checkbox"
    {value}
    {defaultChecked}
    on:change={handleChange} />

  <label for={'check_' + value} class="flex">
    <div class="checker">
      {#if defaultChecked}
        <Check />
      {/if}
    </div>

    <slot />
  </label>

</div>
