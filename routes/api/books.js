const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const axios = require("axios");
// const { query } = require("express");

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
const APIKEY = process.env.GOOGLE_APIKEY

//search for books via google books api
// matches with /api/books/search/
router.route("/search/:query")
  .get((req, response) => {
    console.log(req.params.query);
    console.log(BASEURL + req.params.query + APIKEY);
    axios.get(BASEURL + req.params.query + APIKEY)
    .then(books => {
      console.log(books.data);
      return response.json(books.data);
    }).catch(err => response.json(err));
  });

//Get all books
// Matches with "/api/books" 
router.route("/")
  .get(booksController.findAll);

router.route("/save")
  .post(booksController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  .delete(booksController.remove);

module.exports = router;
