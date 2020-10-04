<script>
  import AxieImage from "./AxieImage.svelte";

  export let users = [];

  console.log("users", users);
</script>

<style>
  .users {
    display: flex;
    flex-flow: column;
    line-height: 150%;
    align-items: flex-end;
  }
  .user {
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid #00000017;
    padding: 5px 0px;
    font-size: 14px;
    position: relative;
    width: 100%;
  }

  .name {
    /*width: 240px;*/
    display: flex;
    flex: 1;
  }
  .name-inner {
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
  .axies {
    display: flex;
    position: absolute;
    align-items: center;

    display: flex;
    position: absolute;
    right: 20px;
    top: 12px;
    height: 37px;
  }
  .axie {
    width: 90px;
    margin-left: -45px;
    margin-right: -25px;
    margin-top: -28px;
    margin-bottom: -10px;
  }
  .axie :global(.id) {
    display: none;
  }
</style>

<div class="users">

  {#each users as user}
    <div class="user text-dark-2">
      <div class="name">
        <span class="name-inner">{user.name}</span>
      </div>
      <div class="tickets">{user.tickets}</div>
      <div class="axies">
        {#each user.axies as axie}
          <div class="axie">
            <AxieImage {...axie} />
          </div>
        {/each}
      </div>
    </div>
  {/each}

</div>
