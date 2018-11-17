import Question from '../schemas/question.js';

const addQuestionHelper = (category, text) => new Question({ category, text }).save();

const deleteQuestionHelper = (_id) => Question.deleteOne({ _id });

const getAllQuestionsHelper = () => Question.find({});

const updateQuestionHelper = (_id, text, callback) => Question.updateOne({ _id }, { $set: { text }});

export {
  addQuestionHelper,
  deleteQuestionHelper,
  getAllQuestionsHelper,
  updateQuestionHelper
}