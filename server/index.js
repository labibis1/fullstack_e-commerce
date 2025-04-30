const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());
require("dotenv").config();
const port = process.env.PORT;
const router =  require("./route");
const dbconnect = require("./config/db");
dbconnect()
app.use(express.json())
app.use(express.static("uploads"))
app.use(router)

app.listen(port, () => {
  console.log(`server is running port number ${port}`);
});
