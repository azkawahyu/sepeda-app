const express = require("express") // import dari module / package / dependency 
const fs = require("fs");
const app = express();
const port = 5000



app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

// Read - GET Hello World
app.get("/hello", (req, res)=>{ 
    return res.status(200).json({
        "message" : "Hello World"
    })
})

//READ
app.get('/users', (req, res) => {
    const usersData = getExistData()
    res.json(usersData)
})

//CREATE
app.post('/users/add', (req, res) => {
    const reqBody = req.body
    const usersData = getExistData()

    if (reqBody.id == null || reqBody.name == null || reqBody.age == null) {
        res.status(400).json({ status : 'error', message : 'Data Tidak Lengkap'  })
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
                message : `Add UserId ${reqBody.id} Berhasil`
            })
        }
    }
})

//UPDATE
app.put('/users/update/:id', (req, res) => {
    const userId = req.params.id
    const usersData = getExistData()

    
    const checkUser = usersData.find(user => user.id == userId)
    if(checkUser == null){
        res.status(400).json({
            status : 'error',
            message : `Users dengan Id ${userId} tidak ada`
        })
    } else {
        usersData.filter(e => {
            if(e.id == userId){
                e.name = req.body.name
                e.age = req.body.age
            }
        })
        saveData(usersData)
        res.status(200).json({
            status : 'success',
            message : `Update UserId ${userId} Berhasil`
        })
    }
})

//DELETE
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
            message : `Delete UserId ${userId} Berhasil`
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
app.listen(port, ()=> console.log("Project is running at port", port))