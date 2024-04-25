//create routes 
const express = require("express");
const { postUser, update,readuser, createUser,deleteById,updataEjs} = require("../controller/auth");

const router = express.Router();
//import controller
router.post("/create",postUser);
router.get("/",createUser)
router.post("/update/:id",update)
router.get("/update/:id",updataEjs)
router.get("/delete/:id",deleteById);
router.get("/users",readuser)

// router.get("/signup",signup)
// router.get("/login",login)

module.exports=router;