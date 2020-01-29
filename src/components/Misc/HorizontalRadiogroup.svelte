<script>

</script>

<style>
  .horizontal-radiogroup {
    display: flex;
  }

  .horizontal-radiogroup :global(.radiobutton) {
    margin-right: 8px;
  }

  .horizontal-radiogroup :global(.radiobutton label) {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .horizontal-radiogroup :global(.radiobutton .circ) {
    margin: 0;
  }

  .horizontal-radiogroup :global(.radiobutton .text) {
    margin-top: 5px;
  }
</style>

<div class="horizontal-radiogroup">
  <slot />
</div>
