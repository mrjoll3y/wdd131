document.addEventListener("DOMContentLoaded", function () {
    const temperature = 8; // Example static value in °C
    const windSpeed = 5; // Example static value in km/h

    function calculateWindChill(temp, speed) {
        return Math.round(13.12 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16));
    }

    const chillElement = document.getElementById('chill');
    if (temperature <= 10 && windSpeed > 4.8) {
        chillElement.textContent = calculateWindChill(temperature, windSpeed) + ' °C';
    } else {
        chillElement.textContent = 'N/A';
    }

    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
});
