const express = require('express')
const fs = require('fs')
const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Read
app.get('/', (req, res) => {
    res.status(200).json({
        message : 'Hello World'
    })
})

//CREATE
app.post('/pengguna/pendaftaran', (req, res) => {
    const reqBody = req.body
    const penggunaData = getExistData()

    if (reqBody.akun == null || reqBody.nama == null || reqBody.umur == null) {
        res.status(400).json({
            status : 'error', 
            message : 'Lengkapi data'  
        })
    } else {
        const checkUser = penggunaData.find(e => e.akun == reqBody.akun)
        if(checkUser){
            res.status(400).json({
                status : 'error',
                message : `${reqBody.akun} telah terpakai`
            })
        } else {
            penggunaData.push(reqBody)
            saveData(penggunaData)
            res.status(200).json({
                status : 'success',
                message : `Pendaftaran ${reqBody.akun} telah berhasil`
            })
        }
    }
})

//Read
app.get('/pengguna', (req, res) => {
    const penggunaData = getExistData()
    res.json(penggunaData)
})

//UPDATE
app.put('/pengguna/update/:akun', (req, res) => {
    const userakun = req.params.akun
    const penggunaData = getExistData()

    const checkUser = penggunaData.find(user => user.akun == userakun)
    if(checkUser == null){
        res.status(400).json({
            status : 'error',
            message : `${userakun} tidak tersedia`
        })
    } else {
        penggunaData.filter(e => {
            if(e.akun == userakun){
                e.nama = req.body.nama
                e.umur = req.body.umur
            }
        })
        saveData(penggunaData)
        res.status(200).json({
            status : 'success',
            message : `Update Userakun ${userakun} Success`
        })
    }
})

//DELETE
app.delete('/pengguna/delete/:akun', (req, res) => {
    const userakun = req.params.akun
    const penggunaData = getExistData()
    const filterData = penggunaData.filter(e => e.akun != userakun)

    if(filterData.length == penggunaData.length){
        res.status(400).json({
            status : 'error',
            message : `Akun ${userakun} tidak ada`
        })
    } else {
        saveData(filterData)
        res.status(200).json({
            status : 'success',
            message : `Penghapusan akun dengan Id ${userakun} Success`
        })
    }
})

//Get Data
const getExistData = () => {
    const jsonData = fs.readFileSync('pengguna.json')
    return JSON.parse(jsonData)  
}

//Save Data
const saveData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('pengguna.json', stringifyData)
}

//PORT Listen
app.listen(port, () => {
    console.log('Server runs on port', port)
})
