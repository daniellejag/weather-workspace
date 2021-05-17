let currentTime = new Date();
let currentDayandTime = document.querySelector("h3");



let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0 ${hours}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0 ${minutes}`;
}
let currentDay = days[currentTime.getDay()];
currentDayandTime.innerHTML = `${currentDay}  ${hours}:${minutes}`;





function searchCurrentTemp(event) {
  event.preventDefault();
  let city = document.querySelector("#searchCity-input");
  let heading = document.querySelector("h1");
  heading.innerHTML = city.value;
}

let form = document.querySelector("#searchCityForm");
form.addEventListener("submit", searchCurrentTemp);





function convertToC() {

  document.getElementById("current-temperature").innerHTML = 19;
}
let celsiusLink = document.querySelector("#celsius-icon");
celsiusLink.addEventListener("click", convertToC);
function convertToF() {
  document.getElementById("current-temperature").innerHTML = 66;
}
let fahrenheitLink = document.querySelector("#fahrenheit-icon");
fahrenheitLink.addEventListener("click", convertToF);

















