let btn = document.querySelector("#btn");

function clickBtnListner() {
	let count = 0;
	btn.addEventListener("click", function () {
		count++;
		console.log(count);
	})	
}

clickBtnListner();