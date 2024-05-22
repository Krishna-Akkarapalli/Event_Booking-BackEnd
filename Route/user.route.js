const express = require("express")
const { test, updateUser,deleteUser } = require("../Controller/user.control");
const  verifyToken = require("../Utils/verifyUser");


 const router = express.Router();

 router.get('/', test);
 router.post("/update/:id",verifyToken,updateUser);
 router.delete('/delete/:id', verifyToken, deleteUser);
 
module.exports= router;

 