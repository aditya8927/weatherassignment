async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const result = document.getElementById("result");
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

    if (city === "") {
        result.innerText = "Please enter a city name";
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        if (data.cod !== 200) {
            throw new Error(data.message);
        }

        result.innerHTML = `
            <div class="weather-box">
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Humidity: ${data.main.humidity} %</p>
                <p>Condition: ${data.weather[0].main}</p>
            </div>
        `;
    } catch (error) {
        result.innerText = "Error: " + error.message;
    }
}


