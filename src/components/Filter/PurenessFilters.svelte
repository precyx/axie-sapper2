<script>
  import RadioButton from "../Misc/RadioButton.svelte";
  import HorizontalRadiogroup from "../Misc/HorizontalRadiogroup.svelte";

  let purity = [
    { value: "any", name: "Any" },
    { value: 1, name: "1" },
    { value: 2, name: "2" },
    { value: 3, name: "3" },
    { value: 4, name: "4" },
    { value: 5, name: "5" },
    { value: 6, name: "6" }
  ];

  export let group;
  export let value;
</script>

<style>

</style>

<div class="mysticfilters">

  <HorizontalRadiogroup>
    {#each purity as _puri, i}
      <RadioButton _id={'puri' + i} bind:group value={_puri.value}>
        {_puri.name}
      </RadioButton>
    {/each}
  </HorizontalRadiogroup>
</div>
