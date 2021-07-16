const express = require('express');
const router = express.Router();
const uid2 = require('uid2');
const SHA256 = require('crypto-js/sha256');
const encBase64 = require('crypto-js/enc-base64');

const User = require('../models/User');

router.post('/user/signup', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.fields.email });
        if (!user) {
            const salt = uid2(16);
            const hash = SHA256(password + salt).toString(encBase64);
            const token = uid2(64);

            const newUser = new User({
                account: {
                    username: req.fields.username,
                    croissant: 3,
                },
                email: req.fields.email,
                token: token,
                hash: hash,
                salt: salt,
            });
            await newUser.save();
            res.status(200).json({
                account: newUser.account,
                email: newUser.email,
                token: newUser.token,
            });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
