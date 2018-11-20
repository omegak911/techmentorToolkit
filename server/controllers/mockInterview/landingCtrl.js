import { 
  getAllStudentsHelper,
} from '../../../database/helpers/studentHelpers';

import {
  getAllQuestionsHelper,
} from '../../../database/helpers/questionHelpers';

import {
  addMentorHelper,
  addBossHelper,
  updateStudentCollectionHelper
} from '../../../database/helpers/mentorHelpers';

import {
  Create_PW,
  Login_PW
} from '../../../config';

const addMentor = (req, res) => {
  let { name, password } = req.body;
  if (password === Create_PW) {
    addMentorHelper(name)
      .then(() => res.status(201).send('success'))
      .catch(() => res.status(404).send('error'));
  } else {
    res.status(404).send('Forbidden')
  }
}

const addBoss = (req, res) => {
  let { name, password } = req.body;
  if (password === Create_PW) {
    addBossHelper(name)
      .then(() => res.status(201).send('success'))
      .catch(() => res.status(404).send('error'));
  } else {
    res.status(404).send('Forbidden')
  }
}

const loginValidator = (password) => { //sessions should use this
  return password === Login_PW;
}

const updateStudentCollection = (req, res) => {
  //provides name and string in the format of 'students.adminLvl[studentId]'
  let { name, studentId } = req.body;
  let studentCollection = `students.adminLvl.${studentId}`;
  updateStudentCollectionHelper(name, studentCollection)
    .then(() => res.status(201).send('success'))
    .catch(() => res.status(404).send('error'));
}

const getEverything = (req, res) => {
  if (loginValidator(req.body.password)) {
    getAllStudentsHelper()
      .then(studentData => {
        getAllQuestionsHelper()
          .then(questionData => res.status(201).send({ studentData, questionData }))
          .catch(err => res.status(404).send('error'));
      })
      .catch(err => res.status(404).send('error'));
  } else {
    res.status(404).send('Forbidden')
  }
}

export {
  addMentor,
  addBoss,
  updateStudentCollection,
  getEverything,
};