
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')

//Loads env config
require('dotenv').config()

//Express server in app constant
const app = express();


//Connect MongoDB with server
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true
    })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB Error => ", err));

// register middlewares to control requests
app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '4mb' }))
app.use(cors())

// middleware to load dynamic routes from routes directory
const routePath = "./routes/";
fs.readdir(routePath, (err, files) => {
    files.forEach(file => {
        app.use("/api", require("./routes/" + file))
    });
})

// define port for node server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("🚀 ~ file: server.js ~ line 41 ~ app.listen ~ port", port)
})