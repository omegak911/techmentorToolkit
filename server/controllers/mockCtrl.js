import { addStudentHelper, deleteStudentHelper, getAllStudentsHelper, updateStudentHelper } from '../../database/dbHelpers';

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
  let { name, question } = req.body;
  updateStudentHelper(name, question, () => res.status(201).send('success'));
}

export {
  addStudent,
  deleteStudent,
  getEverything,
  updateStudent
};