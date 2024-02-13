const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const env = require("dotenv").config();

const connectDB = asyncHandler(async() => {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`DB Connected : ${connect.connection.host}`);
})

module.exports = connectDB;