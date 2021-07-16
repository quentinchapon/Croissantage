const mongoose = require('mongoose');

const User = mongoose.model('User', {
    account: {
        username: {
            unique: true,
            type: String,
            required: true,
        },
        avatar: mongoose.Schema.Types.Mixed,
        croissant: Number,
    },
    email: {
        unique: true,
        type: String,
        required: true,
    },
    token: String,
    hash: String,
    salt: String,
});

module.exports = User;
