/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/destinations', require('./api/destination'));
  app.use('/api/utils', require('./api/util'));
  app.use('/api/notifications', require('./api/notification'));
  app.use('/api/groups', require('./api/group'));
  app.use('/api/lists', require('./api/list'));
  app.use('/api/events', require('./api/event'));
  app.use('/api/places', require('./api/place'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
