var isAuthenticated(req, res, next){
  if(req.isAuthenticated())
      next();
  res.redirect('/login');
}

module.ex
