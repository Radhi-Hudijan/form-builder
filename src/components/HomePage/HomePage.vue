<template>
  <div class="home">
    <nav-bar @save-form="handleSaveForm" />

    <div class="homeWrapper">
      <div class="sideBar">
        <div class="questionList">
          <question-card
            title="what is your name"
            type="short test"
            @delete-card="handleDeleteCard"
            @card-click="handleCardClick"
          />
        </div>
        <div class="dropDownList">
          <b-dropdown id="dropdown-1" block text="Add Question" class="m-md-2">
            <b-dropdown-item>Long Text</b-dropdown-item>
            <b-dropdown-item>Short Text</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>

      <div class="homeContent">homeContent</div>
    </div>
  </div>
</template>

<script>
import NavBar from "../NavBar/NavBar.vue";
import QuestionCard from "../QuestionCard/QuestionCard.vue";

export default {
  name: "HomePage",
  components: {
    NavBar,
    QuestionCard,
  },

  methods: {
    handleSaveForm() {
      console.log("The Form has been saved successfully");
    },
    handleDeleteCard() {
      console.log("The card has been deleted successfully");
    },
    handleCardClick() {
      console.log("card clicked");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style";
</style>
