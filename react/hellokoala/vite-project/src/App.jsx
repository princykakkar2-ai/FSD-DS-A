import React from 'react'
import Student from './components/Student'

const App = () => {
  return (
    <div className="Card" style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center" ,padding:"20px",margin:"20px", backgroundColor:"lightblue",border:"2px solid blue",width:"100%",height:"100%",gap:"20px"}}>
      <Student name="John Doe" age={20} course="Computer Science" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlWP55YUGmmgiI04IMMyyGT0OnQVJSliHEbPX8YaUhg&s=10"/>
      <br/>
      <Student name="Jane Smith" age={22} course="Mathematics" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZTRcCp5iC8oydTxw48RqUdue4uHyNKbMN727VyOmIQ&s=10"/>
      <br/>
      <Student name="Alice Johnson" age={19} course="Physics" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSePXIRNj0inrgZH8wfrl-yXcSOCb1ffDWteT7_Ivn0tg&s=10"/>
      <br/>
    </div>
  )
}

export default App