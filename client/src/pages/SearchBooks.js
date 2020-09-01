import React, { useState, useEffect } from "react";
import { ViewBtn, FavoriteBtn } from "../components/Btn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DebouncedSearch from "../utils/DebouncedSearch"
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Search from "../components/Search";


function SearchBooks() {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");

    function loadBooks() {
        API.searchBooks()
            .then(res => {
                console.log(res);
                console.log(res.data.items)
            //  setBooks(res.data.results);
            }).catch(err => console.log(err));
    };

    //holds the custom hook that uses the typed input and set delay amount that filters through current state array
    // const debouncedInput = useDebounce(search, 300);

    //The if conditional only occurs when the there is a debouncedInput, the else conditional still happens, loading the users from the api
    // useEffect(() => {
    //     if (debouncedInput) {
    //         console.log(debouncedInput);
    //         filterAPI();
    //     } else {
    //         loadBooks();
    //     }
    // }, [debouncedInput]);

    useEffect(() => {
        loadBooks();
    })

    //filter out object from api array that matches the searchedUser(typed input in search)
    //filter from api so the user doesn't need to backspace all the way (and let state reload with all users) before changing input
    // function filterAPI() {
    //     API.searchBooks().then(res => {
    //         const response = res.data.results;
    //         const book = response.filter(name => {
    //             const first = name.name.first.toLocaleLowerCase();
    //             const last = name.name.last.toLocaleLowerCase();
    //             const lowerCaseSearchedUser = searchedUser.toLocaleLowerCase();
    //             const full = `${first} ${last}`;
    //             const fullOriginal = `${name.name.first} ${name.name.last}`
    //             //'includes' method compares any piece of name to string (from object) so that if user only knows a part of the book's name the api will still be called
    //             //compares input to object whether the user types in all lower case or capitalizes the first letter
    //             if (full.includes(lowerCaseSearchedUser)) {
    //                 return true;
    //             } else if (fullOriginal.includes(searchedUser)) {
    //                 return true;
    //             }
    //         });
    //      setBooks(book);
    //     });
    // }
    //grabs value in input and saves it to state
    const handleInputChange = e => {
        const value = e.target.value;
        console.log(value);
        setSearch(value);
    };
    
    return (
        <Container fluid>
            <Row>
                <Jumbotron>
                    <h1>Google Book Search</h1>
                </Jumbotron>
            </Row>
            <Row>
                <Jumbotron>
                    <Search />
                </Jumbotron>
            </Row>
            <Row>
                {/*jumbotron and dynamically created cards*/}
            </Row>
        </Container>
    );
};

export default SearchBooks;