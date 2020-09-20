<script>

</script>

<style>
  .button {
    cursor: pointer;
    outline: none;
    background: rgb(var(--color-primary-800));
    color: rgb(var(--color-on-primary-800));
    height: 30px;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.18);
    transition: all 0.15s;
    text-align: center;
    justify-content: center;
    display: inline-flex;
    align-items: center;
    padding: 25px 30px;
    font-size: 21px;
    font-weight: 400;
  }

  .button:hover {
    background: rgb(var(--color-primary-900));
  }

  .button:focus {
    outline: none;
    background: rgb(var(--color-primary-900));
  }

  .button:active {
    background: rgb(var(--color-primary-1000));
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  }
</style>

<div class="button">
  <slot />
</div>
