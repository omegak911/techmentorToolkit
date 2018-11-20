//check session here
const gateway = (req, res, next) => {
  // if req.session active
    next()
  // else res.redirect('/');
  // }
}

export default gateway;