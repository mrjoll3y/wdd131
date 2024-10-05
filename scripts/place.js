
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");


const date = new Date();
year.innerHTML = date.getFullYear();


let lastMod = document.lastModified;
lastModified.innerHTML = `Last Modified: ${lastMod}`;


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


const weatherData = {};
let temp = 28;
const tempData = `${temp} &#8451;`;
weatherData.temperature = tempData;
weatherData.condition = "Cloudy";

let windSpeed = 13; 
const windData = `${windSpeed} km/h`;
weatherData.wind = windData;


if (temp <= 10 && windSpeed > 4.8) {
    let windChillData = `${calculateWindChill(temp, windSpeed).toFixed(1)} &#8451;`;
    weatherData.windChill = windChillData;
} else {
    weatherData.windChill = "N/A";
}


function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

let dataSection = document.querySelector("#data-table");
for (const key in data) {
    dataSection.innerHTML += `<tr><th>${key}:</th><td>${data[key]}</td></tr>`;
}

let weatherSection = document.querySelector("#weather-table");
for (const key in weatherData) {
    weatherSection.innerHTML += `<tr><th>${key}:</th><td>${weatherData[key]}</td></tr>`;
}