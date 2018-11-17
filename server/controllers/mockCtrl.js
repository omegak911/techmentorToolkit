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

  // getAllStudent((result) =>
  // res.status(200).send(result))
  //getAllQuestionsHelper
}

const addStudent = (req, res) => {
  let { name, cohort } = req.body;
  addStudentHelper(name, cohort, () => res.status(201).send('success'));
}

const deleteStudent = (req, res) => {
  let { name } = req.body
  deleteStudentHelper(name, () => res.status(200).send('success'));
}

const updateStudent = (req, res) => {
  let { name, category, questionId, value } = req.body; 
  let objString = `questions.${category}.${questionId}`;//objString should be ex. questions.JSFundamentals.1 | value = number
  updateStudentHelper(name, objString, value, () => res.status(201).send('success'));
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