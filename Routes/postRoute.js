const express = require('express');

//IMPORT THE POST MODEL
const postModel = require('../Models/postModel');

const router = express.Router();

//POST A POST
router.post('/', async (req, res) => {
    const post = new postModel ({
        title: req.body.title,
        description: req.body.description

    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(err) {
        res.json({message : err});
    }
});

//GET ALL POST FORM THE DATABASE
router.get('/', async (req, res) => {
    try {
        const posts = await postModel.find();
        res.json(posts);
    } catch(err) {
        res.json({message : err});
    }
});

//GET A SPECIFIC POST FROM THE DATABASE USING MONGO ID
router.get('/:postId', async (req, res) => {
    try {
        const post = await postModel.findById(req.params.postId);
        res.json(post);
    } catch(err) {
        res.json({message : err});
    }
});

module.exports = router;