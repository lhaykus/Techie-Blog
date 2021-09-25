const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Comment.findAll({})
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    // checking current session
    if (req.session) {
        Comment.create({
                id: req.params.id,
                comment_text: req.body.comment_text,
                post_id: req.body.post_id,
                // using id from the session
                user_id: req.session.user_id,
            })
            .then(dbCommentData => res.json(dbCommentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});

router.get('/:id', withAuth, async(req, res) => {
    console.log('comment route hit');
    try {
        const commentByID = await Comment.findByPk(req.params.id, {

        });
        if (!commentByID) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
        }
        const single = commentByID.toJSON();
        res.status(200).render('edit-comment', {...single, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/edit/:id', withAuth, (req, res) => {
    Comment.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'user_id',
                'created_at',
                'post_id'
            ],
            include: [{
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }]
        })
        .then(dbComData => {
            if (!dbComData) {
                console.log('nopers');
                res.status(404).json({ message: 'No comment found with this id' });
                return;
            }

            // serialize the data
            const Com = dbComData.get({ plain: true });

            res.render('edit-comment', {
                Com,
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', withAuth, async(req, res) => {
    try {
        const editComment = await Comment.update(req.body, {
            where: {
                id: req.params.id,
            }

        });
        if (!editComment[0]) {
            res.status(404).json({ message: 'No comment with this ID' })
            return;
        }
        res.status(200).json(editComment);

    } catch (err) {
        res.status(500).json(err);
    }
})



router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(dbCommentData => {
            if (!dbCommentData) {
                res.status(404).json({ message: 'No comment found with this id' });
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;