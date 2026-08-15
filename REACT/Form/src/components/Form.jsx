import { useState } from "react"
import "./Form.css"
export default function Form() {
    let [formData, setFormData] = useState(
        {
            fullName: "",
            email: "",
            password: ""
        }
    )

    let inputHandler = (event) => {
        let fildName = event.target.name;
        let newValue = event.target.value;

        setFormData((currData) => {
            return {
                ...currData, [fildName]: newValue
            }
        })
    };

    let handleFormSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            fullName: "",
            email: "",
            password: ""
        })
    }

    return (
        <div className="Form">
            <h1>Form</h1><br />
            <div className="section">
                <div className="left">
                    <h2>Form Data</h2><br />
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor="username">Name </label><br />
                        <input type="text" placeholder="Enter your name here..." value={formData.fullName} onChange={inputHandler} id="username" name="fullName" /><br /><br />

                        <label htmlFor="useremail">Email </label><br />
                        <input type="email" placeholder="Enter email address..." value={formData.email} onChange={inputHandler} id="useremail" name="email" /><br /><br />

                        <label htmlFor="password">Password </label><br />
                        <input type="password" placeholder="Enter email address..." value={formData.password} onChange={inputHandler} id="password" name="password" /><br /><br />
                        <button>Submit</button>
                    </form>
                </div>
                {/* ---------------------------- */}
                <div className="right form-preview-card">
    <div className="preview-header">
        <div>
            <span className="preview-badge">LIVE PREVIEW</span>
            <h2>Form Value</h2>
            <p>Currently entered information</p>
        </div>

        <div className="preview-icon">
            ✨
        </div>
    </div>

    <div className="preview-fields">

        <div className="preview-field">
            <label>Full Name</label>
            <div className="preview-input">
                <span className="field-icon">👤</span>
                <input
                    type="text"
                    value={formData.fullName}
                    name="fullName"
                    readOnly
                />
            </div>
        </div>

        <div className="preview-field">
            <label>Email Address</label>
            <div className="preview-input">
                <span className="field-icon">✉️</span>
                <input
                    type="email"
                    value={formData.email}
                    name="email"
                    readOnly
                />
            </div>
        </div>

        <div className="preview-field">
            <label>Password</label>
            <div className="preview-input">
                <span className="field-icon">🔐</span>
                <input
                    type="password"
                    value={formData.password}
                    name="password"
                    readOnly
                />
            </div>
        </div>

    </div>

    <div className="preview-footer">
        <span className="status-dot"></span>
        <span>Form data synchronized</span>
    </div>
</div>
            </div>
        </div>
    )
}