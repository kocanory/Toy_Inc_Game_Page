require("dotenv").config();
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const asyncHandler = require("express-async-handler");

const checkLogin = (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        res.redirect("/home");
    }
    else{
        try{
            const decoded = jwt.verify(token, jwtSecret);
            req.userID = decoded.userID;
            next();
        }
        catch(err){
            res.redirect("/home");
        }
    }
}