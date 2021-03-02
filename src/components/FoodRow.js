import React from 'react';
import logo from '../logo.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

let image;

const FoodRow = (props) => {
    const images = props.images;
    const tags = props.item.tags;
    const tagTable = [];

    tags.map((tag) => {
        tagTable.push("#"+tag.name)
    });

    if (images === null) {
        image = logo;
    }

    else if (images !== null && images.length === 0){
        image = logo;
    }

    else {
        image = images[0].url;
    }


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
                </Col>
            </Row>
            </Card>
        </div>
    );
};

export default FoodRow;