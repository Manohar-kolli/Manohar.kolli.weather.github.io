const apiKey = "YOUR_API_KEY_HERE";

async function getWeather(){

    const city = document.getElementById("cityInput").value;

    const apiURL =
    "https://api.openweathermap.org/data/2.5/weather?q="
    + city +
    "&units=metric&appid=" + "9533793a5a33b0dead77e572c51abe7e";

    const response = await fetch(apiURL);
    const data = await response.json();

    document.getElementById("city").innerText = data.name;
    document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
    document.getElementById("humidity").innerText = data.main.humidity + "%";
    document.getElementById("wind").innerText = data.wind.speed + " km/h";
}
