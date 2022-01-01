const express = require("express");
const res = require("express/lib/response");

const app = express();

//ROUTES
app.get('/', (req, res) => {
    res.send("We Are On Home");

})

//LISTENING
app.listen(3000);