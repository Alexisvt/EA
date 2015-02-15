exports = {

  registerRoutes: function (server) {
    'use strict';

    server.get('/', this.home);
  },

  home: function (req, res, next) {
    'use strict';
    res.render('home');
  }

};
