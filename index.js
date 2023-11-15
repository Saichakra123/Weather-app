

const apiKey = "fea16c0c36626bdefb320fabc8769922";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cityname = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
const invalidcityname = document.querySelector(".error");
async function checkweather(city) {
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(response.status==404){
        invalidcityname.style.display="block";
    }else{
        invalidcityname.style.display="none";
        var data = await response.json();
    console.log(data);
    if(data.weather[0].main=="Clouds"){
        weathericon.src= "images/clouds.png";
    }else if(data.weather[0].main=="Clear"){
        weathericon.src = "images/clear.png";
    }else if(data.weather[0].main =="Rain"){
        weathericon.src = "images/Rain.png";
    }else if(data.weather[0].main=="Drizzle"){
        weathericon.src = "images/drizzle.png";
    }else{
        weathericon.src = "images/mist.png";
    }
   

    document.querySelector(".city").innerHTML  = data.name;
    document.querySelector(".temp").innerHTML=  Math.round(data.main.temp)+ "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"km/hr";
    }
    

  }
  

  
  searchbtn.addEventListener("click",()=>{
    checkweather(cityname.value);
  });