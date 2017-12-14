// WORKING CODE FOR PLANETS
var buttonForPlanet = document.getElementById("buttonForPlanet");

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
                            // + showPlanet.innerHTML
  })
}

buttonForPlanet.addEventListener('click', function clickEvent() { // El parámetro event lo pasamos cuando queremos acceder al valor en el futuro, por ejemplo, en el caso de necesitar el placeholder de un input
  //Eliminamos el evento para que la lista de planetas aparezca solo una vez
  buttonForPlanet.removeEventListener("click", clickEvent);
  planetData("https://swapi.co/api/planets/");

})














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


    // Eliminamos los datos buscados previamente con un segundo click
    searchButton.addEventListener('click', function() {
      var timesClicked = 0;
      timesClicked++;
      if (timesClicked == 1) {
        let hiddenSearch = document.getElementById("searchBox");
        hiddenSearch.innerHTML = "";
        console.log(timesClicked);
      }
    })




    //Buscamos el ID de cada personaje para poder pasarlo a formato wookiee
    let urlId = result.url;
    console.log("ID del personaje: " + urlId[28]);
      // Con el botón de Wookie y con el ID que hemos cogido de la URL, hacemos que se pase a wookiee
      const wookieeTranslate = document.getElementById("wookieeButtonForPlanets");

      // AQUÍ VA EL BUCLE
      // Esto es un toggle pattern para que la traducción wookiee aparezca y desaparezca al darle al botón, seteamos la variable a true para que se muestre la primera vez que pulsamos el botón
      showWookieeData = true;

      wookieeTranslate.addEventListener('click', function(event) {
        // Si es true (la primera vez siempre será true) le decimos que ejecute la función
        if(showWookieeData) {

          event.preventDefault();

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
                    event.preventDefault();
                    let showWookiee = document.getElementById("wookieeResults");
                    showWookiee.innerHTML =   `
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

          // Una vez ejecutada, seteamos la variable a false para que al darle una segunda vez al botón no siga el mismo comportamiento
          showWookieeData = false;

          // console.log("variableIf = " + showWookieeData);

          } else {

            // Como es false, ejecutará esta nueva función que hará que desaparezcan los datos
            let hiddenWookie = document.getElementById("wookieeResults");
            hiddenWookie.innerHTML = "";

            // Seteamos la variable a true para que al darle al botón reaparezcan los datos
            showWookieeData = true;

          }

      })
      // AQUÍ ACABA EL BUCLE




      // Wookiee image appears
      wookieeTranslate.addEventListener('click', function(event) {

        event.preventDefault();

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











// EVENTOS AL PULSAR UNA TECLA
var keycode = document.getElementById('searchValue');

keycode.addEventListener('keydown', funcionEventoPulsarTecla);

function funcionEventoPulsarTecla(event){
  console.log(event);

  if(event.keyCode == 82) {
    alert("You press enter key")
  }
}




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



// CARGA DE UN GIF MIENTRAS SE CARGAN LOS DATOS
// async function get(url) {
//   // píntame el gif en algunaparte
//   let algunaparte = document.getElementById("pizarra");
//   algunaparte.innerHTML = '<img src="">'
//   const data = await fetch(url);
//   const dataJson = await data.json()
//   pinta(dataJson);
// }


// SABER QUÉ TECLA CORRESPONDE A CADA EVENTO JS
// http://keycode.info/
