import React, { useState } from "react";
import Card from "../UI/Card";
import  classes from "./AddEvent.module.css"
import Button from "../UI/Button";


const AddEvent = props => {
   const [enteredTitle, setEnteredTitle] = useState('');
   const [enteredDescription, setEnteredDescription] = useState('');

    
        const addEventHandler = (event) => {
            event.preventDefault();
            console.log(enteredTitle, enteredDescription)
        };

        const titleChangeHandler = (event) => {
            setEnteredTitle(event.target.value);

        } 

        const descriptionChangeHandler = (event) => {
            setEnteredDescription(event.target.value);

        } 

    

    return (
        <Card className = {classes.input} >
    <form onSubmit={addEventHandler} >
        <label htmlFor="title" >Title</label>
        <input id="title" type="text" onChange={titleChangeHandler} />
        <label htmlFor="title" >Description</label>
        <input id="title" type="text" onChange={descriptionChangeHandler} />
        <Button type="submit">Add Event</Button>
    </form>
    </Card>
)}

export default AddEvent