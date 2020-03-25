import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
export default props => {
	const [a_pet, setPet] = useState({skills:[]})
	useEffect(() => {
		axios.get("http://localhost:8000/api/getPet/" + props.id)
			.then(res => setPet({
				...res.data
			}))
		}, []);
	const remove = () => {
		axios.delete("http://localhost:8000/api/deletePet/" + a_pet._id, {
		})
		.then(res => {
			navigate("/")
		}).catch(err => console.log(err));
	}
	return (
		<div>
			<div>

			<h1>Pet Shelter</h1>
			<p>Details about: {a_pet.name}</p>

					<p>Pet Type: <i>{a_pet.type}</i></p>
					<p>Description: <i>{a_pet.description}</i></p>

					<p>Skills: {a_pet.skills.map((skill, idx) => {
						return <span class={"skill"}>{skill}</span>
					})}</p>
		</div>
		<div>          
			<button onClick={ e => remove(a_pet._id) }>
				Adopt Pet
			</button>
		</div>
		</div>
	)
}