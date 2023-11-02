<template>
  <div class="home">
    <nav-bar @save-form="handleSaveForm" />

    <div class="homeWrapper">
      <div class="sideBar">
        <div class="questionList" data-cy="questionList">
          <question-card
            v-for="(question, index) in questions"
            :key="index"
            :type="question.type"
            :value="question.title"
            @delete-card="DeleteQuestionCard(index)"
            @card-click="QuestionCardClick(index)"
          />
        </div>
        <div class="dropDownList">
          <b-dropdown id="dropdown-1" block text="Add Question" class="m-md-2" data-cy="dropdownButton">
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
        <div v-if="questions.length > 0">
          <div class="setting">
            <h2>Setting</h2>
            <div class="formContainer">
              <b-form>
                <b-form-group
                  label="Ask Your Question"
                  class="mb-4 font-weight-bold"
                >
                  <b-form-input
                    type="text"
                    placeholder="write a question"
                    v-model="questionTitle"
                  />
                </b-form-group>

                <!-- range input for the text filed size -->
                <b-form-group
                  label="Text field size"
                  class="font-weight-bold"
                  v-if="
                    selectedQuestion && selectedQuestion.type === 'Long Text'
                  "
                >
                  <b-form-input
                    type="range"
                    v-model="fieldSize"
                    min="0"
                    max="100"
                  />
                </b-form-group>
              </b-form>
            </div>
          </div>

          <div class="review" v-if="selectedQuestion">
            <review-section
              :title="selectedQuestion.title"
              :fieldSize="fieldSize"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../NavBar/NavBar.vue";
import QuestionCard from "../QuestionCard/QuestionCard.vue";
import ReviewSection from "../ReviewSection/ReviewSection.vue";

export default {
  name: "HomePage",
  components: {
    NavBar,
    QuestionCard,
    ReviewSection,
  },
  data() {
    return {
      questions: [], // Store questions in an array
      previews: [],
      fieldSize: 0,
      longTextSample: "What is your full name ?",
      shortTextSample: "What is your Last Name ?",
      questionTitle: "",

      selectedQuestion: null, // To track the selected question
    };
  },
  watch: {
    // watch the input change
    questionTitle(newQuestionTitle) {
      // find the current selected question
      const questionToUpdate = this.questions.find(
        (question) => question.questionId === this.selectedQuestion.questionId
      );
      questionToUpdate.title = newQuestionTitle;
    },
  },
  methods: {
    handleSaveForm() {
      console.log("The Form has been saved successfully");
    },
    DeleteQuestionCard(index) {
      this.questions.splice(index, 1);
      this.previews.splice(index, 1);

      if (this.questions.length === 0) {
        this.selectedQuestion = null;
      }
      console.log("The card has been deleted successfully");
    },
    QuestionCardClick(index) {
      const selectedPreview = this.previews[index];

      this.selectedQuestion = selectedPreview;
      this.questionTitle = this.selectedQuestion.title;
    },
    addNewQuestion(type) {
      this.questionTitle =
        type === " Long Text" ? this.longTextSample : this.shortTextSample;

      // Create a new question object and add it to the questions
      const questionId = this.questions.length + 1;

      const newQuestion = {
        questionId,
        title: this.questionTitle,
        type: type,
      };

      //add the new question to the previews and questions array
      this.questions.push(newQuestion);
      this.previews.push(newQuestion);
      this.selectedQuestion = newQuestion;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style";
</style>
