const API_KEY = "acd10caa49adef09327cba0c68a2d27c";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temperature = document.querySelector("#today-weather #temp");
      const weather = document.querySelector("#today-weather #weather");
      const city = document.querySelector("#today-weather #city");
      temperature.innerText = `${Math.floor(data.main.temp)}°`;
      weather.innerText = `${data.weather[0].main}`;
      city.innerText = data.name;
      weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); //자바스크립트가 url을 부른다.(promise)
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// 자동으로 매개변수 하나 넘겨준다.
