import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUser] = useState([]);

  const addUser = (userName, userAge) => {
    setUser((prevState) =>
      setUser([
        ...prevState,
        { name: userName, age: userAge, id: Math.random().toString() },
      ])
    );
  };

  return (
    <div>
      <AddUser onAddUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
