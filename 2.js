
//functioin statement
function  greet() {
    console.log('hi');
}
greet();

//function are first-class
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

// function expression
var greetMe = function() {
    console.log('HI NtUE!');
}
greetMe();

//it's first-class
logGreeting(greetMe);

// use a function expression to create a function on the fly
logGreeting(function() {
    console.log('Hello Ntue!');
});