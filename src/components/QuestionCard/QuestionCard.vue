<template>
  <div class="card">
    <b-card
      :title="value"
      :sub-title="type"
      class="border-0 card-content"
      @click="handleCardClick()"
    />
    <b-icon
      icon="trash"
      @click="handleDeleteCard()"
      class="trash-icon"
      v-b-tooltip.hover.top.v-danger="'Delete question'"
    >
    </b-icon>
  </div>
</template>

<script>
export default {
  name: "QuestionCard",
  props: ["value", "type"],

  emits: ["delete-card", "card-click"],

  methods: {
    handleDeleteCard() {
      this.$emit("delete-card");
    },

    handleCardClick() {
      this.$emit("card-click");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
