import React, { useEffect, useState } from 'react'
import axios from 'axios';
import EditPet from '../components/EditPet';
import { redirectTo, Redirect } from '@reach/router';
export default props => {
    const [pet, setPet] = useState([]);
    const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		axios.get("http://localhost:8000/api/getPet/" + props.id)
			.then(res => {
				setPet(res.data);
				setLoaded(true);
			})
			.catch(err => console.log(err));
		}, []);

    return (
        <div>
           {/* <EditPet />
           <hr/> */}
           {loaded && <EditPet pet={pet} />}
           {/* {<Redirect to="/" />} */}
        </div>
    )
}