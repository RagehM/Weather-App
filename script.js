const apikey = "751cd3711ccd8d2f2a19d6e0ce67a899";
var apiurl = "";

function get_weather(){
    var entered_city = document.getElementById("search_for_city").value;
    apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="+entered_city
    checkweather();
}
async function checkweather(){
    const response = await fetch(apiurl + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data)

    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) +"°c";
    document.getElementById("humidity_percent").innerHTML = data.main.humidity + "%";
    document.getElementById("speed_percent").innerHTML = data.wind.speed + " Km/h";

    if(data.weather[0].main == "Clouds"){
        Weathericon.src = "images/clouds.png";    
    }
    else if(data.weather[0].main == "Clear"){
        Weathericon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        Weathericon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        Weathericon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        Weathericon.src = "images/mist.png";
    }
}
