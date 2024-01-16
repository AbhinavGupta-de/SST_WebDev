let addButton = document.getElementById('add');

addButton.addEventListener('click', () => {
	let number = document.getElementById('number');
	let increment = document.getElementById('increment');

	console.log(number.innerHTML);
	console.log(increment.value);

	number.innerHTML = parseInt(number.innerHTML) + parseInt(increment.value);
});

let subtractButton = document.getElementById('subtract');

subtractButton.addEventListener('click', () => {
	let number = document.getElementById('number');
	let increment = document.getElementById('increment');

	number.innerHTML = parseInt(number.innerHTML) - parseInt(increment.value);
});

let resetButton = document.getElementById('reset');

resetButton.addEventListener('click', () => {
	let number = document.getElementById('number');

	number.innerHTML = 0;
});
