import "../css/Form.css"
import { useState } from "react"
export default function Form2(){
const [form, setForm] = useState({
    name: "",
    email: "",
});

function handleChange(event){
    setForm({
        ...form,
        [event.target.name]: event.target.value,
    });
}
function handleSubmit(event){
    event.preventDefault();
    console.log(form);
};

    return(
        <div className="Form2">
            <form >
                <input type="text" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} /><br /><br />
                <input type="email" name="email" placeholder="Enter your email" value={form.email} onChange={handleChange} /><br /><br />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form><br /><hr />
            <div className="LivePrivew">
                <h2>Live Preview</h2>
                <p>Name: {form.name}</p>
                <p>Email: {form.email}</p>
            </div>
        </div>
    )
}