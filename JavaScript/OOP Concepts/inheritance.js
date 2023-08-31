class vehicle {
    constructor(name) {
      this.name = name;
    }
  
    moves() {
      console.log(`${this.name} is moving`);
    }
  }
  
  // Child class inheriting from Animal
  class car extends vehicle {
    mode() {
      console.log(`${this.name} is a four wheeler `);
    }
  }
  
  const obj = new car('Thar');
 obj.moves()
 obj.mode();
  