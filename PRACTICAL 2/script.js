const weatherData = {
    Vadodara: { temp: "25°C", condition: "Sunny", humidity: "65%", windSpeed: "12 km/h" },
    Ahemdabad: { temp: "28°C", condition: "Partly Cloudy", humidity: "58%", windSpeed: "15 km/h" },
    Nadiad: { temp: "24°C", condition: "Clear", humidity: "62%", windSpeed: "8 km/h" },
    Rajkot: { temp: "26°C", condition: "Cloudy", humidity: "70%", windSpeed: "10 km/h" },
    Surat: { temp: "29°C", condition: "Hot", humidity: "75%", windSpeed: "5 km/h" },
    Mumbai: { temp: "32°C", condition: "Humid", humidity: "80%", windSpeed: "18 km/h" },
    Delhi: { temp: "35°C", condition: "Very Hot", humidity: "45%", windSpeed: "20 km/h" },
    Bangalore: { temp: "22°C", condition: "Pleasant", humidity: "55%", windSpeed: "12 km/h" },
    Chennai: { temp: "34°C", condition: "Hot & Humid", humidity: "85%", windSpeed: "14 km/h" },
    Kolkata: { temp: "31°C", condition: "Warm", humidity: "78%", windSpeed: "16 km/h" }
};

function showLoading() {
    const button = document.getElementById("getWeather");
    button.classList.add("loading");
}

function hideLoading() {
    const button = document.getElementById("getWeather");
    button.classList.remove("loading");
}

function displayWeatherResult(content, isError = false) {
    const result = document.getElementById("result");
    result.innerHTML = content;
    result.className = `weather-result show ${isError ? 'error' : ''}`;
}

function createWeatherCard(city, data) {
    return `
        <div class="weather-info">
            <h3 style="color: #2d3748; margin-bottom: 15px; font-size: 1.4rem;">${city}</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
                <div style="text-align: center; padding: 12px; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <div style="font-size: 1.8rem; font-weight: 700; color: #74b9ff; margin-bottom: 5px;">${data.temp}</div>
                    <div style="font-size: 0.9rem; color: #718096;">Temperature</div>
                </div>
                <div style="text-align: center; padding: 12px; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <div style="font-size: 1rem; font-weight: 600; color: #6c5ce7; margin-bottom: 5px;">${data.condition}</div>
                    <div style="font-size: 0.9rem; color: #718096;">Condition</div>
                </div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <div style="padding: 8px; background: rgba(116, 185, 255, 0.1); border-radius: 8px; text-align: center;">
                    <span style="font-weight: 600; color: #2d3748;">Humidity:</span> ${data.humidity}
                </div>
                <div style="padding: 8px; background: rgba(108, 92, 231, 0.1); border-radius: 8px; text-align: center;">
                    <span style="font-weight: 600; color: #2d3748;">Wind:</span> ${data.windSpeed}
                </div>
            </div>
        </div>
    `;
}

document.getElementById("getWeather").addEventListener("click", ()=> {
    const cityInput = document.getElementById("inputCity").value.trim();
    
    if (!cityInput) {
        displayWeatherResult("Please enter a city name to get weather information.", true);
        return;
    }
    
    // Show loading state
    showLoading();
    
    // Simulate API call delay
    setTimeout(() => {
        const city = cityInput.charAt(0).toUpperCase() + cityInput.slice(1).toLowerCase();
        
        if (weatherData[city]) {
            const weatherCard = createWeatherCard(city, weatherData[city]);
            displayWeatherResult(weatherCard);
        } else {
            displayWeatherResult(
                `Weather information for "${city}" is not available in our database. Try: ${Object.keys(weatherData).join(', ')}.`, 
                true
            );
        }
        
        hideLoading();
    }, 1000);
});

// Add Enter key support for input
document.getElementById("inputCity").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        document.getElementById("getWeather").click();
    }
});

// Clear result when input changes
document.getElementById("inputCity").addEventListener("input", () => {
    const result = document.getElementById("result");
    result.classList.remove("show");
});