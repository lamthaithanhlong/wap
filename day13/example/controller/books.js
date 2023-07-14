const Book = require('../model/books')

let book = new Book()
class bookController {
    constructor() {}
    getAllBooks() {
        return book.getAllBook()
    }
}

module.exports = bookController