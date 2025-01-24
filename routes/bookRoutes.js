const express = require("express")
const router = express.Router()
const { createBooks, getBookById, getBooks, updateBook, deleteBook } = require("../controllers/bookControllers")

router.post("/create", createBooks)

router.put("/update/:id", updateBook)

router.get("/book/:id", getBookById)

router.get("/books", getBooks)

router.delete("/delete/:id", deleteBook)

module.exports = router