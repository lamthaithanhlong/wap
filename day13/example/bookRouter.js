const express = require('express');
const options = {
    "caseSensitive": false
}
const router = express.Router()

let book
router.get('/books',(req,res) => {
    res.status(200).send(BOOKS)
})

module.exports = router