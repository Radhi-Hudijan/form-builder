<template>
  <div class="home">
    <nav-bar @save-form="handleSaveForm" />

    <div class="homeWrapper">
      <div class="sideBar">
        <div class="questionList">
          <question-card
            v-for="(question, index) in questions"
            :key="index"
            :title="question.title"
            :type="question.type"
            @delete-card="handleDeleteCard(index)"
            @card-click="handleCardClick(index)"
          />
        </div>
        <div class="dropDownList">
          <b-dropdown id="dropdown-1" block text="Add Question" class="m-md-2">
            <b-dropdown-item @click="addNewQuestion('Long Text')"
              >Long Text</b-dropdown-item
            >
            <b-dropdown-item @click="addNewQuestion('Short Text')"
              >Short Text</b-dropdown-item
            >
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
  data() {
    return {
      questions: [], // Store questions in an array
    };
  },
  methods: {
    handleSaveForm() {
      console.log("The Form has been saved successfully");
    },
    handleDeleteCard(index) {
      this.questions.splice(index, 1);
      console.log("The card has been deleted successfully");
    },
    handleCardClick(index) {
      console.log(`card click with question index ${index}`);
    },
    addNewQuestion(type) {
      const sampleQuestion =
        type === "Long Text"
          ? "Long Text sample question"
          : "short text sample question";

      this.questions.push({
        title: sampleQuestion,
        type: type,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style";
</style>
