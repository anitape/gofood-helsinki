import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Favorites from "./components/Favorites";
import Home from "./components/Home";
import GofoodService from "./components/GofoodService";

function App() {
    const [places, setPlaces] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [del, setDel] = useState(false);
    const [added, setAdded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            axios.get("v1/places/?tags_search=RESTAURANTS%20%26%20CAFES")
                .then(response => {
                    setPlaces(response.data.data);
                    console.log(response.data.data);
                })
        };
        fetchData();
    }, []);

    const showFavorites = () => {
        GofoodService.getAll()
            .then(response => {
                setFavorites(response);
                console.log("data", response);
            })
    };

    useEffect(showFavorites, []);
    useEffect(showFavorites,[del]);
    useEffect(showFavorites,[added]);

  return (
    <div>
        <Navbar>
            <Navbar.Brand href="/" id="brand">GoFood Helsinki</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/favorites" id="fav">Favorites {favorites.length}</Nav.Link>
            </Nav>
        </Navbar>
        <Router>
            <main>
                <Route exact path="/" render={() => <Home places={places} favorites={favorites} added={added} setAdded={setAdded}/>} />
                <Route path="/favorites" render={() => <Favorites favorites={favorites} del={del} setDel={setDel}/>} />
            </main>
        </Router>
    </div>
  );
}

export default App;
