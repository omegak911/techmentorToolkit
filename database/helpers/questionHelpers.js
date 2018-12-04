import Question from '../schemas/question.js';

const addQuestionHelper = (category, question, answer) => new Question({ category, question, answer }).save();

const deleteQuestionHelper = (_id) => Question.deleteOne({ _id });

const getAllQuestionsHelper = () => Question.find({});

const updateQuestionHelper = (_id, question, answer) => Question.updateOne({ _id }, { $set: { question, answer }});

export {
  addQuestionHelper,
  deleteQuestionHelper,
  getAllQuestionsHelper,
  updateQuestionHelper
}