//01
function b1(){
    var myVar;
    console.log(myVar);
}

function a1(){
    var myVar = 1;
    b1();
    console.log(myVar);
}

var myVar = 2;
console.log(myVar);
a1();

//02
function B1(){
    //var myVar;
    console.log(myVar);
}

function A1(){
    var myVar = 1;
    B1();
    console.log(myVar);
}

var myVar = 2;
console.log(myVar);
A1();

// variables lifting
var firstname = 'Simon';
var addSurname = () => {
    var firstname = 'A5';
	var surname = 'Holmes';
	var fullname = firstname + ' ' + surname;
	console.log(fullname);
}
addSurname();