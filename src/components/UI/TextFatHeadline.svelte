<style>
  .textFatHeadline {
    font-size: 75px;
    font-weight: 800;
    letter-spacing: -1px;
    font-style: italic;
    color: #f1743d;
    line-height: 100%;
    margin-bottom: 40px;

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
      -5px 5px 0 rgb(255, 255, 255), -5px -5px 0 rgb(255, 255, 255),
      8px 7px 3px #f1743d59;
  }

  h1::selection {
    box-shadow: none;
    color: #0c3d5f;
    background: #95f1f0;
  }
</style>

<div class="textFatHeadline">

  <slot />
</div>
