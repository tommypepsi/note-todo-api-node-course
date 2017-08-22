const express = require('express');
const bodyParser = require('body-parser');

const { mongosse } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    new Todo({
        text: req.body.text
    }).save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
})

app.listen(3000, () => {
    console.log('Started on port 3000');
})

module.exports = {
    app
};