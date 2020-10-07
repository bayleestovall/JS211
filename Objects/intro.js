'use strict'

let names = [
    "john",
    "james",
    "jenny",
    "jack"
]

let phone = [
    '512-789-1234',
    '512-123-9876',
    '512-987-5432',
    '512-567-1234'
]


let indexByName ={
    'john' : "512-789-1234",
    'james' : "512-123-9876",
    'jenny' : "512-987-5432",
    'jack' : "512-567-1234"
}


let indexByPhone ={
    "512-789-1234" : 'john',
    "512-123-9876": 'james',
    "512-987-5432": 'jenny',
    "512-567-1234": 'jack'
}




let firstFriend = {
    'name' : "john",
    'phone' : "512-789-1234",
    'address' : "1234 main street",
    'email' : "john@solutions.net"
}

let friend1 = {

    'name' : "john",
    'phone' : "512-789-1234",
    'address' : "1234 main street",
    'email' : "john@solutions.net"
} 

console.log("john")
console.log(friend1.name);
console.log(friend1['name'])



for (let key in apple) {
    console.log(key, " -> ", apple[key]);
}



