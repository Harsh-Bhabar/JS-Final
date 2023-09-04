function counter() {
	let count = 0;
	return function incrementCnt(){
		count++;
		console.log(count);
	}
}

const cnt = counter();
cnt();
cnt();
cnt();
cnt();

// for scalability - we use constructor function 

function counter2(){
	let count = 0;

	this.increseCnt = () => {
		return count++;
	}

	this.decreaseCnt = () => {
		return count--;
	}
}

const c2 = new counter2();
console.log(c2.increseCnt());
console.log(c2.increseCnt());
console.log(c2.increseCnt());
console.log(c2.increseCnt());
console.log(c2.decreaseCnt());