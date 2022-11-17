// import React,{useState} from 'react';
// import AddUser from './components/Users/AddUser';
// import UserList from './components/Users/UsersList';


// function App() {
//   const [usersList, setUsersList] = useState([]);

//   const addUserHandler = (uName, uAge) => {
//     setUsersList((prev) => {
//       return [...prev, {name: uName, age: uAge, id:Math.random().toString() },];
//     });
//   };


//   return (
//     <div>
//       <AddUser onAddUser={addUserHandler}/>
//       <UserList users={[usersList]}/>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;