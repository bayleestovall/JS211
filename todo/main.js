'use strict'

console.log('loading up js file'); 




//when the add button is clicked, read what the input has and add that as an li to our ul
//when the li is clicked, add a strike through the decoration by adding the 'done' class to the li

//get the add button
let addButton = document.getElementById('addButton');

//attach an on click event listener
addButton.addEventListener('click', function(){
    console.log("the button was clicked");
    let input = document.getElementById("input");
    let todo = input.value;
    console.log("the todo item =", todo); 
//get the items ul from the dom
    let ul = document.getElementById('items');

    //create an li element
    let li = document.createElement('li');

    //add the todo item as the text of the li
    li.innerText=todo;
    //attach the li element as a child of the li
    ul.appendChild(li);
    //clear the input box by setting the value to null
    input.value = null;



    li.addEventListener('click', function() {
        console.log("the li got clicked");
        li.className = 'done';
        if(li.className == 'done'){
            li.className = '';
        } else {
            li.className = 'done';
        }
    })
})





let input = document.getElementById('input');
let todo = input.value;

console.log("input =", todo);
