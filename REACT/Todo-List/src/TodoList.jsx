import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    const[Todo, setTodo] = useState([{task: "Simple Task", id: uuidv4()}]);
    const[newTodo, setNewTodo] = useState("");

    let addNewTask = ()=>{
        setTodo((prevTodo)=>{
            return [...Todo, {task: newTodo, id: uuidv4()}]
        })
        setNewTodo("")
    }

    let updateTodoValue = (event)=>{
        setNewTodo(event.target.value)
    }

    let deleteTodo = (id)=>{
        console.log("Task to be deleted!");
        console.log(id);
        setTodo(Todo.filter((todo)=> todo.id !=id))
    }

    let upperCaseAll = ()=>{
        setTodo((prevTodo)=>{
            return prevTodo.map((todo)=>{
                return{
                    ...todo,
                    task: todo.task.toUpperCase()
                }
            })
        })
    }

    let upperCaseOne = (id)=>{
        setTodo((prevTodo)=>{
            return prevTodo.map((todo)=>{
                if(id == todo.id){
                    return{
                        ...prevTodo,
                        task: todo.task.toUpperCase()
                    }
                }
                else{
                    return {
                        ...prevTodo,
                        task: todo.task
                    }
                }
            })
        })
        console.log("upper case one")
    }

    return(
        <>
        <input type="text" placeholder="Enter here your Task" value={newTodo} onChange={updateTodoValue} />
        <button onClick={addNewTask}>Add Task</button><hr /><br />

        <div className="task">
            <h2>Task Todo</h2>

            <ul>
                {
                    Todo.map((todo)=>{
                        return (<li key={todo.id}><span>{todo.task} &nbsp; 
                        <button style={{marginRight: "5px", marginBottom: "5px"}} onClick={()=> deleteTodo(todo.id)}>Delete</button>
                        <button onClick={()=> upperCaseOne(todo.id)}>upperCase one</button>
                        </span></li>)
                    })
                }
            </ul>
           
        </div>
        <br /><button onClick={upperCaseAll}>upperCaseAll</button>
        </>
    )
}