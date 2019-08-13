import React, { useState, useReducer } from 'react';
import {initialState, ToDoReducer} from "../Reducers/Reducers.js"
import Form from "./Form.js"
import ToDoList from "./TodoList.js"

// let List=[]

function Group() {
    const [list, setList] = useState([])
    const [task, setTask] = useState(list)

    console.log("task", task)
    

    const [state, dispatch] = useReducer(ToDoReducer, initialState)


    
    const add = () =>{
     dispatch({ type: "Toggle_Add", payload: task})
     console.log("state", state)
     setList([...list, state])
     console.log("add list", list)
    }

    const complete = ()=>{
        dispatch({ type: "Toggle_Complete"})
        list.map(todo => {if(todo.item===state.item){
            todo.completed = !todo.completed
        }

        })
    }


    const clear=()=>{
        dispatch({ type: "Toggle_Clear"})
        setList(list.filter(todo => todo.completed ===false))

    }

    // toggleTodo = id =>{
    //     this.setState({
    //       List: this.state.List.map( todo => {
    //         if (todo.id === id ){
    //           return {
    //             ...todo,
    //             completed: !todo.completed
    //           }
    //         } else{
    //           return todo;
    //         }
    //       }
    //       )
    
    //     })
    //   }
  
    

  
    return (
      <div>
          <p>Task: </p>
          <Form list={list} item={state.item} add={add} task={task} setTask={setTask}/>
          <ToDoList complete={complete} data={state} list={list}/>
          <button onClick = {clear}>
            Clear 
            </button>
      </div>
    );
  }
  
  export default Group;