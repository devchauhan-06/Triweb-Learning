

module.exports.add = ((req,res) =>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
      let sum =n1 + n2;
      res.send(`Sum = ${sum}`)
  })
  
  module.exports.subtract =((req,res) =>{
      let n1 = req.body.num1;
      let n2 = req.body.num2;
        let dif =n1 - n2;
        res.send(`Difference = ${dif}`)
    })
  
    module.exports.multiply =((req,res) =>{
      let n1 = req.body.num1;
      let n2 = req.body.num2;
        let mul =n1 * n2;
        res.send(`Product = ${mul}`)
    })
  
    module.exports.divide =((req,res) =>{
      let n1 = req.body.num1;
      let n2 = req.body.num2;
        let div =n1/ n2;
        res.send(`Division = ${div}`)
    })