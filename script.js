
const searchInput = document.querySelector("[data-search]")

let countries = []
const cardContainer = document.querySelector('.container');

/* let name;
let flag;
let alt;
let capital;
let region;
let population; */

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    let findCountry = `https://restcountries.com/v3.1/name/${value}?fullText=true`;
    cardContainer.innerHTML = '';
    //console.log(findCountry)
    fetch(findCountry)
    .then(response => response.json())
    .then((data) =>{
        console.log(data[0])
        const nameOfficial = data[0].name.official
        console.log(nameOfficial)
        const nameCommon = data[0].name.common
        const flag = data[0].flags.png
        const alt = data[0].flags.alt
        const capital = data[0].capital
        const region = data[0].region
        const population = data[0].population

        const isVisible = nameCommon.toLowerCase().includes(value) 
        //nameOfficial.toLowerCase().includes(value);
    
        const createCard = document.createElement('div');
        createCard.classList.add('card')
    
        const createDivFlag = document.createElement('div')
        createDivFlag.classList.add('image')
        createDivFlag.innerHTML = `<img src="${flag}" alt="${alt}">`;
        createCard.appendChild(createDivFlag);
    
        const textElem = document.createElement('div');
        textElem.classList.add('text-container')
        
        const nameElement = document.createElement('h2');
        nameElement.innerText = `${nameOfficial}`;
        textElem.appendChild(nameElement);
    
        const populationElem = document.createElement('p');
        populationElem.innerHTML = `<span class="name">Population:</span> ${population}`;
        textElem.appendChild(populationElem);
    
        const regionElem = document.createElement('p');
        regionElem.innerHTML = `<span class="name">Region:</span> ${region}`;
        textElem.appendChild(regionElem);
    
        const capitalElem = document.createElement('p');
        capitalElem.innerHTML = `<span class="name">Capital:</span> ${capital}`;
        textElem.appendChild(capitalElem)
    
        createCard.appendChild(textElem)
        cardContainer.appendChild(createCard);
        
})
})

/* fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then((data) => {
    countries = data.map(country => {
        const cardContainer = document.querySelector('.container');
    
        const name = country.name.official
        const flag = country.flags.png
        const alt = country.flags.alt
        const capital = country.capital
        const region = country.region
        const population = country.population
    
        const createCard = document.createElement('div');
        createCard.classList.add('card')
    
        const createDivFlag = document.createElement('div')
        createDivFlag.classList.add('image')
        createDivFlag.innerHTML = `<img src="${flag}" alt="${alt}">`;
        createCard.appendChild(createDivFlag);
    
        const textElem = document.createElement('div');
        textElem.classList.add('text-container')
        
        const nameElement = document.createElement('h2');
        nameElement.innerText = `${name}`;
        textElem.appendChild(nameElement);
    
        const populationElem = document.createElement('p');
        populationElem.innerHTML = `<span class="name">Population:</span> ${population}`;
        textElem.appendChild(populationElem);
    
        const regionElem = document.createElement('p');
        regionElem.innerHTML = `<span class="name">Region:</span> ${region}`;
        textElem.appendChild(regionElem);
    
        const capitalElem = document.createElement('p');
        capitalElem.innerHTML = `<span class="name">Capital:</span> ${capital}`;
        textElem.appendChild(capitalElem)
    
        createCard.appendChild(textElem)
        cardContainer.appendChild(createCard);
        return {name: name}
    })
}) */



/* 
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then((data) => {
    const cardContainer = document.querySelector('.container');
    for (let i = 0; i < 10; i++) { //need to change to data.lenght
        const name = data[i].name.common;
        const population = data[i].population.toString();

        let formattedPopulation = "";
        let counter = 0;
        for (let j = population.length - 1; j >= 0; j--) {
            formattedPopulation = population[j] + formattedPopulation;
            if (++counter === 3 && j !== 0) {
                formattedPopulation = "." + formattedPopulation;
                counter = 0;
            }
        }
        const flag = data[i].flags.png
        const alt = data[i].flags.alt
        const region = data[i].region
        const capital = data[i].capital
        const createCard = document.createElement('div');
        createCard.classList.add('card')

        const createDivFlag = document.createElement('div')
        createDivFlag.classList.add('image')
        createDivFlag.innerHTML = `<img src="${flag}" alt="${alt}">`;
        createCard.appendChild(createDivFlag);

        const textElem = document.createElement('div');
        textElem.classList.add('text-container')
        
        const nameElement = document.createElement('h2');
        nameElement.innerText = `${name}`;
        textElem.appendChild(nameElement);

        const populationElem = document.createElement('p');
        populationElem.innerHTML = `<span class="name">Population:</span> ${formattedPopulation}`;
        textElem.appendChild(populationElem);

        const regionElem = document.createElement('p');
        regionElem.innerHTML = `<span class="name">Region:</span> ${region}`;
        textElem.appendChild(regionElem);

        const capitalElem = document.createElement('p');
        capitalElem.innerHTML = `<span class="name">Capital:</span> ${capital}`;
        textElem.appendChild(capitalElem)

        createCard.appendChild(textElem)
        cardContainer.appendChild(createCard);
    }
}) */