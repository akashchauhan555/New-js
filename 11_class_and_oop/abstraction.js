class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this.engineOn = false;
    }
    startEngine() {
      this.engineOn = true;
      console.log('Engine started');
    }
    drive() {
      if(this.engineOn) {
        console.log(`Driving the ${this.make} ${this.model}`);
      } else {
        console.log("You need to start the engine first");
      }
    }
  }
  
  const myCar = new Car('Toyota', 'Corolla');
  myCar.startEngine();
  myCar.drive();