import React from 'react';
import { Spinner, Row } from 'react-bootstrap';

export default function Loader() {
    return (
        <Row>
            <Spinner style={{ 'margin': '50px auto' }} animation="border" />
        </Row>
    )
}
