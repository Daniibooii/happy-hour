// JAVASCRIPT FOR HAPPY HOUR PROJECT

// Declare restaurant objects
//GEORGETOWN
var jPauls = {listing: 0,name: "J. Paul’s", location: "georgetown",foodType: "american",price: 2,cocktail: true,beer: true,wine: true};
var paradiso = {listing: 1,name: "Pizzeria Paradiso",location:"georgetown",foodType: "italian",price: 2,cocktail: false,beer: true,wine: true};	
var oldGlory = {listing: 2,name: "Old Glory BBQ",location:"georgetown",foodType: "southern",price: 2,cocktail: true,beer: true,wine: true};	
var sovereign = {listing: 3,name: "The Sovereign",location:"georgetown",foodType: "european",price: 2,cocktail: true,beer: true,wine: true};	
var theTombs = {listing: 4,name: "The Tombs",location:"georgetown",foodType: "american",price: 1,cocktail: false,beer: true,wine: true};	

// FRIENDSHIP-TENLEYTOWN
var chefGeoffs = {listing: 5,name: "Chef Geoff's",location:"friendship",foodType: "american",price: 2,cocktail: true,beer: true,wine: true};	
var chatter = {listing: 6,name: "Chatter",location:"friendship",foodType: "american",price: 2,cocktail: true,beer: true,wine: true};
var casaLuca = {listing: 7,name: "Casa Luca",location:"friendship",foodType: "italian",price: 2,cocktail: true,beer: true,wine: true};	
var frontPage = {listing: 8,name: "Front Page DC",location:"friendship",foodType: "american",price: 2,cocktail: true,beer: true,wine: true};	
var yosaku = {listing: 9,name: "Yosaku Japanese",location:"friendship",foodType: "asian",price: 2,cocktail: true,beer: true,wine: true};	

// ADAM'S MORGAN
var madamsOrgan = {listing: 10,name: "Madam's Organ",location:"adMo",foodType: "southern",price: 2,cocktail: true,beer: true,wine: true};	
var johnnys = {listing: 11,name: "Johnny's Half Shell",location:"adMo",foodType: "seafood",price: 2,cocktail: true,beer: true,wine: true};	
var smokeBarrel = {listing: 12,name: "Madam's Organ",location:"adMo",foodType: "southern",price: 2,cocktail: true,beer: true,wine: false};
var roofers = {listing: 13,name: "Roofer's Union",location:"adMo",foodType: "american",price: 3,cocktail: true,beer: true,wine: true};	
var shenanigans = {listing: 14,name: "Shenanigan's Irish Pub",location:"adMo",foodType: "irish",price: 2,cocktail: true,beer: true,wine: true};	

// DUPONT CIRCLE
var mission = {listing: 15,name: "Mission",location:"duPont",foodType: "mexican",price: 2,cocktail: true,beer: true,wine: true};	
var hanksDP = {listing: 16,name: "Hank's Oysters DuPont",location:"duPont",foodType: "seafood",price: 3,cocktail: true,beer: true,wine: true};	
var firefly = {listing: 17,name: "Firefly",location:"duPont",foodType: "american",price: 3,cocktail: true,beer: true,wine: true};
var sette = {listing: 18,name: "Sette Osteria",location:"duPont",foodType: "italian",price: 2,cocktail: true,beer: true,wine: true};	
var beacon = {listing: 19,name: "Beacon Bar & Grill",location:"duPont",foodType: "american",price: 2,cocktail: true,beer: true,wine: true};	

var venueArray = 
[jPauls,paradiso,oldGlory,sovereign,theTombs,
chefGeoffs, chatter, casaLuca, frontPage, yosaku,
madamsOrgan, johnnys, smokeBarrel, roofers, shenanigans,
mission, hanksDP, firefly, sette, beacon,
]

