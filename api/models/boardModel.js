const mongoose = require('mongoose');
Schema = mongoose.Schema;
require('./listModel');

const BoardSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    favorite: {
        type: Boolean
    },
    lists: [{ type: Schema.ObjectId, ref: 'List'}]
});

const BoardModel = mongoose.model('Board',BoardSchema);

module.exports = BoardModel;