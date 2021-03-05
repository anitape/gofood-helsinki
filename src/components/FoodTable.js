import React, {useState} from 'react';
import FoodRow from "./FoodRow";


const FoodTable = (props) => {
    const places = props.places;
    const placeTable = [];
    const favorites = props.favorites;
    let button;



    places.map((item) => {
        const result = favorites.find((favItem) => favItem.id == item.id);
        if (result === undefined) {
            button = false;
        }
        else if (result.id == item.id) {
            button = true;
        }
        placeTable.push((item.name.fi.search(props.searchText) < 0 &&
            item.location.address.street_address.search(props.searchText) < 0 &&
            item.location.address.postal_code.search(props.searchText) < 0 &&
            item.location.address.locality.search(props.searchText) < 0) ||
            <FoodRow key={item.id} item={item} images={item.description.images} added={props.added}
                     setAdded={props.setAdded} button={button}/>)
    });

    return(
        <div>
            {placeTable}
        </div>
    )
};

export default FoodTable;