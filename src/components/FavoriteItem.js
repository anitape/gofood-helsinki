import React from 'react';
import Button from "react-bootstrap/Button";
import GofoodService from "./GofoodService";

const FavoriteItem = (props) => {
    const id = props.item.id;

    const removeFavorite = (id) => {
        GofoodService
            .remove(id);
        console.log("I deleted the product which id is " + id);
        props.setDel(!props.del);
    };

    return(
        <div>
            <p>{props.item.name}</p>
            <p>{props.item.street}</p>
            <p>{props.item.postcode}</p>
            <p>{props.item.city}</p>
            <Button onClick={() => removeFavorite(id)}>Delete</Button>
        </div>
    )
};

export default FavoriteItem;