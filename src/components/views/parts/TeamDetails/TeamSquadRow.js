import React from 'react'

export default function TeamSquadRow(props) {
    const { name, position, dateOfBirth, nationality, shirtNumber } = props.player;
    let date = new Date(dateOfBirth);

    return (
        <tr>
            <td> {shirtNumber ? shirtNumber : "-"} </td>
            <td> {name}  </td>
            <td> {position} </td>
            <td> {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()} </td>
            <td> {nationality} </td>
        </tr>
    )
}
