let button = document.querySelectorAll('button');

button[0].addEventListener('click', function (e) {
	if (document.querySelector('table') !== null) {
		document.getElementsByTagName('table')[0].remove();
	}
	e.preventDefault();
	let tableTag = document.createElement('table');
	let rowValue = document.getElementById('rows').value;
	let colValue = document.getElementById('columns').value;

	tableTag.style.display = 'block';
	let tableValues = [];
	for (let i = 0; i < colValue; i++) {
		let v = [];
		for (let j = 0; j < rowValue; j++) {
			v.push(i * parseInt(rowValue) + j + 1);
		}
		if (i % 2 !== 0) tableValues.push(v.reverse());
		else tableValues.push(v);
	}
	for (let i = 0; i < rowValue; i++) {
		let tablerow = document.createElement('tr');
		for (let j = 0; j < colValue; j++) {
			let cellValue = document.createElement('td');
			cellValue.textContent = tableValues[j][i];
			tablerow.appendChild(cellValue);
		}
		tableTag.appendChild(tablerow);
		document.body.appendChild(tableTag);
	}
});

button[1].addEventListener('click', function () {
	document.getElementsByTagName('table')[0].remove();
	document.getElementById('rows').value = '';
	document.getElementById('columns').value = '';
});
