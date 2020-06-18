import React from 'react';
import { Col, Table } from 'react-bootstrap';
import TeamSquadRow from './TeamSquadRow';

export default function TeamSquad(props) {
    const data = props.data;
    return (
        <Col xs={12} md={9} className="team-details-squad-list">
            <Table striped bordered responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Birth</th>
                        <th>Nationality</th>
                    </tr>
                </thead>
                <tbody>
                    {data.filter(player => player.role !== "COACH").map(player => <TeamSquadRow key={player.id} player={player} />)}
                </tbody>
            </Table>
        </Col>
    )
}
