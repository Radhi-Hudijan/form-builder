<template>
  <div class="review">
    <span class="title">Review</span>
    <h4 class="questionReview">{{ question }}</h4>
    <b-form-textarea
      id="textarea-rows"
      placeholder="Enter something..."
      :rows="fieldSize"
    ></b-form-textarea>
  </div>
</template>

<script>
export default {
  name: "ReviewSection",
  props: ["question", "fieldSize"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
