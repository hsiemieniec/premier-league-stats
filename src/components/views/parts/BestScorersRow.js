import React from 'react'

export default function BestScorersRow(props) {
    const { player, team, numberOfGoals } = props.player;

    const positionInRanking = () => {
        if(Number(localStorage.getItem("currentBestScorerNumberOfGoals")) === 0) {
            localStorage.setItem("currentBestScorerNumberOfGoals", numberOfGoals);
            return localStorage.getItem("currentBestScorerPosition");
        } else {
            if(Number(localStorage.getItem("currentBestScorerNumberOfGoals")) === numberOfGoals) {
                return localStorage.getItem("currentBestScorerPosition");
            } else {
                localStorage.setItem("currentBestScorerNumberOfGoals", numberOfGoals);
                localStorage.setItem("currentBestScorerPosition", Number(localStorage.getItem("currentBestScorerPosition")) + 1);
                return localStorage.getItem("currentBestScorerPosition");
            }
        }
    }

    return (
        <tr>
            <td>{positionInRanking()}</td>
            <td>{player.name}</td>
            <td>{team.name}</td>
            <td>{player.nationality}</td>
            <td>{numberOfGoals}</td>
        </tr>
    )
}
