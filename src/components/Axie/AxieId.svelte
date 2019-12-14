<script>
  export let axieId = "";
  export let axieClass = "";

  $: color = getColor(axieClass);

  function getColor(_class) {
    let _klass = _class || "";
    let colors = {
      aquatic: "#00b8ce",
      beast: "#ffb812",
      bug: "#ff5341",
      bird: "#ff8bbd",
      plant: "#6cc000",
      reptile: "#dc8be4",
      hidden_1: "#c6bdd4",
      hidden_2: "#beceff",
      hidden_3: "#129092"
    };

    return colors[_klass.toLowerCase()] || "#9d795a";
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
