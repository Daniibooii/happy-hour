$(document).ready(function(){
// JAVASCRIPT FOR HAPPY HOUR PROJECT

// Data handling and sorting
// Declare restaurant objects
//GEORGETOWN
var jPauls = {listing: 0,name: "J. Pauls", location: "georgetown",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://jpaulsdc.com/menus/"};
var paradiso = {listing: 1,name: "Pizzeria Paradiso",location:"georgetown",foodType: "Italian",price: "$$",cocktail: false,beer: true,wine: true, source:"https://www.eatyourpizza.com/happy-hour/"};	
var oldGlory = {listing: 2,name: "Old Glory BBQ",location:"georgetown",foodType: "Southern",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.oldglorybbq.com/menus/happy-hour"};	
var sovereign = {listing: 3,name: "The Sovereign",location:"georgetown",foodType: "European",price: "$$",cocktail: true,beer: true,wine: true,source:"http://thesovereigndc.com/#menus"};	
var theTombs = {listing: 4,name: "The Tombs",location:"georgetown",foodType: "American",price: "$",cocktail: false,beer: true,wine: true,source:"http://www.tombs.com/#!menu"};
// FRIENDSHIP-TENLEYTOWN
var chefGeoffs = {listing: 5,name: "Chef Geoff's",location:"friendship",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.chefgeoff.com/menu/chef-geoffs"};	
var chatter = {listing: 6,name: "Chatter",location:"friendship",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"https://docs.wixstatic.com/ugd/c2a145_505cbb0822af4f6994c566de5806ad6a.pdf"};
var casaLuca = {listing: 7,name: "Casa Luca",location:"friendship",foodType: "Italian",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.casalucadc.com/menus/"};	
var frontPage = {listing: 8,name: "Front Page DC",location:"friendship",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.frontpagedc.com/happy-hour/"};	
var yosaku = {listing: 9,name: "Yosaku Japanese",location:"friendship",foodType: "Asian",price: "$$",cocktail: true,beer: true,wine: true,source:"https://www.yosakusushi.com/menu"};	
// ADAM'S MORGAN
var madamsOrgan = {listing: 10,name: "Madam's Organ",location:"adMo",foodType: "Southern",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.madamsorgan.com/menu.html"};	
var johnnys = {listing: 11,name: "Johnny's Half Shell",location:"adMo",foodType: "Seafood",price: "$$",cocktail: true,beer: true,wine: true,source:"https://www.johnnyshalfshell.net/menu"};	
var smokeBarrel = {listing: 12,name: "Smoke and Barrel",location:"adMo",foodType: "Southern",price: "$$",cocktail: true,beer: true,wine: false,source:"https://smokeandbarreldc.com/menu/"};
var roofers = {listing: 13,name: "Roofer's Union",location:"adMo",foodType: "American",price:"$$$",cocktail: true,beer: true,wine: true,source:"https://roofersuniondc.com/dinner-menu/"};	
var shenanigans = {listing: 14,name: "Shenanigan's Irish Pub",location:"adMo",foodType: "irish",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.shenaniganspubdc.com/menu"};	
// DUPONT CIRCLE
var mission = {listing: 15,name: "Mission",location:"duPont",foodType: "mexican",price: "$$",cocktail: true,beer: true,wine: true,source:"https://www.missiondupont.com/menus/#happy-hour"};	
var hanksDP = {listing: 16,name: "Hank's Oysters DuPont",location:"duPont",foodType: "Seafood",price:"$$$",cocktail: true,beer: true,wine: true,source:"https://hanksoysterbar.com/dupont-circle/menus/#happy-hour"};	
var firefly = {listing: 17,name: "Firefly",location:"duPont",foodType: "American",price:"$$$",cocktail: true,beer: true,wine: true,source:"http://www.firefly-dc.com/en-us/menus/food-drinks.htm"};
var sette = {listing: 18,name: "Sette Osteria",location:"duPont",foodType: "Italian",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.setteosteria.com/dupont-menu.html"};	
var beacon = {listing: 19,name: "Beacon Bar & Grill",location:"duPont",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://bbgwdc.com/happy-hour-bar-menu/"};	
// SOUTHWEST WATERFRONT
var hanksSW = {listing: 20,name: "Hank's Oysters Waterfront",location:"wharf",foodType: "Seafood",price: "$$",cocktail: true,beer: true,wine:true,source:"https://hanksoysterbar.com/the-wharf/menus/"};
var jennys = {listing: 21,name: "Jenny's at the Wharf",location:"wharf",foodType: "Asian",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.jennysdc.com/media/docs/JennysMenuMay2015.pdf"};
var masalaArt = {listing: 22,name: "Masala Art",location:"wharf",foodType: "indian",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.masalaartdc.com/southwest-categry/happy-hour-at-bar-only/"};
var stationFour = {listing: 23,name: "Station 4",location:"wharf",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://033ec7e.netsolhost.com/menu/happy-hour-baseball-specials/"};
var cityBar = {listing: 24,name: "City Bar",location:"wharf",foodType: "American",price:"$$$",cocktail: true,beer: true,wine: true,source:"http://www.citybardc.com/menu/"};
// PETWORTH
var airedale = {listing: 25,name: "The Airedale",location:"petworth",foodType: "American",price: "$",cocktail: true,beer: true,wine: true,source:"http://www.airedaledc.com/menu-marquee/"};
var lookingGlass = {listing: 26,name: "Looking Glass",location:"petworth",foodType: "American",price: "$",cocktail: true,beer: true,wine: true,source:"http://www.thelookingglasslounge.com/menu/"};
var tenTigers = {listing: 27,name: "Ten Tigers",location:"petworth",foodType: "Asian",price: "$",cocktail: true,beer: true,wine: true,source:"http://www.tentigersdc.com/happy-hour/"};
var reynolds = {listing: 28,name: "DC Reynolds",location:"petworth",foodType: "American",price: "$",cocktail: true,beer: true,wine: true,source:"http://washingtondc.menupages.com/restaurants/dc-reynolds/"};
var thePitch = {listing: 29,name: "The Pitch",location:"petworth",foodType: "American",price: "$",cocktail: true,beer: true,wine: true,source:"https://www.thepitchtavern.com/menus-2"};
//CAPTIOL HILL
var boxcar = {listing: 30,name: "Boxcar Tavern",location:"capHill",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://boxcartaverndc.com//happy-hour?_ga=2.197806761.744928053.1518799018-1523407922.1518555652"};
var hawkDove = {listing: 31,name: "Hawk 'n' Dove",location:"capHill",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://hawkndovethehill.com/happy-hour"};
var lavagna = {listing: 32,name: "Lavagna",location:"capHill",foodType: "Italian",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.lavagnadc.com/"};
var uglyMugCH = {listing: 33,name: "The Ugly Mug",location:"capHill",foodType: "American",price: "$",cocktail: true,beer: true,wine: true,source:"http://www.uglymugdc.com/food-drink/"};
var ambar = {listing: 34,name: "Ambar",location:"capHill",foodType: "european",price: "$",cocktail: true,beer: true,wine: true,source:"https://www.ambarrestaurant.com/menu-washington/"};
// H STREET
var bigBoard = {listing: 35,name: "The Big Board",location:"hstreet",foodType: "American",price: "$$",cocktail: false,beer: true,wine: true,source:"http://thebigboarddc.com/"};
var smith = {listing: 36,name: "Smith Commons",location:"hstreet",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.smithcommonsdc.com/menu2"};
var biergarten = {listing: 37,name: "Biergarten House",location:"hstreet",foodType: "european",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.biergartenhaus.com/events"};
var hCC = {listing: 38,name: "H St Country Club",location:"hstreet",foodType: "mexican",price: "$$",cocktail: true,beer: true,wine: false,source:"https://static1.squarespace.com/static/5327507de4b0c44d90acc3c5/t/5a0336319140b7583646359a/1510159921295/MENU-DRINKS-WINTER-2017.pdf"};
var pursuit = {listing: 39,name: "Pursuit Wine Bar",location:"hstreet",foodType: "european",price:"$$$",cocktail: true,beer: true,wine: true,source:"http://www.thepursuitwinebar.com/"};
// LOGAN CIRCLE
var kingFisher = {listing: 40,name: "Kingfisher",location:"logan",foodType: "American",price: "$$",cocktail: false,beer: true,wine: false,source:"http://www.kingfisherdc.com/"};
var churchKey = {listing: 41,name: "Church Key",location:"logan",foodType: "American",price: "$$",cocktail: false,beer: true,wine: false,source:"http://churchkeydc.com/#menus"};
var draftTable = {listing: 42,name: "Draft Table",location:"logan",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.draftingtabledc.com/menu/"};
var loganTavern = {listing: 43,name: "Logan Tavern",location:"logan",foodType: "european",price:"$$$",cocktail: true,beer: true,wine: true,source:"http://logantavern.com/menu/"};
var sotto = {listing: 44,name: "Sotto",location:"logan",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.sottodc.com/dinner/"};
// SHAW && U ST
var brixton = {listing: 45,name: "The Brixton",location:"shaw",foodType: "irish",price: "$$",cocktail: true,beer: true,wine: true,source:"http://brixtondc.com/#/menu"};
var chaplins = {listing: 46,name: "Chaplin's",location:"shaw",foodType: "Asian",price: "$$",cocktail: true,beer: true,wine: true,source:"http://chaplinsdc.com/chaplins-desserts_in_dc/"};
var dacha = {listing: 47,name: "Dacha Beer Garden",location:"shaw",foodType: "european",price: "$$",cocktail: true,beer: true,wine: true,source:"https://dachadc.com/beergarden/"};
var drift = {listing: 48,name: "Drift on 7th",location:"shaw",foodType: "Seafood",price: "$$",cocktail: true,beer: true,wine: true,source:"http://drifton7th.com/images/menus/Drift-Happy-Hour-Menu.pdf"};
var shawsTavern = {listing: 49,name: "Shaw's Tavern",location:"shaw",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.shawstavern.com/menu/dinner-menu/"};
// EASTERN MARKET
var belga = {listing: 50,name: "Belga Cafe",location:"eastMkt",foodType: "european",price: "$$",cocktail: true,beer: true,wine: true,source:"https://cdn-assets.indigenous.io/account_1346/Happy_Hour_food_2017_06_27_JZ_1515530138399.pdf"};
var placitas = {listing: 51,name: "Las Placitas",location:"eastMkt",foodType: "mexican",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.lasplacitasrestaurant.com/8th_Menu.html"};
var mrHenrys = {listing: 52,name: "Mr. Henry's",location:"eastMkt",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.mrhenrysdc.com/happy-hour"};
var radici = {listing: 53,name: "Radici",location:"eastMkt",foodType: "Italian",price: "$$",cocktail: false,beer: true,wine: true,source:"http://www.radici-market.com/pranzo-lunch/"};
var uglyMug = {listing: 54,name: "The Ugly Mug",location:"eastMkt",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.uglymugdc.com/food-drink/"};
// COLUMBIA HEIGHTS
var bravo = {listing: 55,name: "BravoBar",location:"coHi",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"https://www.facebook.com/Bravo-Bar-247126958778878/"};
var theCoupe = {listing: 56,name: "The Coupe",location:"coHi",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.thecoupedc.com/menudinner/happy-hour/"};
var elChucho = {listing: 57,name: "El Chucho",location:"coHi",foodType: "mexican",price: "$$",cocktail: true,beer: true,wine: false,source:"https://www.elchuchodc.com/"};
var theHeights = {listing: 58,name: "The Heights",location:"coHi",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"https://www.theheightstaproom.com/print-menu"};
var wonderland = {listing: 59,name: "Wonderland Ballroom",location:"coHi",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.thewonderlandballroom.com/menu/"};

// Array of venues - target for search algorithm
var venueArray = 
[jPauls,paradiso,oldGlory,sovereign,theTombs,
chefGeoffs, chatter, casaLuca, frontPage, yosaku,
madamsOrgan, johnnys, smokeBarrel, roofers, shenanigans,
mission, hanksDP, firefly, sette, beacon,
hanksSW, jennys, masalaArt, stationFour, cityBar,
airedale, lookingGlass, tenTigers, reynolds, thePitch,
boxcar, hawkDove, lavagna, uglyMugCH, ambar,
bigBoard, smith, biergarten, hCC, pursuit,
kingFisher, churchKey, draftTable, loganTavern, sotto,
brixton, chaplins, dacha, drift, shawsTavern,
belga, placitas, mrHenrys, radici, uglyMug,
bravo, theCoupe, elChucho, theHeights, wonderland]

// Pushes venues from chosen location from venueArray into a new array 
var locationFiltered = [];
var checkLocation = function (place){
    for (var i =0; i<venueArray.length; i++){
        if (venueArray[i].location ===place){
            locationFiltered.push(venueArray[i]);
    }
}
}
// Triggers checkLocation when neighborhood is chosen
$("#neighborhood-selector").change(function() {
    locationFiltered = [];
    var selectedVal = $(this).find(':selected').val();
    checkLocation (selectedVal);
});
// Appends target div with restaurants that meet drink criteria, from chosen neighborhood
var printResult = function (looper){
    var newName = locationFiltered[looper].name;
    var newFoodType = locationFiltered[looper].foodType;
    var newPrice = locationFiltered[looper].price;
    var newSrc = locationFiltered[looper].source;
    $(".resultBox").append("<p class='result'>"+newName+" | "+newFoodType+" food | " +newPrice+ " | <a target='_blank' href='"+ newSrc+"'>Menu</a></p>");
}
// Check drink functions - filter out venues without chosen drink on special
var checkBeer = function (){
    for (var j=0; j<locationFiltered.length; j++){
        if (locationFiltered[j].beer==true){
            printResult (j);         
        }
    }
}
var checkWine = function (){
    for (var j=0; j<locationFiltered.length; j++){
        if (locationFiltered[j].wine==true){
            printResult (j);
        }
    }
}
var checkCocktail = function (){
    for (var j=0; j<locationFiltered.length; j++){
        if (locationFiltered[j].cocktail==true){
            printResult (j);
        }
    }
}
///////////////////////////////////
var hasBeer = false;
var hasWine = false;
var hasCocktails = false;

var drinkType = "";
var foodType = "";
var location = "";

var userSelection = "";

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
// $("#cuisine-selector").hide();
// $("#neighborhood-selector").hide();
// $("#price-row").hide();
// $("#submit-row").hide();

// this animates the cuisine selector on clicks of the Icons, hides the instruction to choose your booze //
var afterChoosingBooze = function(){
  $("#choose-your-booze-row").hide();
  $("#cuisine-selector").show();
  $("#cuisine-selector").animate({height: "70px", width: "500px"});
} // end of afterChoosingBooze function

// when you choose what type of drinks you want, it calls the funcrtion afterChoosingBooze
$("#cocktail-btn").click(function(){
//   afterChoosingBooze();
    $(".resultBox").empty();
    checkCocktail();
});
$("#beer-btn").click(function(){
//   afterChoosingBooze();
    $(".resultBox").empty();
    checkBeer();
});
$("#wine-btn").click(function(){
//   afterChoosingBooze();
    $(".resultBox").empty();
    checkWine();
});

// end of afterSelectingCuisine function

// after choosing a cuisine, .show(); the neighborhood selector and animate from left;
$( "#cuisine-selector" ).change(function () {
  $( "select option:selected" ).each(function() {
    $("#neighborhood-selector").show();
    $("#neighborhood-selector").css({right:2000,position:'relative'});
        $("#neighborhood-selector").animate({right:0}, 500);
  })
})

$( "#cuisine-selector" ).change(function () {
  $( "select option:selected" ).select(function() {
  })
})
// register the selection for later comparison to our database
var animatePriceIcons = function(){
  $("#one-dollar-sign-btn").css({right:-2000,position:'relative'});
      $("#one-dollar-sign-btn").animate({left:0}, 1500);
  $("#two-dollar-signs-btn").css({bottom:-2000,position:'relative'});
      $("#two-dollar-signs-btn").animate({top:0}, 1500);
  $("#three-dollar-signs-btn").css({right:2000,position:'relative'});
      $("#three-dollar-signs-btn").animate({right:0}, 1500);
} // end of animateZBoozeIcons functo=ion
animatePriceIcons();

// after choosing a neighborhood, .show(); the price point icons and animate like the booze icons.
$( "#neighborhood-selector" ).change(function () {
  $( "select option:selected" ).each(function() {
    $("#price-row").show();
    // animatePriceIcons();
  })
})

var afterChoosingPricePoint = function(){

  $(".booze-row").hide();
  $("#choose-your-booze-row").hide();
  $(".food-sel-row").hide();
  $("#cuisine-selector").hide();
  $("#neighborhood-sel-row").hide();
  $("#neighborhood-selector").hide();
  $("#price-row").hide();
  $("#submit-row").show();
  $("#get-restaurant-list").css({bottom:-2000,position:'relative'});
      $("#get-restaurant-list").animate({top:0}, 500);
      $("#get-random-result").css({bottom:-2000,position:'relative'});
          $("#get-random-result").animate({top:0}, 500);
}
// register selection for later comparison

$("#one-dollar-sign-btn").click(function(){
  afterChoosingPricePoint();
})
$("#two-dollar-signs-btn").click(function(){
  afterChoosingPricePoint();
})
$("#three-dollar-signs-btn").click(function(){
  afterChoosingPricePoint();
})
// after choosing your price point, make all selections disappear maybe .hide(); and .show the two submit buttons for see list or random results.
// if list, take user to results.html
// if random, choose random restaurant and take them to chris' Page

// comparing user selections to our database //
//////////////////////////////////////////////

// if beer is true

});  // end of docuent ready


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
