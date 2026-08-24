import Todo from "../components/Todo";
import { Provider } from "react-redux"
import { store } from "../app/store";
export default function Home() {
    return (
        <div>
            <h2 className="font-bold text-6xl text-center">Hello, welcome to home page.</h2><br /><hr /><br />
            <Provider store={store}>
                <Todo />
            </Provider>
        </div>
    )
}