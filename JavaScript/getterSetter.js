let obj = {
    age : 30,
    get getAge(){
        return this.age;
    },

    set setAge(newAge){
this.age = newAge;
    }
}

console.log(obj.getAge);
obj.setAge= 18;
console.log(obj.getAge)