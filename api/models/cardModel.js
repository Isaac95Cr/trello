const mongoose = require('mongoose');
Schema = mongoose.Schema;
require('./listModel');

const CardSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    fecha: {
        type: String
    },
    listId: {
        type: String,
        require: true
    },
    comments: [
        { name:String, content: String, date: String }
    ]
});

const CardModel = mongoose.model('Card', CardSchema);

module.exports = CardModel;