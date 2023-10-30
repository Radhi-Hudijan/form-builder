<template>
  <div class="card">
    <b-card
      :title="title"
      :sub-title="type"
      class="border-0 card-content"
      @click="handleCardClick()"
    />
    <b-icon icon="trash" @click="handleDeleteCard()" class="trash-icon" />
  </div>
</template>

<script>
import { BCard, BIcon } from "bootstrap-vue";
export default {
  name: "QuestionCard",
  components: { BCard, BIcon },
  props: ["title", "type"],
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
