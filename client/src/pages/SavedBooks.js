import React, { useState, useEffect } from "react";
import { DeleteBtn } from "../components/Btn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Card } from "../components/Card";


function SavedBooks() {

    const [favorites, setFavorites] = useState([]);

    //get all the books on initial render
    //delete favorited book when delete button is clicked
            //after deleting, re-render all books

    useEffect(() => {
        loadBooks()
    }, []);

    function loadBooks() {
        API.getBooks()
            .then(res => {
                console.log(res)
                setFavorites(res.data)
            })
            .catch(err => console.log(err));
    }

    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    return (
        <Container fluid>
            <Jumbotron>
            <h1>Google Book Search</h1>
            </Jumbotron>
            <Jumbotron>
                <h3>Favorites!</h3>
            </Jumbotron>
            <Jumbotron>
            {favorites.length ? (
                    favorites.map(book => {
                        return (
                        <Card
                            key={book._id}
                            image={(book.image) ? (book.image) : ("https://i.picsum.photos/id/287/200/200.jpg?hmac=kXFCSMZE2rF7NM-EFSH6c_nl5HlKQWvwCdE8JYL-YNQ")}
                            title={book.title}
                            author={(book.author) ? (book.author) : ("NA")}
                            description={book.description}
                            infoLink={book.infoLink}
                        >
                           <DeleteBtn 
                           onClick={() => deleteBook(book._id)}
                           /> 
                        </Card>
                        )
                    })
                ) : (
                        <h3>You Have No Favorites :(</h3>
                    )}
            </Jumbotron>
        </Container>
    );
};

export default SavedBooks;