
// var is hoisted in window object
// const let will be hoisted in temperal dead-zone

console.log(x); // undefined -> hoisted x without value 


// --------VAR 

var x = 7; 
func(); // will work just fine 
// getname(); // will give us error since it's a func-expression and will be assigned undefined at beginneing 

console.log(x);

function func() {
	console.log("Func called.");
}

var getname = () => {
	console.log("Getname func called.");
}

// ----------- LET / CONST 

//---let 
// console.log(a); // will give us error - they;re in TEMPORAL DEAD ZONE 
// console.log(c); // can;t access them before initializing them

let a = 10;
const c = 10; 

console.log(a);
console.log(c);

//--const 
// needs to be initialized during the declaration itslef
