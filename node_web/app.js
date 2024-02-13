const express = require("express");
const connectDB = require("./config/db");

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})