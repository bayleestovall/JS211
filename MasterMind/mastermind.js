//create 2 classes

//1 class that represents a vehicle
//the vehicle should have a type property (boat, car, submarine)
//the vehicle should have a property that holds the list of -
//crew on board the vehicle (John, Jacob, Mary)
// only valid types are plane, boat, bus, train, submarine

// vehicle class, should have ready() 
//should return true or false, if the appropriate crewmember is on board

// 2 class that represents a CrewMember
// they should have name
//they should have a title (Pilot, Driver, Engineer, Captain)


//the crewmember class should have a method called 
//board(vehicle)


class Vehicle{
  

    constructor(name,title){
    this.name = name;
    this.type = title;
    this.crew = [];
    }
    

    ready( ){
        if(this.crew.length !== 0){
            return true; 
        }
    }
    
}


class CrewMember {
   
    constructor(name, job){
        this.name = name;
        this.job = job;
        this.vehicle = null;
    }
    boardVehicle(v){
      this.vehicle = v.type;
       v.crew.push(this);  
    }
}


//Vehicles - Plane, Boat, Train
//Crew for Plane - Pilot Harry Potter
//Train - Conductor Hermione Granger
//Boat - Captain Ron Weasley

//Vehicles
let plane1 = new Vehicle("The Chosen One", "Plane");
let train1 = new Vehicle ("The SPEW", "Train");
let boat1 = new Vehicle("The SS Snape", "Boat");
//CrewMembers
let harryPotter = new CrewMember("Harry Potter", "Pilot");
let hermioneGranger = new CrewMember("Hermione Granger", "Conductor");
let ronWeasley = new CrewMember("Ron Weasley", "Captain");


//now to board all crew members
harryPotter.boardVehicle(plane1); 
hermioneGranger.boardVehicle(train1);
ronWeasley.boardVehicle(boat1);

//now all three should be true

plane1.ready(); 
train1.ready();
boat1.ready(); 
