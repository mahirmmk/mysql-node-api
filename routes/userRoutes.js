const express= require("express")   
const router= express.Router()
const User= require("../models/userModel")
const {createUser, getAllUsers, getUserById} = require("../controllers/userController")

router.post("/", createUser)
router.get("/" , getAllUsers)
router.get("/:id", getUserById)
 
module.exports = router