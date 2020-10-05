
'use strict'

let x = 10;

// i will print all the numbers between 0 up to but not including 10

let n = 0; //only executes once
console.log("number", n); //important part
n = n + 1 // at the end before the nect time (next iteration)

console.log("number", n);

n= n + 1
console.log("number", n);
n= n + 1

console.log("number", n);
n= n + 1

console.log("number", n);
n= n + 1

console.log("number", n);
n= n + 1

console.log("number", n);
n= n + 1

console.log("number", n);
n= n + 1

console.log("number", n);
n= n + 1

console.log("number", n);
n= n + 1 //at this point my n = 10

//PART1: what to execute before the loop even starts, setting up the loop
//PART2: executes before every iteration, and if it is truthy, then the loop executes on more time
//        if it is falsy, then we are done with the loop

//PART3: the actual work to do during the iteration of the loop 

//PART4: what you execute at the end of the iteration to prepare for the next one

//the loop will execute PART1, just once
//then execute PART2 to see if you should do the iteration
//if PART2 is yes -> execute PART3, then execute PART4, then back to PART2
for( let n = 0; n < 10; n = n + 1) {
    console.log("number", n);
}

// write a for loop that will print every number from 1 to 100; 

for( let n = 1; n <= 100; n ++) {
    console.log(n);
} 

// write a for loop that will print ever number from 1 to 100 backwards

for (let n = 100; n >= 1; n--) {
    console.log(n);
}

// write a for loop that will print every number from 1 to 100 just the evens
// x = x+2 is the same as x+=2
for (let n = 2; n <= 100; n+=2) {
    console.log(n); 
}

//use a for loop to 
//print every number between 1 and 100 but
// for numbers divisable by 3 print fizz
// for numbers divisable by 5 print buzz
// 3 and 5 print fizz buzz
// all others, print the numbers

for(let x = 1; x <= 100, x++){
    if( x % 15 == 0); {
        console.log("fizzbuzz-", x)
    }else if(x % 3 == 0);{
        console.log("fizz-", x);
    }else if(x % 5 == 0); {
        console.log("buzz-", x);
    }else {
        console.log(x);
    }
} 

//this is a more convoluded way to do it

for (let x = 1; x <= 100, x++){
    //set num to be an empty string
    let num = x
    //if the number is divisible by 3 then add 'fizz' to my string
    if(x %3==0){
        num += "fizz";
    }
    //if the number is divisible by 5, add 'buzz'
    if(x %5 == 0) {
        num += "buzz"
    }
    //if num is not truthy (falsy)
    if(!num){
        num=x;
    }

    console.log(num);
 }

 
//continue keyword in a for loop, means skip to the next idiration

for(let i=0; i< 10, i++0){
    if(i % 2 == 0) {
        console.log("its even");
    }
    console.log("the number is", i);
}

//break means leave the loop entirely
//continue means continue on UNTIL