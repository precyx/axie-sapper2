<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let axie;
  export let detailAxie;

  let toggled = false;
  let selectedMode = "Parts";

  const MODES = {
    PARTS: { id: "parts", name: "Parts" },
    ABILITIES: { id: "abilities", name: "Abilities" },
    AUCTION: { id: "auction", name: "Auction" },
    EXP: { id: "xp", name: "Xp" },
    STATS: { id: "stats", name: "Stats" },
    PARENTS: { id: "parents", name: "Parents" },
    STAGE: { id: "stage", name: "Stage" }
  };

  let modes = [
    MODES.PARTS,
    MODES.ABILITIES,
    MODES.AUCTION,
    MODES.EXP,
    MODES.PARENTS,
    MODES.STAGE
  ];

  $: if (axie || detailAxie) {
    let _modes = [];

    if (axie.parts && axie.parts.length)
      _modes.push(MODES.PARTS, MODES.ABILITIES);
    if (axie.auction) _modes.push(MODES.AUCTION);
    if (axie.exp != null) _modes.push(MODES.EXP);
    if (detailAxie.stats && detailAxie.stats.hp != null)
      _modes.push(MODES.STATS);
    if (detailAxie.matronId && detailAxie.sireId) _modes.push(MODES.PARENTS);
    if (detailAxie.birthDate != null) _modes.push(MODES.STAGE);

    modes = _modes;
  }

  const onClickSwitcher = () => {
    toggled = !toggled;
  };
  const selectMode = mode => () => {
    selectedMode = mode.name;
    toggled = false;

    dispatch("change", mode.id);
  };
</script>

<style>
  .axie-mode-switcher {
    position: relative;
  }
  .axie-mode-switcher .text {
    height: 24px;
    border-radius: 50px;
    padding: 5px 10px;
    font-size: 12px;
    background: rgb(var(--color-primary-700));
    color: #ffffff;
    color: rgb(var(--color-on-primary-700));
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    cursor: pointer;
    transition: all 0.15s;
  }
  .axie-mode-switcher .text:hover {
    background: rgb(var(--color-primary-800));
  }

  .modes {
    position: absolute;
    top: 25px;
    right: 0;
    display: flex;
    flex-flow: column;
    align-items: flex-end;
  }

  .mode {
    margin-top: 5px;
    height: 24px;
    border-radius: 50px;
    padding: 5px 10px;
    font-size: 12px;
    background-color: var(--color-light-1);

    color: var(--color-dark-1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    cursor: pointer;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
  }
</style>

<div class="axie-mode-switcher">

  <div class="text" on:click={onClickSwitcher}>{selectedMode}</div>

  {#if toggled}
    <div class="modes">
      {#each modes as mode}
        <div class="mode" on:click={selectMode(mode)}>{mode.name}</div>
      {/each}
    </div>
  {/if}

</div>
