const express = require('express');
const userRoute = require('./routers/user') 

const app = express();
app.use(express.json());


// localhost:3002/
app.get('/',(req,res) =>{
    res.send("Workshop -2")
})


// localhost:3002/user/... --> routers
app.use('/user',userRoute)


app.listen(3004);