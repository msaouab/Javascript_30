const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let coord = {
	x: 0,
	y: 0
};
ctx.lineWidth = 100;
ctx.strokeStyle = '#acd3ed';

resize();

function	resize () {
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
}

function	reposition (e) {
	coord.x = e.clientX - canvas.offsetLeft;
	coord.y = e.clientY - canvas.offsetTop;
}

function	start (e) {
	document.addEventListener('mousemove', draw);
	reposition(e);
}

function	stop () {
	document.removeEventListener('mousemove', draw);
}

const getRandomNumber = (max, min) => {
	return Math.random() * (max - min) + min;
}

let isDrawing = false;
let hsl = getRandomNumber(360, 0);
let direction = true;

function	draw (e) {
	ctx.beginPath();
	console.log(ctx.lineWidth)
	ctx.lineCap = 'round';
	ctx.strokeStyle = `hsl(${hsl++}, 100%, 50%)`;
	ctx.moveTo(coord.x, coord.y);
	reposition(e);
	ctx.lineTo(coord.x, coord.y);
	ctx.stroke();
	if (ctx.lineWidth >= 200 || ctx.lineWidth <= 1)
			direction = !direction;
	if (direction)
		ctx.lineWidth++;
	else
	ctx.lineWidth--;
	
	if (hsl >= 360)
		hsl = 0;
}
document.addEventListener('mousedown', start);
document.addEventListener('mouseup', stop);
document.addEventListener('resize', resize);
