import express from 'express';

import mockAuthRouter from './authRouter';
import gateway from '../../middleware/gateway';
import mockRouter from './mockRouter';

const router = express.Router();

router
  .use('/auth', mockAuthRouter)
  .use(gateway)
  .use('/main', mockRouter);

export default router;