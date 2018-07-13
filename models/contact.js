var mongoose = require('mongoose');

var Contact = mongoose.model('Contact', {
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    phone: {
        type: String,
        default: null
    },
    text: {
        type: String,
        default: 'Empty Message'
    },
    submitedAt: {
        type: String,
        default: null
    }
});

module.exports = {Contact}
