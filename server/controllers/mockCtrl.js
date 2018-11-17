import { 
  addStudentHelper, 
  deleteStudentHelper, 
  getAllStudentsHelper, 
  updateStudentHelper 
} from '../../database/helpers/studentHelpers';

import {
  addQuestionHelper,
  deleteQuestionHelper,
  getAllQuestionsHelper,
  updateQuestionHelper
} from '../../database/helpers/questionHelpers';

const getEverything = (req, res) => {
  //grab all student data
  //grab all questions
  getAllStudentsHelper()
    .then((data) => res.status(201).send(data))
    .catch(err => res.status(404).send('error'));
  //getAllQuestionsHelper
}

const addStudent = (req, res) => {
  let { name, cohort } = req.body;
  addStudentHelper(name, cohort)
    .then(() => res.status(201).send('success'))
    .catch(err => res.status(404).send('error'));
}

const deleteStudent = (req, res) => {
  let { name } = req.body;
  deleteStudentHelper(name)
    .then(() => res.status(200).send('success'))
    .catch(err => res.status(404).send('error'));
}

const updateStudent = (req, res) => {
  let { name, category, questionId, value } = req.body; 
  let objString = `questions.${category}.${questionId}`;//objString should be ex. questions.JSFundamentals.1 | value = number
  updateStudentHelper(name, objString, value)
    .then(() => res.status(201).send('success'))
    .catch(err => res.status(404).send('error'));
}

const addQuestion = (req, res) => {
  let { category, text } = req.body;
  addQuestionHelper(category, text, () => res.status(201).send('success'));
}

const deleteQuestion = (req, res) => {
  let { id } = req.body;
  deleteQuestionHelper(id, () => res.status(200).send('success'));
}

const updateQuestion = (req, res) => {
  let { id, text } = req.body;
  updateQuestionHelper(id, text, () => res.status(201).send('success'));
}

export {
  getEverything,
  addStudent,
  deleteStudent,
  updateStudent,
  addQuestion,
  deleteQuestion,
  updateQuestion
};