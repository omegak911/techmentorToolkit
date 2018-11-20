import express from 'express';
import githubCtrl from '../controllers/githubCtrl';

const router = express.Router();

router.route('/')
  .get(githubCtrl);

export default router;