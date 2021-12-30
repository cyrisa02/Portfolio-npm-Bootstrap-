// alert('Cette application fonctionne sur téléphone');

//appel à l'API openweather avec city en parametre de focntion//

let apiCall = function (city) {
  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&lang=fr&units=metric&appid=8417760ba8724050ae99eca6e6caa318 ";
  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        console.log(data);
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#temp").innerHTML =
          "<i class='fas fa-thermometer-half'></i>" + data.main.temp + "°";
        document.querySelector("#humidity").innerHTML =
          "<i class='fas fa-tint'></i>" + data.main.humidity + "%";
        document.querySelector("#wind").innerHTML =
          "<i class='fas fa-wind'></i>" + data.wind.speed + "km/h";
      })
    )
    .catch((err) => console.log("Erreur : " + err));
};

// Ecouteur d'evenement sur la soumission du formulaire//
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let ville = document.querySelector("#inputCity").value;

  apiCall(ville);
});
/* Appel par défaut au chargement de la page*/
apiCall("Paris");
