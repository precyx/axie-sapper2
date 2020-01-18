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

<div class="axie-profile-picker">

  {#if isedit}
    <div>
      <input type="text" bind:value={_address} />
      <button on:click={handleClickSave}>save</button>
    </div>
  {:else}
    <div class="address">
      <div class="val">{address}</div>

      <button on:click={handleClickEdit}>edit</button>

    </div>
  {/if}

</div>
