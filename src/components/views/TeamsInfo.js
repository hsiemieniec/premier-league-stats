import React, { useState, useEffect } from 'react';
import { GET_TEAMS_INFO_DATA, API_HEADER } from '../../ApiClient';
import axios from 'axios';
import { Container, Row, Form, Col } from 'react-bootstrap';
import TeamInfoRow from './parts/TeamInfoRow';
import Loader from '../layouts/Loader';

export default function TeamsInfo() {
    const [clubs, setClubs] = useState([]);
    const [loading, isLoading] = useState(true);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [selectedSeason, setSelectedSeason] = useState(2019);

    useEffect(() => {
        axios
            .get(`${GET_TEAMS_INFO_DATA}?season=${selectedSeason}`, API_HEADER)
            .then(res => {
                let data = res.data;
                setStartDate(data.season.startDate);
                setEndDate(data.season.endDate);
                setClubs(data.teams);
                isLoading(false);
            })
            .catch(err => console.log(err));
    },[ selectedSeason ]);


    const handleChange = (e) => {
        e.preventDefault();
        setSelectedSeason(e.target.value);
    };

    if(loading) {
        return (
            <Container fluid="lg">
                <Loader />
            </Container>
        )
    } else {
        return (
            <Container fluid="lg" className="teams-info">
                <Row>
                    <Col md={8}>
                        <h3>Premier league {startDate.split("-")[0]}/{endDate.split("-")[0]}</h3>
                    </Col>
                    <Col md={{ span: 2, offset: 2 }}>
                        <Form.Group
                            onChange={handleChange} 
                            controlId="seasonSelect"
                        >
                            <Form.Control as="select">
                                <option value="2019">2019/2020</option>
                                <option value="2018">2018/2019</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                {clubs.map(club => <TeamInfoRow key={club.id} club={club} />)}
            </Container>
        )
    }
}
