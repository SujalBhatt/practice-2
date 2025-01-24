const Book = require('../models/bookModel');

const createBooks = async (req, res) => {
    try {
        const {title, author, genre, year, available} = req.body

        const book = new Book({
            title,
            author,
            genre,
            year,
            available
        })

        await book.save()
        res.status(201).send(book)

    } catch(error) {
        res.status(500).send(error.message)
        console.log("Error", error.message)
    }
}

const getBookById = async (req, res) => {
    try {
        const id = req.params.id
        const book = await Book.findById(id)
        if (!book) {
            return res.status(404).send("Book not found")
        }
        res.status(200).send(book)
    } catch(error){
        res.status(500).send(error.message)
    }
}

const getBooks = async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).send(books)
    } catch(error) {
        res.status(500).send(error.message)
    }
}

const updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!book){
            return res.status(404).send("Book not found")
        }
        res.status(200).send(book)
    } catch(error) {
        res.status(500).send(error.message)
    }
}

const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id)
        if (!book) {
            return res.status(404).send("Book already deleted")
        }
        res.status(200).send(book)
    } catch(error) {
        res.status(500).send(error.message)
    }
}

module.exports = {createBooks, deleteBook, getBookById, getBooks, updateBook}