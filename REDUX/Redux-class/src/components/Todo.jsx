import { useSelector, useDispatch } from "react-redux";
import Form from "./Form";
import {
    deleteTodo,
    markAsDone,
} from "../features/todo/todoSlice";

export default function Todo() {
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todos);

    const handlerDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    const handlerMarkAsDone = (id) => {
        dispatch(markAsDone(id));
    };

    return (
        <div>
            <h3 className="text-center text-3xl font-semibold text-slate-100">
                Todo List
            </h3>

            <br />

            <Form />

            <br />

            <ul>
                {todos.map((todo) => (
                    <li
                        className="flex justify-center items-center text-center gap-4 mb-2 border-1 w-100 rounded-full p-2 m-auto"
                        key={todo.id}
                    >
                        <b
                            className={
                                todo.isDone
                                    ? "line-through text-green-400"
                                    : ""
                            }
                        >
                            {todo.task}
                        </b>

                        <button
                            onClick={() => handlerDeleteTodo(todo.id)}
                            className="border-1 p-2 text-xs rounded-full bg-red-900 hover:bg-red-950 hover:cursor-pointer"
                        >
                            Delete Todo
                        </button>

                        <button
                            onClick={() => handlerMarkAsDone(todo.id)}
                            className="border-1 p-2 rounded-full bg-green-900 hover:bg-green-950 hover:cursor-pointer text-xs"
                        >
                            {todo.isDone ? "Completed" : "Mark As Done"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}