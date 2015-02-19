module.exports = {

  registerRoutes: function (server) {
    server.get('/', this.home);
    server.get('/store', this.store);
    server.get('/kevin', this.kevin);
    server.get('/about', this.about);

    server.use(this['404']);

    server.use(this['500']);
  },

  home: function (req, res, next) {
    res.render('home');
  },

  store: function (req,res){
    res.render('store');
  },

  kevin: function (req, res) {
    res.render('kevin');
  },

  about: function (req, res) {
    res.render('about');
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
