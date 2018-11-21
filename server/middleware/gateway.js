import { VALIDATOR } from '../../config';

const gateway = (req, res, next) => {
  console.log('Gateway session: ', req.session.secret === VALIDATOR, `\n expires ${req.session._expires}`);
  if (req.session.secret === VALIDATOR) {
    next();
  } else {
    res.status(404).send('Not Authorized');
  }
}

export default gateway;