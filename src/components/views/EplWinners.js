import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import EplWinnerCard from './parts/EplWinnerCard';

export default function EplWinners() {
    const [winners, setWinners] = useState([]);
    const [loading, isLoading] = useState(true);

    // useEffect : Get Epl winners
    useEffect(() => {
        axios
            .get('https://api.football-data.org/v2/competitions/PL', { headers: { 'X-AUTH-TOKEN' : process.env.REACT_APP_API_AUTH_TOKEN } })
            .then(res => {
                let data = res.data;
                setWinners(data.seasons);
                isLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    if(loading) {
        return (
            <Container fluid="lg">Loading ...</Container>
        )
    } else {
        return (
            <Container fluid="lg" className="epl-winners">
                <Row xs={2} md={2} lg={3} xl={4}>
                    {winners.filter(winner => winner.winner !== null).map(winner => <Col><EplWinnerCard key={winner.id} winner={winner} /></Col>)}
                </Row>
            </ Container>
        )
    }
    
}
