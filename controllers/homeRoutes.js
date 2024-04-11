const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all Posts and JOIN with user data
    const postData = await Post.findAll({
      include: [{ model: Comment }, { model: User }],
    });

    // Serialize data so the template can read it
    const posts = postData.map((Post) => Post.get({ plain: true }));

    console.log(posts);

    // Pass serialized data and session flag into template
    res.render('homepage', {
      posts: posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/post/:id', async (req, res) => {
  try {
    // Fetch the post by its primary key (PK) with related comments and the user who posted it
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: Comment }, { model: User }],
    });

    // Convert the Sequelize model instance into a plain object
    const posts = postData.get({ plain: true });

    // Fetch all comments related to the post with the users who commented
    const commentData = await Comment.findAll({
      where: { post_id: req.params.id },
      include: [{ model: User }],
    });

    // Convert each Sequelize model instance into a plain object
    const comments = commentData.map((comment) => comment.get({ plain: true }));

    // Log the retrieved post and comments data to the console
    console.log(posts);
    console.log(comments);

    // Render the 'single-post' template with the post, comments, and login status
    res.render('single-post', {
      ...posts,
      comments,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    // Handle errors by sending a 500 status code and the error message
    res.status(500).json(err);
    console.log(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
