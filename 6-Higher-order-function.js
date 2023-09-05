// Higher order function 
	// a func that takes another func as an argument or returns us a fnction 

function area(r) {
	return Math.PI * r * r;
}
function diameter(r) {
	return Math.PI * 2 * r;
}

function calculate(cb) {
	return cb;
}

console.log(calculate(area(4)));
console.log(calculate(diameter(4)));

const radii = [1, 2, 3, 4];
console.log(radii.map((r) => area(r)));