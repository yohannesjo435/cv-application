import { useState } from "react";

function ClearAndDemo({onClear}){
  
  return(
    <div className="clear-and-demo-wrapper">
       <button className="clearBtn" onClick={onClear}>Clear Resume</button>
       <button className="load-demoBtn">Load Demo</button>
    </div>
  )
}

export default ClearAndDemo;