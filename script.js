

const container = document.querySelector('.container'); //call div where to be display the card
const searchInput = document.querySelector('#search'); //call input where i can get the value of

let countries = []; // create a empty array for the value of the input

// Function to render countries
function renderCountries(countryList) {
    container.innerHTML = ''; // Clear previous content
    countryList.forEach(country => {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h2');
        title.innerHTML = `Country: <span>${country.name.common}</span>`;
        card.appendChild(title);

        const capital = document.createElement('h3')
        capital.innerHTML = `<span class="span">${country.capital}</span>`;
        card.appendChild(capital);

        const flag = document.createElement('div')
        flag.innerHTML = `<img src=${country.flags.png}>`;
        card.appendChild(flag)

        const population = document.createElement('h4')
        population.innerHTML = `Population: <span class="span">${country.population}</span>`;
        card.appendChild(population)

        container.appendChild(card);
    });
}

// Fetch all countries when the page loads
fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
        countries = data;

        renderCountries(countries); // Display all countries initially
    })
    .catch(error => {
        console.error('Error fetching countries:', error);
    });

// Search functionality
searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(value)
    );
    renderCountries(filteredCountries); // Display filtered countries
});

