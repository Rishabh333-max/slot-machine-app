import Color from "color";
import React from "react"
import SlotM from "./SlotM";


const App=()=>{
return(
    <>
    <h1 className="heading_style">🎰 Welcome to <span style={{fontWeight:"bold"}}>Slot Machine Game</span>🎰</h1>
   <div className="slotmachine">
    <SlotM x="😄" y="😄" z="😄"/>
 <hr style={{height:"10px" ,Color:"black"}}/>
    <SlotM x="🎅" y="❤️" z="💔"/>
    <hr style={{height:"10px" ,Color:"black"}}/>
    <SlotM x="💔" y="❤️" z="💔"/>
    <hr style={{height:"10px" ,Color:"black"}}/>
    <SlotM x="😆" y="😆" z="😆"/>
    <hr style={{height:"10px" ,Color:"black"}}/>
    <SlotM x="🍎" y="🍎" z="🍎"/>
    <hr style={{height:"10px" ,Color:"black"}}/>
    </div>
    </>
  
)

}
export default App;