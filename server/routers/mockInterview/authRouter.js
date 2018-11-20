import express from 'express';

import { loginValidator } from '../../controllers/mockInterview/landingCtrl';

const router = express.Router();

router.route('/')
  .get(loginValidator);

export default router;