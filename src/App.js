import React, { useState } from "react";

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
    <div>
      <AddEvent onAddEvent={addUserEventHandler} />
      <UsersList users={usersList} />

    </div>
  );
}

export default App;
