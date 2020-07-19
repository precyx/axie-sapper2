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
  class="bg_ambient_1 w-full h-full fixed left-0 top-0 appBackground"
  style="z-index:-1" />
