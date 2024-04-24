//create routes 
const express = require("express");
const { postUser, update,readuser, createUser,deleteById} = require("../controller/auth");

const router = express.Router();
//import controller
router.post("/create",postUser);
router.get("/",createUser)
router.put("/update/:id",update)
router.get("/delete/:id",deleteById);
router.get("/users",readuser)

// router.get("/signup",signup)
// router.get("/login",login)

module.exports=router;