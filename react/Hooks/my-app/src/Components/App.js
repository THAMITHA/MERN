import React,{useState} from "react";
 
function App() {
  let [count,setCount]=useState(0);
  function increase(){
    setCount(count+1);
  }

  function decrease(){
    setCount(count-1);
  }
  return (
     <div class="container">
        <h1>{count}</h1>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
        
     </div>
  );
}

export default App;
