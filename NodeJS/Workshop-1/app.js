const express = require('express');
const calculatorRouter = require('./routers/calculator')

const app = express();


app.use(express.json());

app.get('/',(req,res) => {
 res.send("I am response")
});

// app.get('/add' , (req,res) => {
//     let n1=2
//     let n2=3;
//     let sum=n1+n2;
//    res.send("Addition = "+sum)
// })

app.use('/calculator',calculatorRouter);

app.listen(3001);