// name() // will work just fine 
// name2(); // will be undefined // hoisting 

// ------------ FUNCTION STATEMENT
function name(params) {
 // this way of creating a function is func-statement	
}

// ------------- FUNCTION EXPRESSSION / funciton declaration 
let func = function name2(params) { // NAMED FUNCTION EXP
	// this is function expression 
}

// ------------- ANONYMOUS FUNCTION  - without name
// used with function expression
var x = function (){ // ANONYOUS EXP

}

// --------------- PARAMS vs ARGS
function name3(params) {
	
}
name3("args"); 

// FIRST CLASS FUNCTION 
	// the ability to pass a funciton to another func OR to return a function from another func  

function xFunc(func) {
	console.log(func);
}
function xyxFunc() {
}

xFunc(xyxFunc); // here xyxFunc is a CALLBACK func 