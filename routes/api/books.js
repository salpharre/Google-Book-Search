const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const axios = require("axios");
const { query } = require("express");

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
const APIKEY = process.env.GOOGLE_APIKEY || "didn't work"

//search for books via google books api
// router.route("/api/books/search/")
//   .get(BASEURL + query.title + APIKEY);

// Matches with "/api/books" 
router.route("/")
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(booksController.remove);

module.exports = router;
