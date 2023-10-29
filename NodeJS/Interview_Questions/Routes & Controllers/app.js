const express = require('express');
const userRoutes = require("./routers/user");
const app = express();


// USER 
app.use('/user', userRoutes);


app.listen(3000);