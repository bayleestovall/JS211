'use strict'

// .length - Create an array called cars which consists of 4 different types of cars as String type. The first car type should be Ford and includes Honda.
let cars = ["Ford", "Nissan", "Honda", "Kia"]

// Console.log the length of the array.
console.log(cars.length)

// Use node main.js to run the program.

// .concat() - Create another array called moreCars with 4 more different types of cars. The last car type should be Honda.
let moreCars = ["BMW", "Toyota", "Volkswagon", "Honda"]

// Use the concat method to combine the cars and moreCars arrays into another array called totalCars.
let totalCars = cars.concat(moreCars)
console.log(totalCars)

// Run the program.

// .indexOf() and .lastIndexOf() - Use the indexOf method to console.log the index of Honda.
console.log("What is the Honda's index?", totalCars.indexOf('Honda'))

// Use the lastIndexOf method to console.log the index of Ford.
console.log("What is the Ford's index?", totalCars.lastIndexOf('Ford'))
// Run the program.

// .join() - Use the join method to covert the array totalCars into a string called stringOfCars.
let stringOfCars = totalCars.join(', ')

// Run the program.

// .split() - Use the split method to convert stringOfCars back into an array called totalCars.
totalCars = stringOfCars.split(', ')

// Run the program.

// .reverse() - Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
let carsInReverse = totalCars.reverse()
console.log(carsInReverse)

// Run the program.

// .sort() - Use the sort method to put the array carsInReverse into alphabetical order.
console.log(carsInReverse.sort())

// Based on the types of cars you used, predict which item in the array should be at index 0.
// Use the following code to confirm or reject your prediction: alert(carsInReverse.indexOf('yourPrediction'));
// alert(carsInReverse.indexOf('Audi')) 
console.log("The index of BMW is: ", carsInReverse.indexOf('BMW'))

// .slice() - Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
let removedCars = carsInReverse.slice(2, 3)

// .splice() - Use the splice method to remove the 2nd and 3rd items in the array carsInReverse and add Ford and Honda in their place.
let removedWithSplice = carsInReverse.splice(1, 2, removedCars)

// .push() - Use the push method to add the types of cars that you removed using the splice method to the carsInReverse array.
carsInReverse.push(removedWithSplice)

// .pop() - Use the pop method to remove and console.log the last item in the array carsInReverse.
console.log(carsInReverse.pop())

// .shift() - Use the shift method to remove and console.log the first item in the array carsInReverse.
console.log(carsInReverse.shift())

// .unshift() - Use the unshift method to add a new type of car to the array carsInReverse.
carsInReverse.unshift("Jeep")

console.log(carsInReverse)

// .forEach()
// Create an array called numbers with the following items: 23, 45, 0, 2. 
let numbers = [23, 45, 0, 2]
// Write code that will add 2 to each item in the array numbers.

numbers.forEach(number => console.log(number + 2));

// .forEach() requires a function to be passed into it as its first argument. 
// Build a function that will add 2 and then use .forEach() to pass each number into your freshly built function. 
numbers = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34]

function addTwo(number) {
    return number + 2;
};

numbers.forEach(number => console.log(addTwo(number));