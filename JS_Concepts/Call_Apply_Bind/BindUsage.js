//Implementing Bind - same as call, but we it returns a function and we have to invoke that function later

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

let ex1ForBind = obj1.printFullName.bind(obj2); // this returns a function which can be invoked Later
ex1ForBind();



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

let ex2ForBind = printFullName.bind(obj3);
let ex3ForBind = printFullName.bind(obj4);

ex2ForBind();
ex3ForBind();


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

let ex5ForBind = printFullName.bind(obj5, ["Bangalore", "Karnataka"]);
let ex6ForBind = printFullName.bind(obj6, ["Mumbai", "Maharashtra"]);

ex5ForBind();
ex6ForBind();


