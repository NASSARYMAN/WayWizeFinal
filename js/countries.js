
/* Country Description */
const getCountriesDescription = async () => {
    let response = await fetch('../Local/countryDescription.json');
  
    // Check for successful response before parsing JSON
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    const countries = data.Descriptions;
    return countries;
  };
  
// let dd = getCountriesDescription()
// console.log(dd.then((data)=>{console.log(data)}));

// let response = fetch('../Local/countryDescription.json').then((response) => {
//     return response.json();
// }).then((data) => {
//     console.log(data);
//     return data;
// }).catch((error) => {
//     console.error('Error:', error);
// });

let countryPage = document.querySelector(".country-page")


function loadEachPrice(result, priceName) {
    const prices = result[priceName];
    if (!prices) return '';  // Return an empty string if the prices array is not found.

    const items = prices.map((price) => {return `<li>${price.Cost}:</li> <li>${price.Value}<span class=currency>${result.Currency}</span></li>`}).join('');
    return `
        <h2>${priceName}</h2>
        <ul>${items}</ul>
    `;
}
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
document.addEventListener('DOMContentLoaded', async (event) => {

    let countryDescription = await getCountriesDescription();
    console.log(countryDescription);

   console.log(loadCountryDescription(countryDescription, "Egypt"));


    console.log('Document has been fully loaded and parsed');
    let countriesString = localStorage.getItem("results")
    console.log(countriesString)
    const resultsObject = await JSON.parse(countriesString);
    console.log(resultsObject)

    // countryPage.innerHTML = `Country : ${resultsObject['Country Name']}`
    countryPage.innerHTML = `
    <div class="country-page-container">
        <h1 class="country-page-header">${resultsObject['Country Name']} is a great country with beautiful touristic destinations discover everything about prices, transportations and more</h1>
        <div class="country-description">${loadCountryDescription(countryDescription,resultsObject['Country Name'])}</div>
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
`
});