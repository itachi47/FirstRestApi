const mongoose = require('mongoose');

const postSchema = mongoose.Schema ({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }

});

//EXPORT THE MODEL
module.exports = mongoose.model('postModel', postSchema);

