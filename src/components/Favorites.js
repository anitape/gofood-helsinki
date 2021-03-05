import React, {useEffect, useState} from 'react';
import FavoriteItem from "./FavoriteItem";

const Favorites = (props) => {
    const favorites= props.favorites;
    const favTable = [];

   favorites.map((item) => favTable.push(<FavoriteItem key={item.id} item={item} del={props.del} setDel={props.setDel}/>));

    return (
        <div>
            <p>Restaurant</p>
             {favTable}
        </div>
    )
};

export default Favorites;