const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all comments
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const comments = commentData.map((Comment) => Comment.get({ plain: true }));

        console.log(comments);
        res.json(comments);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET a single comment by id
router.get('/:id', async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.id);
        if (!commentData) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
        }
        res.json(commentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// POST a new comment
router.post('/', withAuth, async (req, res) => {
    if (req.session) {
        try {
            const commentData = await Comment.create({
                comment_text: req.body.comment_text,
                post_id: req.body.post_id,
                user_id: req.session.user_id,
            });
            res.json(commentData);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    }
});

// PUT to update a comment by id
router.put('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.update({
            comment_text: req.body.comment_text,
        }, {
            where: {
                id: req.params.id
            }
        });

        if (!commentData[0]) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
        }
        res.json(commentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// DELETE a comment by id
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!commentData) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
        }
        res.json(commentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
