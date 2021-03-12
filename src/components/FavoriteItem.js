import React from 'react';
import Button from "react-bootstrap/Button";
import GofoodService from "./GofoodService";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

const FavoriteItem = (props) => {
    const id = props.item.id;

    const removeFavorite = (id) => {
        GofoodService
            .remove(id);
        console.log("I deleted the product which id is " + id);
        props.setDel(!props.del);
    };

    return(
        <div className="favItem">
            <Row>
                <Col>
                    <Image id="boximg" src={props.item.image}/>
                </Col>
                <Col>
                    <h5>{props.item.name}</h5>
                    <p>{props.item.street}, {props.item.postcode} {props.item.city}
                    <br/>{props.item.url}</p>
                    <Button variant="info" size="sm" onClick={() => removeFavorite(id)}>Delete</Button>
                </Col>
                <Col>
                    <Table borderless>
                        <thead>
                            <tr className="favTbl">
                                <th>Opening Hours</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="favTbl">
                                <td>Mon: {props.item.mon}</td>
                                <td>Fri: {props.item.fri}</td>
                            </tr>
                            <tr className="favTbl">
                                <td>Tues: {props.item.tues}</td>
                                <td>Sat: {props.item.sat}</td>
                            </tr>
                            <tr className="favTbl">
                                <td>Wed: {props.item.wed}</td>
                                <td>Sun: {props.item.sun}</td>
                            </tr>
                            <tr className="favTbl">
                                <td>Thur: {props.item.thur}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
};

export default FavoriteItem;