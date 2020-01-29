<script>
  import RadioButton from "../Misc/RadioButton.svelte";
  import HorizontalRadiogroup from "../Misc/HorizontalRadiogroup.svelte";

  let num_mystics = [
    { value: "any", name: "Any" },
    { value: 1, name: "1" },
    { value: 2, name: "2" },
    { value: 3, name: "3" },
    { value: 4, name: "4" },
    { value: 5, name: "5" },
    { value: 6, name: "6" }
  ];

  export let group;
</script>

<style>

</style>

<div class="mysticfilters">

  <HorizontalRadiogroup>
    {#each num_mystics as _mystic, i}
      <RadioButton _id={'mystic' + i} bind:group value={_mystic.value}>
        {_mystic.name}
      </RadioButton>
    {/each}
  </HorizontalRadiogroup>
</div>
