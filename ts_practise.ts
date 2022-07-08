let data: number | string = 20;


data = "10"; //one varibale can have multiple types



//objects are created using ->     const name = {}

const car1 = {
    color: 3,
    model: "bmw"
}

const car2 = {
    color: 'red',
    model: 'kia',
    topSpeed: 120
}


//interfaces are used to declare a type ->    interface Name {}

interface Car {
    color: string;
    model: string;
    topSpeed?: number;
}


//applying an interface on objects

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


