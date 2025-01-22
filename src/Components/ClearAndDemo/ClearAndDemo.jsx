import { useState } from "react";

function ClearAndDemo({onClear, handleLoadDemo}){
  
  return(
    <div className="clear-and-demo-wrapper">
       <button className="clearBtn" onClick={onClear}>Clear Resume</button>
       <button className="load-demoBtn" onClick={handleLoadDemo}>Load Demo</button>
    </div>
  )
}

export default ClearAndDemo;