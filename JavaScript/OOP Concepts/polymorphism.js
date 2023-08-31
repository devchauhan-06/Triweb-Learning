class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    makeSound() {
      console.log(`${this.name} barks.`);
    }
  }
  
  class Cat extends Animal {
    makeSound() {
      console.log(`${this.name} meows.`);
    }
  }

  const dog = new Dog('Doggy');
  const cat = new Cat('Cat');
  
  dog.makeSound(); 
  cat.makeSound(); 