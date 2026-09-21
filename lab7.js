const API_KEY = "YOUR_API_KEY";

const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", getWeather);

async function getWeather() {

    let city = document.getElementById("cityInput").value;

    if (city == "") {
        document.getElementById("errorMessage").textContent =
            "Please enter a city name";
        return;
    }

    try {

        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        let data = await response.json();

        document.getElementById("cityName").textContent =
            data.name;

        document.getElementById("temperature").textContent =
            data.main.temp + " °C";

        document.getElementById("condition").textContent =
            data.weather[0].description;

        document.getElementById("humidity").textContent =
            data.main.humidity;

        document.getElementById("wind").textContent =
            data.wind.speed;

        document.getElementById("weatherIcon").src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        document.getElementById("errorMessage").textContent = "";

    }

    catch (error) {

        document.getElementById("errorMessage").textContent =
            "City not found";

        document.getElementById("cityName").textContent =
            "City Name";

        document.getElementById("temperature").textContent =
            "-- °C";

        document.getElementById("condition").textContent =
            "Weather Condition";

        document.getElementById("humidity").textContent =
            "--";

        document.getElementById("wind").textContent =
            "--";

        document.getElementById("weatherIcon").src = "";
    }
}