import React, { useState, useReducer } from 'react';



const Form = (props) =>{

    const handleChanges = e => {
        props.setTask(e.target.value);
      };

    const submitTask = e =>{
        e.preventDefault();
    };


        return(
            <form onSubmit={submitTask}>

                <input type="text" value={props.task} name="task" placeholder="...todo" onChange={handleChanges}/>
                <button onClick={props.add}>Add Todo</button> 
                
            
            </form>
        )
    
}

export default Form;