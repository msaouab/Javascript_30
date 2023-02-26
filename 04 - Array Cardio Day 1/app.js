const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
	{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
	{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
	{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
	{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
	{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
	'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
	'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
	'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
	'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
	'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

console.log('Array of Objects of Inventors');

//	1. Filter the list of inventors for those who were born in the 1500's
console.log(inventors);
console.log('1. Filter the list of inventors for those who were born in the 1500\'s');

const fifteen = inventors.filter(elem => elem.year >= 1500 && elem.year < 1600);
console.table(fifteen);

//	2. Give us an array of the inventors first and last names
console.log('2. Give us an array of the inventors first and last names');
const flname = inventors.map(inventors => `${inventors.first} ${inventors.first}`);
console.log(flname);

//	3. Sort the inventors by birthdate, oldest to youngest
console.log('3. Sort the inventors by birthdate, oldest to youngest');
const sortbybd = inventors.sort(
	(a, b) =>
	(a.year > b.year) ? 1 : -1
);
console.table(sortbybd);

//	4. How many years did all the inventors live all together?
const totalYears = inventors.reduce((total, inventor) => {
	return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

//	5. Sort the inventors by years lived
const livedOrder = inventors.sort((a, b) => {
	firstInventor = (a.passed - a.year);
	lastInventor = (b.passed - b.year);
	return firstInventor > lastInventor ? -1 : 1;
})
console.table(livedOrder);

//	Array of People
console.log(people);

//	Sort the people alphabetically by last name
const order = people.sort((a, b) => {
	const [alast, afirst] = a.split(' ');
	const [blast, bfirst] = b.split(' ');
	return a > b ? 1 : -1;
})

console.table(order);

//	==============================================
//	Array of Transportation Names
console.log('==============================================')
console.log('Array of Transportation Names');
console.log(data);

//	Sum up the instances of each of these
console.log('Sum up the instances of each of these');
const	transport = data.reduce(function(obj, item) {
	if (!obj[item])
		obj[item] = 0;
	obj[item]++;
	return obj;
}, {});
console.log(transport);

console.log('==============================================')