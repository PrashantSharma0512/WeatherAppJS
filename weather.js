const apiKey = "6544f8390da4487a041978257f3738aa"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector("#Search");
const searchBtn = document.querySelector("#i");
const weatherImg = document.querySelector(".img");

async function checkweather(City) {
    const response = await fetch(apiUrl + "&q=" + City + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weatherMenu").style.display = "none";
    } else {
        let dets = await response.json();
        document.querySelector("#city").innerHTML = dets.name;
        document.querySelector("#cityTemp").innerHTML = Math.round(dets.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = dets.main.humidity + "%";
        document.querySelector(".wind-speed").innerHTML = dets.wind.speed + " kmph";
        if (dets.weather[0].main == "Clouds") {
            weatherImg.src = "Asset/clouds.png"
        }
        else if (dets.weather[0].main == "Clear") {
            weatherImg.src = "Asset/clear.png"
        }
        else if (dets.weather[0].main == "Fog") {
            weatherImg.src = "Asset/mist.png"
        }
        else if (dets.weather[0].main == "Mist") {
            weatherImg.src = "Asset/mist.png"
        }
        else if (dets.weather[0].main == "Rain") {
            weatherImg.src = "Asset/rain.png"
        }
        else if (dets.weather[0].main == "Humidity") {
            weatherImg.src = "Asset/humidity.png"
        }
        else if (dets.weather[0].main == "Dizzle.png") {
            weatherImg.src = "Asset/dizzle.png"
        }

        document.querySelector(".weatherMenu").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}
searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
})