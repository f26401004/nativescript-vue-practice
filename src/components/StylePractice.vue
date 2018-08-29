<template>
  <page class="page">
    <action-bar title="Style Practice"/>
    <stack-layout class="direct-sibling--type">
      <label text="Direct sibling by type"/>
      <button text="Test Button" class="btn" testAttr="flower"/>
      <label text="Test Label"/>
      <button text="Test Button" class="btn" id="test"/>
      <label text="Test Label"/>
      <button text="Test Button" class="btn"/>
      <label  text="Test Label"/>
    </stack-layout>
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
  button {
    width: 500px;
    height: 200px;
  }
  .btn1 {
    padding: 50px;
    margin: 100px;
  }

  stack-layout button + label {
    background-color:green;
    color:white;
  }
</style>
