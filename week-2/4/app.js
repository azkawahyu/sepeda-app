const express = require("express");
const fs = require("fs");
const app = express();

const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/:file", (req, res) => {
  const data = req.body;
  fs.writeFile(
    `./data/${req.params.file}.json`,
    JSON.stringify(data),
    (err) => {
      if (err) {
        return res.status(500).json({
          status: `failed`,
          message: err.message,
        });
      }
      return res.status(201).json({
        status: `succeed`,
        message: `created file successfully`,
      });
    },
  );
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get(`/:file`, (req, res) => {
  fs.readFile(`./data/${req.params.file}.json`, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({
        status: `failed`,
        message: err.message,
      });
    }
    return res.status(200).json(JSON.parse(data));
  });
});

app.put("/:file", (req, res) => {
  const body = req.body;
  fs.readFile(`./data/${req.params.file}.json`, (err, data) => {
    if (err) {
      return res.status(404).json({
        status: `failed`,
        message: err.message,
      });
    }
    fs.writeFile(
      `./data/${req.params.file}.json`,
      JSON.stringify(body),
      (err) => {
        if (err) {
          return res.status(500).json({
            status: `failed`,
            message: err.message,
          });
        }
        return res.status(200).json({
          status: `succeed`,
          message: `updated file successfully`,
        });
      },
    );
  });
});

app.delete(`/:file`, (req, res) => {
  fs.unlink(`./data/${req.params.file}.json`, (err) => {
    if (err) {
      return res.status(404).json({
        status: `failed`,
        message: err.message,
      });
    }
    return res.status(200).json({
      status: `succeed`,
      message: `deleted file succesfully`,
    });
  });
});

app.listen(port, () => {
  console.log(`Your project is running at port ${port}`);
});
