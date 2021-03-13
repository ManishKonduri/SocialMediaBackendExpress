const mongo = require('mongoose');

mongo.connect('mongodb+srv://manishkonduri:manish145@reactdb.6tf2j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {

    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,

});

module.exports = mongo;
