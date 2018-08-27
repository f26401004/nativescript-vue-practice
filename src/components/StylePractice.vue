<template>
  <page class="page">
    <action-bar class="action-bar" title="Style Practice"/>
    <flexbox-layout alignItems="flex-start">
      <button class="btn" id="test">Click</button>
      <button class="btn" testAttr="flower">Click</button>
    </flexbox-layout>

  </page>
</template>

<script>
export default {

}
</script>

<style scoped>
  action-bar {
    opacity: 0.33;
  }
  #test {
    border-color: gray;
    border-width: 10px;
  }
  .btn {
    width: 500px;
    height: 180px;
    border-radius: 90px;
    background: red;
    color: antiquewhite;
    transition: .3s ease;
  }
  .btn:highlighted {
    background: blue;
  }
  button[testAttr='flower'] {
    border-color: blue;
    border-width: 10px;
  }
  button[testAttr~='flower'] {
    border-color: blue;
    border-width: 5px;
  }
</style>
