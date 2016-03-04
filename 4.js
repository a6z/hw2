/*(() => {
    outage = 20;  //Global
    var height = 170; //Local
    if(outage == 20)
      height = 180;
      console.log(`height = ${height}`);
})();
console.log(`outAge = ${outage}`);*/
// console.log(`height = ${height}`);

"use strict";
var a = 5;
var b = 10;
if (a==5){
    let a = 4;
    var b = 1;
    console.log(a); //4
    console.log(b); //1
}

console.log(a); //5
console.log(b); //1