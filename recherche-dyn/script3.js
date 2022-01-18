// Appeler les données
// Les formater
// les trier par ordre alphabétique
// Les faire apparaitre
// Les filtrer dans l'input

//on fait deux séléctions
// on prend le input , on le séléctionne avec le id

const searchInput = document.querySelector("#search");

// pour les résultats on intégre tous les résulats dans table -results
const searchResult = document.querySelector(".table-results");

// fonctions qui appellent les données

// variable globale
let dataArray;
// on va utiliser await/ méthode fetch donc on a besoin de async, on va attendre des résultats + utilise une API

//nom à conssonnance fr et 50 résultats + destructuring
async function getUsers() {
  const res = await fetch("https://randomuser.me/api/?nat=fr&results=50");

  const { results } = await res.json();

  dataArray = orderList(results);
  createUserList(dataArray);
}

// appel de la fonction

getUsers();

// fonction de tri avec une focntion callaback qui définit le tri, on passe en minuscule

function orderList(data) {
  const orderedData = data.sort((a, b) => {
    if (a.name.last.toLowerCase() < b.name.last.toLowerCase()) {
      return -1;
    }
    if (a.name.last.toLowerCase() > b.name.last.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  return orderedData;
}

// création de la fonction qui crée la liste pour l'injecter dans le DOM

function createUserList(usersList) {
  // pour chaque objet de usersList, on va créer le table (parent), un élément (une div, avec une classe table-item
  usersList.forEach((user) => {
    const listItem = document.createElement("div");
    listItem.setAttribute("class", "table-item");
    // on veut maintenant les enfants de table-item, mettre les backtips

    listItem.innerHTML = `
        <div class="container-img">
    <img src=${user.picture.medium}>
    <p class="name">${user.name.last} ${user.name.first}</p>
    </div>
    <p class="email">${user.email}</p>
    <p class="phone">${user.phone}</p>`;
    searchResult.appendChild(listItem);
  });
}

//écrire (c'est le input et filtrer,

searchInput.addEventListener("input", filterData);

function filterData(e) {
  //vide la liste une fois cherché
  searchResult.innerHTML = "";

  //isolé dans une const

  const searchedString = e.target.value.toLowerCase().replace(/\s/g, ""); //replace permet d'ignorer les espaces pdt la recherche comme Da Silva
  // filtre et retroune un tableau
  //pour chaq élément je prends le premier élémnt et je vérifie si il inclut ce que je cherche "string": pour le prénom ou le nom
  const filteredArr = dataArray.filter(
    (el) =>
      el.name.first.toLowerCase().includes(searchedString) ||
      el.name.last.toLowerCase().includes(searchedString) ||
      `${el.name.last + el.name.first}`.toLowerCase
        .replace(/\s/g, "")
        .includes(searchedString) ||
      // c'est pour le nom et prénom en même temps

      `${el.name.first + el.name.last}`.toLowerCase
        .replace(/\s/g, "")
        .includes(searchedString) // c'est l'inverse
  );

  // recréer une liste avec nos nouveaux éléments avec notre focntion qu'on a déjà créée

  createUserList(filteredArr);
}
