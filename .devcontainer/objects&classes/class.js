class Car {
    // Constructor runs automatically when new object is created by using the "new" keyword
    constructor(brand, model) {
        console.log("i am called very first when new object is created");
        
        this.brand = brand;  
        this.model = model;  
    }
    start() {  
        console.log(`${this.brand} ${this.model} started`); //this refers to the current object which is calling the method
    }
    stop(){
        console.log(`${this.brand} ${this.model} stopped`);
    }
}
let car1=new Car();
let car2=new Car("Toyota", "Corolla");
car1.start(); //undefined undefined started
car2.start(); //Toyota Corolla started


