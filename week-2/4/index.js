const express = require('express')
const fs = require("fs");
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.status(401).send('Hello World')
})


app.use(express.json());
// CREATE
app.post("/users/create", (req, res) => {
    const existUsers = getUserData();
    const userData = req.body;
    if (
    userData.fullname == null ||
    userData.age == null ||
    userData.username == null ||
    userData.password == null
    ) {
    return res.status(401).send({ error: true, message: "User data is not available" });
    }
    const findExist = existUsers.find(
    (user) => user.username === userData.username
    );
    if (findExist) {
    return res.status(409).send({ error: true, message: "username already exists" });
    }
    existUsers.push(userData);
    saveUserData(existUsers);
    res.send({ success: true, message: "User data added successfully" });
});

// READ
app.get("/users/all", (req, res) => {
    const users = getUserData();
    res.send(users);
});

// UPDATE
app.patch("/users/update/:username", (req, res) => {
    const username = req.params.username;
    const userData = req.body;
    const existUsers = getUserData();
    const findExist = existUsers.find((user) => user.username === username);
    if (!findExist) {
    return res.status(409).send({ error: true, message: "username does not exist" });
    }
    const updateUser = existUsers.filter((user) => user.username !== username);
    updateUser.push(userData);
    saveUserData(updateUser);
    res.send({ success: true, message: "User data updated!" });
});


// DELETE
app.delete("/users/delete/:username", (req, res) => {
    const username = req.params.username;
    const existUsers = getUserData();
    const filterUser = existUsers.filter((user) => user.username !== username);
    if (existUsers.length === filterUser.length) {
    return res.status(409).send({ error: true, message: "username does not exist" });
    }
    saveUserData(filterUser);
    res.send({ success: true, message: "User removed successfully" });
});

const getUserData = () => {
    const jsonData = fs.readFileSync("users.json");
    return JSON.parse(jsonData);
    };
    const saveUserData = (data) => {
    const stringifyData = JSON.stringify(data);
    fs.writeFileSync("users.json", stringifyData);
    };

    app.listen((port, ()=> console.log("Project is running at port", port)));