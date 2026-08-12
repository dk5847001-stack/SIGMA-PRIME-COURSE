import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    const[Todo, setTodo] = useState([{task: "Simple Task", id: uuidv4()}]);
    const[newTodo, setNewTodo] = useState("");

    let addNewTask = ()=>{
        setTodo((prevTodo)=>{
            return [...Todo, {task: newTodo, isDone: false, id: uuidv4()}]
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
                        ...todo,
                        task: todo.task.toUpperCase()
                    }
                }
                else{
                    return {
                        ...todo,
                        task: todo.task
                    }
                }
            })
        })
        console.log("upper case one")
    }

    let markAsDone = (id)=>{
        setTodo((prevTodo)=>{
            return prevTodo.map((todo)=>{
                if(todo.id==id){
                    return{
                        ...todo,
                        isDone: true
                    }
                }else{
                    return{
                        ...todo
                    }
                }
            })
        })
        console.log("clicke mark as done!")
    }


    return(
        <>
        <form onSubmit={addNewTask}>
        <input type="text" placeholder="Enter here your Task" value={newTodo} onChange={updateTodoValue} />
        <button type="submit">Add Task</button><hr /><br />
        </form>

        <div className="task">
            <h2>Task Todo</h2>

            <ul>
                {
                    Todo.map((todo)=>{
                        return (<li style={{backgroundColor: todo.isDone ? "red" : "transparent", textDecoration: todo.isDone? "line-through" : "none", marginBottom: "5px"}} key={todo.id}><span>{todo.task} &nbsp; 
                        <button style={{marginRight: "5px", marginBottom: "5px"}} onClick={()=> deleteTodo(todo.id)}>Delete</button>
                        <button style={{marginRight: "5px", marginBottom: "5px"}} onClick={()=> upperCaseOne(todo.id)}>upperCase one</button>
                        <button style={{marginRight: "5px", marginBottom: "5px", backgroundColor: "green", color: "#fff", fontWeight: "bold"}} onClick={()=> markAsDone(todo.id)}>Done</button>
                        </span></li>)
                    })
                }
            </ul>
           
        </div>
        <br /><button onClick={upperCaseAll}>upperCaseAll</button>
        </>
    )
}