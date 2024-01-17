document.addEventListener('DOMContentLoaded', function () {
	const inputs = document.querySelectorAll('.input');

	// Add event listeners to each input field
	inputs.forEach((input, index) => {
		input.addEventListener('input', function (event) {
			handleInput(event, index);
		});

		input.addEventListener('keydown', function (event) {
			handleKeyDown(event, index);
		});
	});

	// Function to handle input events
	function handleInput(event, index) {
		const inputValue = event.target.value;

		if (/^\d$/.test(inputValue)) {
			if (index < inputs.length - 1) {
				// Move focus to the next input field
				inputs[index + 1].focus();
			}
		} else {
			// Clear the input if it's not a single-digit number
			event.target.value = '';
		}
	}

	// Function to handle keydown events (Backspace and Delete)
	function handleKeyDown(event, index) {
		const inputValue = inputs[index].value;

		if (event.key === 'Backspace' || event.key === 'Delete') {
			// Clear the current input
			inputs[index].value = '';

			if (index > 0) {
				// Move focus to the previous input field
				inputs[index - 1].focus();
			}
		}
	}
});
