<template>
  <page class="page">
    <action-bar class="action-bar" title="Style Practice"/>
    <flexbox-layout alignItems="flex-start">
      <button class="btn">Click</button>
      <button class="btn">Click</button>
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
</style>
