import React, {useState} from 'react';
import logo from '../gofoodlogo.jpg';
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import GofoodService from "./GofoodService";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const FoodRow = (props) => {
    const images = props.images;
    const tags = props.item.tags;
    const tagTable = [];
    const [notes, setNotes] = useState([]);
    const item = props.item;
    const button = props.button;
    let image;
    const openMon = props.item.opening_hours.hours[0].opens;
    const closeMon = props.item.opening_hours.hours[0].closes;
    const openTues = props.item.opening_hours.hours[1].opens;
    const closeTues = props.item.opening_hours.hours[1].closes;
    const openWed = props.item.opening_hours.hours[2].opens;
    const closeWed = props.item.opening_hours.hours[2].closes;
    const openThur = props.item.opening_hours.hours[3].opens;
    const closeThur = props.item.opening_hours.hours[3].closes;
    const openFri = props.item.opening_hours.hours[4].opens;
    const closeFri = props.item.opening_hours.hours[4].closes;
    const openSat = props.item.opening_hours.hours[5].opens;
    const closeSat = props.item.opening_hours.hours[5].closes;
    const openSun = props.item.opening_hours.hours[6].opens;
    const closeSun = props.item.opening_hours.hours[6].closes;
    let openMon1, closeMon1, openTues1, closeTues1, openWed1, closeWed1, openThur1, closeThur1, openFri1, closeFri1, openSat1, closeSat1, openSun1, closeSun1;

    tags.slice(0, 8).map((tag) => {
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
            city: {item}.item.location.address.locality,
            image: image,
            url: {item}.item.info_url,
            mon: openMon1+"-"+closeMon1,
            tues: openTues1+"-"+closeTues1,
            wed: openWed1+"-"+closeWed1,
            thur: openThur1+"-"+closeThur1,
            fri: openFri1+"-"+closeFri1,
            sat: openSat1+"-"+closeSat1,
            sun: openSun1+"-"+closeSun1};
        console.log("Image is", image);
        GofoodService
            .create(restaurant)
            .then(returnedNote => {
                setNotes(notes.concat(returnedNote));
            })
        console.log("added ", restaurant);
        props.setAdded(!props.added);
    };

    if ((openMon && closeMon && openTues && closeTues && openWed && closeWed && openThur &&
        closeThur && openFri && closeFri && openSat && closeSat && openSun && closeSun) !== null ) {
        openMon1 = openMon.slice(0, -6);
        closeMon1 = closeMon.slice(0, -6);
        openTues1 = openTues.slice(0, -6);
        closeTues1 = closeTues.slice(0, -6);
        openWed1 = openWed.slice(0, -6);
        closeWed1 = closeWed.slice(0, -6);
        openThur1 = openThur.slice(0, -6);
        closeThur1 = closeThur.slice(0, -6);
        openFri1 = openFri.slice(0, -6);
        closeFri1 = closeFri.slice(0, -6);
        openSat1 = openSat.slice(0, -6);
        closeSat1 = closeSat.slice(0, -6);
        openSun1 = openSun.slice(0, -6);
        closeSun1 = closeSun.slice(0, -6);
    }

    return(
        <div className="article">
            <Card id="card">
                <Image src={image} id="boximg"/>
                <Card.Body>
                    <Card.Title id="title">{props.item.name.fi}</Card.Title>
                    <Card.Text className="cardTxt">
                        {props.item.location.address.street_address}, {props.item.location.address.postal_code} {props.item.location.address.locality}<br/>
                        {props.item.info_url}<br/>
                    </Card.Text>
                    <Card.Subtitle className="openingH" id="title">Opening Hours</Card.Subtitle>
                        <Row className="openingH">
                            <Col>Mon: {openMon1}-{closeMon1}<br/>
                                Tues: {openTues1}-{closeTues1}
                            </Col>
                            <Col>
                                Wed: {openWed1}-{closeWed1}<br/>
                                Thur: {openThur1}-{closeThur1}
                            </Col>
                            <Col>
                                Fri: {openFri1}-{closeFri1}<br/>
                                Sat: {openSat1}-{closeSat1}<br/>
                                Sun: {openSun1}-{closeSun1}
                            </Col>
                        </Row>
                    <p className="tags">
                    {tagTable.join(" ")}<br/>
                    </p>
                     {!button ?
                        <Button id="addBtn" variant="info" size="sm" onClick={() => addFavorites({item})}>Add to Favorites</Button> :
                         <div className="addedBtn">Added to Favorite List</div>
                      }
                </Card.Body>
            </Card>
        </div>
    );
};

export default FoodRow;