<script>
  export let tone = "cold"; // cold or warm

  let toneClasses = "";
  $: if (tone == "cold") {
    toneClasses = "bg_ambient_1";
  } else if (tone == "warm") {
    toneClasses = "bg_ambient_2";
  }
</script>

<style>
  .appBackground {
  }

  :global(body[data-theme="white"]) .appBackground {
    background: linear-gradient(#d3ffff, transparent),
      linear-gradient(-45deg, #ffd9ff, transparent),
      linear-gradient(45deg, #ffe3ad, transparent);
    background-blend-mode: screen;
    background-attachment: fixed;
  }
</style>

<div
  class="w-full h-full fixed left-0 top-0 appBackground {toneClasses}"
  style="z-index:-1" />
