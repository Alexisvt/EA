module.exports = {

  registerRoutes: function (server) {
    server.get('/', this.store);

    server.use(this['404']);

    server.use(this['500']);
  },

  store: function (req, res, next) {
    res.render('store');
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
