import React, { useState, useReducer } from 'react';
import ToDo from "./Todo.js"


const ToDoList = (props) => {

    return (
      <div>
            {props.list.map (todo =>(
            <ToDo key={todo.id} todo={todo} list={props.list} complete={props.complete}/>
            ))}
       
      </div>
    );
  }
  
  export default ToDoList;
