const express = require('express')
const fs = require('fs')
const app = express()
const port = 5000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Read - GET Hello World
app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

//Read - GET List of Users
app.get('/users', (req, res) => {
    const usersData = getExistData()
    res.send(usersData)
})

//CREATE - POST Data of Users
app.post('/users/add', (req, res) => {
    const reqBody = req.body
    const usersData = getExistData()

    if (reqBody.id == null || reqBody.name == null || reqBody.age == null) {
        return res.status(400).send("Data Users Harus Lengkap")
    } else {
        const checkUser = usersData.find(e => e.id == reqBody.id)
        if(checkUser){
            res.status(400).send(`Users dengan Id ${reqBody.id} sudah ada`)
        } else {
            usersData.push(reqBody)
            saveData(usersData)
            res.status(200).send(`Add UserId ${reqBody.id} Success`)
        }
    }
})

//UPDATE - Put Data of Specific Users
app.put('/users/update/:id', (req, res) => {
    const userId = req.params.id
    const usersData = getExistData()

    //Cek Exist Id Param
    const checkUser = usersData.find(user => user.id == userId)
    if(checkUser == null){
        return res.status(400).send(`User Id ${userId} tidak ada`)
    } else {
        //Specific Update to Id Param, Id can't be changed
        usersData.filter(e => {
            if(e.id == userId){
                e.name = req.body.name
                e.age = req.body.age
            }
        })
        saveData(usersData)
        res.status(200).send(`Update UserId ${userId} Success`)
    }
})

app.delete('/users/delete/:id', (req, res) => {
    const userId = req.params.id
    const usersData = getExistData()
    const filterData = usersData.filter(e => e.id != userId)

    if(filterData.length == usersData.length){
        res.status(400).send(`User Id ${userId} tidak ada`)
    } else {
        saveData(filterData)
        res.status(200).send('Delete Success')
    }
})

//Get Data from users.json
const getExistData = () => {
    const jsonData = fs.readFileSync('users.json')
    return JSON.parse(jsonData)  
}

//Save Data to users.json
const saveData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('users.json', stringifyData)
}

//PORT Listen
app.listen(port, () => {
    console.log('Server runs on port', port)
})