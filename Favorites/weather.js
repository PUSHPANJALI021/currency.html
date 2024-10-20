document.getElementById("getWeather").addEventListener("click", function () {
    const city = document.getElementById("city").value;
    const apiKey = "662069d2f99d7b22a10507b031ff29b6"
    const apiUrl = https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no;
  
    if (city === "") {
      showError("Please enter a city name.");
      return;
    }
  
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found.");
        }
        return response.json();
      })
      .then((data) => {
        displayWeather(data);
      })
      .catch((error) => {
        showError(error.message);
      });
  });
  function displayWeather(data) {
    const weatherDiv = document.getElementById("weatherResult");
    const errorDiv = document.getElementById("error");
    errorDiv.textContent = ""; // Clear any previous errors
  
    const { location, current } = data;
    const temperature = current.temp_c;
    const description = current.condition.text;
    const cityName = location.name;
    const country = location.country;
  
    weatherDiv.innerHTML = `
              <h2>${cityName}, ${country}</h2>
              <p>Temperature: ${temperature}°C</p>
              <p>Condition: ${description}</p>
          `;
  }
  
  function showError(message) {
    const errorDiv = document.getElementById("error");
    errorDiv.textContent = message;
    document.getElementById("weatherResult").innerHTML = ""; // Clear previous result
  }