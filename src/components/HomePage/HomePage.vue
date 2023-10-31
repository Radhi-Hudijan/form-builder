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

      <div class="homeContent">
        <div class="setting">
          <h2>Setting</h2>
          <div class="formContainer">
            <b-from>
              <b-form-group
                label="Ask Your Question"
                class="mb-4 font-weight-bold"
              >
                <b-form-input
                  type="text"
                  placeholder="Enter email"
                  value="radhi"
                  v-model="questionText"
                />
              </b-form-group>

              <!-- range input for the text filed size -->
              <b-form-group label="Text field size" class="font-weight-bold">
                <b-form-input
                  type="range"
                  v-model="fieldSize"
                  min="0"
                  max="100"
                />
              </b-form-group>
            </b-from>
          </div>
        </div>

        <div class="review">
          <review-section :question="questionValue" :fieldSize="fieldSize" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../NavBar/NavBar.vue";
import QuestionCard from "../QuestionCard/QuestionCard.vue";
import ReviewSection from "../ReviewSection/ReviewSection.vue";
import { BFormInput } from "bootstrap-vue";

export default {
  name: "HomePage",
  components: {
    NavBar,
    QuestionCard,
    ReviewSection,
    BFormInput,
  },
  data() {
    return {
      questions: [], // Store questions in an array
      fieldSize: 0,
      questionText: "What is your name ?",
    };
  },
  computed: {
    // Create a computed property to get the value of questionText
    questionValue() {
      return this.questionText;
    },
  },
  methods: {
    handleSaveForm() {
      console.log("The Form has been saved successfully");
      console.log(this.questionText);
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
