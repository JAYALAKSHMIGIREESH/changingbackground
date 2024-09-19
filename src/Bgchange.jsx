
import React from "react"


function Bgchange(){
  const redChange =()=>{
    var body = document.body
    body.style.backgroundColor = "red"
  }
  const orangeChange =()=>{
    var body = document.body
    body.style.backgroundColor = "orange"
  }
  const yellowChange =()=>{
    var body = document.body
    body.style.backgroundColor = "yellow"
  }
  const greenChange =()=>{
    var body = document.body
    body.style.backgroundColor = "green"
  }
  const blueChange =()=>{
    var body = document.body
    body.style.backgroundColor = "blue"
  }
 
 
 
  
  
  return(
    
    <>
    
    
      <div className="container">
        
        <div  className="colors">
        <h1 className='heading'>Changing Background!!!!</h1>
          <button onClick={redChange}  style={{backgroundColor:'red'}} className="btn  "></button>
          <button onClick={orangeChange} style={{backgroundColor:'orange'}} className="btn "></button>
          <button onClick={yellowChange} style={{backgroundColor:'yellow'}} className="btn"></button>
          <button onClick={greenChange} style={{backgroundColor:'green'}} className="btn  "></button>
          <button onClick={blueChange} style={{backgroundColor:'blue'}} className="btn  "></button>
        </div>
      </div>
    </>
   
  )
}
export default Bgchange
