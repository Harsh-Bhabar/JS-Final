function a(){
	function b() {
		console.log(x);
	}
	b();
	console.log(x);
}

var x = 10; // global obj variable
a();

// SCOPE CHAIN -lexical enviroment(local memory + lexical env of parent) chain of parent