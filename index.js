require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 3000
const blogRouter = require("./router/blog")

mongoose.connect(process.env.MONGOURL).then(()=>console.log('Connected'))
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")
app.use(blogRouter)



app.listen(port, () => console.log(`App listening on port ${port}!`))