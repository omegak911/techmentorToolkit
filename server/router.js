import express from 'express';
import githubCtrl from './controllers/githubCtrl';
import mockRouter from './routers/mockRouter';

const router = express.Router();

router
  .use('/auth', authRouter) //need to link this to authRouter
  .use(gateway) //need to link this to middleware
  //get everything
  .use('/mockInterview', mockRouter)

router.route('/coldCallerAssistant')
  .get(githubCtrl);

export default router;