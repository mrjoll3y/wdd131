// Function to dynamically update footer information
function updateFooter() {
    const year = document.querySelector("#currentyear");
    const lastModified = document.querySelector("#lastModified");

    // get the current year for footer
    const date = new Date();
    year.innerHTML = date.getFullYear();

    //get the last modification date of the home page
    let lastMod = document.lastModified;
    lastModified.innerHTML = `Last Modified: ${lastMod}`;
}

// Function to populate a table section with data
function populateTable(sectionId, data) {
    let section = document.querySelector(sectionId);
    for (const key in data) {
        section.innerHTML += `<tr><th>${key}: </th><td>${data[key]}</td></tr>`;
    }
}

// Object for general data section
document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code here, e.g., populating tables
    const data = {
        area: "647.33 km² (249.94 sq mi)",
        population: "126.2 Million",
        capital: "Mexico City",
        languages: "Spanish",
        currency: "Mexican Peso",
        timeZone: "EST — Eastern Standard Time (UTC/GMT -5 hours)",
        callingCode: "+987",
        internetTld: ".mx"
    };
    let dataSection = document.querySelector("#data-table");
    
    // Populate the table with data
    for (const key in data) {
        dataSection.innerHTML += `<tr><th>${key}:</th><td>${data[key]}</td></tr>`;
    }

    // Your weather data section code here
});

// Populate data table
populateTable("data-table", data);

// Calculate wind chill function
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

// Object for weather section data
const weatherData = {
    temperature: "32 &#8451;",  // Celsius symbol
    condition: "Sunny",
    wind: "3 km/h",
    windChill: "N/A"
};

// Condition to check if wind chill should be calculated
let temp = 32;
let windSpeed = 3;
if (temp <= 10 && windSpeed > 4.8) {
    weatherData.windChill = `${calculateWindChill(temp, windSpeed).toFixed(1)} &#8451;`;
}

// Populate weather table
populateTable("weather-table", weatherData);

// Update the footer
updateFooter();