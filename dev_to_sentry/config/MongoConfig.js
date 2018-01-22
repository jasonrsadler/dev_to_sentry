var mongoose = require('mongoose');

var mongoDB = 'mongodb://jsadler:Forward_55@127.0.0.1:27017/dsentrdb?authSource=admin';
mongoose.connect(mongoDB, {useMongoClient: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', () => {
    console.log('db connected');
});

module.exports = db;