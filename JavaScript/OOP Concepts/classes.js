class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    intro() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const person1 = new Person('Dev', 18);   
  person1.intro();
  