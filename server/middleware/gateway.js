import { VALIDATOR } from '../../config';

const gateway = (req, res, next) => {
  if (req.session.secret === VALIDATOR) {
    next();
  } else {
    res.status(404).send('Not Authorized');
  }
}

export default gateway;