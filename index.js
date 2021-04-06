const express = require('express');
const app = express();
const port = 3000;

// For generating ID's
const { v4: uuid } = require('uuid');

//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }));
// To parse incoming JSON in POST request body:
app.use(express.json());

app.set('view engine', 'ejs');

// Our fake database:
let comments = [
  {
    id: uuid(),
    username: 'Todd',
    comment: 'lol that is so funny!',
  },
  {
    id: uuid(),
    username: 'Skyler',
    comment: 'I like to go birdwatching with my dog',
  },
  {
    id: uuid(),
    username: 'Sk8erBoi',
    comment: 'Plz delete your account, Todd',
  },
  {
    id: uuid(),
    username: 'onlysayswoof',
    comment: 'woof woof woof',
  },
];

// **********************************
// INDEX - renders multiple comments
// **********************************
app.get('/comments', (req, res) => {
  res.render('comments/index', { comments });
});

// **********************************
// NEW - renders a form
// **********************************
app.get('/comments/new', (req, res) => {
  res.render('comments/new');
});

// **********************************
// CREATE - creates a new comment
// **********************************
app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect('/comments');
});

app.listen(port, () => {
  console.log(`lisening at ${port}`);
});
