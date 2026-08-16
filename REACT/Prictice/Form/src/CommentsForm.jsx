import { useState } from "react";
import "./CommentsForm.css";
import { Formik, Form, Field, useFormik } from 'formik';

const validate = (values) => {
    const errors = {};
    if (!values.username) {
        errors.username = "Username cannot be empty!"
    }
    return errors;
};
export default function CommentsForm() {
    // let [formData, setFormData] = useState(
    //     {
    //         username: "",
    //         remarks: "write here comments...",
    //         ratting: "5"
    //     }
    // );

    const formik = useFormik({
        initialValues: {
            username: '',
            remarks: '',
            ratting: '',
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            setComment((prev) => [...prev, values]);

            resetForm();
        },
    });

    let [comment, setComment] = useState([]);

    // let handleInputChange = (event) => {
    //     setFormData((currData) => {
    //         return { ...currData, [event.target.name]: event.target.value }
    //     })
    // };

    // let handleSubmitForm = (event) => {
    //     event.preventDefault();
    //     console.log(formData);
    //     setComment((prevComment) => {
    //         return [...prevComment, formData]
    //     })
    //     setFormData(
    //         {
    //             username: "",
    //             remarks: "",
    //             ratting: ""
    //         }
    //     )
    // }
    return (
        <div className="CommentsForm">
            <h2>Comments Form</h2><br />
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="usernames">Username</label>
                <input type="text" id="usernames" placeholder="username" value={formik.values.username} name="username" onChange={formik.handleChange} /><br />
                {formik.errors.username ? (
                    <p>{formik.errors.username}</p>
                ) : null}
                <label htmlFor="remark">Add Remarks</label>
                <textarea
                    name="remarks"
                    id="remark"
                    value={formik.values.remarks}
                    onChange={formik.handleChange}
                />
                <label htmlFor="rattings">Ratting</label>
                <input type="number" id="rattings" placeholder="rating" min={1} max={5} value={formik.values.ratting} name="ratting" onChange={formik.handleChange} /><br />
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