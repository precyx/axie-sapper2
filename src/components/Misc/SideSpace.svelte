<script>
  export let className;
</script>

<style>
  .sidespace {
    --sidespace-width: 250px;
    width: var(--sidespace-width);
  }
</style>

<div class="sidespace + {className}">

  <slot />
</div>
