import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp(props) {

    const nav = useNavigate()

    const [userID, setUserID] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [conPassword, setConPassword] = useState('')
    const [money, setMoney] = useState(0)

    const register = () => {
        if (userID.length != 9) {
            alert('insert 9 digits user id!')
            return
        }
        for (let i = 0; i < userID.length; i++) {
            if (userID[i] < '0' || userID[i] > '9') {
                alert('user ID must be digits!')
                return
            }
        }
        if (userName.length < 4) {
            alert('user name must be 4 letters minimum!')
            return
        }
        else if (password.length < 6) {
            alert('password must be 6 letters minimum!')
            return
        }
        else if (password != conPassword) {
            alert('passwords not the same!')
            return
        }
        if (money < 0 || money > 1000000) {
            alert('enter money between 0 to 1,000,000!')
            return
        }
        else {
            props.addUser(userID, userName, password, money);
            // {props.users.map((val) => {
            //     return <Link to={`/costumer${val.fullName}`}></Link> 
            // })}
            nav('/');
        }
    }


    return (
        <div>
            <h1>REGISTER</h1>
            <input id='a' onChange={(e) => { setUserID(e.target.value) }} type="text" placeholder='User Id' /> <br />
            <input id='b' onChange={(e) => { setUserName(e.target.value) }} type="text" placeholder='User Name' /> <br />
            <input id='c' onChange={(e) => { setPassword(e.target.value) }} type="text" placeholder='Password' /> <br />
            <input id='d' onChange={(e) => { setConPassword(e.target.value) }} type="text" placeholder='Confirm password' /> <br />
            <input id='e' onChange={(e) => { setMoney(e.target.value) }} type="text" placeholder='Enter money' /> <br /><br />
            <button onClick={register}>ENTER</button>
        </div>
    )
}
