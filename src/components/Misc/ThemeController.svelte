<script>
  import { theme } from "../../store/store.js";

  import Select from "./Select.svelte";

  let items = [
    { value: "1", text: "White" },
    { value: "2", text: "Light" },
    { value: "3", text: "Anemone" },
    { value: "4", text: "Dark" },
    { value: "5", text: "Black" }
  ];

  const setTheme = _theme => x => {
    theme.update(t => _theme);
  };
</script>

<style>
  .switch {
    color: grey;
  }
  .active {
    color: black;
    font-weight: 500;
  }
</style>

<div>
  <select bind:value={$theme} class="p-2 rounded-lg bg-transparent text-dark-1">
    <option value="white" class="text-black">White</option>
    <option value="light" class="text-black">Light</option>
    <option value="anemone" class="text-black">Anemone</option>
    <option value="dark" class="text-black">Dark</option>
    <option value="black" class="text-black">Black</option>
  </select>
</div>
