$(document).ready(function(){
// JAVASCRIPT FOR HAPPY HOUR PROJECT


// Initialize materialize select javascript
$('select').material_select();
// Initialize materialize modal javascript
 $('.modal').modal();

 // min js for text animation LetterFX
 (function($){"use strict";var LetterFx=function(element,options){this.options=$.extend({},$.fn.letterfx.defaults,options);this.num_completed_fx=0;this.is_done=false;this.monitor_timer=null;this.killswitch=null;this.$element=$(element);if(this.options.restore)this.original_html=this.$element.html();this.init()};LetterFx.prototype.init=function(){this.new_html=this.$element.text().replace(this.options.pattern,this.options.replacement);this.$element.addClass(this.options.css.element.base).addClass(this.options.css.element.before);this.$element.html(this.new_html);this.$letters=this.$element.find(this.options.selector);this.$letters.css("transition-duration",this.options.fx_duration).addClass(this.options.css.letters.base).addClass(this.options.css.letters.before);this.bindLetterFxEnd();this.num_letters=this.$letters.length;this.fx();return this};LetterFx.prototype.bindLetterFxEnd=function(){var options=this.options;var lfx=this;this.$letters.bind("transitionend",function(){options.onLetterComplete($(this),lfx.$element,lfx);lfx.notifyFXEnd();switch(options.letter_end){case"destroy":$(this).remove();break;case"rewind":lfx.applyLetterFx($(this),options.timing,options.css.letters.after,options.css.letters.before);break;case"stay":break;default:$(this).replaceWith($(this).text())}});return lfx};LetterFx.prototype.terminate=function(){this.is_done=true;this.options.onElementComplete(this.$element,this);clearTimeout(this.killswitch);switch(this.options.element_end){case"destroy":this.$element.remove();break;case"stay":break;default:this.$element.html(this.original_html);this.$element.removeClass(this.options.css.element.base).removeClass(this.options.css.element.after);break}};LetterFx.prototype.notifyFXEnd=function(){clearTimeout(this.monitor_timer);this.num_completed_fx++;var lfx=this;this.monitor_timer=setTimeout(function(){if(lfx.num_completed_fx%lfx.num_letters===0){lfx.terminate()}},Math.max(this.options.timing+10,50));return this};LetterFx.prototype.startKillWatch=function(){var fx_duration=this.options.fx_duration.match(/\d+s/)?parseInt(this.options.fx_duration):1;var time=Math.ceil(1.5*this.num_letters*this.options.timing*fx_duration);var lfx=this;this.killswitch=window.setTimeout(function(){if(!lfx.isDone()){lfx.terminate()}},time)};LetterFx.prototype.fx=function(){var lfx=this;this.startKillWatch();this.$element.removeClass(this.options.css.element.before).addClass(this.options.css.element.after);var $letters=this.options.sort(this.$letters);var options=this.options;$letters.each(function(i,letter){lfx.applyLetterFx($(letter),(i+1)*options.timing,options.css.letters.before,options.css.letters.after)});return this};LetterFx.prototype.applyLetterFx=function($letter,timing,css_before,css_after){var options=this.options;window.setTimeout(function(){$letter.removeClass(css_before).addClass(css_after)},timing);return this};LetterFx.prototype.isDone=function(){return this.is_done};var LetterFxConfig=function(conf){this.config=$.extend({},$.fn.letterfx.defaults,conf);this.buildCss(this.config.backwards);if(this.config.words)this.config.pattern=/(\S+)/g};LetterFxConfig.prototype.buildCss=function(flip){var options=this.config;var before=flip?"after":"before";var after=flip?"before":"after";var css={element:{},letters:{}};css.element.base=options.element_class+"-container "+options.fx.replace(/(\S+)/g,options.element_class+"-$1-container");css.element[before]=options.fx.replace(/(\S+)/g,options.element_class+"-$1-before-container");css.element[after]=options.fx.replace(/(\S+)/g,options.element_class+"-$1-after-container");css.letters.base=options.element_class;css.letters[before]=options.fx.replace(/(\S+)/g,options.element_class+"-$1-before");css.letters[after]=options.fx.replace(/(\S+)/g,options.element_class+"-$1-after");this.config=$.extend(options,{css:css})};LetterFxConfig.prototype.getConfig=function(){return this.config};LetterFxConfig.parse=function(config){return new LetterFxConfig(config).getConfig()};$.fn.letterfx=function(config){config=LetterFxConfig.parse(config);return $(this).each(function(){var $element=$(this);if(!$element.data("letterfx-obj")||$element.data("letterfx-obj").isDone()){$element.data("letterfx-obj",new LetterFx($element,config))}})};$.fn.letterfx.sort={random:function(array){var currentIndex=array.length,temporaryValue,randomIndex;while(0!==currentIndex){randomIndex=Math.floor(Math.random()*currentIndex);currentIndex-=1;temporaryValue=array[currentIndex];array[currentIndex]=array[randomIndex];array[randomIndex]=temporaryValue}return array},reverse:function($array){return $array.toArray().reverse()}};$.fn.letterfx.patterns={letters:/(\S)/gi};$.fn.letterfx.defaults={fx:"spin fly-top",pattern:/(\S)/gi,word:false,backwards:false,replacement:"<span>$1</span>",selector:"span",timing:50,fx_duration:"1s",sort:function($letters){return $letters},onLetterComplete:function($letter,$element,LetterFXObj){},onElementComplete:function($element,LetterFXObj){},letter_end:"restore",element_end:"restore",restore:true,destroy:false,element_class:"letterfx",css:{element:{base:"",before:"",after:""},letters:{base:"",before:"",after:""}}}})(jQuery);



// Declare restaurant objects
//GEORGETOWN
var jPauls = {listing: 0,name: "J. Pauls", location: "georgetown",foodType: "american",price: "$$",cocktail: true,beer: true,wine: true};
var paradiso = {listing: 1,name: "Pizzeria Paradiso",location:"georgetown",foodType: "italian",price: "$$",cocktail: false,beer: true,wine: true};
var oldGlory = {listing: 2,name: "Old Glory BBQ",location:"georgetown",foodType: "southern",price: "$$",cocktail: true,beer: true,wine: true};
var sovereign = {listing: 3,name: "The Sovereign",location:"georgetown",foodType: "european",price: "$$",cocktail: true,beer: true,wine: true};
var theTombs = {listing: 4,name: "The Tombs",location:"georgetown",foodType: "american",price: "$",cocktail: false,beer: true,wine: true};
// FRIENDSHIP-TENLEYTOWN
var chefGeoffs = {listing: 5,name: "Chef Geoff's",location:"friendship",foodType: "american",price: "$$",cocktail: true,beer: true,wine: true};
var chatter = {listing: 6,name: "Chatter",location:"friendship",foodType: "american",price: "$$",cocktail: true,beer: true,wine: true};
var casaLuca = {listing: 7,name: "Casa Luca",location:"friendship",foodType: "italian",price: "$$",cocktail: true,beer: true,wine: true};
var frontPage = {listing: 8,name: "Front Page DC",location:"friendship",foodType: "american",price: "$$",cocktail: true,beer: true,wine: true};
var yosaku = {listing: 9,name: "Yosaku Japanese",location:"friendship",foodType: "asian",price: "$$",cocktail: true,beer: true,wine: true};
// ADAM'S MORGAN
var madamsOrgan = {listing: 10,name: "Madam's Organ",location:"adMo",foodType: "southern",price: "$$",cocktail: true,beer: true,wine: true};
var johnnys = {listing: 11,name: "Johnny's Half Shell",location:"adMo",foodType: "seafood",price: "$$",cocktail: true,beer: true,wine: true};
var smokeBarrel = {listing: 12,name: "Madam's Organ",location:"adMo",foodType: "southern",price: "$$",cocktail: true,beer: true,wine: false};
var roofers = {listing: 13,name: "Roofer's Union",location:"adMo",foodType: "american",price:"$$$",cocktail: true,beer: true,wine: true};
var shenanigans = {listing: 14,name: "Shenanigan's Irish Pub",location:"adMo",foodType: "irish",price: "$$",cocktail: true,beer: true,wine: true};
// DUPONT CIRCLE
var mission = {listing: 15,name: "Mission",location:"duPont",foodType: "mexican",price: "$$",cocktail: true,beer: true,wine: true};
var hanksDP = {listing: 16,name: "Hank's Oysters DuPont",location:"duPont",foodType: "seafood",price:"$$$",cocktail: true,beer: true,wine: true};
var firefly = {listing: 17,name: "Firefly",location:"duPont",foodType: "american",price:"$$$",cocktail: true,beer: true,wine: true};
var sette = {listing: 18,name: "Sette Osteria",location:"duPont",foodType: "italian",price: "$$",cocktail: true,beer: true,wine: true};
var beacon = {listing: 19,name: "Beacon Bar & Grill",location:"duPont",foodType: "american",price: "$$",cocktail: true,beer: true,wine: true};
// SOUTHWEST WATERFRONT
var hanksSW = {listing: 20,name: "Hank's Oysters Waterfront",location:"wharf",foodType: "seafood",price: "$$",cocktail: true,beer: true,wine:true};
var jennys = {listing: 21,name: "Jenny's at the Wharf",location:"wharf",foodType: "asian",price: "$$",cocktail: true,beer: true,wine: true};
var masalaArt = {listing: 22,name: "Masala Art",location:"wharf",foodType: "indian",price: "$$",cocktail: true,beer: true,wine: true};
var stationFour = {listing: 23,name: "Station 4",location:"wharf",foodType: "american",price: "$$",cocktail: true,beer: true,wine: true};
var cityBar = {listing: 24,name: "City Bar",location:"wharf",foodType: "american",price:"$$$",cocktail: true,beer: true,wine: true};
// PETWORTH
var airedale = {listing: 25,name: "The Airedale",location:"petworth",foodType: "american",price: "$",cocktail: true,beer: true,wine: true};
var lookingGlass = {listing: 26,name: "Looking Glass",location:"petworth",foodType: "american",price: "$",cocktail: true,beer: true,wine: true};
var tenTigers = {listing: 27,name: "Ten Tigers",location:"petworth",foodType: "asian",price: "$",cocktail: true,beer: true,wine: true};
var reynolds = {listing: 28,name: "DC Reynolds",location:"petworth",foodType: "american",price: "$",cocktail: true,beer: true,wine: true};
var thePitch = {listing: 29,name: "The Pitch",location:"petworth",foodType: "american",price: "$",cocktail: true,beer: true,wine: true};
//CAPTIOL HILL
var boxcar = {listing: 30,name: "Boxcar Tavern",location:"capHill",foodType: "american",price: "$$",cocktail: true,beer: true,wine: true};
var hawkDove = {listing: 31,name: "Hawk 'n' Dove",location:"capHill",foodType: "american",price: "$$",cocktail: true,beer: true,wine: true};
var lavagna = {listing: 32,name: "Lavagna",location:"capHill",foodType: "italian",price: "$$",cocktail: true,beer: true,wine: true};
var uglyMugCH = {listing: 33,name: "The Ugly Mug",location:"capHill",foodType: "american",price: "$",cocktail: true,beer: true,wine: true};
var ambar = {listing: 34,name: "Ambar",location:"capHill",foodType: "european",price: "$",cocktail: true,beer: true,wine: true};
// H STREET
var bigBoard = {listing: 35,name: "The Big Board",location:"hstreet",foodType: "american",price: "$$",cocktail: false,beer: true,wine: true};
var smith = {listing: 36,name: "Smith Commons",location:"hstreet",foodType: "american",price: "$$",cocktail: true,beer: true,wine: true};
var biergarten = {listing: 37,name: "Biergarten House",location:"hstreet",foodType: "european",price: "$$",cocktail: true,beer: true,wine: true};
var hCC = {listing: 38,name: "H St Country Club",location:"hstreet",foodType: "mexican",price: "$$",cocktail: true,beer: true,wine: false};
var pursuit = {listing: 39,name: "Pursuit Wine Bar",location:"hstreet",foodType: "european",price:"$$$",cocktail: true,beer: true,wine: true};
// LOGAN CIRCLE
var kingFisher = {listing: 40,name: "Kingfisher",location:"logan",foodType: "american",price: "$$",cocktail: false,beer: true,wine: false};
var churchKey = {listing: 41,name: "Church Key",location:"logan",foodType: "american",price: "$$",cocktail: false,beer: true,wine: false};
var draftTable = {listing: 42,name: "Draft Table",location:"logan",foodType: "american",price: "$$",cocktail: true,beer: true,wine: true};
var loganTavern = {listing: 43,name: "Logan Tavern",location:"logan",foodType: "european",price:"$$$",cocktail: true,beer: true,wine: true};
var sotto = {listing: 44,name: "Sotto",location:"logan",foodType: "american",price: "$$",cocktail: true,beer: true,wine: true};
// SHAW && U ST
var brixton = {listing: 45,name: "The Brixton",location:"shaw",foodType: "irish",price: "$$",cocktail: true,beer: true,wine: true};
var chaplins = {listing: 46,name: "Chaplin's",location:"shaw",foodType: "asian",price: "$$",cocktail: true,beer: true,wine: true};
var dacha = {listing: 47,name: "Dacha Beer Garden",location:"shaw",foodType: "european",price: "$$",cocktail: true,beer: true,wine: true};
var drift = {listing: 48,name: "Drift on 7th",location:"shaw",foodType: "seafood",price: "$$",cocktail: true,beer: true,wine: true};
var shawsTavern = {listing: 49,name: "Shaw's Tavern",location:"shaw",foodType: "american",price: "$$",cocktail: true,beer: true,wine: true};
// EASTERN MARKET
var belga = {listing: 50,name: "Belga Cafe",location:"eastMkt",foodType: "european",price: "$$",cocktail: true,beer: true,wine: true};
var placitas = {listing: 51,name: "Las Placitas",location:"eastMkt",foodType: "mexican",price: "$$",cocktail: true,beer: true,wine: true};
var mrHenrys = {listing: 52,name: "Mr. Henry's",location:"eastMkt",foodType: "american",price: "$$",cocktail: true,beer: true,wine: true};
var radici = {listing: 53,name: "Radici",location:"eastMkt",foodType: "italian",price: "$$",cocktail: false,beer: true,wine: true};
var uglyMug = {listing: 54,name: "The Ugly Mug",location:"eastMkt",foodType: "american",price: "$$",cocktail: true,beer: true,wine: true};
// COLUMBIA HEIGHTS
var bravo = {listing: 55,name: "BravoBar",location:"coHi",foodType: "american",price: "$$",cocktail: true,beer: true,wine: true};
var celticHouse = {listing: 56,name: "The Celtic House",location:"coHi",foodType: "irish",price: "$$",cocktail: false,beer: true,wine: false};
var elChucho = {listing: 57,name: "El Chucho",location:"coHi",foodType: "mexican",price: "$$",cocktail: true,beer: true,wine: false};
var theHeights = {listing: 58,name: "The Heights",location:"coHi",foodType: "american",price: "$$",cocktail: true,beer: true,wine: true};
var wonderland = {listing: 59,name: "Wonderland Ballroom",location:"coHi",foodType: "american",price: "$$",cocktail: true,beer: true,wine: true};

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
bravo, celticHouse, elChucho, theHeights,wonderland]

var locationFiltered = [];

var checkLocation = function (place){
    for (var i =0; i<venueArray.length; i++){
        if (venueArray[i].location ===place){
            // var newName = venueArray[i].name;
            // var newFoodType = venueArray[i].foodType;
            // var newPrice = venueArray[i].price;
            // $(".resultBox").append("<p class='result'>"+newName+" | "+newFoodType+" | " +newPrice+"</p>");
            locationFiltered.push(venueArray[i]);
    }
}
console.log(locationFiltered);
}
$("#neighborhood-selector").change(function() {
    locationFiltered = [];
    var selectedVal = $(this).find(':selected').val();
    checkLocation (selectedVal);
});
var printResult = function (looper){
    var newName = locationFiltered[looper].name;
    var newFoodType = locationFiltered[looper].foodType;
    var newPrice = locationFiltered[looper].price;
    $(".resultBox").append("<p class='result'>"+newName+" | "+newFoodType+" | " +newPrice+"</p>");
    console.log(newName);
}
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





/////////////////////////////////////
////////////////////////////////////
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
  $("#cocktail-btn").css({left:2000,position:'relative'});
      $("#cocktail-btn").animate({left:0}, 1200);
  $("#beer-btn").css({top:2000,position:'relative'});
      $("#beer-btn").animate({top:0}, 1200);
  $("#wine-btn").css({right:2000,position:'relative'});
      $("#wine-btn").animate({right:0}, 1200);
      $("#cyb").letterfx({"fx":"swirl fly_bottom","fly_bottom":"forward"});

} // end of animateZBoozeIcons function
animateBoozeIcons();

// hide theses select element until on of the booze icons, cuisine selected, neighborhood selected and price points are clicked
$("#neighborhood-name").hide();
$(".booze-row").hide();
$("#choose-your-booze-row").hide();
$("#results-row").hide();
$(".results-modal").hide();



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
}); // end of booze choice on clicks


// after choosing a neighborhood, .show(); the price point icons and animate like the booze icons.
$( "#neighborhood-selector" ).change(function () {
  $( "select option:selected" ).each(function() {
    $(".neighborhood-sel-row").hide();
    $(".booze-row").show();
    $("#choose-your-booze-row").show();
    $("#cyb").show();
    animateBoozeIcons();
  })
})


// after choosing your price point, make all selections disappear maybe .hide(); and .show the two submit buttons for see list or random results.
// if list, take user to results.html
// if random, choose random restaurant and take them to chris' Page

// comparing user selections to our database //
//////////////////////////////////////////////

// if beer is true

});  // end of $(document).ready(function())


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
