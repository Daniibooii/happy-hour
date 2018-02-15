$(document).ready(function(){

// JAVASCRIPT FOR HAPPY HOUR PROJECT

// Declare restaurant objects
//GEORGETOWN
var jPauls = {listing: 0,name: "J. Paul’s", location: "georgetown",foodType: "american",price: 2,cocktail: true,beer: true,wine: true}
var paradiso = {listing: 1,name: "Pizzeria Paradiso",location:"georgetown",foodType: "italian",price: 2,cocktail: false,beer: true,wine: true}
var oldGlory = {listing: 2,name: "Old Glory BBQ",location:"georgetown",foodType: "southern",price: 2,cocktail: true,beer: true,wine: true}
var sovereign = {listing: 3,name: "The Sovereign",location:"georgetown",foodType: "european",price: 2,cocktail: true,beer: true,wine: true}
var theTombs = {listing: 4,name: "The Tombs",location:"georgetown",foodType: "american",price: 1,cocktail: false,beer: true,wine: true}

// FRIENDSHIP-TENLEYTOWN
var chefGeoffs = {listing: 5,name: "Chef Geoff's",location:"friendship",foodType: "american",price: 2,cocktail: true,beer: true,wine: true}
var chatter = {listing: 6,name: "Chatter",location:"friendship",foodType: "american",price: 2,cocktail: true,beer: true,wine: true}
var casaLuca = {listing: 7,name: "Casa Luca",location:"friendship",foodType: "italian",price: 2,cocktail: true,beer: true,wine: true}
var frontPage = {listing: 8,name: "Front Page DC",location:"friendship",foodType: "american",price: 2,cocktail: true,beer: true,wine: true}
var yosaku = {listing: 9,name: "Yosaku Japanese",location:"friendship",foodType: "asian",price: 2,cocktail: true,beer: true,wine: true}

// ADAM'S MORGAN
var madamsOrgan = {listing: 10,name: "Madam's Organ",location:"adMo",foodType: "southern",price: 2,cocktail: true,beer: true,wine: true}
var johnnys = {listing: 11,name: "Johnny's Half Shell",location:"adMo",foodType: "seafood",price: 2,cocktail: true,beer: true,wine: true}
var smokeBarrel = {listing: 12,name: "Madam's Organ",location:"adMo",foodType: "southern",price: 2,cocktail: true,beer: true,wine: false}
var roofers = {listing: 13,name: "Roofer's Union",location:"adMo",foodType: "american",price: 3,cocktail: true,beer: true,wine: true}
var shenanigans = {listing: 14,name: "Shenanigan's Irish Pub",location:"adMo",foodType: "irish",price: 2,cocktail: true,beer: true,wine: true}

// DUPONT CIRCLE
var mission = {listing: 15,name: "Mission",location:"duPont",foodType: "mexican",price: 2,cocktail: true,beer: true,wine: true}
var hanksDP = {listing: 16,name: "Hank's Oysters DuPont",location:"duPont",foodType: "seafood",price: 3,cocktail: true,beer: true,wine: true}
var firefly = {listing: 17,name: "Firefly",location:"duPont",foodType: "american",price: 3,cocktail: true,beer: true,wine: true}
var sette = {listing: 18,name: "Sette Osteria",location:"duPont",foodType: "italian",price: 2,cocktail: true,beer: true,wine: true}
var beacon = {listing: 19,name: "Beacon Bar & Grill",location:"duPont",foodType: "american",price: 2,cocktail: true,beer: true,wine: true}

// SOUTHWEST WATERFRONT
var hanksSW = {listing: 20,name: "Hank's Oysters Waterfront",location:"wharf",foodType: "seafood",price: 2,cocktail: true,beer: true,wine: true}
var jennys = {listing: 21,name: "Jenny's at the Wharf",location:"wharf",foodType: "asian",price: 2,cocktail: true,beer: true,wine: true}
var masalaArt = {listing: 22,name: "Masala Art",location:"wharf",foodType: "indian",price: 2,cocktail: true,beer: true,wine: true}
var stationFour = {listing: 23,name: "Station 4",location:"wharf",foodType: "american",price: 2,cocktail: true,beer: true,wine: true}
var cityBar = {listing: 24,name: "City Bar",location:"wharf",foodType: "american",price: 3,cocktail: true,beer: true,wine: true}

// PETWORTH
var airedale = {listing: 25,name: "The Airedale",location:"petworth",foodType: "american",price: 1,cocktail: true,beer: true,wine: true}
var lookingGlass = {listing: 26,name: "Looking Glass",location:"petworth",foodType: "american",price: 1,cocktail: true,beer: true,wine: true}
var tenTigers = {listing: 27,name: "Ten Tigers",location:"petworth",foodType: "asian",price: 1,cocktail: true,beer: true,wine: true}
var reynolds = {listing: 28,name: "DC Reynolds",location:"petworth",foodType: "american",price: 1,cocktail: true,beer: true,wine: true}
var thePitch = {listing: 29,name: "The Pitch",location:"petworth",foodType: "american",price: 1,cocktail: true,beer: true,wine: true}

//CAPTIOL HILL
var boxcar = {listing: 30,name: "Boxcar Tavern",location:"capHill",foodType: "american",price: 2,cocktail: true,beer: true,wine: true}
var hawkDove = {listing: 31,name: "Hawk 'n' Dove",location:"capHill",foodType: "american",price: 2,cocktail: true,beer: true,wine: true}
var lavagna = {listing: 32,name: "Lavagna",location:"capHill",foodType: "italian",price: 2,cocktail: true,beer: true,wine: true}
var uglyMug = {listing: 33,name: "The Ugly Mug",location:"capHill",foodType: "american",price: 1,cocktail: true,beer: true,wine: true}
var ambar = {listing: 34,name: "Ambar",location:"capHill",foodType: "european",price: 1,cocktail: true,beer: true,wine: true}

// H STREET
var bigBoard = {listing: 35,name: "The Big Board",location:"hstreet",foodType: "american",price: 2,cocktail: false,beer: true,wine: true}
var smith = {listing: 36,name: "Smith Commons",location:"hstreet",foodType: "american",price: 2,cocktail: true,beer: true,wine: true}
var biergarten = {listing: 37,name: "Biergarten House",location:"hstreet",foodType: "european",price: 2,cocktail: true,beer: true,wine: true}
var hCC = {listing: 38,name: "H St Country Club",location:"hstreet",foodType: "mexican",price: 2,cocktail: true,beer: true,wine: false}
var pursuit = {listing: 39,name: "Pursuit Wine Bar",location:"hstreet",foodType: "european",price: 3,cocktail: true,beer: true,wine: true}

// LOGAN CIRCLE
var kingFisher = {listing: 40,name: "Kingfisher",location:"logan",foodType: "american",price: 2,cocktail: false,beer: true,wine: false}
var churchKey = {listing: 41,name: "Church Key",location:"logan",foodType: "american",price: 2,cocktail: false,beer: true,wine: false}
var draftTable = {listing: 42,name: "Draft Table",location:"logan",foodType: "american",price: 2,cocktail: true,beer: true,wine: true}
var loganTavern = {listing: 43,name: "Logan Tavern",location:"logan",foodType: "european",price: 3,cocktail: true,beer: true,wine: true}
var sotto = {listing: 44,name: "Sotto",location:"logan",foodType: "american",price: 2,cocktail: true,beer: true,wine: true}

// SHAW && U ST
var brixton = {listing: 45,name: "The Brixton",location:"shaw",foodType: "irish",price: 2,cocktail: true,beer: true,wine: true}
var chaplins = {listing: 46,name: "Chaplin's",location:"shaw",foodType: "asian",price: 2,cocktail: true,beer: true,wine: true}
var dacha = {listing: 47,name: "Dacha Beer Garden",location:"shaw",foodType: "european",price: 2,cocktail: true,beer: true,wine: true}
var drift = {listing: 48,name: "Drift on 7th",location:"shaw",foodType: "seafood",price: 2,cocktail: true,beer: true,wine: true}
var shawsTavern = {listing: 49,name: "Shaw's Tavern",location:"shaw",foodType: "american",price: 2,cocktail: true,beer: true,wine: true}

// EASTERN MARKET
var belga = {listing: 50,name: "Belga Cafe",location:"eastMkt",foodType: "european",price: 2,cocktail: true,beer: true,wine: true}
var placitas = {listing: 51,name: "Las Placitas",location:"eastMkt",foodType: "mexican",price: 2,cocktail: true,beer: true,wine: true}
var mrHenrys = {listing: 52,name: "Mr. Henry's",location:"eastMkt",foodType: "american",price: 2,cocktail: true,beer: true,wine: true}
var radici = {listing: 53,name: "Radici",location:"eastMkt",foodType: "italian",price: 2,cocktail: false,beer: true,wine: true}
var uglyMug = {listing: 54,name: "The Ugly Mug",location:"eastMkt",foodType: "american",price: 2,cocktail: true,beer: true,wine: true}

// COLUMBIA HEIGHTS
var bravo = {listing: 55,name: "BravoBar",location:"coHi",foodType: "american",price: 2,cocktail: true,beer: true,wine: true}
var celticHouse = {listing: 56,name: "The Celtic House",location:"coHi",foodType: "irish",price: 2,cocktail: false,beer: true,wine: false}
var elChucho = {listing: 57,name: "El Chucho",location:"coHi",foodType: "mexican",price: 2,cocktail: true,beer: true,wine: false}
var theHeights = {listing: 58,name: "The Heights",location:"coHi",foodType: "american",price: 2,cocktail: true,beer: true,wine: true}
var wonderland = {listing: 59,name: "Wonderland Ballroom",location:"coHi",foodType: "american",price: 2,cocktail: true,beer: true,wine: true}


/////////////////////////////////
/// Javascrit for index.html ///
///////////////////////////////

// to slide the booze icons in from the sides and top //
var animateBoozeIcons = function(){

  $("#cocktail-btn").css({right:-2000,position:'relative'});
      $("#cocktail-btn").animate({left:0}, 1500);
  $("#beer-btn").css({bottom:2000,position:'relative'});
      $("#beer-btn").animate({top:0}, 1500);
  $("#wine-btn").css({right:2000,position:'relative'});
      $("#wine-btn").animate({right:0}, 1500);
  $('#cyb').animate({'font-size':'42px'}, 1800);

} // end of animateZBoozeIcons functo=ion
animateBoozeIcons();

// hide theses select element until on of the booze icons, cuisine selected, neighborhood selected and price points are clicked
$("#cuisine-selector").hide();
$("#neighborhood-selector").hide();
$("#price-row").hide();
$("#submit-row").hide();

// this animates the cuisine selector on clicks of the Icons, hides the instruction to choose your booze //
var afterChoosingBooze = function(){

  $("#choose-your-booze-row").hide();
  $("#cuisine-selector").show();
  $("#cuisine-selector").animate({height: "70px", width: "500px"});

} // end of afterChoosingBooze function

// when you choose what type of drinks you want, it calls the funcrtion afterChoosingBooze
$("#cocktail-btn").click(function(){
  afterChoosingBooze();
});
$("#beer-btn").click(function(){
  afterChoosingBooze();
});
$("#wine-btn").click(function(){
  afterChoosingBooze();
});


var afterSelectingCuisine = function(){

  $("#neighborhood-selector").show(), 1000;

} // end of afterSelectingCuisine function

$("#selectAsian").trigger(function(){

  afterSelectingCuisine();
  alert("you've selected asian");
})

var animatePriceIcons = function(){

  $("#one-dollar-sign-btn").css({right:-2000,position:'relative'});
      $("#one-dollar-sign-btn").animate({left:0}, 1500);
  $("#two-dollar-signs-btn").css({bottom:2000,position:'relative'});
      $("#two-dollar-signs-btn").animate({top:0}, 1500);
  $("#three-dollar-signs-btn").css({right:2000,position:'relative'});
      $("#three-dollar-signs-btn").animate({right:0}, 1500);
} // end of animateZBoozeIcons functo=ion
animatePriceIcons();

$("#")



});  // end of docuent ready
