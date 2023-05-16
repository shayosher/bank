import React, { useState } from 'react'
import Detail from './Detail';

export default function Banker(props) {

  const [flag, setFlag] = useState(false);

  const [detailIndex, setDetailIndex] = useState();

  const show = () => {
    if (flag) {
      return <Detail detailIndex={detailIndex} users={props.users} deleteExpenses={props.deleteExpenses} deleteUser={props.deleteUser}  setFlag={setFlag}/>
    }
  }


  return (
    <div>
      <h1>Manager</h1>
      {props.users.map((val, index) => {
        return <h3>{val.id} {val.userName} <button id='detail' onClick={() => { setDetailIndex(index); setFlag(!flag) }}></button></h3>
      })}
      {show()}
    </div>
  )
}
