<script>
  export let ownerProfile;
</script>

<style>
  .axieowner {
    font-size: 12px;
    color: var(--color-grey-1);
    font-weight: normal;

    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>

{#if ownerProfile && ownerProfile.name}
  <div class="axieowner">{ownerProfile.name}</div>
{/if}
