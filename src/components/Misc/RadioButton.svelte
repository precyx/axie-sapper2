<script>
  export let value;
  export let group;

  export let _id;

  $: active = group == value;
</script>

<style>
  .radiobutton {
    display: inline-flex;
    cursor: pointer;
  }

  input {
    display: none;
  }

  .circ {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--color-light-3);
    background: rgba(var(--color-primary-900), 0.2);

    transition: all 0.15s;

    margin-right: 10px;
  }
  label:hover .circ {
    opacity: 0.65;
  }

  label {
    cursor: pointer;
  }

  .inner_circ {
    display: none;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgb(var(--color-on-primary-800));
  }

  .radiobutton.active .circ {
    background: rgb(var(--color-primary-800));
  }
  .radiobutton.active .inner_circ {
    display: flex;
  }
</style>

<div class="radiobutton" class:active>

  <input id="radio_{_id}" type="radio" {value} bind:group />

  <label for={'radio_' + _id} class="flex">

    <div class="circ">
      <div class="inner_circ" />
    </div>

    <div class="text">
      <slot />
    </div>
  </label>

</div>
