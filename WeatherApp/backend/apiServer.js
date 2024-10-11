const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
const PORT = process.env.MY_PORT || 4000;
const apikey = process.env.API_KEY;

function apiMiddleware(req, res, next){
    const password = req.query.password;
    if(password !== "BlueSheepOnNeonGrass"){
        res.send("Invalid password");
    } else {
        next();
    }
}

app.get('/apikey', apiMiddleware, (req, res) => {
    res.send(apikey.toString())
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));