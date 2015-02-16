module.exports = {

  registerRoutes: function (server) {
    server.get('/', this.home);

    server.use(this['404']);

    server.use(this['500']);
  },

  home: function (req, res, next) {
    res.render('home');
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
