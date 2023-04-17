import { useState } from "react";
import './style/In.css';
export default function Increase(){
   const [count,setCount] = useState(0);
   const [count1,setCount1] = useState(0);
   const [count2,setCount2] = useState(0);
  const Increment = () =>{
      setCount(count+1)
  }
  const Decrement = () =>{
    setCount1(count1-1)
}
const Reset = () =>{
  setCount(count*0)
  setCount1(count1*0)
}
   return(
    <>
    <div id="s">
   {count} <button onClick={Increment}>+</button><br/>
   {count1} <button onClick={Decrement}>-</button><br/>
    <button onClick={Reset}>Reset</button><br/>
  <br/>
  </div>
    </>
   );
}