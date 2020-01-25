<script>
  export let axie;
</script>

<style>
  .axie-exp-mode {
    font-size: 12px;
    color: var(--color-dark-1);
  }
</style>

<div class="axie-exp-mode">

  {#if axie.exp != null}
    <div class="field-exp text-center">{axie.exp} EXP</div>
  {/if}

</div>
