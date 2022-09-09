// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function (style = "*") {
    return function (adjective = "special") {
        return `You are ${style}${adjective}${style}!`
    }
}

const fn = function () {
    console.log("This is a function")
}

console.log(fn());

// Function Level Scope
// function outerFunction(name, gender) {
//     const innerFunction = function (age, height) {
//         return `My name is ${name} and my gender is ${gender}. I am ${age} years old and ${height} feet tall`;
//     }

//     return innerFunction(23, 6);
// }

// console.log(outerFunction("Erick", "Male"))

// Function Level Scope
function outerFunction(name, gender) {
    const innerFunction = function (age, height) {
        return `My name is ${name} and my gender is ${gender}. I am ${age} years old and ${height} feet tall`;
    }

    return innerFunction;
}//the return value of the outer function is now anonymous. to invoke it, we update the function call as follows:

console.log(outerFunction("Jane", "Female")(23, 6));