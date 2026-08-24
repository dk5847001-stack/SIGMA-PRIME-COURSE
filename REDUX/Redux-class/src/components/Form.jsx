import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function Form(){
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    let inputHandler = (event) =>{
        let newTask = event.target.value;
        setTask(newTask);
    };

    let handlerSubmitForm = (event) => {
        event.preventDefault();
        dispatch(addTodo(task));
        console.log(task);
        setTask("")
    };

    return(
        <div>
            <form className="flex flex-col justify-center items-center" onSubmit={handlerSubmitForm} action="/home">
                <input className="p-3 border-1 w-100 mb-2 bg-slate-600 outline-1 outline-offset-3 rounded" value={task} type="text" onChange={inputHandler} placeholder="Add task here..."/>
                <button className="p-3 border-1 w-100 bg-slate-400 rounded-full hover:cursor-pointer hover:bg-slate-500 hover:outline-1">Add Task</button>
            </form>
        </div>
    )
}