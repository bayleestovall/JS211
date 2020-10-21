
class Circle {
    radius;

    constructor(inputRadius){
        this.radius = inputRadius;
    }

    /*This method returns the circumference of this cicle. */
    circumference(){
        return 2 * Math.PI * this.radius;
    }

    //This method returns the area of the cirle
    area() {
        return Math.PI * this.radius * this.radius; 
    }
}

let c1 = new Circle(3);
let c2 = new Circle(2);

console.log("Area", c1.area());
console.log("circumference:", c1.circumference());
console.log("radius", c1.radius);