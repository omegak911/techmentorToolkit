import express from 'express';
import { addStudent, deleteStudent, getEverything, updateStudent } from '../controllers/mockCtrl';

const router = express.Router();

router.route('/student')
  .post(addStudent)
  .patch(updateStudent)
  .delete(deleteStudent);

// router.route('/questions')
//   .post()

router.route('/load')
  .get(getEverything);

export default router;