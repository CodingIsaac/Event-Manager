import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddEvent.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal"

const AddEvent = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [error, setErrorMessage] = useState();

  const addEventHandler = (event) => {
    event.preventDefault();
    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0
    ) {
        setErrorMessage({
            title:"Invalid Input",
            errorDescription: "Kindly update the title and the description of your event"
        })
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

  const errorMessageHandler = () => {
    setErrorMessage(null);
  }

  return (
    <div>
   {error && <ErrorModal title = {error.title} description={error.errorDescription} onConfirm={errorMessageHandler} /> }
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
    </div>
  );
};

export default AddEvent;
