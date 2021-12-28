alert('Ceci est mon premier script utilisant les API')

function main() {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Soissons&lang=fr&units=metric&appid=8417760ba8724050ae99eca6e6caa318 ")
                .then(res=>res.json())
                .then(data=>{
                    console.log(data.main.temp)
                    document.querySelector("#debug").innerText =Math.round(data.main.temp )                   
                })
}

        window.fetch("https://api.openweathermap.org/data/2.5/weather?q=Soissons&lang=fr&units=metric&appid=8417760ba8724050ae99eca6e6caa318 ")
                .then(res=>res.json())
                .then(data=>{
                  console.log(data.weather[0].description )
                  document.querySelector("#cond").innerText =data.weather[0].description
              })
                
                window.fetch("https://api.openweathermap.org/data/2.5/weather?q=Soissons&lang=fr&units=metric&appid=8417760ba8724050ae99eca6e6caa318 ")
                .then(res=>res.json())
                .then(data=>{
                  console.log(data.weather[0].icon )
                  document.querySelector("#icone").innerText =data.weather[0].icon
              })
                
        window.fetch("https://api.openweathermap.org/data/2.5/weather?q=Soissons&lang=fr&units=metric&appid=8417760ba8724050ae99eca6e6caa318 ")
                .then(res=>res.json())
                .then(data=>{
                    console.log(data.name )
                    document.querySelector("#city").innerText =data.name
                   
              })
                
                window.fetch("https://api.openweathermap.org/data/2.5/weather?q=Soissons&lang=fr&units=metric&appid=8417760ba8724050ae99eca6e6caa318 ")
                .then(res=>res.json())
                .then(data=>{
                    console.log(data.wind.speed )
                    document.querySelector("#wind").innerText =data.wind.speed
                   
              })

window.fetch("https://geo.api.gouv.fr/communes?nom=Soissons&fields=population&format=json&geometry=centre ")
                .then(res=>res.json())
                .then(data=>{
                    console.log(data.nom)
                    document.querySelector("#pop").innerText =data.nom
                   
              })                              
main();