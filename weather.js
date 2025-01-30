


const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="

const apiKey = '95a89aa32d7e794e31db31dd135f26a9'
let q = document.querySelector('.btn')



let temp = document.querySelector('.temp')


q.addEventListener('click', ()=>{
    let displayWeather = document.querySelector('.vid')
    // let displayWeathertitle = document.querySelector('.des')
    let input = document.querySelector('.input').value;
    let display = document.querySelector('.city');
    let deg = document.querySelector('.sunrise');
    let country = document.querySelector('.sunset');
    let video = document.querySelector('.vid');
    let desc = document.querySelector('.des1')

async function schoolWeather() { 
       
   
        const response = await fetch(apiUrl + `${input}` +`&appid=${apiKey}`);
        
        if (response.status === 200){
            var data = await response.json();
            displayWeather.style.display = 'block'
            // displayWeathertitle.style.display = 'block'
            display.textContent = data.name
            country.textContent = data.sys.country
            temp.textContent = `${Math.round(data.main.temp)}°c`
            if (data.main.humidity < 70 ){
                deg.textContent = 'cold'
            }
            else if (data.main.humidity > 71 && data.main.humidity <=100){
                deg.textContent = 'warm'
            }
            else {
                deg.textContent = 'hot'
            }
            if (data.weather[0].main === 'Clouds'){
                video.src = '/video/cloudy.mp4'
                desc.textContent = 'gonna rain carry your umbrella'
            }
            else if (data.weather[0].main === 'Clear'){
                video.src = '/video/sunny.mp4'
                desc.textContent = 'clear sky so suncream'
            }
            else if (data.weather[0].main === 'Rain'){
                video.src = '/video/rain.mp4'
                desc.textContent = 'it is raining carry your umbrella'
            }
            else if (data.weather[0].main === 'Drizzle'){
                video.src = '/video/windy.mp4'
                desc.textContent = 'drizzin leave/carry your umbrella'
            }
            else if (data.weather[0].main === 'Mist'){
                video.src = '/video/humid.mp4'
                desc.textContent = 'Mist leave/carry your umbrella'
            }

            

        }
        else{

            display.textContent = 'city not found'
        }

       
console.log(data)

        
        
        
}
    
    
schoolWeather()
 
})

























