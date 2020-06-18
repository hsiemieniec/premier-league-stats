import React from 'react';

export default function StandingPosition(props) {
    const { position, team, playedGames, won, draw, lost, points, goalsFor, goalsAgainst, goalDifference} = props.club;

    const shortName = () => {
        let nameArray = team.name.split(" ");
        let shortName = "";
        if(nameArray.length > 3){
            for(let i = 0; i < 3; i++) {
                shortName += nameArray[i][0];
            }
        } else if(nameArray.length > 2) {
            nameArray.map(word => shortName += word[0] )
        } else {
            shortName += nameArray[0].substr(0,3);
        }
        return shortName.toUpperCase();
    }

    shortName();

    return (
        <tr>
            <td>{position}</td>
            <td>
                <img
                    src={team.crestUrl}
                    className="d-inline-block align-top club-logo"
                    alt="React Bootstrap logo"
                />
                <span className="short">{shortName()}</span>
                <span className="long">{team.name}</span>
            </td>
            <td>{playedGames}</td>
            <td>{won}</td>
            <td>{lost}</td>
            <td>{draw}</td>
            <td className="gf">{goalsFor}</td>
            <td className="ga">{goalsAgainst}</td>
            <td>{goalDifference}</td>
            <td>{points}</td>
        </tr>
    )
}