var venues = TAFFY([]);
var convertDB =  function (){
for (var i =0; i<venueArray.length; i++){
    venues.insert({name: venueArray[i].name, location: venueArray[i].location, foodType: venueArray[i].foodType, cocktail: venueArray[i].cocktail, beer: venueArray[i].beer, wine: venueArray[i].wine})
}
venues = venues().stringify();
console.log(venues);
}
convertDB ();
var beerFetch = venues()




// // SOUTHWEST WATERFRONT
// var hanksSW = {listing: 20,name: "Hank's Oysters Waterfront",location:"wharf",foodType: "seafood",price: 2,cocktail: true,beer: true,wine:true};
// var jennys = {listing: 21,name: "Jenny's at the Wharf",location:"wharf",foodType: "asian",price: 2,cocktail: true,beer: true,wine: true};
// var masalaArt = {listing: 22,name: "Masala Art",location:"wharf",foodType: "indian",price: 2,cocktail: true,beer: true,wine: true};
// var stationFour = {listing: 23,name: "Station 4",location:"wharf",foodType: "american",price: 2,cocktail: true,beer: true,wine: true};
// var cityBar = {listing: 24,name: "City Bar",location:"wharf",foodType: "american",price: 3,cocktail: true,beer: true,wine: true};

// // PETWORTH
// var airedale = {listing: 25,name: "The Airedale",location:"petworth",foodType: "american",price: 1,cocktail: true,beer: true,wine: true};
// var lookingGlass = {listing: 26,name: "Looking Glass",location:"petworth",foodType: "american",price: 1,cocktail: true,beer: true,wine: true};
// var tenTigers = {listing: 27,name: "Ten Tigers",location:"petworth",foodType: "asian",price: 1,cocktail: true,beer: true,wine: true};
// var reynolds = {listing: 28,name: "DC Reynolds",location:"petworth",foodType: "american",price: 1,cocktail: true,beer: true,wine: true};
// var thePitch = {listing: 29,name: "The Pitch",location:"petworth",foodType: "american",price: 1,cocktail: true,beer: true,wine: true};

// //CAPTIOL HILL
// var boxcar = {listing: 30,name: "Boxcar Tavern",location:"capHill",foodType: "american",price: 2,cocktail: true,beer: true,wine: true};
// var hawkDove = {listing: 31,name: "Hawk 'n' Dove",location:"capHill",foodType: "american",price: 2,cocktail: true,beer: true,wine: true};
// var lavagna = {listing: 32,name: "Lavagna",location:"capHill",foodType: "italian",price: 2,cocktail: true,beer: true,wine: true};
// var uglyMug = {listing: 33,name: "The Ugly Mug",location:"capHill",foodType: "american",price: 1,cocktail: true,beer: true,wine: true};
// var ambar = {listing: 34,name: "Ambar",location:"capHill",foodType: "european",price: 1,cocktail: true,beer: true,wine: true};

// // H STREET
// var bigBoard = {listing: 35,name: "The Big Board",location:"hstreet",foodType: "american",price: 2,cocktail: false,beer: true,wine: true};
// var smith = {listing: 36,name: "Smith Commons",location:"hstreet",foodType: "american",price: 2,cocktail: true,beer: true,wine: true};
// var biergarten = {listing: 37,name: "Biergarten House",location:"hstreet",foodType: "european",price: 2,cocktail: true,beer: true,wine: true};
// var hCC = {listing: 38,name: "H St Country Club",location:"hstreet",foodType: "mexican",price: 2,cocktail: true,beer: true,wine: false};
// var pursuit = {listing: 39,name: "Pursuit Wine Bar",location:"hstreet",foodType: "european",price: 3,cocktail: true,beer: true,wine: true};

