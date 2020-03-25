import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const EditPet = props => {
	//keep track of what is being typed via useState hook
	const [name, setName] = useState(props.pet.name); 
	const [type, setType] = useState(props.pet.type);
	const [skill0, setSkill0] = useState(props.pet.skills[0]);
	const [skill1, setSkill1] = useState(props.pet.skills[1]);
	const [skill2, setSkill2] = useState(props.pet.skills[2]);
	const [description, setDescription] = useState(props.pet.description);
	//handler when the form is submitted
	const onSubmitHandler = e => {
		//prevent default behavior of the submit
		e.preventDefault();
		axios.put("http://localhost:8000/api/updatePet/" + props.pet._id, {
			name: name,
			type: type,
			skills: [skill0, skill1, skill2],
			description: description,
		})
			.then(
				navigate("/")
			)
			.catch(err=>console.log(err))
	}

	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<p>
					<label>Name</label><br/>
					<input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
				</p>
				<p>
					<label>Type</label><br/>
					<input type="text" value={type}  onChange={(e)=>setType(e.target.value)}/>
				</p>
				<p>
					<label>Skill 1</label><br/>
					<input type="text" value={skill0} onChange={(e)=>setSkill0(e.target.value)}/>
				</p>
				<p>
					<label>Skill 2</label><br/>
					<input type="text" value={skill1} onChange={(e)=>setSkill1(e.target.value)}/>
				</p>
				<p>
					<label>Skill 3</label><br/>
					<input type="text" value={skill2} onChange={(e)=>setSkill2(e.target.value)}/>
				</p>
				<p>
					<label>Description</label><br/>
					<input type="textArea" value={description} onChange={(e)=>setDescription(e.target.value)}/>
				</p>
				<input type="submit"/>
			</form>
		</div>
	)
}
export default EditPet;