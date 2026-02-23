const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const port = 3000;
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'dk5847001'
});
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}
// Home route
app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count })
    })
  } catch (err) {
    console.log(err);
    res.send("some err to DB");
  }
})
// show user route
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("showUser.ejs", { users })
    })
  } catch (err) {
    console.log(err);
    res.send("some err to DB");
  }
})

//edit route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user })
    })
  } catch (err) {
    console.log(err);
    res.send("some err to DB");
  }
})

// update route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUser } = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      if (formPass != user.password) {
        res.send("Wrong Password");
      }
      else {
        let q2 = `UPDATE user SET username = '${newUser}' WHERE id = '${id}'`;
        connection.query(q2, (err, result)=>{
          if(err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some err to DB");
  }
});

// delete route
// app.delete("/user/:id", (req, res) => {
//     let { id } = req.params;

//     let q = `DELETE FROM user WHERE id = ?`;

//     connection.query(q, [id], (err, result) => {
//         if (err) {
//             console.log(err);
//             return res.send("Error deleting user");
//         }

//         res.redirect("/user");
//     });
// });

app.delete("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password } = req.body;

    // Step 1: Pehle user ka password fetch karo
    let q = "SELECT * FROM user WHERE id = ?";

    connection.query(q, [id], (err, result) => {
        if (err) {
            console.log(err);
            return res.send("DB Error");
        }

        if (result.length === 0) {
            return res.send("User not found");
        }

        let user = result[0];

        // Step 2: Password match karo
        if (user.password !== password) {
            return res.send("Wrong Password ❌");
        }

        // Step 3: Password sahi hai to delete karo
        let deleteQuery = "DELETE FROM user WHERE id = ?";

        connection.query(deleteQuery, [id], (err, result) => {
            if (err) {
                console.log(err);
                return res.send("Delete Error");
            }

            res.redirect("/user");
        });
    });
});

// add user
app.post("/add-user", (req, res) => {
  const {username, email, password } = req.body;
  let id = faker.string.uuid();

  const sql = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";

  connection.query(sql, [id, username, email, password], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Error adding user");
    }
    res.redirect("/user");
  });
});


// connection.end();


app.listen(port, () => {
  console.log(`The app is listening on port ${port}`);
})




// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let data = [];
// for(let i = 1; i<=100; i++){
// data.push(getRandomUser());
// }

