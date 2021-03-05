import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import FoodTable from "./FoodTable";

const Home = (props) => {
    const places = props.places;
    const favorites = props.favorites;
    const [searchText, setSearchText] = useState('');

    const searchTextChanged = (searchMe) => {
        setSearchText(searchMe);
    };

    const stChanged = (event) => {
        searchTextChanged(event.target.value);
    };

    return (
        <div>
            {!places.length ? <div>Loading...</div> :
                <div className="mainview">
                    <Form.Control type='search' placeholder='Find restaurants near you' onChange={stChanged} /><br/>
                    <FoodTable places={places} favorites={favorites} searchText={searchText} added={props.added} setAdded={props.setAdded}/>
                </div>
            }
        </div>
    )
};

export default Home;