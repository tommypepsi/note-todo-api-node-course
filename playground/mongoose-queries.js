const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '599c8a800a5528d8323a1c3511';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => { 
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => { 
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => { 
//     if(!todo){
//         return console.log('ID not found')
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

const id = '599c7035c5cdd354209c5027'

User.findById(id).then((user) => {
    if(!user){
        return console.log('User not found');
    }

    console.log('User: ', user);
}).catch((e) => console.log(e));