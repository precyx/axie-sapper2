<script>
  export let axieId = "";
  export let axieClass = "";

  $: color = getColor(axieClass);

  function getColor(_class) {
    let colors = {
      aquatic: "#00b8ce",
      beast: "#ffb812",
      bug: "#ff5341",
      bird: "#ff8bbd",
      plant: "#6cc000",
      reptile: "#dc8be4",
      "hidden-1": "#c6bdd4",
      "hidden-2": "#beceff",
      "hidden-3": "#129092"
    };

    return colors[_class.toLowerCase()];
  }
</script>

<style>
  .axieid {
    border-radius: 5px;
    padding: 0px 5px;
    background: var(--color-light-2);

    font-size: 10px;
    font-weight: 500;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  }
</style>

<div class="axieid" style="background:{color}; color:white;">#{axieId}</div>
