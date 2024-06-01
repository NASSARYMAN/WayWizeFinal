
let countryPage = document.querySelector(".country-page")

document.addEventListener('DOMContentLoaded', async (event) => {
    console.log('Document has been fully loaded and parsed');
    let countriesString = localStorage.getItem("results")
    console.log(countriesString)
    const resultsObject = await JSON.parse(countriesString);
    console.log(resultsObject)

    countryPage.innerHTML = `Country : ${resultsObject['Country Name']}`

    // Your code here
});