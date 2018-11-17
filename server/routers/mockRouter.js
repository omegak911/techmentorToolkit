import express from 'express';
import {   
  getEverything,
  addStudent,
  deleteStudent,
  updateStudent,
  addQuestion,
  deleteQuestion,
  updateQuestion} from '../controllers/mockCtrl';

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

export default router;