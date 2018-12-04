import {
  addQuestionHelper,
  deleteQuestionHelper,
  updateQuestionHelper
} from '../../../database/helpers/questionHelpers';

const addQuestion = (req, res) => {
  let { category, text } = req.body;
  addQuestionHelper(category, text)
    .then(() => res.status(201).send('success'))
    .catch(err => res.status(404).send('error'));
}

const deleteQuestion = (req, res) => {
  let { id } = req.body;
  deleteQuestionHelper(id)
    .then(() => res.status(201).send('success'))
    .catch(err => res.status(404).send('error'));
}

const updateQuestion = (req, res) => {
  let { id, text } = req.body;
  updateQuestionHelper(id, text)
    .then(() => res.status(204).send('success'))
    .catch(err => res.status(404).send('error'));
}

export {
  addQuestion,
  deleteQuestion,
  updateQuestion
};