import React from 'react'


const Student = (props) => {
  return (
    <div style={{padding:"20px",backgroundColor:"lightgray",border:"2px solid red",width:"300px",height:"300px"}}>
        <h1  style={{color:"red"}}>Student Info</h1>
        <img src={props.image} alt="Student" style={{width:"100px",height:"100px"}}/>
        <h3>Name: {props.name}</h3>
        <h3>Age: {props.age}</h3>
        <h3>Course: {props.course}</h3>
    </div>
  )
}

export default Student