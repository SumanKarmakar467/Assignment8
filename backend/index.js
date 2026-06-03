// Importing 
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json())

const PORT = process.env.PORT;

app.get("/",(req, res) => {
    res.status(200).json('This is testing');
}) 

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})