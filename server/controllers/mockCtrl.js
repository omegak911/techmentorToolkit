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
} from '../../database/helpers/mockHelpers';

const addStudent = (req, res) => {
  let { name, cohort } = req.body;
  console.log('in addStudent')
  addStudentHelper(name, cohort, () => res.status(201).send('success'));
}

const deleteStudent = (req, res) => {
  let { name } = req.body //or is this query?
  // deleteStudent from db
  deleteStudentHelper(name, () => res.status(201).send('success'));
}

const getEverything = (req, res) => {
  //grab all student data
  //grab all questions

  // getAllStudent((result) =>
  // res.status(200).send(result))
}

const updateStudent = (req, res) => {
  //update student questions
  let { name, category, questionId, value } = req.body; //question should be ex. questions.JSFundamentals.1 | value = number
  let objString = `questions.${category}.${questionId}`;
  updateStudentHelper(name, objString, value, () => res.status(201).send('success'));
}

export {
  addStudent,
  deleteStudent,
  getEverything,
  updateStudent
};