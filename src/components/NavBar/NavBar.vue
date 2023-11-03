<template>
  <div class="navBar">
    <b-navbar
      type="dark"
      variant="primary"
      class="d-flex justify-content-between "
    >
      <b-navbar-brand href="#" class="font-weight-bold "
        >Form builder prototype
      </b-navbar-brand>
      <b-button
        variant="light"
        @click="handleSaveForm"
        v-b-tooltip.hover.left="{ variant: 'light' }"
        title="Save your form"
        >Save</b-button
      >
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  emits: ["save-form"],

  methods: {
    handleSaveForm() {
      this.$emit("save-form");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style";
</style>
