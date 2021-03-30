import React, {useState} from "react";
import Item from "./item";


function App(){
    
    let [currWord , setCurrWord ] = useState("");
    let [newArr , setNewArr ] = useState(["Type anything and click on Add!"]);

    function deleteElement(id){

        setNewArr(prevArr=>{
            return prevArr.filter((newArr,idx) =>{

                return idx!==id;
            })
        })
    }

    function handleSubmit(){
    
        setNewArr(prevArr=>{
            return [...prevArr, currWord];
        });
        setCurrWord("");   
        
    }

    function handleChange(event){
        setCurrWord(event.target.value);
    }
    
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
          {newArr.map((props, idx) =>
             (
                <Item 
                    key = {idx}
                    id = {idx}
                    item = {props }
                    deleteElement = {deleteElement}
                />
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
