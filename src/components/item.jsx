import React from "react";

function Item(props){


    function handleClick(){

        props.deleteElement(props.id);

    }

    
    return (
        
        <li  onClick = {handleClick}>{props.item} </li>
    )
}

export default Item;