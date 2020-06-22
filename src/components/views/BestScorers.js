import React, { useEffect, useState }  from 'react';
import { GET_BEST_SCORERS_DATA, API_HEADER } from '../../ApiClient';
import { Row, Container, Table, Button, Col } from 'react-bootstrap';
import axios from 'axios';
import Loader from '../layouts/Loader';
import BestScorersRow from './parts/BestScorersRow';

export default function BestScorers() {
    const [bestScorers, setBestScorers] = useState([]);
    const [loading, isLoading] = useState(true);
    const [limit, setLimit] = useState(10);

    const defaultValuesOfRankingPosition = () => {
        localStorage.setItem("currentBestScorerPosition", 1);
        localStorage.setItem("currentBestScorerNumberOfGoals", 0);
    }

    useEffect(() => {
        axios
            .get(`${GET_BEST_SCORERS_DATA}?limit=${limit}` , API_HEADER)
            .then(res => {
                defaultValuesOfRankingPosition();
                let data = res.data;
                setBestScorers(data.scorers);
                isLoading(false);
            })
            .catch(err => console.log(err));
    }, [ limit ]);

    const loadMore = (e) => {
        e.preventDefault();
        isLoading(true);
        setLimit(limit+10);
    }

    if(loading) {
        return (
            <Container fluid="lg">
                <Loader />
            </Container>
        )
    } else {
        return (
            <Container fluid="lg" className="best-scorers">
                <Table responsive bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Club</th>
                            <th>Nationality</th>
                            <th>Goals</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bestScorers.map(bestScorer => <BestScorersRow key={bestScorer.player.id} player={bestScorer} />)}
                    </tbody>
                </Table>
                <Row>
                    <Col md={{ span: 3, offset: 5}}>
                        <Button onClick={loadMore}>
                            LOAD MORE
                        </Button> 
                    </Col>
                </Row>
            </Container>
        )
    }
}
