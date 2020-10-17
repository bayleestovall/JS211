

'use strict'

//what is a function?

//a block of code designed for a task
//I can call it
//they always have to return something, if we are not ecplicit what it returns,
//it will return 'undefined'

//functions can take in input/parameters

//if we don't call it with enough parameters what happens? the missing parameteres are seen as undefined
//what if we call too many parameters? it will just ignore the extra parameters


//functions can be passed in to another function
//what is it called? callbacks


//why would your function accept another function as input?


function myReallyCoolFunction(someOtherFunction){
    //it does some stuff...
    //the passed in function might do some post processing
    

    console.log("the function passed in =", someOtherFunction)
}

