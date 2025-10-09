const express = require('express');
const session = require('express-session');

const app = express();
const PORT = 4000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret123',
  resave: false,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
  res.redirect('/login');
});

app.get('/login', (req, res) => {
  res.render('login', { message: null });
});

app.post('/login', (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.render('login', { message: 'Please enter your name.' });
  }
  req.session.user = {
    name: username,
    loginTime: new Date().toLocaleString()
  };
  res.redirect('/profile');
});

app.get('/profile', (req, res) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  res.render('profile', { user: req.session.user });
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Library portal running on http://localhost:${PORT}`);
});
