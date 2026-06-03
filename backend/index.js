const express = require('express');

const app = express();

app.use(express.json())

const PORT = 4000;

app.get("/",(req, res) => {
    res.status(200).json('This is testing');
}) 

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})