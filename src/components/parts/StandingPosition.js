import React from 'react';

export default function StandingPosition(props) {
    const { position, team, playedGames, won, draw, lost, points, goalsFor, goalsAgainst, goalDifference} = props.club;
    return (
        <tr>
            <td>{position}</td>
            <td>
                <img
                    src={team.crestUrl}
                    height="40"
                    width="40"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                {team.name}
            </td>
            <td>{playedGames}</td>
            <td>{won}</td>
            <td>{lost}</td>
            <td>{draw}</td>
            <td>{goalsFor}</td>
            <td>{goalsAgainst}</td>
            <td>{goalDifference}</td>
            <td>{points}</td>
        </tr>
    )
}
