import express from 'express';
import githubCtrl from './controllers/githubCtrl';
import mockRouter from './routers/mockRouter';

const router = express.Router();

router.route('/coldCallerAssistant')
  .get(githubCtrl);

router.use('/mockInterview', mockRouter);

export default router;