const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    key: {type:String},
},{
    timestamps: true,
});

const Book = mongoose.model('book', bookSchema)

module.exports = Book