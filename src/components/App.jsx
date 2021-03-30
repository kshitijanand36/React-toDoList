import React, {useState} from "react";
import Item from "./item";

let cnt = 0;

function createItem(props){

    cnt++;

    return (
        <Item 
        key = {cnt}
        item = {props }
        />
    )
}

function App(){
    
    let [currWord , setCurrWord ] = useState("");
    let [newArr , setNewArr ] = useState(["nothing"]);


    function handleSubmit(){
    
        setNewArr(prevArr=>{
            prevArr.push(currWord);
            return prevArr;
        });
        setCurrWord("");   
        
    }

    function handleChange(event){
        setCurrWord(event.target.value);
    }

    // console.log(arr);
    
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value = {currWord} onChange = {handleChange} type="text" />
        <button onClick = {handleSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {newArr.map(createItem)}
        </ul>
      </div>
    </div>
  );
}

export default App;
