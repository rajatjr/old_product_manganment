// import express from "express";
const express = require('express')
const { getUsers, Register, Login, Logout, Delete } = require("../controllers/Users.js");
const{ verifyToken } = require ("../middleware/VerifyToken.js");
const { refreshToken }= require ("../controllers/RefreshToken.js");
 
const router = express.Router();
 
router.get('/getUsers', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.delete('/delete', Delete)
 
module.exports=router;