const withAuth = (req, res, next) => {
  // If the user isn't logged in, redirect them to the login route
  if (!req.session.logged_in) {
    return res.redirect("/landing");
  } else {
    next();
  }
};

module.exports = withAuth;
