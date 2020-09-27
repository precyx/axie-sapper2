<script>
  import AxiePart from "./AxiePart.svelte";
  export let parts = [];

  let hasTag = part => {
    return (
      part.specialGenes == "Mystic" ||
      part.specialGenes == "Bionic" ||
      part.specialGenes == "Xmas" ||
      part.specialGenes == "Xmas2018"
    );
  };

  let getTags = part => {
    let tags = [];
    if (part.specialGenes == "Mystic") tags.push("Mystic");
    if (part.specialGenes == "Bionic") tags.push("Bionic");
    if (part.specialGenes == "Xmas") tags.push("Xmas");
    if (part.specialGenes == "Xmas2018") tags.push("Xmas2018");

    return tags;
  };
</script>

<style>
  .axieparts-list {
    display: flex;
    flex-flow: column;
    text-align: left;
    font-weight: normal;
    font-size: 14px;
    color: var(--color-dark-1);
  }
  .part {
    display: flex;
    align-items: center;
  }
  .tag {
    padding: 0px 5px;
    background: rgb(157, 121, 90);
    color: white;
    border-radius: 3px;
    margin-left: 5px;
    display: inline-flex;
    font-size: 11px;
  }
</style>

<div class="axieparts">

  <div class="axieparts-list">
    {#each parts as part}
      <div class="part">
        <AxiePart {part} />
        {#if hasTag(part)}
          <div>
            {#each getTags(part) as tag}
              <div class="tag">{tag}</div>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>

</div>
