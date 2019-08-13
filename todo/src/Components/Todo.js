import React from "react";

const ToDo = props =>{
    console.log("list", props.list)

    return (
        <div>

            <p>{props.todo.item}</p>
            <button onClick = {props.complete}>
            Completed
            </button>  

        </div>
    )
}

export default ToDo;