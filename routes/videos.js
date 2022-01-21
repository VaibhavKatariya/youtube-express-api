const express = require('express');
const Post = require('../models/Videos');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find({}, {_id :0, __v : 0});
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
});

router.get('/:postId', async (req, res) => {
    try {
        const posts = await Post.findById(req.params.postId);
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
});

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err })
    }
});

router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateMany({channelId: req.params.postId }, req.body);
        res.json(updatedPost)
    } catch (err) {
        res.json({ message: err })
    }
});


router.delete('/', async (req, res) => {
    res.json({
        error: {
            reason: "Permission denied",
            code: "403 Forbidden",
            message: "Only Admins can Delete!"
        }
    })
});

module.exports = router;