<script>
  import Check from "../Misc/Icons/general/check-24px.svelte";

  export let value;
  export let group = [];
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

  <input id="check_{value}" type="checkbox" {value} bind:group />

  <label for={'check_' + value} class="flex">
    <div class="checker">
      {#if false}
        <Check />
      {/if}
    </div>
    <slot />
  </label>

</div>
