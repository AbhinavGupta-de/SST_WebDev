document.addEventListener('DOMContentLoaded', function () {
	const addButton = document.getElementById('add-progress-button');
	const progressContainer = document.getElementById('progress-container');

	addButton.addEventListener('click', addProgressBar);

	function addProgressBar() {
		// Create progress bar elements
		const progressBar = document.createElement('div');
		progressBar.className = 'progress-bar';

		const removeButton = document.createElement('button');
		removeButton.classList.add('remove-btn');
		removeButton.innerText = 'Remove';
		removeButton.addEventListener('click', function () {
			progressContainer.removeChild(barElement);
		});

		const barElement = document.createElement('div');
		barElement.className = 'bar';
		barElement.appendChild(progressBar);
		barElement.appendChild(removeButton);

		// Add the new progress bar to the container
		progressContainer.appendChild(barElement);

		// Animate the progress bar width from 0% to 100% over 5 seconds
		animateProgressBar(progressBar);
	}

	function animateProgressBar(progressBar) {
		let width = 0;
		const interval = 1000; // 1 second interval
		const totalDuration = 5000; // 5 seconds animation

		const animation = setInterval(function () {
			width += 20;
			progressBar.style.width = width + 'px';

			if (width >= 200) {
				clearInterval(animation);
			}
		}, interval);

		setTimeout(function () {
			clearInterval(animation);
		}, totalDuration);
	}
});
