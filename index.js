const express = require('express');
const formidable = require('express-formidable');
const mongoose = require('mongoose');
const app = express();
app.use(formidable());

mongoose.connect('mongodb://localhost/croissant', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
});

app.get('/', (req, res) => {
    try {
        res.status(200).json({ message: 'Welcome' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.get('*', (req, res) => {
    res.status(404).json({ message: 'Page not found' });
});

app.listen(3000, () => {
    console.log('Server started');
});
