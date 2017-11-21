// WORKING CODE FOR PLANETS

const buttonForPlanet = document.getElementById("buttonForPlanet");

async function planetData (url) {
  let firstData = await fetch(url);
  let data = await firstData.json();
  const planets = data.results;
  console.log(data);

  planets.forEach(function(planet){
    let showPlanet = document.getElementById("planetsResults");
    showPlanet.innerHTML += `
                              <div id="planet">
                                <p>Name: <span>${planet.name}</span></p>
                                <p>Rotation period: <span>${planet.rotation_period}</span></p>
                                <p>Orbital period: <span>${planet.orbital_period}</span> </p>
                                <p>Diameter: <span>${planet.diameter}</span></p>
                                <p>Climate: <span>${planet.climate}</span></p>
                              </div>
                            `

    })

}

buttonForPlanet.addEventListener('click', function() { // El parámetro event lo pasamos cuando queremos acceder al valor en el futuro, por ejemplo, en el caso de necesitar el placeholder de un input

  planetData("https://swapi.co/api/planets/");

})

// hacer que muestre los siguientes 10 planetas
// debemos avanzar a la página 2

// WORKING CODE FOR WOOKIE LANGUAJE
/*const wookieeButtonForPlanets = document.getElementById("wookieeButtonForPlanets");

wookieeButtonForPlanets.addEventListener('click', function(event) {

async function wookieePlanetData () {
const url = "https://swapi.co/api/planets/1/?format=wookiee";
let firstWookieeData = await fetch(url);
let wookieeData = await firstWookieeData.json();
console.log(wookieeData);
const wookieePlanets = wookieeData.results;

let showWookiee = document.getElementById("wookieeResults");
showWookiee.innerHTML += `
<p>whrascwo: <span>${wookieeData.whrascwo}</span></p>
`
}

wookieePlanetData();

})*/

// SEARCH BUTTON
const searchButton = document.getElementById("search");

searchButton.addEventListener('click', function(event) {

const userSearchValue = document.getElementById("searchValue").value;

async function planetSearchResults () {
  const url = "https://swapi.co/api/people/?search=" + userSearchValue;
  let firstSearchData = await fetch(url);
  let searchedData = await firstSearchData.json();
  console.log(searchedData);
  const searchResult = searchedData.results;
  console.log(url);
  console.log(firstSearchData.url);

  let showSearch = document.getElementById("searchBox");

  searchResult.forEach(function(result){
    showSearch.innerHTML += `
                              <p>Name: ${result.name}</p>
                              <p>Id: ${result.url}</p>
                            `

                            console.log(result.url);

  })

  // Pasamos los datos a lenguaje wookie NOT WORKS

  // const url = "https://swapi.co/api/people/1";
  // console.log(url[28]);
  // let id;
  // for (var i = 28; i < url.lenght; i++) {
  // id += url[i];
  // }
  // console.log(id);
  const wookieeTranslate = document.getElementById("wookieeButtonForPlanets");
  wookieeTranslate.addEventListener('click', function(event) {
    const wookieFormat = "?format=wookiee";

    let getId = function(result) {

      const url = "https://swapi.co/api/people/" + result.url;

      const id = url;

      console.log(url);

      // let id2 = url.slice(28);
      // console.log(id2);

    }();



    // const wookieUrl = "https://swapi.co/api/people/" + id2 + wookieFormat;

    // console.log(wookieUrl);

  })

}

planetSearchResults();

})






// Queremos conseguir el ID que es el último número
// Los strings se pueden tratar como arrays
// const url = "https://swapi.co/api/people/1";
// let id;
// for (var i = 28; i < url.lenght; i++) {
// id += url[i];
// }
// console.log(id);
// Otra forma de hacerlo:
// let id2 = url.slice(28);
// console.log(id2);
// Otra forma de hacerlo:
// let id3 = url.split('/');
// console.log(id3[5]);
// Otra forma de hacerlo:
// let id3 = url.split('/');
// let index = id4.index -1;
// console.log();
// Sin terminar, resto en apuntes, día8


// Bucle forEach
/*
const perritos = ["bulldog", "pastor", "dogo"]
// 0 1 2

perritos.forEach(function(perro, indice){
console.log(perro, " : ", indice);
})

perro = perritos[0]
perro = perritos[1]
perro = perritos[2]
*/

//Método: función que solo actua sobre un objeto