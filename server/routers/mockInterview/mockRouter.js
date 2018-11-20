import express from 'express';

import { addQuestion, deleteQuestion, updateQuestion } from '../../controllers/mockInterview/questionsCtrl';
import { addStudent, deleteStudent, updateStudent } from '../../controllers/mockInterview/studentsCtrl';
import { addMentor, addBoss, updateStudentCollection, getEverything, } from '../../controllers/mockInterview/landingCtrl';

const router = express.Router();

router.route('/student')
  .post(addStudent)
  .patch(updateStudent)
  .delete(deleteStudent);

router.route('/questions')
  .post(addQuestion)
  .patch(updateQuestion)
  .delete(deleteQuestion);

router.route('/load')
  .get(getEverything);

router.route('/mentor')
  .patch(updateStudentCollection)
  .post(addMentor);

router.route('/admin')
  .post(addBoss)

export default router;