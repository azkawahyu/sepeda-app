require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000;
const routes = require("./routes/index");

app.use(express.json());
app.use("/api/v1", routes);

app.listen(port, () => {
  console.log("App is running at port", port);
});
