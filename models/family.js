var mongoose = require('mongoose');

var Family = mongoose.model('Family', {
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    id: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

module.exports = {Family}
