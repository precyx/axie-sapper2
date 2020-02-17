<script>
  import Button from "../Misc/Button.svelte";

  export let address = "";

  let _address = address;

  let isedit = false;

  const handleClickEdit = () => {
    isedit = true;
  };

  const handleClickSave = () => {
    isedit = false;
    address = _address;
  };
</script>

<style>
  .axie-profile-picker {
    color: var(--color-dark-2);
  }

  .address {
    display: flex;
    font-size: 14px;
  }

  .input {
    padding: 4px 8px;
    font-size: 14px;
    border-radius: 3px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  }

  .val {
    display: flex;
    align-items: center;
  }

  .btn {
    margin-left: 10px;
  }
</style>

<div class="axie-profile-picker">

  {#if isedit}
    <div>
      <input class="input" type="text" bind:value={_address} />
      <Button on:click={handleClickSave}>save</Button>
    </div>
  {:else}
    <div class="address">
      <div class="val">{address}</div>

      <div class="btn">
        <Button on:click={handleClickEdit}>edit</Button>
      </div>

    </div>
  {/if}

</div>
