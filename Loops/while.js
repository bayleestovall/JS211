

while(PART2){
    //code in here will execute over and over and over
    //as long as the predicate in the while clause returns true
}

//
for( let n = 0; n < 20; n = n + 1) {
    console.log("nfor loop umber", n);
}

let n=0;
while(n<20){
     //code in here will execute over and over and over
    //as long as the predicate in the while clause returns true

    console.log("while loop number", n);
    n = n + 1;
}
//can use for loop or while loop
//for loop is used for when you know ahead of time when you know exactly you're going to end


//fizzbuzz with while loop

let x=0
while(x<= 100){
    if( x % 15 == 0); {
        console.log("fizzbuzz-", x)
    }else if(x % 3 == 0);{
        console.log("fizz-", x);
    }else if(x % 5 == 0); {
        console.log("buzz-", x);
    }else {
        console.log(x);
    }
    x = x+1
}

//Do... While

let z = 10;
do {
 console.log(z);
 z++;
} while (z< 10);

//arrays

let friends = ["John", "Mark", "Matt"];

let i=0
console.log(friends[i]);
i+=1

console.log(friends[i]);

i+=1
console.log(friends[i]);

for(let i=0; i < friends.length;i+=1) {
    console.log(i);
    console.log(friends[i]);
}

//what will this do?

let i=0;
while(true){ //what is this line? A never ending loop bc true is always truthy
    i+=1; //won't see 0 because we added 1 before we printed
    console.log(i);
    if(i >10){
        break;
    }
}

//will print to 11 because our incrementer is first

