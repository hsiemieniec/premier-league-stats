import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import EplWinnerCard from './parts/EplWinnerCard';

export default function EplWinners() {
    const [winners, setWinners] = useState([]);
    const [load, setLoad] = useState(true);

    // useEffect : Get Epl winners
    useEffect(() => {
        axios
            .get('https://api.football-data.org/v2/competitions/PL', { headers: { 'X-AUTH-TOKEN' : process.env.REACT_APP_API_AUTH_TOKEN } })
            .then(res => {
                let data = res.data;
                setWinners(data.seasons);
                setLoad(false);
            })
            .catch(err => console.log(err));
    }, []);

    if(load) {
        return (
            <Container>Loading ...</Container>
        )
    } else {
        return (
            <Container className="epl-winners">
                <Row xs={1} md={2} lg={3} xl={4}>
                    {winners.filter(winner => winner.winner !== null).map(winner => <Col><EplWinnerCard key={winner.id} winner={winner} /></Col>)}
                </Row>
            </ Container>
        )
    }
    
}
