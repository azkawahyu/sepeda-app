
const express = require("express")
const fs = require("fs")
const app = express()
const port = 5000

app.use(express.json())

app.get("/", (req, res) => {
    return res.status(200).json({
        "message": "Hello World"
    })
})

app.post("/:fileName", (req, res) => {
    const data = req.body
    const { fileName } = req.params
    fs.writeFile(`tmp/${fileName}.json`, JSON.stringify(data), (err) => {
        if (err) {
            return res.status(500).json({
                status: "failed",
                code: 500,
                result: {},
                message: "failed to create file"
            })
        }
        return res.status(201).json({
            status: "OK",
            code: 201,
            result: {},
            message: "file created successfuly"
        })
    })
})

app.get("/:fileName", (req, res) => {
    const { fileName } = req.params
    fs.readFile(`tmp/${fileName}.json`, { encoding: "utf-8" }, (err, data) => {
        if (err) {
            return res.status(500).json({
                status: "failed",
                code: 500,
                result: {},
                message: err.message
            })
        }
        return res.status(200).json({
            status: "OK",
            code: 200,
            result: JSON.parse(data),
            message: "successfuly retrieve file"
        })
    })
})

app.put("/:fileName", (req, res) => {
    const body = req.body
    fs.readFile(`tmp/${req.params.fileName}.json`, (err, data) => {
        if (err) {
            return res.status(404).json({
                status: "failed",
                code: 404,
                result: {},
                message: "no such file in the directory"
            })
        }
        return fs.writeFile(`tmp/${req.params.fileName}.json`, JSON.stringify(body), (err) => {
            if (err) {
                return res.status(500).json({
                    status: "failed",
                    code: 500,
                    result: {},
                    message: err.message
                })
            }
            return res.status(201).json({
                status: "OK",
                code: 201,
                result: {},
                message: "file updated successfuly"
            })
        })
    })
})

app.delete("/:fileName", (req, res) => {
    fs.unlink(`tmp/${req.params.fileName}.json`, (err) => {
        if(err) {
            return res.status(404).json({
                status: "failed",
                code: 404,
                result: {},
                message: "file not found"
            })
        } 
        return res.status(200).json({
            status: "OK",
            code: 200,
            result: {},
            message: "file deleted successfuly"
        })
    })
})

app.listen(port, () => console.log("This project running at port", port))