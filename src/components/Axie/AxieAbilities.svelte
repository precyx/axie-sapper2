<script>
  import { AxieClasses } from "../../services/AxieModelService.js";

  export let parts;

  export const ColorMap = {
    [AxieClasses.beast.name]: "#5b4125",
    [AxieClasses.aquatic.name]: "#2e4954",
    [AxieClasses.plant.name]: "#3f5125",
    [AxieClasses.bug.name]: "#5e2f2e",
    [AxieClasses.bird.name]: "#663036",
    [AxieClasses.reptile.name]: "#4a3451",
    [AxieClasses.dusk.name]: "#000000",
    [AxieClasses.dawn.name]: "#000000",
    [AxieClasses.mech.name]: "#000000"
  };
</script>

<style>
  .axie-abilities {
    display: flex;
    flex-flow: wrap;
  }
  .axie-ability {
    position: relative;
  }
  .card-img {
    width: 120px;
    height: auto;
    margin: 5px;
  }

  .description {
    position: absolute;
    z-index: 1;
    font-size: 10px;
    color: white;
    line-height: 110%;
    width: 80%;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
    height: 50px;
    bottom: 5px;
    display: flex;
    align-items: center;
  }

  .name {
    font-family: "Noto Sans SC";
    font-weight: 900;
    position: absolute;
    font-size: 10px;
    color: white;
    left: 37px;
    top: 4.5%;
    text-shadow: rgb(0, 0, 0) 0px 0px 2px, rgb(0, 0, 0) 0px 0px 2px;
  }
  .energy {
    font-family: "Noto Sans SC";
    font-weight: 900;
    text-shadow: rgb(0, 0, 0) 0px 0px 3px, rgb(0, 0, 0) 0px 0px 2px,
      rgb(0, 0, 0) 0px 0px 2px, rgb(0, 0, 0) 0px 0px 2px;
    position: absolute;
    top: 6px;
    left: 16px;
    font-size: 17px;
    color: white;
  }

  .stat {
    font-size: 17px;
    font-family: "Noto Sans SC";
    font-weight: 900;
    text-shadow: rgb(0, 0, 0) 0px 0px 3px, rgb(0, 0, 0) 0px 0px 2px,
      rgb(0, 0, 0) 0px 0px 2px, rgb(0, 0, 0) 0px 0px 2px;
    position: absolute;
    z-index: 1;
    color: white;
  }

  .attack {
    font-size: 12px;
    width: 28px;
    height: 28px;
    border-radius: 15px;
    background: #5b4125;
    display: flex;
    align-items: center;
    justify-content: center;
    left: -5px;
    top: 35px;
  }

  .defense {
    font-size: 12px;
    width: 28px;
    height: 28px;
    border-radius: 15px;
    background: #5b4125;
    display: flex;
    align-items: center;
    justify-content: center;
    left: -5px;
    top: 65px;
  }

  .stat-img {
    width: 18px;
    position: absolute;
    z-index: 1;
  }

  .stat-text {
    position: relative;
    z-index: 2;
  }
</style>

<div class="axie-abilities">

  {#if parts && parts.length}
    {#each parts as part}
      {#if part.abilities.length}
        <div class="axie-part-ability">
          {#each part.abilities as ability}
            <div class="axie-ability">
              <img
                class="card-img"
                src={null || ability.backgroundUrl}
                alt="Card Image" />

              <div class="name">{ability.name}</div>
              <div class="description">{ability.description}</div>
              <div class="energy">{ability.energy}</div>

              <div
                class="attack stat"
                style={`background:${ColorMap[part.class]}`}>
                <img
                  src="./images/battle/sword.png"
                  class="stat-img"
                  alt="Sword" />
                <span class="stat-text">{ability.attack}</span>
              </div>
              <div
                class="defense stat"
                style={`background:${ColorMap[part.class]}`}>
                <img
                  src="./images/battle/shield.png"
                  class="stat-img"
                  alt="Shield" />
                <span class="stat-text">{ability.defense}</span>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    {/each}
  {/if}

</div>
