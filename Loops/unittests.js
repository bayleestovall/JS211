

//this function should add 2 numbers and return the sum;
function add(num1, num2){
    return num1 + num2;
}


let actual = add(4,5);
let expect = 9; 

if(expect === actual) {
    console.log("test is good");
} else {
    console.log("test failed");
}


//array of arrays

let board = [
    ['x', 'o' ,'x'],
    ['o', 'o', 'x'],
    ['o', 'x', 'o'],
]

console.log(board[0]); //print [x, o, x]
console.log(board[0][2]); //print x

//first one is what row you're thiking of
//second one is what column you're thinking of