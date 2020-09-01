import axios from "axios";

//don't need apikey?
// const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
// const APIKEY = process.env.GOOGLE_APIKEY || "PLACEHOLDER UNTIL AFTER COMMIT"

export default {
  //search books from google api 
  //TEMPORARY LOCATION UNTIL GET REACT LOOK AND API SET UP
  searchBooks: function(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  //route to talk to backend to get to google api
  // searchBooks: function(query) {
  //   return axios.get("/api/books/search/" + query);
  // },
  // // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
