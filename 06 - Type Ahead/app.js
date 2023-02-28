const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(url)
.then(response => response.json())
.then(data => cities.push(...data));

const findMatches = (val, cities) => {
  return cities.filter(search => {
    const regex = new RegExp(val, 'gi');
    return search.city.match(regex) || search.state.match(regex);
  });
}

const editPopulation = (popul) => {
  const dig = popul.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return dig;
}

// editPopulation(8405837);

const DisplayElement = () => {
  const inputVal = document.querySelector('input');
  if (inputVal.value !== '') {
    const matches = findMatches(inputVal.value, cities);
    const elem = matches.map(place => {
      const regex = new RegExp(inputVal.value, 'gi');
      const cityName = place.city.replace(regex, `<span class="hl">${inputVal.value}</span>`);
      const stateName = place.state.replace(regex, `<span class="hl">${inputVal.value}</span>`);
      return `<li><span class="city">${cityName}, ${stateName}</span><span class="popul">${editPopulation(place.population)}</span></li>`
    }).join('');
    outList.innerHTML = elem;
  }
}

const inputForm = document.querySelector('form');
const outList = document.querySelector('.list');

inputForm.addEventListener('input', DisplayElement);
inputForm.addEventListener('keydown', DisplayElement);
