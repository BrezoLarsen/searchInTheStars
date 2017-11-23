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
  console.log("Objeto que hemos buscado: " + searchedData);
  const searchResult = searchedData.results;
  console.log("URL del objeto que buscamos: " + url);

  let showSearch = document.getElementById("searchBox");
  searchResult.forEach(function(result){
    showSearch.innerHTML = `
                              <p><strong>Name:</strong> ${result.name}</p>
                              <p><strong>Height:</strong> ${result.height}</p>
                              <p><strong>Hair color:</strong> ${result.hair_color}</p>
                              <p><strong>Skin color:</strong> ${result.skin_color}</p>
                              <p><strong>Eye color:</strong> ${result.eye_color}</p>
                              <p><strong>Gender:</strong> ${result.gender}</p>
                              <p><strong>Homeworld:</strong> <a href="${result.homeworld}">${result.homeworld}</a></p>
                            `
                            + showSearch.innerHTML // los datos que acabamos de buscar aparecen encima

                            console.log("La URL del planeta es" + " " + result.homeworld);


    //Buscamos el ID de cada personaje para poder pasarlo a formato wookiee
    let urlId = result.url;
    console.log(urlId);
    console.log(urlId[28]);

      // Con el botón de Wookie y con el ID que hemos cogido de la URL, hacemos que se pase a wookie
      const wookieeTranslate = document.getElementById("wookieeButtonForPlanets");

      wookieeTranslate.addEventListener('click', function(event) {

        const wookieFormat = "?format=wookiee";

        let getId = function(result) {

          const wookieUrl = urlId + wookieFormat;

          console.log("Esta es la URL del formato wookiee: " + wookieUrl);

          async function functionWookieeData () {
            const wookieUrl = urlId + wookieFormat;
            let firstWookieeData = await fetch(wookieUrl);
            let wookieeData = await firstWookieeData.json();
            console.log(wookieeData);


            function showWookieeTranslate() {
              let showWookiee = document.getElementById("wookieeResults");
              showWookiee.innerHTML +=  `
                                          <p><strong>Whrascwo:</strong> <span>${wookieeData.whrascwo}</span></p>
                                          <p><strong>Acwoahrracao:</strong> <span>${wookieeData.acwoahrracao}</span></p>
                                          <p><strong>Acraahrc_oaooanoorc:</strong> <span>${wookieeData.acraahrc_oaooanoorc}</span></p>
                                          <p><strong>Corahwh_oaooanoorc:</strong> <span>${wookieeData.corahwh_oaooanoorc}</span></p>
                                          <p><strong>Worowo_oaooanoorc:</strong> <span>${wookieeData.worowo_oaooanoorc}</span></p>
                                          <p><strong>Rrwowhwaworc:</strong> ${wookieeData.rrwowhwaworc}</p>
                                        `
            } showWookieeTranslate();

          } functionWookieeData();

        }();

      })


      // Wookiee image appears
      wookieeTranslate.addEventListener('click', function(event) {
        const wookieeStyle = document.getElementById("wookiee");
        // Toggle style of wookiee image for appear & disappear
        if(wookieeStyle.style.top === "20px") {
          wookieeStyle.style.top = "305px";
        } else {
            wookieeStyle.style.top = "20px";
        }

        if(wookieeStyle.style.opacity === "1") {
          wookieeStyle.style.opacity = "0";
        } else {
            wookieeStyle.style.opacity = "1";
        }

      })

  })

}

planetSearchResults();

})





// Hacer que los datos solo aparezcan una vez
// Al darle de nuevo al botón de buscar desaparecen los datos






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


// Métodos que se le pueden aplicar a los arrays:
// Mirar reduce, entender pero no utilizar <3
// Sort es importante, ordena los elementos



