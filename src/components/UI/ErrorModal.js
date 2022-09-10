import React, { Fragment }  from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <Fragment>
    <div className={classes.backdrop} >

    </div>
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.description}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm} >Noted</Button>
        </footer>
      </Card>
    </div>
    </Fragment>
  );
};
export default ErrorModal;
