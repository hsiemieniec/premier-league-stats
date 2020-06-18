import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';

import Loader from '../layouts/Loader';
import TeamOverview from './parts/TeamDetails/TeamOverview';
import TeamActiveCompetitions from './parts/TeamDetails/TeamActiveCompetitions';
import TeamSquad from './parts/TeamDetails/TeamSquad';

export default function TeamDetails() {
    const { clubId } = useParams();
    const [clubData, setClubData] = useState([]);
    const [activeCompetitions, setActiveCompetitions] = useState([]);
    const [squadData, setSquadData] = useState([]);
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        axios
            .get('https://api.football-data.org/v2/teams/'+clubId , { headers: { 'X-AUTH-TOKEN' : process.env.REACT_APP_API_AUTH_TOKEN } })
            .then(res => {
                let data = res.data;
                setActiveCompetitions(data.activeCompetitions);
                setSquadData(data.squad);
                delete data.activeCompetitions;
                delete data.squad;
                setClubData(data);
                isLoading(false);
            })
            .catch(err => console.log(err));
    }, [ clubId ]);


    if(loading) {
        return (
            <Container fluid="lg" className="team-details">
                <Loader />
            </Container>
        )
    } else {
        return (
            <Container fluid="lg" className="team-details">
                <h2 style={{ textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold' }}>Team Details</h2>
                <TeamOverview data={clubData} />
                <Row>
                    <TeamActiveCompetitions data={activeCompetitions}/>
                    <TeamSquad data={squadData} />
                </Row>
            </Container>
        )
    }
}
