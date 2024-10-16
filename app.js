const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click',function(){
   const inputBtn =document.getElementById('input-btn').value;
 
   fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputBtn+'&appid=2e0f3f3d092d7a55a9b2b71c959e8c62')
    .then(Response=>Response.json())
    .then(data=>{
       const cityName = data.name;
const tem = data.main.temp
        const temp = tem - 273-15;
        const discription = data.weather[0].discription;

document.getElementById('city').innerText = cityName;
document.getElementById('temp').innerText = temp.toFixed(2);
document.getElementById('des').innerText = discription;
    })
    .catch(res =>alert("plese type right city name"));
})
