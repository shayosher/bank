import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Costumer from './components/Costumer';
import Banker from './components/Banker';

function App() {
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState();
  const [palceFalg, setPalceFalg] = useState(false);

  const addUser = (id, userName, password, money) => {
    setUsers([...users, { id, userName, password, money, expenses: [] }])
  }

  const addNewBuy = (index, theName, theCost) => {
    users[index].expenses.push({ theName, theCost })
    setUsers([...users])
  }

  const editUser = (userID, userName, password, money) => {
    users[editIndex].id = userID;
    users[editIndex].userName = userName;
    users[editIndex].password = password;
    users[editIndex].money = money;
    setUsers([...users])
  }

  const deleteExpenses = (i, roomIndex) => {
    let delExpenses = users[roomIndex].expenses.filter((val, index) => (i != index));
    users[roomIndex].expenses = [...delExpenses];
    setUsers([...users])
  }

  const deleteUser = (i) => {
    let delUser = users.filter((val, index) => (i != index));
    setUsers([...delUser]);
  }

  // const deleteUser2 = (i) => {
  //   users.splice(i-1, 1);
  //   setUsers([...users])
  // }

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<SignIn users={users} />} />
          <Route path='/signup' element={<SignUp addUser={addUser} users={users} />} />
          {users.map((val, index) => {
            return <Route path={`/costumer${val.userName}`} element={<Costumer val={val} index={index} addNewBuy={addNewBuy} setEditIndex={setEditIndex} key={index} setPalceFalg={setPalceFalg}/>} />
          })}
          <Route path='/edit' element={<SignUp addUser={editUser} users={users} palceFalg={palceFalg}/>} />
          <Route path='/banker' element={<Banker users={users} deleteExpenses={deleteExpenses} deleteUser={deleteUser} />} />
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
