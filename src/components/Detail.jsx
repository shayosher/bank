import React from 'react'

export default function Detail(props) {

    return (
        <div>
            {props.users[props.detailIndex].expenses.map((val, index) => {
                return <h3>{val.theName} {val.theCost} <button onClick={() => { props.deleteExpenses(index,props.detailIndex) }}>X</button> </h3>
            })}
            <button onClick={()=>{props.deleteUser(props.detailIndex);props.setFlag(false)}}></button>
        </div>
    )
}
