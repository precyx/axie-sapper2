<script>
  export let stats;

  const MIN = 23;
  const MAX = 61;

  const ColorMap = {
    "5": "#79eed3",
    "4": "#9dec8b",
    "3": "#e3eb6a",
    "2": "#ffc96f",
    "1": "#ff8c6f"
  };

  $: StatList = [
    { label: "Hp", value: stats.hp },
    { label: "Speed", value: stats.speed },
    { label: "Morale", value: stats.morale },
    { label: "Skill", value: stats.skill }
  ];

  const getScale = stat => {
    let _base = 15;
    let ratio = (stat - MIN + _base) / (MAX - MIN + _base);
    return round2Prec(ratio * 100) + "%";
  };
  const round2Prec = n => Math.round(n * 100) / 100;

  const getColor = stat => {
    let val = Math.round(mapRanges(stat, MIN, MAX, 1, 5));
    return ColorMap[val];
  };

  const mapRanges = (cur, in_min, in_max, out_min, out_max) => {
    return ((cur - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };
</script>

<style>
  .axiestats-list {
    display: flex;
    flex-flow: column;
    text-align: left;

    font-size: 14px;
    align-items: center;
    color: var(--color-dark-1);
  }

  .stat {
    display: flex;
    font-weight: normal;
    align-items: center;
  }

  .label {
    width: 70px;
    display: block;
    font-weight: 500;
  }

  .stat-bar {
    height: 9px;
    /*background: var(--color-accent-shimmer-1);*/
    border-radius: 50px;
    width: 70px;
  }

  .bar-fill {
    height: 100%;
    background: var(--color-accent-1);
    border-radius: 50px;
  }

  .text {
    margin-right: 15px;
  }
</style>

<div class="axiestats">
  <div class="axiestats-list">

    {#each StatList as stat}
      <div class="stat">
        <span class="label">{stat.label}</span>
        <span class="text">{stat.value}</span>
        {#if stat.value != 0}
          <div class="stat-bar">
            <div
              class="bar-fill"
              style={`width:${getScale(stat.value)}; background:${getColor(stat.value)}`} />
          </div>
        {/if}
      </div>
    {/each}

  </div>
</div>
