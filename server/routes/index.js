const UsersController = require('../controllers').Users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Users API!',
  }));

  app.post('/api/Users', UsersController.create);
  app.get('/api/Users', UsersController.list);
};
