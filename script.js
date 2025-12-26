function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");

  let apiKey = "904a433ef2bc43b3a3fab6dt34359of5";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=${apiKey}`;
  axios.get(apiUrl).then(weather);

  function weather(response) {
    let result = Math.round(response.data.temperature.current);
    console.log(result);

    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = searchInputElement.value;

    let cityTemp = document.querySelector(".current-temperature-value");
    cityTemp.innerHTML = `${result}`;
  }
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();
currentDateELement.innerHTML = formatDate(currentDate);

/*Write weather function
call/create weather function in search function*/
