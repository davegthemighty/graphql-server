const { model,  Schema } = require('mongoose');

const authorSchema = new Schema({
    name: String,
    age: Number,
});

module.exports = model('Author', authorSchema);

//
//
//
//
// const data = {
//   books: [
//     { id: '1', name: 'Book One', genre: 'Genre One', authorId: '3' },
//     { id: '2', name: 'Book Two', genre: 'Genre Two', authorId: '2' },
//     { id: '3', name: 'Book Three', genre: 'Genre One', authorId: '2' },
//   ],
//   authors: [
//     { id: '1', name: 'Author One', age: 31 },
//     { id: '2', name: 'Author Two', age: 42 },
//     { id: '3', name: 'Author Three', age: 53 },
//   ],
// };
