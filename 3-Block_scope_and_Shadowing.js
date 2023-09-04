//Block  -> {---}
// a group of statements btw {}

// block-scope 
// what all variables wecan access into a block

{
	var a = 10; // hosted in Global scope
	let b = 20; // hoisted in local scope 
	let c = 20;// local scope
	console.log(a, b, c); // works fine
}

// console.log(a, b, c); // cant find b and c

// SHADOWING 
// block variable shadows a variable which is present outside the block

//var 
var a = 10;
console.log(a); // 10
{
	var a = 100; // var actually modifes the global 
	console.log(a); // 100
}
console.log(a); // 100


// let / const 
let  l = 10;
console.log(l); // 10
{
	let l = 100;
	console.log(l); // 100
}
console.log(l); // 10

// ILLEGAL SHADOWING 
// ori   shadow allow
// let -> val   NO 
// val -> val   YES 
// val -> let   YES