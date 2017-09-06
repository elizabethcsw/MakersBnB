const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User
      .create({
        title: req.body.title,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
return Todo
  .all()
  .then(todos => res.status(200).send(todos))
  .catch(error => res.status(400).send(error));
},
};
