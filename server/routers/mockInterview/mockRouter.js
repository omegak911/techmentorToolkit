import express from 'express';

import { addQuestion, deleteQuestion, getQuestion, updateQuestion } from '../../controllers/mockInterview/questionsCtrl';
import { addStudent, deleteStudent, updateStudent } from '../../controllers/mockInterview/studentsCtrl';
import { addMentor, addBoss, updateStudentCollection, getEverything, getMentorStudent } from '../../controllers/mockInterview/landingCtrl';

const router = express.Router();

router.route('/')
  .get(getEverything);

router.route('/student')
  .post(addStudent)
  .patch(updateStudent)
  .delete(deleteStudent);

router.route('/questions')
  .get(getQuestion)
  .post(addQuestion)
  .patch(updateQuestion)
  .delete(deleteQuestion);

router.route('/mentor')
  .get(getMentorStudent)
  .patch(updateStudentCollection)
  .post(addMentor);

router.route('/admin')
  .post(addBoss)

export default router;