import React, { useState, useEffect } from "react";
import { ViewBtn, FavoriteBtn } from "../components/Btn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import useDebounce from "../utils/DebouncedSearch"
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import Search from "../components/Search";
import { Card } from "../components/Card";


function SearchBooks() {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");

    function loadBooks() {
        API.searchBooks(search)
            .then(res => {
                // console.log(res);
                // console.log(res.items);
                // console.log(res.data.items[0].volumeInfo);
                console.log(res.data.items);

                setBooks(res.data.items);
            }).catch(err => console.log(err));
    };

    //holds the custom hook that uses the typed input and set delay amount that filters through current state array
    const debouncedInput = useDebounce(search, 300);

    //The if conditional only occurs when the there is a debouncedInput
    useEffect(() => {
        if (debouncedInput) {
            console.log(debouncedInput);
            loadBooks(debouncedInput);
        } else {
            return;
        }
    }, [debouncedInput]);

    // useEffect(() => {
    //     if (!search) {
    //         return;
    //     }

    // });

    //grabs value in input and saves it to state
    const handleInputChange = e => {
        const value = e.target.value;
        console.log(value);
        setSearch(value);
    };

    // const saveBook = e => {
    //     API.saveBook({
    //         title: 
    //         author: 
    //         description: 
    //         image: 
    //         infoLink: 
    //     })
    // }

    return (
        <Container fluid>
            <Jumbotron>
                <h1>Google Book Search</h1>
            </Jumbotron>
            <Jumbotron>
                <Search
                    handleInputChange={handleInputChange}
                    value={search}
                />
            </Jumbotron>
            <Jumbotron>
                {books.length ? (
                    books.map(book => {
                        return (
                        <Card
                            key={book.volumeInfo.title}
                            image={(book.volumeInfo.imageLinks) ? (book.volumeInfo.imageLinks.thumbnail) : ("https://i.picsum.photos/id/287/200/200.jpg?hmac=kXFCSMZE2rF7NM-EFSH6c_nl5HlKQWvwCdE8JYL-YNQ")}
                            title={book.volumeInfo.title}
                            author={(book.volumeInfo.authors) ? (book.volumeInfo.authors[0]) : ("NA")}
                            description={book.volumeInfo.description}
                            infoLink={book.volumeInfo.infoLink}
                        />
                        )
                    })
                ) : (
                        <h3>No Results to Display :(</h3>
                    )}
                {/*dynamically created cards, map out array, target volumeInfo*/}
            </Jumbotron>
        </Container>
    );
};

export default SearchBooks;

/*
                    <FavoriteBtn />
                    <Card/>

*/