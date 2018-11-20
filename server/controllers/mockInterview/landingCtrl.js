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

const addMentor = (req, res) => {

}

const addBoss = (req, res) => {

}

const loginValidator = (req, res) => {

}

const updateStudentCollection = (req, res) => {
  //provides name and string in the format of 'students.adminLvl[studentId]'
}

const getEverything = (req, res) => {
  getAllStudentsHelper()
    .then(studentData => {
      getAllQuestionsHelper()
        .then(questionData => res.status(201).send({ studentData, questionData }))
        .catch(err => res.status(404).send('error'));
    })
    .catch(err => res.status(404).send('error'));
}

export {
  getEverything,
};