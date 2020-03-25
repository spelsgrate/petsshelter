import React from 'react';
import { Link } from '@reach/router';
const PetList = props => {
    return(
        <table>
            <tr>
                <th>Name </th>
                <th>Type </th>
                <th>Actions </th>
            </tr>
            {props.pets.map((pet, idx) => {
                return <tr key={idx}>
                    <td>{pet.name}</td>
                    <td>{pet.type}</td>
                    <td>
                        <Link to={"/pets/" + pet._id}> details </Link>
                        |
                        <Link to={"/pets/" + pet._id + "/edit"}> edit </Link>
                    </td>
                </tr>
            })}
        </table>
    );
}
export default PetList;