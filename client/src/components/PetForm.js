import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

export default () => {
    //keep track of what is being typed via useState hook
    const [name, setName] = useState(""); 
    const [type, setType] = useState("");
    const [skill0, setSkill0] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [errors, setErrors] = useState({});
    // const [likes, setLikes] = useState("");
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/createPet', {
            name: name,
            type: type,
            skills: [skill0, skill1, skill2],
            // likes,
            description: description,
        })
            .then(
                res => {
                    console.log(res.data);
                    if(res.data.errors){
                        setErrors(res.data.errors);
                    } else {
                        navigate("/");
                    }
                }
            )
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label><br/>
                <input type="text" onChange = {(e)=>setName(e.target.value)}/>
                <p>{ errors.name ? errors.name.message : ""  }  </p>
            </p>
            <p>
                <label>Type</label><br/>
                <input type="text" onChange = {(e)=>setType(e.target.value)}/>
                <p>{ errors.type ? errors.type.message : ""  }  </p>
            </p>
            <p>
                <label>Skill 1</label><br/>
                <input type="text" onChange = {(e)=>setSkill0(e.target.value)}/>
            </p>
            <p>
                <label>Skill 2</label><br/>
                <input type="text" onChange = {(e)=>setSkill1(e.target.value)}/>
            </p>
            <p>
                <label>Skill 3</label><br/>
                <input type="text" onChange = {(e)=>setSkill2(e.target.value)}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="textArea" onChange = {(e)=>setDescription(e.target.value)}/>
                <p>{ errors.description ? errors.description.message : ""  }  </p>
            </p>
            <input type="submit"/>
        </form>
    )
}