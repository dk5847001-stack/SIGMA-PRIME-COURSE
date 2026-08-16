import { useState } from "react";
import "./Form.css";
export default function Form() {
    let [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            password: ""
        }
    );

    let handleInputData = (event) => {
        let inputName = event.target.name;
        let newValue = event.target.value;

        setFormData({ ...formData, [inputName]: newValue });
        console.log(inputName);
        console.log(newValue);
    };

    let handleFormSubmit = (event) => {
        console.log(formData)
        event.preventDefault();
        setFormData(
            {
                name: "",
                email: "",
                password: ""
            }
        )
    }
    return (
        <>
            <br /><h2>Registration Form</h2><br /><hr />
            <div className="section">
                <div className="left">
                    <div className="Form">
                        <form onSubmit={handleFormSubmit}>
                            <div className="formInput">
                                <label htmlFor="username">Name</label>
                                <input type="text" placeholder="Enter here your name..." id="username" value={formData.name} onChange={handleInputData} name="name" />

                                <label htmlFor="email">Email</label>
                                <input type="email" placeholder="Enter here your email" id="email" name="email" value={formData.email} onChange={handleInputData} />

                                <label htmlFor="password">Password</label>
                                <input type="password" placeholder="Enter here your password" id="password" name="password" value={formData.password} onChange={handleInputData} />
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
                {/* --------------- */}
                <div className="right">
                    <input type="text" value={formData.name} onChange={handleInputData} disabled/>
                    <input type="text" value={formData.email} onChange={handleInputData} disabled />
                    <input type="text" value={formData.password} onChange={handleInputData} disabled />
                </div>
            </div>
        </>
    )
}