const express = require('express');

//IMPORT THE POST MODEL
const postModel = require('../Models/postModel');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('we are on post');
});

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



module.exports = router;