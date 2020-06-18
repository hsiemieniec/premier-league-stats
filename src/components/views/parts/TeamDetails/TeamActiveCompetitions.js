import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';

export default function TeamActiveCompetitions(props) {
    const data = props.data
    return (
        <Col xs={12} md={3} className="team-details-active-competitions">
            <h4 style={{ textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold' }}>active competitions</h4>
            <ListGroup variant="flush">
                {data.map(competition => <ListGroup.Item>{competition.name}</ListGroup.Item>)}
            </ListGroup>
        </Col>
    )
}
