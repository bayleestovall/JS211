//framework for creating a new object
//parameters for what you are making
//constructing a new element
//make it so you don't have to repeat the same code (it helps with that)
//classes are not really classes like in other languages


//what is this constructor?





class Person {
    firstName;
    lastName:
    skillSet; 


    /** @param (*) nameInput the name of the person */
    constructor(nameInput));{\
        //all new instances start out with an empty array for skillSet
        //skillset array
        this.skillset = [];

        let fullName = nameInput.split(" "); 
        console.log(nameInput, " ->", fullName)
        this.firstName = fullName[0];
        this.lastName = fullName[1];
        //this is where you put the code that should run 
        //when the object is being constructed
        
    //if a name is passed use it,
    //other wise do not change it from John doe        
        
        if(!nameInput){
            this.name = "John Doe"
        } else {
            this.name = nameInput;
        }
        this.skillset = []
    }
    //THis method will add a new skill up to 3
    learn(newSkill){
        if(this.skillset.length <3){
            this.skillset.push(newSkill); 
        }
    }

};    


let me = new Person("Yousif");
let neo = new Person ("Thomas");
let morphius = new Person ("Morphius");

console.log("me name:", me.name);
console.log("neo name", neo.name);

//give neo his real name 
neo.name = "Thomas Anderson"; 

console.log("neo name", neo.name); 



neo.learn("Fly");
neo.learn("Shoot");
neo.learn("Dodge");
neo.learn("Code");

console.log("neo skills:", neo.skillset);
