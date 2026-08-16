import { useState } from "react";
import "./CommentsForm.css";
export default function CommentsForm() {
    let [formData, setFormData] = useState(
        {
            username: "",
            remarks: "write here comments...",
            ratting: "5"
        }
    );

    let [comment, setComment] = useState([]);

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value }
        })
    };

    let handleSubmitForm = (event) => {
        event.preventDefault();
        console.log(formData);
        setComment((prevComment) => {
            return [...prevComment, formData]
        })
        setFormData(
            {
                username: "",
                remarks: "",
                ratting: ""
            }
        )
    }
    return (
        <div className="CommentsForm">
            <h2>Comments Form</h2><br />
            <form onSubmit={handleSubmitForm}>
                <input type="text" placeholder="username" value={formData.username} name="username" onChange={handleInputChange} /><br />
                <textarea name="remarks" value={formData.remarks} onChange={handleInputChange}>comments</textarea><br />
                <input type="number" placeholder="rating" min={1} max={5} value={formData.ratting} name="ratting" onChange={handleInputChange} /><br />
                <button>Add Comment</button>
            </form><br /><br />
            {comment && (
                <div className="comments">
                    <h3>All Comments</h3>
                <div className="section2">
                    {comment.map((comments, index) => (
                        <div className="remarks" key={index}>
                            <p>Username: {comments.username}</p>
                            <p>Comments: {comments.remarks}</p>
                            <p>Rating: {comments.ratting}</p>
                        </div>
                    ))}
                    </div>
                </div>
            )}
        </div>
    )
}