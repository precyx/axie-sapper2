<script>
  export let label;
  export let value;

  export let defaultChecked;
  export let onChange;

  function handleChange(e) {
    if (onChange) onChange(e.target.value);
  }
</script>

<style>

</style>

<div class="classfilter">
  <input
    id="check_{value}"
    type="checkbox"
    {value}
    checked={defaultChecked}
    on:change={handleChange} />
  <label for={'check_' + value}>{label}</label>

</div>
