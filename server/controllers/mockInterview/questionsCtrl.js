import {
  addQuestionHelper,
  deleteQuestionHelper,
  updateQuestionHelper
} from '../../../database/helpers/questionHelpers';

const addQuestion = (req, res) => {
  let { category, question, answer } = req.body;
  addQuestionHelper(category, question, answer)
    .then(() => res.status(201).send('success'))
    .catch(err => res.status(404).send('error'));
}

const deleteQuestion = (req, res) => {
  let { _id } = req.body;
  deleteQuestionHelper(_id)
    .then(() => res.status(202).send('success'))
    .catch(err => res.status(404).send('error'));
}

const updateQuestion = (req, res) => {
  let { _id, category, question, answer } = req.body;
  updateQuestionHelper(_id, category, question, answer)
    .then(() => res.status(204).send('success'))
    .catch(err => res.status(404).send('error'));
}

export {
  addQuestion,
  deleteQuestion,
  updateQuestion
};