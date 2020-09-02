import axios from "axios";


export default {
  //route to talk to backend to get to google api
  searchBooks: function(query) {
    return axios.get("/api/books/search/" + query);
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books/save", bookData);
  }
};
