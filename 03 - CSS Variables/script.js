
const tab = document.querySelectorAll('.control input');

function handelUpdate() {
	const input = this.dataset.sizing;
	console.log(input);
	if (input !== undefined)
		document.documentElement.style.setProperty(`--${this.name}`, this.value + input);
	else
		document.documentElement.style.setProperty(`--${this.name}`, this.value);
}

tab.forEach(tab => tab.addEventListener('change', handelUpdate));
tab.forEach(tab => tab.addEventListener('mouseover', handelUpdate));