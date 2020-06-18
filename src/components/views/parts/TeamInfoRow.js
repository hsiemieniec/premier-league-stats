import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function TeamInfoRow(props) {
    const club = props.club;

    return (
        <Row>
            <Col xs={4} md={6} xl={4}>
                <img
                    src={club.crestUrl}
                    height="40"
                    width="40"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                <p>{club.name}</p>
            </Col>
            <Col className="team-info-row-text" xs={4} md={6} xl={3}>
                Founded - {club.founded}
            </Col>
            <Col className="team-info-row-text" xs={4} md={6} xl={3}>
                Stadium - {club.venue}
            </Col>
            <Col xs={12} md={6} xl={2}>
                <Link to={`/team-details/${club.id}`}>
                    <Button>
                        More info
                    </Button>
                </Link>
            </Col>
        </Row>
    )
}
