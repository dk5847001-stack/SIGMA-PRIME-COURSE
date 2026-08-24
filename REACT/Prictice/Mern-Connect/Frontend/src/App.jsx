import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState([]);
  const [student, setStudent] = useState({});
  const [loading, setLoading] = useState(true);

  // Get message
  useEffect(() => {
    fetch("http://localhost:3000/api/message")
      .then((response) => response.text())
      .then((data) => {
        setMessage(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Get users
  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // get students
  useEffect(() => {
    fetch("http://localhost:3000/api/student")
      .then((response) => response.json())
      .then((data) => {
        setStudent(data)
        setLoading(false)
      });
  });

  return (
    <>
      <h2>Message: {message}</h2>

      <hr />

      <h2>Users</h2>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        user.map((users) => (
          <div key={users.id}>
            <span>
              ID: {users.id}, Name: <b>{users.name}</b>
            </span>
          </div>
        ))
      )};
      <br /><br />
      {
        loading ? "Loading..." :
          (
            <div>
              {
                <div>
                  <p>Name : {student.name}</p>
                  <p>Email : {student.email}</p>
                  <p>Branch : {student.branch}</p>
                  <p>Semester : {student.semester}</p>
                </div>
              }
            </div>
          )
      }
    </>
  );
}

export default App;