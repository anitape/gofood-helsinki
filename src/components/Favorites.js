import React from 'react';
import FavoriteItem from "./FavoriteItem";

const Favorites = (props) => {
    const favorites= props.favorites;
    const favTable = [];

   favorites.map((item) => favTable.push(<FavoriteItem key={item.id} item={item} del={props.del} setDel={props.setDel}/>));

    return (
        <div className="favView">
            <h2 className="favTitle">Your Favorite Restaurants</h2>
             {favTable}
        </div>
    )
};

export default Favorites;