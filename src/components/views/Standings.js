import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { GET_STANDINGS_DATA, API_HEADER } from '../../ApiClient';
import axios from 'axios';
import StandingPosition from './parts/StandingPosition';
import Loader from '../layouts/Loader';
import Table from 'react-bootstrap/Table';
import { Row, Form, Col } from 'react-bootstrap';

export default function Standings() {
    const [standings, setStandings] = useState([]);
    const [loading, isLoading] = useState(true);
    const [leagueName, setLeagueName] = useState("");
    const [dateStart, setDateStart] = useState(null);
    const [dateEnd, setDateEnd] = useState(null);
    const [season, setSeason] = useState(2019);


    // useEffect : Get Standings
    useEffect(() => {
        axios
            .get(`${GET_STANDINGS_DATA}?season=${season}`, API_HEADER)
            .then(res => {
                let data = res.data;
                setLeagueName(data.competition.name)
                setStandings(data.standings[0].table);
                setDateStart(data.season.startDate);
                setDateEnd(data.season.endDate);
                isLoading(false);
            })
            .catch(err => console.log(err));
    }, [season]);

    const selectedSeasonChange = (e) => {
        e.preventDefault();
        setSeason(e.target.value);
        isLoading(true);
    }

    if(loading) {
        return (
            <Container fluid="lg">
                <Loader />
            </Container>       
        )
    } else {
        return (
            <Container fluid="lg" className="standings">
                <Row>
                    <Col xl={10} lg={9} md={8} sm={12}>
                        <h2>{leagueName} - {dateStart.split('-')[0]}/{dateEnd.split('-')[0]}</h2>
                    </Col>
                    <Col sm={12} md={4} lg={3} xl={2}>
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
                </Row>
                <Row>
                    <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Club</th>
                            <th className="played_games">
                                <span className="short">P</span>
                                <span className="long">Played <br></br>Games</span>
                            </th>
                            <th className="wins">
                                <span className="short">W</span>
                                <span className="long">Wins</span>
                            </th>
                            <th className="lost">
                                <span className="short">L</span>
                                <span className="long">Lost</span>
                            </th>
                            <th className="draw">
                                <span className="short">D</span>
                                <span className="long">Draw</span>
                            </th>
                            <th className="gf">GF</th>
                            <th className="ga">GA</th>
                            <th className="gd">GD</th>
                            <th className="points">
                                <span className="short">Pts</span>
                                <span className="long">Points</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {standings.map(club => <StandingPosition key={club.position} club={club} />)}
                    </tbody>
                    </Table>
                </Row>
            </Container>
        )
    }
}
