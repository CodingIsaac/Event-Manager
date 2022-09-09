import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddEvent.module.css";
import Button from "../UI/Button";

const AddEvent = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const addEventHandler = (event) => {
    event.preventDefault();
    if (enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0) {
        return;
    }

    

    props.onAddEvent(enteredTitle, enteredDescription);
    setEnteredTitle("");
    setEnteredDescription("");
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addEventHandler}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
        <label htmlFor="title">Description</label>
        <input
          id="title"
          type="text"
          value={enteredDescription}
          onChange={descriptionChangeHandler}
        />
        <Button type="submit">Add Event</Button>
      </form>
    </Card>
  );
};

export default AddEvent;
