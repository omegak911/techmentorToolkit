import { 
  getAllStudentsHelper,
} from '../../../database/helpers/studentHelpers';

import {
  getAllQuestionsHelper,
} from '../../../database/helpers/questionHelpers';

import {
  addMentorHelper,
  addBossHelper,
  getAdminHelper,
  addToStudentCollectionHelper,
  removeFromStudentCollectionHelper
} from '../../../database/helpers/mentorHelpers';

import {
  Create_PW,
  Login_PW,
  VALIDATOR
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

const loginValidator = (req, res) => {
  if (req.query.password === Login_PW) {
    req.session.secret = VALIDATOR; //to be used by gateway
    req.session.username = req.query.username;
    res.status(200).send('success');
  } else {
    res.status(404).send('error');
  }
}

const updateStudentCollection = (req, res) => {
  //provides name and string in the format of 'students.adminLvl[studentId]'
  let { name, studentId, type } = req.body;
  let studentCollection = `students.${studentId}`;
  let updateHelper = type === 'add' ? addToStudentCollectionHelper : removeFromStudentCollectionHelper;

  updateHelper(name, studentCollection)
    .then(() => res.status(201).send('success'))
    .catch((err) => { 
      console.error(err)
      res.status(404).send('error')
    });
}

const getEverything = (req, res) => {
  let { username } = req.session;
  getAdminHelper()
    .then(adminData => {
      getAllStudentsHelper()
      .then(studentData => {
        getAllQuestionsHelper()
          .then(questionData => res.status(200).send({ adminData, studentData, questionData, username }))
          .catch(err => res.status(404).send('error'));
      })
      .catch(err => res.status(404).send('error'));
    })
    .catch(err => res.status(404).send('error'))
}

const getMentorStudent = (req, res) => {
  getAdminHelper()
    .then(adminData => {
      getAllStudentsHelper()
      .then(studentData => res.status(201).send({ adminData, studentData }))
      .catch(err => res.status(404).send('error'));
    })
    .catch(err => res.status(404).send('error'))
}

export {
  addMentor,
  addBoss,
  loginValidator,
  updateStudentCollection,
  getEverything,
  getMentorStudent,
};