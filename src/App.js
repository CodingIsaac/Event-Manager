import React, { useState, Fragment } from "react";

import AddEvent from "./components/Users/AddEvent";
import UsersList from "./components/Users/UsersList";

function App() {
 const [usersList, setUsersList] = useState([])

 const addUserEventHandler = (uTitle, uDescription) => {
  setUsersList((prevEventList) => {
    return[...prevEventList, {title: uTitle, description: uDescription, id:Math.random().toString() } ];
  } );

 }

  return (
    <Fragment>
      <AddEvent onAddEvent={addUserEventHandler} />
      <UsersList users={usersList} />

    </Fragment>
  );
}

export default App;
