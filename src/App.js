import React, {useEffect, useState} from 'react';
import './App.css';
import FoodTable from "./components/FoodTable";
import axios from "axios";
import Form from "react-bootstrap/Form";

function App() {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');

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

    const searchTextChanged = (searchMe) => {
        setSearchText(searchMe);
        //console.log('This is searchMe of searchTextChanged', searchText)
    };

    const stChanged = (event) => {
        searchTextChanged(event.target.value);
        //console.log('stChanged Input value is ', event.target.value)
    };

  return (
    <div>
        {!loading ? <div>Loading...</div> :
            <div className="mainview">
                <Form.Control type='search' placeholder='Find restaurants near you' onChange={stChanged} /><br/>
                <FoodTable places={places} searchText={searchText}/>
            </div>
        }
    </div>
  );
}

export default App;
