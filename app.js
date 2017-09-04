var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/sign_up', function(req, res) {
    res.render('pages/sign_up');
});

app.get('/login', function(req, res) {
    res.render('pages/login');
});

// const app = express();
const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('\n\nHellllllo!\n\n');
// });

// app.get('/homepage/', (req, res, next) => {
// 	res.render('index', {});
// });

// app.get('/login', (req, res) => {
// 	res.render('login', {});
// });

// app.get('/signup', (req, res) => {
// 	res.render('signup', {});
// });

app.listen(port, () => {
  console.log(`listening on port ${ port }`);
});
