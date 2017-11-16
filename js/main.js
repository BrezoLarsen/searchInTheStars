// WORKING CODE FOR PLANETS

const buttonForPlanet = document.getElementById("buttonForPlanet");

buttonForPlanet.addEventListener('click', function(event) {

 	async function planetData () {
   	const url = "https://swapi.co/api/planets/";
   	let firstData = await fetch(url);
  	let data = await firstData.json();
 	console.log(data);
 	const planets = data.results;

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
 			console.log(showPlanet)

 		})

 }

 planetData();

})






const wookieeButtonForPlanets = document.getElementById("wookieeButtonForPlanets");

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

})







// SEARCH BUTTON

const userSearchValue = document.getElementById("searchValue").value;
const searchButton = document.getElementById("search");

searchButton.addEventListener('click', function(event) {
 console.log("go!");
 console.log("Error " + userSearchValue);
})

// searchButton.addEventListener('click', function(event) {

//  console.log("go!");

//  console.log(searchValue);

//  async function planetSearchResults () {
//      const url = "https://swapi.co/api/people/?search=searchValue";
//      let firstData = await fetch(url);
//    let data = await firstData.json();
//      console.log(data);
//      const searchResult = data.results;
//   }

//   planetSearchResults();

// })