// // LOGAN CIRCLE
// var kingFisher = {listing: 40,name: "Kingfisher",location:"logan",foodType: "american",price: 2,cocktail: false,beer: true,wine: false};
// var churchKey = {listing: 41,name: "Church Key",location:"logan",foodType: "american",price: 2,cocktail: false,beer: true,wine: false};
// var draftTable = {listing: 42,name: "Draft Table",location:"logan",foodType: "american",price: 2,cocktail: true,beer: true,wine: true};
// var loganTavern = {listing: 43,name: "Logan Tavern",location:"logan",foodType: "european",price: 3,cocktail: true,beer: true,wine: true};
// var sotto = {listing: 44,name: "Sotto",location:"logan",foodType: "american",price: 2,cocktail: true,beer: true,wine: true};

// // SHAW && U ST
// var brixton = {listing: 45,name: "The Brixton",location:"shaw",foodType: "irish",price: 2,cocktail: true,beer: true,wine: true};
// var chaplins = {listing: 46,name: "Chaplin's",location:"shaw",foodType: "asian",price: 2,cocktail: true,beer: true,wine: true};
// var dacha = {listing: 47,name: "Dacha Beer Garden",location:"shaw",foodType: "european",price: 2,cocktail: true,beer: true,wine: true};
// var drift = {listing: 48,name: "Drift on 7th",location:"shaw",foodType: "seafood",price: 2,cocktail: true,beer: true,wine: true};
// var shawsTavern = {listing: 49,name: "Shaw's Tavern",location:"shaw",foodType: "american",price: 2,cocktail: true,beer: true,wine: true};

// // EASTERN MARKET
// var belga = {listing: 50,name: "Belga Cafe",location:"eastMkt",foodType: "european",price: 2,cocktail: true,beer: true,wine: true};
// var placitas = {listing: 51,name: "Las Placitas",location:"eastMkt",foodType: "mexican",price: 2,cocktail: true,beer: true,wine: true};
// var mrHenrys = {listing: 52,name: "Mr. Henry's",location:"eastMkt",foodType: "american",price: 2,cocktail: true,beer: true,wine: true};
// var radici = {listing: 53,name: "Radici",location:"eastMkt",foodType: "italian",price: 2,cocktail: false,beer: true,wine: true};
// var uglyMug = {listing: 54,name: "The Ugly Mug",location:"eastMkt",foodType: "american",price: 2,cocktail: true,beer: true,wine: true};

// // COLUMBIA HEIGHTS
// var bravo = {listing: 55,name: "BravoBar",location:"coHi",foodType: "american",price: 2,cocktail: true,beer: true,wine: true};
// var celticHouse = {listing: 56,name: "The Celtic House",location:"coHi",foodType: "irish",price: 2,cocktail: false,beer: true,wine: false};
// var elChucho = {listing: 57,name: "El Chucho",location:"coHi",foodType: "mexican",price: 2,cocktail: true,beer: true,wine: false};
// var theHeights = {listing: 58,name: "The Heights",location:"coHi",foodType: "american",price: 2,cocktail: true,beer: true,wine: true};
// var wonderland = {listing: 59,name: "Wonderland Ballroom",location:"coHi",foodType: "american",price: 2,cocktail: true,beer: true,wine: true};

// // venues for georgetown, friendship, admo and dupont




// Tutoring notes
// set event listener to snapshot the argument
// snapshot val and name of property
// snaphot.val().bravo.name

// NOTES 
// Detecting contents in objects/arrays
// Using the map() function - way to go from values in one domain 
// Using the 'in' function - determines if a given property exists

// Array editing 
// push and pop - add and remove items from the end of an array, respectively
// shift and unshift - add and remove items from the beginning of an array, respectively
// slice - returns the elements of the array 

// Array searching
// forEach(array, function()}) will run a function at each index of the array

// To be able to go from a parent’s name to the actual object that represents this person, 
// we first build up an object that associates names with people.
// var byName = {};
// ancestry.forEach(function(person) {
//   byName[person.name] = person;
// });

// constructor way of declaring new objects - should I go back in and change this?
// prototypes - what are these and should I be using them?






