import React from 'react';
import { Card } from 'react-bootstrap';
import logo from '../../../logo.png';

export default function EplWinnerCard(props) {
    const {startDate, endDate, winner} = props.winner;

    return (
        <Card>
            <Card.Img variant="top" src={winner.crestUrl ? winner.crestUrl : logo}/>
            <Card.Body>
                <Card.Title>Season {startDate.split('-')[0]}/{endDate.split('-')[0]}</Card.Title>
                <Card.Text>
                    {winner.name}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
