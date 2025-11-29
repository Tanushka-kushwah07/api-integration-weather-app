async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    const apiKey = "7b8430c57aeb99e7dff3171532adc8e0";   
    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
        document.getElementById("weatherResult").innerHTML = "City not found!";
        return;
    }

    document.getElementById("weatherResult").innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>Temperature: <b>${data.main.temp}°C</b></p>
        <p>Weather: <b>${data.weather[0].description}</b></p>
        <p>Humidity: <b>${data.main.humidity}%</b></p>
        <p>Wind Speed: <b>${data.wind.speed} m/s</b></p>
    `;
}
