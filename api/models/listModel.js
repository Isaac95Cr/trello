const mongoose = require('mongoose');
Schema = mongoose.Schema;
require('./cardModel');
require('./boardModel');

const ListSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    boardId: {
        /*type: Schema.ObjectId, 
        ref: 'Board',*/
        type: String,
        require: true
    },
    position: {
        type: String,
    },
    cards: [{ type: Schema.ObjectId, ref: 'Card' }]
});

const ListModel = mongoose.model('List', ListSchema);

module.exports = ListModel;
