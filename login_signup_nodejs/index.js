const express = require('express');
const config = require('config');
const cors = require('cors');
const signupApp = require("./routes/signup");

const port = config.get("port");
var app = express();

app.use(cors());
app.use(express.json());

app.use("/signup", signupApp);

app.listen(port, console.log(`Server listening at ${port}`));