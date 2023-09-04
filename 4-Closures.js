// CLOSURE
	// function together with its lexical scope bundled together

function x() {
	let a = 10;
	return function(){
		console.log(a);
	}
}

const xfunc = x();
console.log(xfunc); // will get use the actual inner func with its memory block

xfunc(); // will call the inner environment 


function x2() {
	let a = 10;
	function y() {
		console.log(a);
	}
	a = 1000;
	return y;
}

const x2func = x2();
console.log(x2func());


// USES 
// in module design pattern 
// in CURRYING
// in ONCE function
// in MEMORIZE function
// in miantaing state in async world 
// setTimeouts 
// iterators 

// DISADVANTAGES 
// memory consumptions since variables are not garbage-collector will end

function outest(a) {
	function outer(b) {
		function inner(c) {
			console.log(a, b, c);
		}
		return inner;
	}
	return outer;
}

const c = outest(10);
console.log(c(20)(30));