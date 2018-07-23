var mongoose = require('mongoose');
var moment = require('moment');

var animalSchema = new mongoose.Schema({
    name: {type: String, default: ''},
    fur: {type: String, default: ''},
    type: {type: String, default: ''},
    createdTimeStamp: {type: String, default: () => moment().format("dddd, MMMM Do YYYY, h:mm:ss a")} 
});

module.exports = mongoose.model('animalSchema', animalSchema);