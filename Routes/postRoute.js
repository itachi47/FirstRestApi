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

//DELETE A RECORD BY ID
router.delete('/:postId', async (req, res) => {
    try{
        const post = await postModel.remove({_id : req.params.postId});
        res.json(post);
    } catch (err) {
        res.json({message : err});
    }
});

//UPDATE RECORD TITLE BY ID t
router.patch('/:postId', async(req, res) => {
    try {
        const updatedPost = await postModel.updateOne(
            {_id: req.params.postId},
            {$set: {title: req.body.title}}
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router;