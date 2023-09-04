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
//  