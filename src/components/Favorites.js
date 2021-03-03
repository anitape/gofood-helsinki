import React, {useState, useEffect} from 'react';
import GofoodService from "./GofoodService";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(false);
    const favTable = [];

    useEffect(() => {
        GofoodService.getAll()
            .then(response => {
                setFavorites(response.data.rows);
                console.log("data", response.data.rows);
                }
            )
        setLoading(true);
    }, []);

   // favorites.map((item) => favTable.push(fav))

    return (
        <div>
            {!loading ? <div>Loading...</div> :
            <p>Restaurant {favorites}</p>}
        </div>
    )
};

export default Favorites;