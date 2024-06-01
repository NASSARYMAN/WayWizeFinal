

let getCountriesContainer = document.querySelector(".list-country-container");
let getCountriesSearchButton = document.querySelector(".list-country-button");


getCountriesSearchButton.addEventListener(
  
  "click",
  async (e)=> {
    let cityValue = document.getElementById("city").value
    let countryValue = document.getElementById("country").value 

    await fetchCountriesFromApi(cityValue, countryValue)
  }
);

/* Fetch countries prices from api */
async function fetchCountriesFromApi(cityName, countryName) {
  const url = `https://cities-cost-of-living-and-average-prices-api.p.rapidapi.com/cost_of_living?country=${countryName}`;
  const options = {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': '05718957c0msh786f78e7a26b1dap1e04e9jsne64a37d2225a',
      'X-RapidAPI-Host': 'cities-cost-of-living-and-average-prices-api.p.rapidapi.com'
    },
  };

  try {
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


/* Load country and insert into country html page */
function loadCountry (result) {
  result.map((object)=>{

  })
}

