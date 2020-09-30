//Write a JavaScript program to display the current day and time.
let now = new Date();
console.log("#1. th current time is", now);
//Write a JavaScript program to convert a number to a string.
let age = 8;
let ageAsString = age.toString();

console.log("#2 number as string =", ageAsString)
//Write a JavaScript program to convert a string to the number.
let a = "8754"

const stringNum = () => {
  let number = Number()
  return number
}

let b = stringNum(a)

console.log("Converting the function", a, "to a number", b,)

//Write a JavaScript program that takes in different datatypes and prints out whether they are a:
//Boolean
//Null
//Undefined
//Number
//NaN
//String
let item = 100

const returnData = (item) => {
  return typeof item
}

console.log(returnData(item))

//Write a JavaScript program that adds 2 numbers together.
let x = 3
let y = 2

const together = (x, y) => {
  return x + t
}
let z = together(x, y)

console.log(z)
//Write a JavaScript program that runs only when 2 things are true.
let thing1 = true
let thing2 = true

const bothTrue = (thing1, thing2) => {
  if (thing1 === true && thing2 === true) {
  console.log("Only run if both are true")
  }
}

bothTrue(thing1, thing2)
//Write a JavaScript program that runs when 1 of 2 things are true.
let thing1part2 = true
let thing2part2 = false

const onlyOneTrue = (thing1part2, thing2part2) => {
  if (!thing1part2 && thing2part2 || thing1part2 && !thing2part2) {
  console.log("Only run if one of two things is true")
  }
}

onlyOneTrue(thing1part2, thing2part2)
//Write a JavaScript program that runs when both things are not true.
let thing3 = false
let thing4 = false

const bothNotTrue = (thing3, thing4) => {
  if (thing3 === false && thing4 === false) {
  console.log("Both are not true")
  }
}

bothNotTrue(thing3, thing4)







