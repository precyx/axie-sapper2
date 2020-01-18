<script>
  export let stats;
</script>

<style>
  .axiestats-list {
    display: flex;
    flex-flow: column;

    font-size: 14px;
    align-items: center;
  }

  .stat {
    display: flex;
  }

  .label {
    width: 70px;
    display: block;
    color: var(--color-grey-1);
  }
</style>

<div class="axiestats">

  <div class="axiestats-list">
    <div class="stat">
      <span class="label">HP:</span>
      {stats.hp}
    </div>
    <div class="stat">
      <span class="label">Speed:</span>
      {stats.speed}
    </div>
    <div class="stat">
      <span class="label">Morale:</span>
      {stats.morale}
    </div>
    <div class="stat">
      <span class="label">Skill:</span>
      {stats.skill}
    </div>
  </div>

</div>
