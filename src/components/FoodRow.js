import React, {useState} from 'react';
import logo from '../logo.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import GofoodService from "./GofoodService";

let image;

const FoodRow = (props) => {
    const images = props.images;
    const tags = props.item.tags;
    const tagTable = [];
    const [notes, setNotes] = useState([]);
    const item = props.item;
    const button = props.button;

    tags.map((tag) => {
        tagTable.push("#"+tag.name)
    });

    if (images === null) {
        image = logo;
    }

    else if (images.length === 0) {
        image = logo;
    }

    else {
        image = images[0].url;
    }

    const addFavorites = ({item}) => {
        const restaurant = {id: parseInt({item}.item.id), name: {item}.item.name.fi,
            street: {item}.item.location.address.street_address,
            postcode: {item}.item.location.address.postal_code,
            city: {item}.item.location.address.locality};
        GofoodService
            .create(restaurant)
            .then(returnedNote => {
                setNotes(notes.concat(returnedNote));
            })
        console.log("added ", restaurant);
        props.setAdded(!props.added);
    };


    return(
        <div>
            <Card>
            <Row>
                <Col md={4}>
                    <Image src={image} id="boximg"/>
                </Col>
                <Col md={4}>
                    <Table borderless>
                        <thead>
                            <tr>
                                <th>{props.item.name.fi}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="tblCard">
                                <td>{props.item.location.address.street_address}, {props.item.location.address.postal_code} {props.item.location.address.locality}</td>
                            </tr>
                            <tr className="tblCard">
                                <td>{props.item.info_url}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <p>{tagTable.join(" ")}</p>
                </Col>
                <Col md={4}>
                    <Table borderless>
                        <thead>
                            <tr>
                                <th>Opening Hours</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="tblCard">
                                <td className="tblCard">Mon: {props.item.opening_hours.hours[0].opens}-{props.item.opening_hours.hours[0].closes}</td>
                                <td>Fri: {props.item.opening_hours.hours[4].opens}-{props.item.opening_hours.hours[4].closes}</td>
                            </tr>
                            <tr className="tblCard">
                                <td>Tues: {props.item.opening_hours.hours[1].opens}-{props.item.opening_hours.hours[1].closes}</td>
                                <td>Sat: {props.item.opening_hours.hours[5].opens}-{props.item.opening_hours.hours[5].closes}</td>
                            </tr>
                            <tr className="tblCard">
                                <td>Wed: {props.item.opening_hours.hours[2].opens}-{props.item.opening_hours.hours[2].closes}</td>
                                <td>Sun: {props.item.opening_hours.hours[6].opens}-{props.item.opening_hours.hours[6].closes}</td>
                            </tr>
                            <tr className="tblCard">
                                <td>Thur: {props.item.opening_hours.hours[3].opens}-{props.item.opening_hours.hours[3].closes}</td>
                            </tr>
                        </tbody>
                     </Table>
                    {!button ?
                    <Button onClick={() => addFavorites({item})}>Add to Favorites</Button> :
                        <div>Added in Favorite List</div>
                    }
                </Col>
            </Row>
            </Card>
        </div>
    );
};

export default FoodRow;