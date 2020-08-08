<script>
  import TextFatHeadline from "../UI/TextFatHeadline.svelte";
</script>

<style>
  .main {
    margin-bottom: 20px;
  }
  .sub {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
</style>

<div>
  <div class="main">
    <TextFatHeadline>Tank Team</TextFatHeadline>
  </div>
  <div class="sub">
    <TextFatHeadline size="small">& Poison</TextFatHeadline>
  </div>

  <a href="/Teams">Back to overview</a>
</div>
