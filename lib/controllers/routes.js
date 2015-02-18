module.exports = {

  registerRoutes: function (server) {
    server.get('/', this.home);
    server.get('/store', this.store);

    server.get('/app', this.app);

    server.use(this['404']);

    server.use(this['500']);
  },

  home: function (req, res, next) {
    res.render('home');
  },

<<<<<<< HEAD
  app: function (req, res, next) {
    res.render('app');
=======
  store: function (req,res){
    res.render('store');
>>>>>>> origin/master
  },

  404: function (req, res) {
    res.status(404);
    res.send('404 - Not Found');
  },

  500: function (req, res, next) {
    res.status(500);
    res.render('500 - Server error');
  },

};
