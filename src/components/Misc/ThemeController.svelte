<script>
  import { onMount } from "svelte";
  import { theme } from "../../store/store.js";

  import Select from "./Select.svelte";

  let items = [
    { value: "1", text: "White" },
    { value: "2", text: "Light" },
    { value: "3", text: "Anemone" },
    { value: "5", text: "Space" },
    { value: "4", text: "Dark" },
    { value: "6", text: "Black" }
  ];

  onMount(async () => {
    document.querySelector("body").setAttribute("data-theme", $theme);
  });

  const changeTheme = n => _evt => {
    //theme.update(t => _theme);
    let v = _evt.target.value;
    document.querySelector("body").setAttribute("data-theme", v);
  };
</script>

<style>
  /*.switch {
    color: grey;
  }*/
  /*.active {
    color: black;
    font-weight: 500;
  }*/
  .select {
    background: rgba(24, 96, 105, 0.1);
  }
</style>

<div>
  <select
    bind:value={$theme}
    on:change={changeTheme()}
    class="select p-2 ml-4 rounded-lg bg-transparent text-dark-1">
    <option value="white" class="text-black">White</option>
    <option value="light" class="text-black">Light</option>
    <option value="anemone" class="text-black">Anemone</option>
    <option value="space" class="text-black">Space</option>
    <option value="dark" class="text-black">Dark</option>
    <option value="black" class="text-black">Black</option>
  </select>
</div>
