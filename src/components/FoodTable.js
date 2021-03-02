import React from 'react';
import FoodRow from "./FoodRow";


const FoodTable = (props) => {
    const places = props.places;
    const placeTable = [];

    places.map((item) => {
        placeTable.push((item.name.fi.search(props.searchText) < 0 &&
            item.location.address.street_address.search(props.searchText) < 0 &&
            item.location.address.postal_code.search(props.searchText) < 0 &&
            item.location.address.locality.search(props.searchText) < 0) ||
            <FoodRow key={item.id} item={item} images={item.description.images}/>)
    });

    return(
        <div>
            {placeTable}
        </div>
    )
};

export default FoodTable;