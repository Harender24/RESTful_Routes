var methodOverride = require('method-override');
// For generating ID's
const { v4: uuid } = require('uuid');

const express = require('express');
const app = express();
const port = 3000;

//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }));
// To parse incoming JSON in POST request body:
app.use(express.json());

// To 'fake' put/patch/delete requests:
app.use(methodOverride('_method'));

// Views folder and EJS setup:
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

// *******************************************
// SHOW - details about one particular comment
// *******************************************
app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render('comments/show', { comment });
});

// *******************************************
// EDIT - renders a form to edit a comment
// *******************************************
app.get('/comments/:id/edit', (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render('comments/edit', { comment });
});

// *******************************************
// UPDATE - updates a particular comment
// *******************************************
app.patch('/comments/:id', (req, res) => {
  const { id } = req.params;
  const newComment = comments.find((c) => c.id === id);

  // get new text from req.body
  const newCommentText = req.body.comment;
  //update the comment with the data from req.body:
  newComment.comment = newCommentText;
  //redirect back to index (or wherever you want)
  res.redirect('/comments');
});

app.listen(port, () => {
  console.log(`lisening at ${port}`);
});
