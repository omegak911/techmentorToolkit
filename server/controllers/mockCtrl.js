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
  getAllStudentsHelper()
    .then(studentData => {
      getAllQuestionsHelper()
        .then(questionData => res.status(201).send({ studentData, questionData }))
        .catch(err => res.status(404).send('error'));
    })
    .catch(err => res.status(404).send('error'));
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
    .then(() => res.status(201).send('success'))
    .catch(err => res.status(404).send('error'));
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