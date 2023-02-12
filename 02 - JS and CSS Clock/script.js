
const handHour = document.querySelector('.hour');
const handMin = document.querySelector('.min');
const handSec = document.querySelector('.sec');
const digitalClock = document.querySelector('.digital');

console.log(digitalClock)

function SetTime() {
	
	setInterval(() => {
		const date = new Date();
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const seconds = date.getSeconds();

		const hourAngle = ((hours / 12) * 360) + ((minutes / 60) * 30);
		const minuteAngle = ((minutes / 60) * 360) + ((seconds / 60) * 6);
		const secondsAngle = (seconds / 60) * 360 + 90;

		handHour.style.transform = `rotate(${hourAngle}deg)`;
		handMin.style.transform = `rotate(${minuteAngle}deg)`;
		handSec.style.transform = `rotate(${secondsAngle}deg)`;

		digitalClock.innerHTML = `${hours > 10 ? hours : `0${hours}`}`
								+ `:${minutes > 10 ? minutes: `0${minutes}`}`
								+ `:${seconds > 10 ? seconds: `0${seconds}`}`
	}, 1000);
}

SetTime()