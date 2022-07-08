//declaring a variables
let data: string = "hello";
let data1: number = 20;
let data3: number | string = 20;   //one varibale can have multiple types

data3 = "10"; 

//Creating objects using -> const name = {}

const car1 = {
    color: 3,
    model: "bmw"
}

const car2 = {
    color: 'red',
    model: 'kia',
    topSpeed: 120
}


//Creating interfaces to declare a object type -> interface Name {}

interface Car {
    color: string;
    model: string;
    topSpeed?: number;
}


//implementing an interface on objects

const car3: Car = {
    color: "blue",
    model: "fiat",
    topSpeed: 90
}

const car4: Car = {
    color: "yellow",
    model: "bmw"
}


//using type safety in a function

const multiply = (x: number, y: number): number => {
    return x * y;
}


