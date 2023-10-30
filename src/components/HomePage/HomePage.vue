<template>
  <div class="home">
    <nav-bar @save-form="handleSaveForm" />
  </div>
</template>

<script>
import NavBar from "../NavBar/NavBar.vue";
export default {
  name: "HomePage",
  components: {
    NavBar,
  },

  methods: {
    handleSaveForm() {
      console.log("The Form has been saved successfully");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style";
</style>
