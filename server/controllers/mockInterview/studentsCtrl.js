import { 
  addStudentHelper, 
  deleteStudentHelper,
  updateStudentHelper 
} from '../../../database/helpers/studentHelpers';

const addStudent = (req, res) => {
  let { name, cohort } = req.body;
  addStudentHelper(name, cohort)
    .then(() => res.status(201).send('success'))
    .catch(err => res.status(404).send('error'));
}

const deleteStudent = (req, res) => {
  let { _id } = req.body;
  deleteStudentHelper(_id)
    .then(() => res.status(202).send('success'))
    .catch(err => res.status(404).send('error'));
}

// const updateStudent = (req, res) => {
//   let { name, category, questionId, value } = req.body;
//   let objString = `questions.${category}.${questionId}`;//objString should be ex. questions.JSFundamentals.1 | value = number
//   updateStudentHelper(name, objString, value)
//     .then(() => res.status(204).send('success'))
//     .catch(err => res.status(404).send('error'));
// }

const updateStudent = (req, res) => {
  let { _id, session, sessionQuestions } = req.body;
  let objString = `session.${session}`;//objString should be ex. questions.JSFundamentals.1 | value = number
  updateStudentHelper(_id, objString, sessionQuestions)
    .then(() => res.status(204).send('success'))
    .catch(err => res.status(404).send('error'));
}

export {
  addStudent,
  deleteStudent,
  updateStudent,
};