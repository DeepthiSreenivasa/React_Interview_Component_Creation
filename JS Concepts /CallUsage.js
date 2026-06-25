//Implementing Call

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

obj1.printFullName.call(obj2); // We borrow the function from object1 and point it to object2


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

printFullName.call(obj3);
printFullName.call(obj4);

