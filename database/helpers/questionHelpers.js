import Question from '../schemas/question.js';

const addQuestionHelper = (category, text, callback) => {
  let question = new Question({ category, text });

  question.save((err, stud) => {
    if (err) console.error(err);
    callback();
  })
}

const deleteQuestionHelper = (_id, callback) => {
  Question.deleteOne({ _id }, (err) => {
    if (err) console.error(err);
    callback()
  });
}

const getAllQuestionsHelper = (callback) => {
  Question.find({}, (err, result) => {
    if (err) console.error(err);
    callback(result);
  });
}

const updateQuestionHelper = (_id, text, callback) => {
  Question.updateOne({ _id }, { $set: { text }}, (err, doc) => {
    if (err) console.error(err);
    callback();
  });
}

export {
  addQuestionHelper,
  deleteQuestionHelper,
  getAllQuestionsHelper,
  updateQuestionHelper
}