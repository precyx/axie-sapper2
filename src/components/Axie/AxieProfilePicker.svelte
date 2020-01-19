<script>
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

  .btn {
    margin-left: 10px;
  }
</style>

<div class="axie-profile-picker">

  {#if isedit}
    <div>
      <input class="input" type="text" bind:value={_address} />
      <button on:click={handleClickSave}>save</button>
    </div>
  {:else}
    <div class="address">
      <div class="val">{address}</div>

      <button class="btn" on:click={handleClickEdit}>edit</button>

    </div>
  {/if}

</div>
