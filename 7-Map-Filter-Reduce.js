const arr = [1, 2, 3, 4 ,4 ,5]

// ----------- map 
	// to transform an array 

const double = arr.map((a) =>{
	return a * a ;
})
console.log(double);

const triple = arr.map((a) => {
	return a * a * a ;
})
console.log(triple);

function binary(x){
	return x.toString(2);
}
const bin = arr.map(binary);
console.log(bin);


// ---------- filter 

const odd =  arr.filter((x) => {
	return x % 2 !== 0;
});
console.log(odd);

// ---------- reduce

const sum = arr.reduce((acc, curr) => {
	acc += curr;
	return acc;
}, 0);
console.log(sum);

const max = arr.reduce((acc, curr) => {
	acc = Math.max(acc, curr);
	return acc;
}, Number.MIN_VALUE)
console.log(max);

//------ques 

const users = [
	{ firstName: "Harsh", lastName: "Bhabar", age: 23 },
	{ firstName: "Ayush", lastName: "Achar", age: 22 },
	{ firstName: "Mrinal", lastName: "Satya", age: 24 },
	{ firstName: "Sonu", lastName: "kumar", age: 22 } 
]

// get full names 
const fullNames = users.map((user)=>{
	return user.firstName + " " + user.lastName;
});
console.log(fullNames);

// count of each age

const ageCount = users.reduce((acc, user)=> {
	if(acc[user.age]){
		acc[user.age] = ++acc[user.age];
	}else{
		acc[user.age] = 1;
	}
	return acc;
}, {});

console.log(ageCount);

// name of people whose age < 23

const ans = users.filter((user) => user.age < 23).map((user) => user.firstName);
console.log(ans);