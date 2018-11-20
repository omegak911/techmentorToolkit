import express from 'express';

import { loginValidator } from '../controllers/mockInterview/landingCtrl';

const router = express.Router();

router.route('/validate')
  .get(loginValidator);

export default router;