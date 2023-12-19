
const apiKey="c7e669f8f08f54991d0828763c7cdb72";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data=await response.json();
 
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind ").innerHTML=data.wind.speed+"kmph";

    if(data.weather[0].main === "Clouds"){
        weatherIcon.src="clouds.png";        

        
    }
    else if(data.weather[0].main === "Clear")
    {
        weatherIcon.src="clear.png";


    
   
    }
    else if(data.weather[0].main === "Drizzle")
    {
        weatherIcon.src="drizzle.png";


     

    }

    else if(data.weather[0].main === "Rain")
    {
        weatherIcon.src="rain.png";


        

    }

    else if(data.weather[0].main === "Mist")
    {
        weatherIcon.src="mist.png";


       

    }



}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)
})

