//Implementing Apply - the only difference is we use an array while passing arguments instead of individual params

let obj1 = {
    firstName: "Deepthi",
    lastName: "S",
    printFullName: function () {
        console.log(this.firstName + " " + this.lastName) //this points to the variables inside that object
    }
}

obj1.printFullName()

let obj2 = {
    firstName: "Sachin",
    lastName: "Tendulkar", // We dont want to rewrite the function again
}

obj1.printFullName.apply(obj2); // We borrow the function from object1 and point it to object2


//But in general we dont keep functions inside the object but place it outside

let obj3 = {
    firstName: "Deepthi",
    lastName: "S"
}

let obj4 = {
    firstName: "Sachin",
    lastName: "Tendulkar"
}

function printFullName() {
    console.log(this.firstName + "-" + this.lastName);
}

printFullName.apply(obj3);
printFullName.apply(obj4);


//we can also pass parameter to the printFull Name

let obj5 = {
    firstName: "Deepthi",
    lastName: "S"
}

let obj6 = {
    firstName: "Sachin",
    lastName: "Tendulkar"
}

function printFullName(homeTown, state) {
    console.log(this.firstName + this.lastName + " from " + homeTown + ", " + state)
}

printFullName.apply(obj5, ["Bangalore", "Karnataka"]);
printFullName.apply(obj6, ["Mumbai", "Maharashtra"])



