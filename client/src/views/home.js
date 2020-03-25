import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

import PetList from '../components/PetList';
export default props => {
	const [pets, setPets] = useState([]);
	const [loaded, setLoaded] = useState(false);    
	useEffect(()=>{
		axios.get('http://localhost:8000/api/getAllPets')
			.then(res=>{
				setPets(res.data);
				setLoaded(true);
			})
			.catch(err => console.log("Axios GET error:", err));
	},[])
	return (
		<div>
			<h1>Pet Shelter</h1>
			<Link to='/pets/new'> add a pet to the shelter </Link>
			<p> These pets are looking for a good home</p>
			{loaded && <PetList pets={pets}/>}
		</div>
	)
}