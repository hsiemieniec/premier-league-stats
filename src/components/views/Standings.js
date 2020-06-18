import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import StandingPosition from './parts/StandingPosition';
import Table from 'react-bootstrap/Table';
import { Row } from 'react-bootstrap';

export default function Standings() {
    const [standings, setStandings] = useState([]);
    const [loading, isLoading] = useState(true);
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
                isLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    if(loading) {
        return (
            <Container fluid="lg">
                Loading ...
            </Container>       
        )
    } else {
        return (
            <Container fluid="lg" className="standings">
                <Row>
                    <h2>{leagueName} - {dateStart.split('-')[0]}/{dateEnd.split('-')[0]}</h2>
                </Row>
                <Row>
                    <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Club</th>
                            <th className="played_games">
                                <span className="short">G</span>
                                <span className="long">Played Games</span>
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
                                <span className="short">P</span>
                                <span className="long">P</span>
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
