function x() {
	let v = 10;	
	console.log(v);

	setTimeout(() => {
		console.log("YOYO");
	}, 1000);

	console.log("Hell0");
}
x(); 
// output 
// 10
// Hello 
// YOYO

//  -------------  0 to 5

//problem
function func(){
	for(var i = 0; i<=5; i++){
		setTimeout(()=>{
			console.log(i);
		}, i*1000);
	}
}
func(); // 6 6 6 6 6 6 

//solved using let
function func2() {
	for (let i = 0; i <= 5; i++) {
		setTimeout(() => {
			console.log(i);
		}, i * 1000);
	}
}
func2(); // 0 1 2 3 4 5 

//solved using closure
function func3(){
	for (var i = 0; i <= 5; i++) {
		function close(x) {
			setTimeout(() => {
				console.log(x);
			}, i * 1000);
		}
		close(i);
	}
}
func3(); // 0 1 2 3 4 5 