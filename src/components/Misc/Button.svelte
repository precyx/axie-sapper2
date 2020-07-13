<script>
  export let type = "primary";
</script>

<style>
  /* elements */
  .primary {
    cursor: pointer;
    outline: none;
    background: rgb(var(--color-primary-800));
    color: rgb(var(--color-on-primary-800));
    height: 30px;
    padding: 0 10px;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.18);
    font-size: 14px;
    transition: all 0.15s;
  }

  .primary:hover {
    background: rgb(var(--color-primary-900));
  }

  .primary:focus {
    outline: none;
    background: rgb(var(--color-primary-900));
  }

  .primary:active {
    background: rgb(var(--color-primary-1000));
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  }

  .secondary {
    box-shadow: none;
    background: rgba(var(--color-primary-800), 0.1);

    border: 1px solid;
    border-color: rgba(var(--color-primary-1000), 0.3);

    color: rgb(var(--color-primary-1000));

    height: 30px;
    padding: 0 10px;
    border-radius: 5px;
    font-size: 14px;
    transition: all 0.15s;

    cursor: pointer;
    outline: none;
  }

  .secondary:hover {
    background: rgba(var(--color-primary-800), 0.2);
    border-color: rgba(var(--color-primary-1000), 0.8);
  }

  .secondary:active {
    background: rgba(var(--color-primary-800), 0.3);
    border-color: rgba(var(--color-primary-1000), 0.8);
  }
</style>

<button
  on:click
  class="button"
  class:primary={type == 'primary'}
  class:secondary={type == 'secondary'}>
  <slot />
</button>
