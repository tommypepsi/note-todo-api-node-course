const { MongoClient, ObjectID } = require('mongodb');

const obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodaApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) =>{
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) =>{
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').deleteMany({ name: 'dude' }).then((result) => {
        console.log(result);
    })

    db.collection('Users').findOneAndDelete({ _id: new ObjectID('599a5019c32d5c2354ab6496') }).then((result) => {
        console.log(result);
    })

    // db.close();
});