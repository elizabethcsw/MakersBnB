const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
// const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

//const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.engine('html', require('ejs').renderFile);
// app.set('views',  __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', (req, res, next) => {
  res.render('home');
  // res.send('\n\nHellllllo!\n\n');
});
app.set('view engine', 'ejs');
app.get('/login', (req, res, next) => {
  res.render('login');
  // res.send('\n\nHellllllo!\n\n');
});
app.set('view engine', 'ejs');
app.get('/signp', (req, res, next) => {
  res.render('signup');
  // res.send('\n\nHellllllo!\n\n');
});
app.get('/homepage', (req, res) => {
  res.send('\n\nHellllllo!\n\n');
});
app.listen(port, () => {
  console.log(`listening on port ${ port }`);
});

require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of our awesome app.',
}));

module.exports = app;
