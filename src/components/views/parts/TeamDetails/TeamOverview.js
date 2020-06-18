import React from 'react';
import { Col, ListGroup, Row, Image } from 'react-bootstrap';

export default function TeamOverview(props) {
    const { name, crestUrl, address, phone, website, email, founded, clubColors, venue } = props.data;

    return (
        <Row className="team-overview">
            <Col xs={12} md={6}>
                <Image src={crestUrl} fluid />
            </Col>
            <Col xs={12} md={6}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        { name } ({ founded })
                    </ListGroup.Item>
                    <ListGroup.Item>{ venue }</ListGroup.Item>
                    <ListGroup.Item>{ clubColors }</ListGroup.Item>
                    <ListGroup.Item action href={ website }>{ website }</ListGroup.Item>
                    <ListGroup.Item>{ address }</ListGroup.Item>
                    <ListGroup.Item action href={`tel:${phone}` }>{ phone }</ListGroup.Item>
                    <ListGroup.Item action href={`mailto:${email}` }>{ email }</ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    )
}
