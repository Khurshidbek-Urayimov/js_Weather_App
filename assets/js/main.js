const api = {
    key: "90d29504f400876aace7e1d5a3a2e345",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keypress", setQuery);

function setQuery(e) {
    if (e.keyCode == 13) {
        getResults(searchBox.value);
        console.log(searchBox.value);
    }
}

function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((weather) => {
            return weather.json();
        })
        .then(displayResults);
}

function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector(".location .city");
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector(".location .date");
    date.innerHTML = dateBuilder(now);

    let temp = document.querySelector(".temp");
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span`;

    let weatherEl = document.querySelector(".weather");
    weatherEl.innerHTML = weather.weather[0].main;

    let hilow = document.querySelector(".hi-low");
    hilow.innerHTML = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;

}

function dateBuilder(x) {
    let months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'];
    let days = ['Dushanba', 'Seshanba', 'Chorshanba0', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'];
    let day = days[x.getDay()];
    let date = x.getDate();
    let month = months[x.getMonth()];
    let year = x.getFullYear();

    return `${day}` `${date}` `${month}` `${year}`;
    
    
}