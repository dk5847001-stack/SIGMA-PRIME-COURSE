import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
  }

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      <div className="preview">
        <h2>Live Preview</h2>
        <p>Name: {form.name}</p>
        <p>Email: {form.email}</p>
      </div>
    </div>
  );
}