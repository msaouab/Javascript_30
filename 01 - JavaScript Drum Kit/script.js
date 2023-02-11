
function removeTrans(e) {
	if (e.propertyName != 'transform')
		return ;
	e.target.classList.remove('play');
}

function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	if (!audio)
		return ;
	
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	console.log(key);
	key.classList.add('play');
	audio.currentTime = 0;
	audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
window.addEventListener('keydown', playSound);
keys.forEach(elem => elem.addEventListener('transitionend', removeTrans));
