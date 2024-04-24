//create a express server
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const router = require('./routes/route');
const app = express();
const path = require('path');

//middleware
app.set("view engine", "ejs" )
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(express.static(path.join(__dirname, "public")))

//connect database 
mongoose.connect('mongodb://localhost:27017/Practice')
    .then(() => console.log('Mongodb connected...'))
    .catch((err) => console.log(err))

app.get("/",(req,res)=>{
    res.render("index")
})

const PORT = 8080

app.use(router)

app.listen(PORT,()=>{
   console.log(`server is listening on ${PORT}`)
});