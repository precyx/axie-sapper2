<script>
  export let className;
  export let size = "large";
</script>

<style>
  .textFatHeadline {
    font-size: 75px;
    font-weight: 800;
    letter-spacing: -1px;
    font-style: italic;
    color: #f1743d;
    line-height: 100%;
  }

  .textFatHeadline.large {
    font-size: 75px;

    text-shadow: 0px 1px 0 rgb(255, 255, 255), 0px -1px 0 rgb(255, 255, 255),
      1px 0px 0 rgb(255, 255, 255), -1px 0px 0 rgb(255, 255, 255),
      1px 1px 0 rgb(255, 255, 255), 1px -1px 0 rgb(255, 255, 255),
      -1px 1px 0 rgb(255, 255, 255), -1px -1px 0 rgb(255, 255, 255),
      0px 2px 0 rgb(255, 255, 255), 0px -2px 0 rgb(255, 255, 255),
      2px 0px 0 rgb(255, 255, 255), -2px 0px 0 rgb(255, 255, 255),
      2px 2px 0 rgb(255, 255, 255), 2px -2px 0 rgb(255, 255, 255),
      -2px 2px 0 rgb(255, 255, 255), -2px -2px 0 rgb(255, 255, 255),
      0px 3px 0 rgb(255, 255, 255), 0px -3px 0 rgb(255, 255, 255),
      3px 0px 0 rgb(255, 255, 255), -3px 0px 0 rgb(255, 255, 255),
      3px 3px 0 rgb(255, 255, 255), 3px -3px 0 rgb(255, 255, 255),
      -3px 3px 0 rgb(255, 255, 255), -3px -3px 0 rgb(255, 255, 255),
      0px 4px 0 rgb(255, 255, 255), 0px -4px 0 rgb(255, 255, 255),
      4px 0px 0 rgb(255, 255, 255), -4px 0px 0 rgb(255, 255, 255),
      4px 4px 0 rgb(255, 255, 255), 4px -4px 0 rgb(255, 255, 255),
      -4px 4px 0 rgb(255, 255, 255), -4px -4px 0 rgb(255, 255, 255),
      0px 5px 0 rgb(255, 255, 255), 0px -5px 0 rgb(255, 255, 255),
      5px 0px 0 rgb(255, 255, 255), -5px 0px 0 rgb(255, 255, 255),
      5px 5px 0 rgb(255, 255, 255), 5px -5px 0 rgb(255, 255, 255),
      -5px 5px 0 rgb(255, 255, 255), -5px -5px 0 rgb(255, 255, 255);
  }
  .textFatHeadline.small {
    font-size: 28px;

    text-shadow: 0px 1px 0 rgb(255, 255, 255), 0px -1px 0 rgb(255, 255, 255),
      1px 0px 0 rgb(255, 255, 255), -1px 0px 0 rgb(255, 255, 255),
      1px 1px 0 rgb(255, 255, 255), 1px -1px 0 rgb(255, 255, 255),
      -1px 1px 0 rgb(255, 255, 255), -1px -1px 0 rgb(255, 255, 255),
      0px 2px 0 rgb(255, 255, 255), 0px -2px 0 rgb(255, 255, 255),
      2px 0px 0 rgb(255, 255, 255), -2px 0px 0 rgb(255, 255, 255),
      2px 2px 0 rgb(255, 255, 255), 2px -2px 0 rgb(255, 255, 255),
      -2px 2px 0 rgb(255, 255, 255), -2px -2px 0 rgb(255, 255, 255),
      0px 3px 0 rgb(255, 255, 255), 0px -3px 0 rgb(255, 255, 255),
      3px 0px 0 rgb(255, 255, 255), -3px 0px 0 rgb(255, 255, 255),
      3px 3px 0 rgb(255, 255, 255), 3px -3px 0 rgb(255, 255, 255),
      -3px 3px 0 rgb(255, 255, 255), -3px -3px 0 rgb(255, 255, 255);
    -webkit-text-shadow: 0px 1px 0 rgb(255, 255, 255),
      0px -1px 0 rgb(255, 255, 255), 1px 0px 0 rgb(255, 255, 255),
      -1px 0px 0 rgb(255, 255, 255), 1px 1px 0 rgb(255, 255, 255),
      1px -1px 0 rgb(255, 255, 255), -1px 1px 0 rgb(255, 255, 255),
      -1px -1px 0 rgb(255, 255, 255), 0px 2px 0 rgb(255, 255, 255),
      0px -2px 0 rgb(255, 255, 255), 2px 0px 0 rgb(255, 255, 255),
      -2px 0px 0 rgb(255, 255, 255), 2px 2px 0 rgb(255, 255, 255),
      2px -2px 0 rgb(255, 255, 255), -2px 2px 0 rgb(255, 255, 255),
      -2px -2px 0 rgb(255, 255, 255), 0px 3px 0 rgb(255, 255, 255),
      0px -3px 0 rgb(255, 255, 255), 3px 0px 0 rgb(255, 255, 255),
      -3px 0px 0 rgb(255, 255, 255), 3px 3px 0 rgb(255, 255, 255),
      3px -3px 0 rgb(255, 255, 255), -3px 3px 0 rgb(255, 255, 255),
      -3px -3px 0 rgb(255, 255, 255);
    -moz-text-shadow: 0px 1px 0 rgb(255, 255, 255),
      0px -1px 0 rgb(255, 255, 255), 1px 0px 0 rgb(255, 255, 255),
      -1px 0px 0 rgb(255, 255, 255), 1px 1px 0 rgb(255, 255, 255),
      1px -1px 0 rgb(255, 255, 255), -1px 1px 0 rgb(255, 255, 255),
      -1px -1px 0 rgb(255, 255, 255), 0px 2px 0 rgb(255, 255, 255),
      0px -2px 0 rgb(255, 255, 255), 2px 0px 0 rgb(255, 255, 255),
      -2px 0px 0 rgb(255, 255, 255), 2px 2px 0 rgb(255, 255, 255),
      2px -2px 0 rgb(255, 255, 255), -2px 2px 0 rgb(255, 255, 255),
      -2px -2px 0 rgb(255, 255, 255), 0px 3px 0 rgb(255, 255, 255),
      0px -3px 0 rgb(255, 255, 255), 3px 0px 0 rgb(255, 255, 255),
      -3px 0px 0 rgb(255, 255, 255), 3px 3px 0 rgb(255, 255, 255),
      3px -3px 0 rgb(255, 255, 255), -3px 3px 0 rgb(255, 255, 255),
      -3px -3px 0 rgb(255, 255, 255);
  }

  .textFatHeadline.base {
    position: relative;
    z-index: 1;
  }

  .textFatHeadline.clone {
    position: absolute;
    top: 5px;
    left: 5px;
    opacity: 0.12;
    white-space: pre;
    text-shadow: 0px 1px 0 #f1743d, 0px -1px 0 #f1743d, 1px 0px 0 #f1743d,
      -1px 0px 0 #f1743d, 1px 1px 0 #f1743d, 1px -1px 0 #f1743d,
      -1px 1px 0 #f1743d, -1px -1px 0 #f1743d, 0px 2px 0 #f1743d,
      0px -2px 0 #f1743d, 2px 0px 0 #f1743d, -2px 0px 0 #f1743d,
      2px 2px 0 #f1743d, 2px -2px 0 #f1743d, -2px 2px 0 #f1743d,
      -2px -2px 0 #f1743d, 0px 3px 0 #f1743d, 0px -3px 0 #f1743d,
      3px 0px 0 #f1743d, -3px 0px 0 #f1743d, 3px 3px 0 #f1743d,
      3px -3px 0 #f1743d, -3px 3px 0 #f1743d, -3px -3px 0 #f1743d,
      0px 4px 0 #f1743d, 0px -4px 0 #f1743d, 4px 0px 0 #f1743d,
      -4px 0px 0 #f1743d, 4px 4px 0 #f1743d, 4px -4px 0 #f1743d,
      -4px 4px 0 #f1743d, -4px -4px 0 #f1743d, 0px 5px 0 #f1743d,
      0px -5px 0 #f1743d, 5px 0px 0 #f1743d, -5px 0px 0 #f1743d,
      5px 5px 0 #f1743d, 5px -5px 0 #f1743d, -5px 5px 0 #f1743d,
      -5px -5px 0 #f1743d;
  }

  .textFatHeadline.clone.small {
    top: 2px;
    left: 2px;
  }

  .textFatHeadline::selection {
    box-shadow: none;
    text-shadow: none;
    color: #0c3d5f;
    background: #95f1f0;
  }
</style>

<div style="position:relative;">
  <div class="textFatHeadline base {size} {className}">

    <slot />
  </div>

  <div class="textFatHeadline clone {size} {className}">
    <slot />
  </div>
</div>
