
async function firstCountry() {
    /* Fetch Country Description Json File*/
    const getCountriesDescription = async () => {
        let response = await fetch('../Local/Country-Info.json');

        // Check for successful response before parsing JSON
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    };

    let firstPage = document.querySelector(".first-country")


    /* Load each price category for provided a country name */
    function loadEachPrice(result, priceName) {
        const prices = result[priceName];
        if (!prices) return '';  // Return an empty string if the prices array is not found.

        const items = prices.map((price) => { return `<ul class="price-section-wrapper"><li class="price-text">${price.Cost}:</li> <li class="price-currency">${price.Value}<span class=currency>${result.Currency}</span></li></ul>` }).join('');
        return `
        <h2>${priceName}</h2>
        <div class="prices-wrapper">${items}</div>
    `;
    }

    /* Load description for each country provided a country name */
    function loadCountryDescription(countryDescriptions, passedCountry) {
        // Use filter to find the matching country
        const matchingCountry = countryDescriptions.filter(country => country.name === passedCountry);


        // Check if a match is found
        if (matchingCountry.length > 0) {
            return matchingCountry[0].description; // Return description of the first element (matched country)
        } else {
            return "Country description not found."; // Handle no match scenario
        }
    }

    /* Load country information when document loads */

        console.log('Document has been fully loaded and parsed');

        let countryDescription = await getCountriesDescription();
        console.log(countryDescription);

        let countriesString = localStorage.getItem("firstCountry")
        console.log(countriesString);

        const resultsObject = await JSON.parse(countriesString);

        firstPage.innerHTML = `
    <div class="country-page-container container fs-1">
        <h1 class="country-page-header my-5">${resultsObject['Country Name']} is a great country with beautiful touristic destinations discover everything about prices, transportations and more</h1>
        <div class="country-description">${loadCountryDescription(countryDescription,resultsObject['Country Name'])}</div>
        <div class="price-inside-wrapper">
            <div class="apartment-prices">${loadEachPrice(resultsObject, "Buy Apartment prices")}</div>
            <div class="childcare-prices">${loadEachPrice(resultsObject, "Childcare prices")}</div>
            <div class="clothing-Shoes-prices">${loadEachPrice(resultsObject, "Clothing And Shoes prices")}</div>
            <div class="markets-prices">${loadEachPrice(resultsObject, "Markets prices")}</div>
            <div class="rent-prices">${loadEachPrice(resultsObject, "Rent Per Month prices")}</div>
            <div class="restaurants-prices">${loadEachPrice(resultsObject, "Restaurants prices")}</div>
            <div class="financing-tax">${loadEachPrice(resultsObject, "Salaries And Financing prices")}</div>
            <div class="sports-leisure">${loadEachPrice(resultsObject, "Sports And Leisure prices")}</div>
            <div class="transportation-prices">${loadEachPrice(resultsObject, "Transportation prices")}</div>
            <div class="utilities-month-prices">${loadEachPrice(resultsObject, "Utilities Per Month prices")}</div>
        </div>
    </div>
`
}


async function secondCountry() {
    /* Fetch Country Description Json File*/
    const getCountriesDescription = async () => {
        let response = await fetch('../Local/Country-Info.json');

        // Check for successful response before parsing JSON
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    };

    let secondPage = document.querySelector(".second-country")


    /* Load each price category for provided a country name */
    function loadEachPrice(result, priceName) {
        const prices = result[priceName];
        if (!prices) return '';  // Return an empty string if the prices array is not found.

        const items = prices.map((price) => { return `<ul class="price-section-wrapper"><li class="price-text">${price.Cost}:</li> <li class="price-currency">${price.Value}<span class=currency>${result.Currency}</span></li></ul>` }).join('');
        return `
        <h2>${priceName}</h2>
        <div class="prices-wrapper">${items}</div>
    `;
    }

    /* Load description for each country provided a country name */
    function loadCountryDescription(countryDescriptions, passedCountry) {
        // Use filter to find the matching country
        const matchingCountry = countryDescriptions.filter(country => country.name === passedCountry);


        // Check if a match is found
        if (matchingCountry.length > 0) {
            return matchingCountry[0].description; // Return description of the first element (matched country)
        } else {
            return "Country description not found."; // Handle no match scenario
        }
    }

    /* Load country information when document loads */

        console.log('Document has been fully loaded and parsed');

        let countryDescription = await getCountriesDescription();
        console.log(countryDescription);

        let countriesString = localStorage.getItem("secondCountry")

        const resultsObject = await JSON.parse(countriesString);

        secondPage.innerHTML = `
    <div class="country-page-container container fs-1">
        <h1 class="country-page-header my-5">${resultsObject['Country Name']} is a great country with beautiful touristic destinations discover everything about prices, transportations and more</h1>
        <div class="country-description">${loadCountryDescription(countryDescription,resultsObject['Country Name'])}</div>
        <div class="price-inside-wrapper">
            <div class="apartment-prices">${loadEachPrice(resultsObject, "Buy Apartment prices")}</div>
            <div class="childcare-prices">${loadEachPrice(resultsObject, "Childcare prices")}</div>
            <div class="clothing-Shoes-prices">${loadEachPrice(resultsObject, "Clothing And Shoes prices")}</div>
            <div class="markets-prices">${loadEachPrice(resultsObject, "Markets prices")}</div>
            <div class="rent-prices">${loadEachPrice(resultsObject, "Rent Per Month prices")}</div>
            <div class="restaurants-prices">${loadEachPrice(resultsObject, "Restaurants prices")}</div>
            <div class="financing-tax">${loadEachPrice(resultsObject, "Salaries And Financing prices")}</div>
            <div class="sports-leisure">${loadEachPrice(resultsObject, "Sports And Leisure prices")}</div>
            <div class="transportation-prices">${loadEachPrice(resultsObject, "Transportation prices")}</div>
            <div class="utilities-month-prices">${loadEachPrice(resultsObject, "Utilities Per Month prices")}</div>
        </div>
    </div>
`
}

function callBoth() {
    secondCountry();
    firstCountry();
}

document.addEventListener('DOMContentLoaded', callBoth);
// document.addEventListener('DOMContentLoaded', firstCountry);