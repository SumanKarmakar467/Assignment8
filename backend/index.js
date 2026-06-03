// Importing express, dotenv, routes, mongoose
const express = require('express');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/task');
const mongoose = require('mongoose');
const cors = require('cors');

// configure the dotenv
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// PORT access into the .env file 
const PORT = process.env.PORT;

// Testing 
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'This is testing'
    });
});

// the url 
app.use('/api/tasks', taskRoutes);

// MongoD connection  
console.log("Mongo URL:", process.env.MONGO_URL);
// Connect to Database
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log(`MongoDB Connect...`)
    })
    .catch((error) => {
        console.log((error))
    })

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});