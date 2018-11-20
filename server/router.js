import express from 'express';
import mockInterviewRouter from './routers/mockInterview/router';
import coldCallerAssistantRouter from './routers/coldCallerAssistantRouter';

const router = express.Router();

router
  .use('/coldCallerAssistant', coldCallerAssistantRouter)
  .use('/mockInterview', mockInterviewRouter);

export default router;