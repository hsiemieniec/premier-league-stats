import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import StandingPosition from './parts/StandingPosition';
import Table from 'react-bootstrap/Table';
import { Row } from 'react-bootstrap';

export default function Standings() {
    const [standings, setStandings] = useState([]);
    const [load, setLoad] = useState(true);
    const [leagueName, setLeagueName] = useState("");
    const [dateStart, setDateStart] = useState(null);
    const [dateEnd, setDateEnd] = useState(null);


    // useEffect : Get Standings
    useEffect(() => {
        axios
            .get('https://api.football-data.org/v2/competitions/PL/standings', { headers: { 'X-AUTH-TOKEN' : process.env.REACT_APP_API_AUTH_TOKEN } })
            .then(res => {
                let data = res.data;
                setLeagueName(data.competition.name)
                setStandings(data.standings[0].table);
                setDateStart(data.season.startDate);
                setDateEnd(data.season.endDate);
                setLoad(false);
            })
            .catch(err => console.log(err));
    }, []);


    if(load) {
        return (
            <Container>
                Loading ...
            </Container>       
        )
    } else {
        return (
            <Container fluid className="standings">
                <Row>
                    <h1>{leagueName} - {dateStart.split('-')[0]}/{dateEnd.split('-')[0]}</h1>
                </Row>
                <Row>
                    <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Club Name</th>
                            <th>Played Games</th>
                            <th>Wins</th>
                            <th>Lost</th>
                            <th>Draw</th>
                            <th>GF</th>
                            <th>GA</th>
                            <th>GD</th>
                            <th>Points</th>
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
