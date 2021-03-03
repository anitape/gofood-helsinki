import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import FoodTable from "./FoodTable";

const Home = (props) => {
    const loading = props.loading;
    const places = props.places;
    const [searchText, setSearchText] = useState('');

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
    )
};

export default Home;