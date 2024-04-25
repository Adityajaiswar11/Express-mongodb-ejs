//create a express server
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const path = require('path');
require("dotenv").config()
const fs = require('fs')

//middleware
app.set("view engine", "ejs" )
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(express.static(path.join(__dirname, "public")))
mongoose.set("strictQuery", false);

//connect database 
mongoose.connect(process.env.DATABASE_NAME)
    .then(() => console.log('Mongodb connected...'))
    .catch((err) => console.log(err))


const routesPath = "./routes";
const routeFiles = fs.readdirSync(routesPath);
routeFiles.map((r) => app.use(require(`./routes/${r}`)));

const port = 8080;

app.listen(port,()=>{
   console.log(`server is listening on ${port}`)
});