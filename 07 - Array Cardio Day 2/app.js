const people = [
	{ name: 'Wes', year: 1988 },
	{ name: 'Kait', year: 1986 },
	{ name: 'Irv', year: 1970 },
	{ name: 'Lux', year: 2015 }
];

const comments = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen is my fav food ever', id: 123523 },
	{ text: 'Nice Nice Nice!', id: 542328 }
];

console.log('==============================================');
console.log('Array of Objects of People');

console.table(people);

console.log('is at least one person 19 or older? (some())');

const date = new Date;
const oneIsAdult = people.some(elem => date.getFullYear() - elem.year >= 19);
console.log({oneIsAdult});

console.log('is everyone 19 or older? (every())');
const allAreAdult = people.every(elem => date.getFullYear() - elem.year >= 19);
console.log({allAreAdult});

console.log('==============================================');
console.log('Array of Objects of Comments');
console.table(comments);

console.log('find the comment with the ID of 823423 (find())');
const id = 823423;
const findId = comments.find((elem) => {
	return elem.id === id;
});
console.log(findId);

console.log('delete the comment with the ID of 823423 (findIndex())');
const indexId = comments.findIndex(rank => rank.id === id);
console.log(indexId);
// delete comments[indexId];
indexId !== -1 && comments.splice(indexId, 1);
console.table(comments);

console.log('==============================================');