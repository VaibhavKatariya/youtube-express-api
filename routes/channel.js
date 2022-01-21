const express = require('express');
const Post = require('../models/Videos');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
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
        const updatedPost = await Post.updateOne({ channelId: req.params.postId }, {
            $set: {
                title: req.body.snippet.title,
                channelId: req.body.id, title: req.body.title, channelUrl: req.body.channelUrl, snippet : {
                    description: req.body.snippet.description,
                    country: req.body.snippet.country,
                    publishedAt: req.body.snippet.publishedAt,
                    thumbnails: {
                        default: {
                            url: req.body.snippet.thumbnails.default.url,
                            width: req.body.snippet.thumbnails.default.width,
                            height: req.body.snippet.thumbnails.default.height
                        },
                        medium: {
                            url: req.body.snippet.thumbnails.medium.url,
                            width: req.body.snippet.thumbnails.medium.width,
                            height: req.body.snippet.thumbnails.medium.height
                        },
                        high: {
                            url: req.body.snippet.thumbnails.high.url,
                            width: req.body.snippet.thumbnails.high.width,
                            height: req.body.snippet.thumbnails.high.height
                        }
                    }
                }, statistics: {
                    viewCount: req.body.statistics.viewCount,
                    subscriberCount: req.body.statistics.subscriberCount,
                    videoCount: req.body.statistics.videoCount
                }
            }
        });
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