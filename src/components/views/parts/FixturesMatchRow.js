import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export default function FixturesMatchRow(props) {
    const { utcDate, score, homeTeam, awayTeam, referees } = props.match;
    const homeTeamScore = () => {
        if(score.fullTime.homeTeam !== null)
            return `${score.fullTime.homeTeam} : `
        else
            return " vs "
    };

    const awayTeamScore = () => {
        if(score.fullTime.awayTeam !== null)
            return `${score.fullTime.awayTeam}`
        else
            return ""
    };

    return (
        <Card className="text-center">
        <Card.Header>{new Date(utcDate).toLocaleString()}</Card.Header>
        <Card.Body>
            <Card.Title>
                <Row>
                    <Col md={{ span: 3, offset: 2 }}>
                        {homeTeam.name}
                    </Col>
                    <Col md={{ span: 2 }}>
                        {homeTeamScore()} {awayTeamScore()}
                    </Col>
                    <Col md={{ span: 3 }}>
                        {awayTeam.name}
                    </Col>
                </Row>
            </Card.Title>
        </Card.Body>
        <Card.Footer className="text-muted">
            Referees: {referees.map((refere, i) => `${refere.name}`).join(', ')}
        </Card.Footer>
        </Card>
    )
}
