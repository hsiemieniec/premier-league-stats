import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { GET_PREMIER_LEAGUE_INFO_DATA, GET_FIXTURES_DATA, API_HEADER } from '../../ApiClient';
import axios from 'axios';
import Loader from '../layouts/Loader';
import FixturesMatchRow from './parts/FixturesMatchRow';

export default function Fixtures() {
    const [loading, isLoading] = useState(true);
    const [fixturesData, setFixturesData] = useState([]);
    const [season, setSeason] = useState(2019);
    const [currentMatchdayFetched, setCurrentMatchdayFetched] = useState(false);
    const [selectedMatchday, setSelectedMatchday] = useState(0);
    const matchdaysOptions = Array.from({length: 38}, (_, i) => i + 1);

    useEffect(() => {
        axios
            .get(GET_PREMIER_LEAGUE_INFO_DATA , API_HEADER)
            .then(res => {
                let data = res.data.currentSeason.currentMatchday;
                setSelectedMatchday(Number(data));
                setCurrentMatchdayFetched(true);
            })
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        if(currentMatchdayFetched) {
            axios
                .get(`${GET_FIXTURES_DATA}?season=${season}&matchday=${selectedMatchday}` , API_HEADER)
                .then(res => {
                    let data = res.data;
                    setFixturesData(data.matches);
                    isLoading(false);
                })
                .catch(err => console.log(err));
        } 
    }, [season, selectedMatchday, currentMatchdayFetched]);

    const selectedSeasonChange = (e) => {
        e.preventDefault();
        setSelectedMatchday(1);
        setSeason(e.target.value);
    };

    const selectedMatchdayChange = (e) => {
        e.preventDefault();
        setSelectedMatchday(e.target.value);
    };

    if(loading){
        return (
            <Container fluid="lg">
                <Loader />
            </Container>
        )
    } else {
        return (
            <Container fluid="lg" className="fixtures">
                <Row>
                    <Col xs={4} md={2}>
                        <Form.Group
                            onChange={selectedSeasonChange} 
                            controlId="seasonSelect"
                            value={season}
                        >
                            <Form.Control as="select">
                                <option value="2019">2019/2020</option>
                                <option value="2018">2018/2019</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xs={4} md={2}>
                        <Form.Group
                            onChange={selectedMatchdayChange} 
                            controlId="matchdaySelect"
                            value={selectedMatchday}
                        >
                            <Form.Control as="select">
                                {matchdaysOptions.map(matchday => <option key={matchday} selected={matchday === selectedMatchday}>{matchday}</option>)}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                {fixturesData.map(match => <FixturesMatchRow key={match.id} match={match} /> )}
            </Container>
        )
    }
}
