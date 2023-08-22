function employee()
{
    this.department = "None";
    this.mobile = 1234;
}

 
function manager(name)
{
    employee.call(this)       //Now emplpoyee is a part of manager 
    this.name = name;
}


let dev = new manager("Dev");

manager.prototype = Object.create(employee.prototype);
manager.prototype.constructor = manager;


console.log(dev);
// console.log(dev.__proto__);
// console.log(dev.__proto__.__proto__);        // This is not working idk why :(