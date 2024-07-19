const apikey ="ece542e71f1667a08dd44d017ac2d37a";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkweather(city){
    const respones =await fetch(apiurl + city + `&appid=${apikey}`);
    var data =await respones.json();
    console.log(data);
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src ="weather-app-img/images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src ="weather-app-img/images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src ="weather-app-img/images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src ="weather-app-img/images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src ="weather-app-img/images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", ()=>{

    checkweather(searchBox.value);
})
