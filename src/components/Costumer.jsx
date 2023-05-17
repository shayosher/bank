import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Costumer(props) {

    const nav = useNavigate()

    const [name, setName] = useState('')
    const [cost, setCost] = useState('')

    const [flag, setFlag] = useState(false);

    const show = () => {
        if (flag) {
            return <div>
                <input onChange={(e) => { setName(e.target.value) }} type="text" placeholder='name' />
                <input onChange={(e) => { setCost(e.target.value) }} type="number" placeholder='cost' />
                <button onClick={() => { props.addNewBuy(props.index, name, cost); setFlag(!flag)}}>BUY</button>
            </div>
        }
    }

    return (
        <div>
            <h1>Welcome</h1>
            <h1>{props.val.userName}</h1>
            <div>
                <button onClick={()=>{alert(`your money: ${props.val.money}`)}}>Balance</button>
                <button onClick={()=>{setFlag(!flag)}}>ACTION</button>
            </div>
            <div>
                <Link to={'/'}><button>EXIT</button></Link>
                <button onClick={() => {nav('/edit');props.setEditIndex(props.index);props.setPalceFalg(true)}}>EDIT</button>
            </div>
            <br />
            {show()}
        </div>
    )
}
