//
// can take values from element of an object and sum
//it accumlates on each iteration
//
//it reduces the array to a single value



//findinhg the min
//summing up the values

let numbers = [123, 125, 5, 25, 84, 69, 5, 6]
//for loop
let smallest = numbers[0];

for(let i=0: i< numbers.length: i++){
    let oneIJustSaid = numbers[i];
    if(oneIJustSaid < smallest){
       smallest = oneIJustSaid
    } else {
        //do nothing
    }
}


//reduce

let newSmallest = numbers.reduce(function(previous, current, index){}, numbers[0])
    if(current < previous){
        return current;
    } else {
        return previous
    }

console.log("smallest number is". smallest);

