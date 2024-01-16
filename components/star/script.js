let stars = document.querySelectorAll('.star');

let starContainer = document.querySelector('.star-container');

let starValueCount = 0;

starContainer.addEventListener('mouseover', function (e) {
	if (e.target.classList.contains('star')) {
		let starValue = e.target.getAttribute('data-index');

		for (let i = 0; i < stars.length; i++) {
			stars[i].classList.remove('star-filled');
		}

		for (let i = 0; i < starValue; i++) {
			stars[i].classList.add('star-filled');
		}
	}
});

starContainer.addEventListener('mouseout', function (e) {
	if (e.target.classList.contains('star')) {
		for (let i = 0; i < stars.length; i++) {
			stars[i].classList.remove('star-filled');
		}

		for (let i = 0; i < starValueCount; i++) {
			stars[i].classList.add('star-filled');
		}
	}
});

starContainer.addEventListener('click', function (e) {
	if (e.target.classList.contains('star')) {
		starValueCount = e.target.getAttribute('data-index');
		for (let i = 0; i < starValueCount; i++) {
			stars[i].classList.add('star-filled');
		}
	}
});

let count = document.querySelector('#count');

starContainer.addEventListener('click', function (e) {
	if (e.target.classList.contains('star')) {
		count.innerHTML = starValueCount;
	}
});
