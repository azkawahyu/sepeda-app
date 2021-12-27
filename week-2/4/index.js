const express = require('express')
const fs = require('fs')
const app = express()
const port = 5000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Read - GET Hello World
app.get('/', (req, res) => {
    res.status(200).json({
        message : 'Hello World'
    })
})

//Read - GET List of Users
app.get('/users', (req, res) => {
    const usersData = getExistData()
    res.json(usersData)
})

//CREATE - POST Data of Users
app.post('/users/add', (req, res) => {
    const reqBody = req.body
    const usersData = getExistData()

    if (reqBody.id == null || reqBody.name == null || reqBody.age == null) {
        res.status(400).json({
            status : 'error', 
            message : 'Data Users Harus Lengkap'  
        })
    } else {
        const checkUser = usersData.find(e => e.id == reqBody.id)
        if(checkUser){
            res.status(400).json({
                status : 'error',
                message : `Users dengan Id ${reqBody.id} sudah ada`
            })
        } else {
            usersData.push(reqBody)
            saveData(usersData)
            res.status(200).json({
                status : 'success',
                message : `Add UserId ${reqBody.id} Success`
            })
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
        res.status(400).json({
            status : 'error',
            message : `Users dengan Id ${userId} tidak ada`
        })
    } else {
        //Specific Update to Id Param, Id can't be changed
        usersData.filter(e => {
            if(e.id == userId){
                e.name = req.body.name
                e.age = req.body.age
            }
        })
        saveData(usersData)
        res.status(200).json({
            status : 'success',
            message : `Update UserId ${userId} Success`
        })
    }
})

//DELETE - Delete Specific Users
app.delete('/users/delete/:id', (req, res) => {
    const userId = req.params.id
    const usersData = getExistData()
    const filterData = usersData.filter(e => e.id != userId)

    if(filterData.length == usersData.length){
        res.status(400).json({
            status : 'error',
            message : `Users dengan Id ${userId} tidak ada`
        })
    } else {
        saveData(filterData)
        res.status(200).json({
            status : 'success',
            message : `Delete UserId ${userId} Success`
        })
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