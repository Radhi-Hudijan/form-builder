<template>
  <div class="container">
    <b-navbar>
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-button variant="success">Save</b-button>
    </b-navbar>
    <div class="hello">
      <img alt="Vue logo" src="../assets/logo.png" />
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./style";
</style>
