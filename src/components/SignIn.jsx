import React from 'react'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

export default function SignIn(props) {

    const nav = useNavigate()

    const[userName,setUserName]=useState('')
    const[password,setPassword]=useState('')

    const checkUser = () => {
        let result = props.users.find((users)=>(users.userName==userName && users.password==password));
        console.log(result);//מחזיר את האובייקט כולו
        if (userName=='') {  
          alert('insert user name!')
          return
        }
        else if (password=='') {
          alert('insert password!')
          return
        }
        else if(userName=='ADMIN' && password=='ADMIN'){
            nav('/banker');
        }
        else if(result==undefined){
          alert('user not found!')
          return
        }
        else{
            nav(`/costumer${result.userName}`);
            // nav(`/costumer${props.users[].fullName}`);צריך אינדקס כי מביא את כל האובייקט ולא רק יוזר ניים
        }
      }

  return (
    <div>
        <h1>SV-BANK</h1>
        <input onChange={(e)=>{setUserName(e.target.value)}} type="text" placeholder='User Name'/> <br />
        <input onChange={(e)=>{setPassword(e.target.value)}} type="text" placeholder='Password'/> <br />
        <Link to={'/signup'}><h4>Create new user</h4></Link> <br />
        <button onClick={checkUser}>ENTER</button>
    </div>
  )
}
