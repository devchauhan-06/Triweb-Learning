function product(productName, price){
    this.productName = productName;
    this.price = price
}

function student(sname, productName, price){
    product.call(this,productName,price);
    this.sname = sname;
}

const student1 = new student("Dev", "Laptop", 999)
console.log(student1.sname," Purchased a ", student1.productName,' for Rs ', student1.price);