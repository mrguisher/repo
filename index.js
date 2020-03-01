function imagesToggle() {
	const images = document.querySelectorAll('img');
	let counter = 0;
	document.addEventListener('keydown', (e) => {
		if (e.keyCode === 88) {
			images[counter].scrollIntoView()
			counter++
		} else if (e.keyCode === 90) {
			counter--
			images[counter].scrollIntoView()
		}
	})
}

function imagesToggleTimer() {
	console.log('mateusz changed this function')
}