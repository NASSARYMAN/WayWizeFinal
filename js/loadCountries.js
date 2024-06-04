

let getCountriesContainer = document.querySelector(".list-country-container");
let getCountriesSearchButton = document.querySelector(".list-country-button");
let searchButtonComparision = document.querySelector(".search-button-comparision");
let countrylist = document.querySelector(".country-list");
let countryFlagContainer = document.querySelector(".country-flag-container");


const getCountryInfo = async () => {
  let response = await fetch('../Local/Country-Info.json');

  // Check for successful response before parsing JSON
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

document.addEventListener('DOMContentLoaded', async (event) => {
  let countryInfo = await getCountryInfo();
  console.log(countryInfo);

  countryInfo.forEach(country => {
    console.log(country.name);
    let countryName = country.name;
    let flagUrl = country.flag;
    countrylist.innerHTML += `
      <ul class="country-flag-container">
        <li><img src="${flagUrl}" class="country-flag"/></li>
        <li class="list-country-name">${countryName}</li>
      </ul>    
    `; 
  });

});

getCountriesSearchButton.addEventListener(
  "click",
  async (e) => {
    let countryValue = document.getElementById("country-input").value
    await fetchCountriesFromApi(countryValue)
  }
);


searchButtonComparision.addEventListener(
  "click",
  async (e) => {
    let firstCountry = document.getElementById("first-comparison-input").value
    let secondCountry = document.getElementById("second-comparison-input").value
    await fetchCountriesComparision(firstCountry, secondCountry)
  }
);

document.body.addEventListener(
  "click",
  async (e) => {
    if (e.target && e.target.matches(".list-country-name")) {
      let countryValue = e.target.textContent;
      console.log(countryValue + " ddddcczipppppppp");
      console.log("555555555555 ");
      await fetchCountriesFromApi(countryValue);
    }
  }
);

/* Fetch countries prices from api */
async function fetchCountriesFromApi(countryName) {
  const url = `https://cities-cost-of-living-and-average-prices-api.p.rapidapi.com/cost_of_living?country=${countryName}`;
  const options = {
    method: "GET",
    headers: {
      /*Bring this token from rapid api */
      // 'X-RapidAPI-Key': '05718957c0msh786f78e7a26b1dap1e04e9jsne64a37d2225a',
      // 'X-RapidAPI-Host': 'cities-cost-of-living-and-average-prices-api.p.rapidapi.com'
      "X-RapidAPI-Key": "4df15bef19msh966550bb17fcd97p1258c8jsn4af2b1187c63",
      "X-RapidAPI-Host":"cities-cost-of-living-and-average-prices-api.p.rapidapi.com",
    },
  };

  try {
    console.log(countryName);
    const response = await fetch(url, options);
    const result = await response.json();
    let queryString = "hh"
    window.open(`country.html?${queryString}`, '_blank');
    localStorage.setItem("results", JSON.stringify(result))
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

async function fetchCountriesComparision(firstCountry, secondCountry) {
  const firstUrl = `https://cities-cost-of-living-and-average-prices-api.p.rapidapi.com/cost_of_living?country=${firstCountry}`;
  const secondUrl = `https://cities-cost-of-living-and-average-prices-api.p.rapidapi.com/cost_of_living?country=${secondCountry}`;
  const options = {
    method: "GET",
    headers: {
      /*Bring this token from rapid api */
      // 'X-RapidAPI-Key': '05718957c0msh786f78e7a26b1dap1e04e9jsne64a37d2225a',
      // 'X-RapidAPI-Host': 'cities-cost-of-living-and-average-prices-api.p.rapidapi.com'

      "X-RapidAPI-Key": "4df15bef19msh966550bb17fcd97p1258c8jsn4af2b1187c63",
      "X-RapidAPI-Host":"cities-cost-of-living-and-average-prices-api.p.rapidapi.com",
    },
  };

  try {
    console.log(firstCountry);
    console.log(secondCountry);

    const firstResponse = await fetch(firstUrl, options);
    const firstCountryResult = await firstResponse.json();
    
    const secondResponse = await fetch(secondUrl, options);
    const secondCountryResult = await secondResponse.json();
    
    let queryString = "hh"
    window.open(`comparision.html?${queryString}`, '_blank');

    localStorage.setItem("firstCountry", JSON.stringify(firstCountryResult))
    localStorage.setItem("secondCountry", JSON.stringify(secondCountryResult))

    console.log(firstCountryResult);
    console.log(secondCountryResult);
  } catch (error) {
    console.error(error);
  }
}