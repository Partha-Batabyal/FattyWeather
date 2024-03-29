const key = "ec4fd8be6f99939122dabbb131fb837f";
let url = `https://api.openweathermap.org/data/2.5/weather?&appid=${key}&units=metric&q=`;
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let cityName = document.querySelector(".cityName p");
let temp = document.querySelector(".tempData");
let humidity = document.querySelector(".humidityData");
let data = input.value;


input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});



btn.addEventListener("click", async () => {
  try {
    let res = await fetch(url + input.value);
    let data = await res.json();
    cityName.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + " °C";
    humidity.innerHTML = data.main.humidity + " %";
  } catch (err) {
    console.log(err);
  }
});
