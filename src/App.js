import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Favorites from "./components/Favorites";
import Home from "./components/Home";

function App() {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            axios.get("v1/places/?tags_search=RESTAURANTS%20%26%20CAFES")
                .then(response => {
                    setPlaces(response.data.data);
                    console.log(response.data.data);
                })
        };
        fetchData();
        setLoading(true);
    }, []);



  return (
    <div>
        <Navbar>
            <Navbar.Brand href="/">GoFood Helsinki</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/favorites">Favorites</Nav.Link>
            </Nav>
        </Navbar>
        <Router>
            <main>
                <Route exact path="/" render={() => <Home loading={loading} places={places}/>} />
                <Route path="/favorites" render={() => <Favorites/>} />
            </main>
        </Router>

    </div>
  );
}

export default App;
