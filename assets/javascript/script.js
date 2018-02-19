$(".booze-row").hide();
$("#choose-your-booze-row").hide();
$(document).ready(function(){
    // JAVASCRIPT FOR HAPPY HOUR PROJECT
    
    // min js for text animation LetterFX
    (function($){"use strict";var LetterFx=function(element,options){this.options=$.extend({},$.fn.letterfx.defaults,options);this.num_completed_fx=0;this.is_done=false;this.monitor_timer=null;this.killswitch=null;this.$element=$(element);if(this.options.restore)this.original_html=this.$element.html();this.init()};LetterFx.prototype.init=function(){this.new_html=this.$element.text().replace(this.options.pattern,this.options.replacement);this.$element.addClass(this.options.css.element.base).addClass(this.options.css.element.before);this.$element.html(this.new_html);this.$letters=this.$element.find(this.options.selector);this.$letters.css("transition-duration",this.options.fx_duration).addClass(this.options.css.letters.base).addClass(this.options.css.letters.before);this.bindLetterFxEnd();this.num_letters=this.$letters.length;this.fx();return this};LetterFx.prototype.bindLetterFxEnd=function(){var options=this.options;var lfx=this;this.$letters.bind("transitionend",function(){options.onLetterComplete($(this),lfx.$element,lfx);lfx.notifyFXEnd();switch(options.letter_end){case"destroy":$(this).remove();break;case"rewind":lfx.applyLetterFx($(this),options.timing,options.css.letters.after,options.css.letters.before);break;case"stay":break;default:$(this).replaceWith($(this).text())}});return lfx};LetterFx.prototype.terminate=function(){this.is_done=true;this.options.onElementComplete(this.$element,this);clearTimeout(this.killswitch);switch(this.options.element_end){case"destroy":this.$element.remove();break;case"stay":break;default:this.$element.html(this.original_html);this.$element.removeClass(this.options.css.element.base).removeClass(this.options.css.element.after);break}};LetterFx.prototype.notifyFXEnd=function(){clearTimeout(this.monitor_timer);this.num_completed_fx++;var lfx=this;this.monitor_timer=setTimeout(function(){if(lfx.num_completed_fx%lfx.num_letters===0){lfx.terminate()}},Math.max(this.options.timing+10,50));return this};LetterFx.prototype.startKillWatch=function(){var fx_duration=this.options.fx_duration.match(/\d+s/)?parseInt(this.options.fx_duration):1;var time=Math.ceil(1.5*this.num_letters*this.options.timing*fx_duration);var lfx=this;this.killswitch=window.setTimeout(function(){if(!lfx.isDone()){lfx.terminate()}},time)};LetterFx.prototype.fx=function(){var lfx=this;this.startKillWatch();this.$element.removeClass(this.options.css.element.before).addClass(this.options.css.element.after);var $letters=this.options.sort(this.$letters);var options=this.options;$letters.each(function(i,letter){lfx.applyLetterFx($(letter),(i+1)*options.timing,options.css.letters.before,options.css.letters.after)});return this};LetterFx.prototype.applyLetterFx=function($letter,timing,css_before,css_after){var options=this.options;window.setTimeout(function(){$letter.removeClass(css_before).addClass(css_after)},timing);return this};LetterFx.prototype.isDone=function(){return this.is_done};var LetterFxConfig=function(conf){this.config=$.extend({},$.fn.letterfx.defaults,conf);this.buildCss(this.config.backwards);if(this.config.words)this.config.pattern=/(\S+)/g};LetterFxConfig.prototype.buildCss=function(flip){var options=this.config;var before=flip?"after":"before";var after=flip?"before":"after";var css={element:{},letters:{}};css.element.base=options.element_class+"-container "+options.fx.replace(/(\S+)/g,options.element_class+"-$1-container");css.element[before]=options.fx.replace(/(\S+)/g,options.element_class+"-$1-before-container");css.element[after]=options.fx.replace(/(\S+)/g,options.element_class+"-$1-after-container");css.letters.base=options.element_class;css.letters[before]=options.fx.replace(/(\S+)/g,options.element_class+"-$1-before");css.letters[after]=options.fx.replace(/(\S+)/g,options.element_class+"-$1-after");this.config=$.extend(options,{css:css})};LetterFxConfig.prototype.getConfig=function(){return this.config};LetterFxConfig.parse=function(config){return new LetterFxConfig(config).getConfig()};$.fn.letterfx=function(config){config=LetterFxConfig.parse(config);return $(this).each(function(){var $element=$(this);if(!$element.data("letterfx-obj")||$element.data("letterfx-obj").isDone()){$element.data("letterfx-obj",new LetterFx($element,config))}})};$.fn.letterfx.sort={random:function(array){var currentIndex=array.length,temporaryValue,randomIndex;while(0!==currentIndex){randomIndex=Math.floor(Math.random()*currentIndex);currentIndex-=1;temporaryValue=array[currentIndex];array[currentIndex]=array[randomIndex];array[randomIndex]=temporaryValue}return array},reverse:function($array){return $array.toArray().reverse()}};$.fn.letterfx.patterns={letters:/(\S)/gi};$.fn.letterfx.defaults={fx:"spin fly-top",pattern:/(\S)/gi,word:false,backwards:false,replacement:"<span>$1</span>",selector:"span",timing:50,fx_duration:"1s",sort:function($letters){return $letters},onLetterComplete:function($letter,$element,LetterFXObj){},onElementComplete:function($element,LetterFXObj){},letter_end:"restore",element_end:"restore",restore:true,destroy:false,element_class:"letterfx",css:{element:{base:"",before:"",after:""},letters:{base:"",before:"",after:""}}}})(jQuery);
    // Data handling and sorting
    // Declare restaurant objects

    //Georgetown
    var jPauls = {listing: 0,name: "J. Pauls", location: "Georgetown",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://jpaulsdc.com/menus/",coordsX: -77.0712323, coordsY: 38.9048496};
    var paradiso = {listing: 1,name: "Pizzeria Paradiso",location:"Georgetown",foodType: "Italian",price: "$$",cocktail: false,beer: true,wine: true, source:"https://www.eatyourpizza.com/happy-hour/"};
    var oldGlory = {listing: 2,name: "Old Glory BBQ",location:"Georgetown",foodType: "Southern",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.oldglorybbq.com/menus/happy-hour"};
    var sovereign = {listing: 3,name: "The Sovereign",location:"Georgetown",foodType: "European",price: "$$",cocktail: true,beer: true,wine: true,source:"http://thesovereigndc.com/#menus"};
    var theTombs = {listing: 4,name: "The Tombs",location:"Georgetown",foodType: "American",price: "$",cocktail: false,beer: true,wine: true,source:"http://www.tombs.com/#!menu"};
    // Friendship / Tenleytown
    var chefGeoffs = {listing: 5,name: "Chef Geoff's",location:"Friendship / Tenleytown",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.chefgeoff.com/menu/chef-geoffs",coordsX: -77.0941572, coordsY: 38.9577264};
    var chatter = {listing: 6,name: "Chatter",location:"Friendship / Tenleytown",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"https://docs.wixstatic.com/ugd/c2a145_505cbb0822af4f6994c566de5806ad6a.pdf"};
    var casaLuca = {listing: 7,name: "Casa Luca",location:"Friendship / Tenleytown",foodType: "Italian",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.casalucadc.com/menus/"};
    var frontPage = {listing: 8,name: "Front Page DC",location:"Friendship / Tenleytown",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.frontpagedc.com/happy-hour/"};
    var yosaku = {listing: 9,name: "Yosaku Japanese",location:"Friendship / Tenleytown",foodType: "Asian",price: "$$",cocktail: true,beer: true,wine: true,source:"https://www.yosakusushi.com/menu"};
    // ADAM'S MORGAN
    var madamsOrgan = {listing: 10,name: "Madam's Organ",location:"Adam's Morgan",foodType: "Southern",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.madamsorgan.com/menu.html",coordsX: -77.04268, coordsY: 38.921753};
    var johnnys = {listing: 11,name: "Johnny's Half Shell",location:"Adam's Morgan",foodType: "Seafood",price: "$$",cocktail: true,beer: true,wine: true,source:"https://www.johnnyshalfshell.net/menu"};
    var smokeBarrel = {listing: 12,name: "Smoke and Barrel",location:"Adam's Morgan",foodType: "Southern",price: "$$",cocktail: true,beer: true,wine: false,source:"https://smokeandbarreldc.com/menu/"};
    var roofers = {listing: 13,name: "Roofer's Union",location:"Adam's Morgan",foodType: "American",price:"$$$",cocktail: true,beer: true,wine: true,source:"https://roofersuniondc.com/dinner-menu/"};
    var shenanigans = {listing: 14,name: "Shenanigan's Irish Pub",location:"Adam's Morgan",foodType: "Irish",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.shenaniganspubdc.com/menu"};
    // DuPont Circle
    var mission = {listing: 15,name: "Mission",location:"DuPont Circle",foodType: "Mexican",price: "$$",cocktail: true,beer: true,wine: true,source:"https://www.missionDuPont Circle.com/menus/#happy-hour",coordsX: -77.0513678, coordsY: 38.9111212};
    var hanksDP = {listing: 16,name: "Hank's Oysters DuPont",location:"DuPont Circle",foodType: "Seafood",price:"$$$",cocktail: true,beer: true,wine: true,source:"https://hanksoysterbar.com/DuPont Circle-circle/menus/#happy-hour"};
    var firefly = {listing: 17,name: "Firefly",location:"DuPont Circle",foodType: "American",price:"$$$",cocktail: true,beer: true,wine: true,source:"http://www.firefly-dc.com/en-us/menus/food-drinks.htm"};
    var sette = {listing: 18,name: "Sette Osteria",location:"DuPont Circle",foodType: "Italian",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.setteosteria.com/DuPont Circle-menu.html"};
    var beacon = {listing: 19,name: "Beacon Bar & Grill",location:"DuPont Circle",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://bbgwdc.com/happy-hour-bar-menu/"};
    // SOUTHWEST WATERFRONT
    var hanksSW = {listing: 20,name: "Hank's Oysters Waterfront",location:"Southwest Waterfront",foodType: "Seafood",price: "$$",cocktail: true,beer: true,wine:true,source:"https://hanksoysterbar.com/the-Southwest Waterfront/menus/",coordsX: -77.0222012, coordsY: 38.8734137};
    var jennys = {listing: 21,name: "Jenny's at the Southwest Waterfront",location:"Southwest Waterfront",foodType: "Asian",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.jennysdc.com/media/docs/JennysMenuMay2015.pdf"};
    var masalaArt = {listing: 22,name: "Masala Art",location:"Southwest Waterfront",foodType: "Indian",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.masalaartdc.com/southwest-categry/happy-hour-at-bar-only/"};
    var stationFour = {listing: 23,name: "Station 4",location:"Southwest Waterfront",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://033ec7e.netsolhost.com/menu/happy-hour-baseball-specials/"};
    var cityBar = {listing: 24,name: "City Bar",location:"Southwest Waterfront",foodType: "American",price:"$$$",cocktail: true,beer: true,wine: true,source:"http://www.citybardc.com/menu/"};
    // Petworth
    var airedale = {listing: 25,name: "The Airedale",location:"Petworth",foodType: "American",price: "$",cocktail: true,beer: true,wine: true,source:"http://www.airedaledc.com/menu-marquee/",coordsX: -77.0326865, coordsY: 38.9425372};
    var lookingGlass = {listing: 26,name: "Looking Glass",location:"Petworth",foodType: "American",price: "$",cocktail: true,beer: true,wine: true,source:"http://www.thelookingglasslounge.com/menu/"};
    var tenTigers = {listing: 27,name: "Ten Tigers",location:"Petworth",foodType: "Asian",price: "$",cocktail: true,beer: true,wine: true,source:"http://www.tentigersdc.com/happy-hour/"};
    var reynolds = {listing: 28,name: "DC Reynolds",location:"Petworth",foodType: "American",price: "$",cocktail: true,beer: true,wine: true,source:"http://washingtondc.menupages.com/restaurants/dc-reynolds/"};
    var thePitch = {listing: 29,name: "The Pitch",location:"Petworth",foodType: "American",price: "$",cocktail: true,beer: true,wine: true,source:"https://www.thepitchtavern.com/menus-2"};
    //CAPTIOL HILL
    var boxcar = {listing: 30,name: "Boxcar Tavern",location:"Capitol Hill",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://boxcartaverndc.com//happy-hour?_ga=2.197806761.744928053.1518799018-1523407922.1518555652",coordsX: -77.0074869, coordsY: 38.8867099};
    var hawkDove = {listing: 31,name: "Hawk 'n' Dove",location:"Capitol Hill",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://hawkndovethehill.com/happy-hour"};
    var lavagna = {listing: 32,name: "Lavagna",location:"Capitol Hill",foodType: "Italian",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.lavagnadc.com/"};
    var uglyMugCH = {listing: 33,name: "The Ugly Mug",location:"Capitol Hill",foodType: "American",price: "$",cocktail: true,beer: true,wine: true,source:"http://www.uglymugdc.com/food-drink/"};
    var ambar = {listing: 34,name: "Ambar",location:"Capitol Hill",foodType: "European",price: "$",cocktail: true,beer: true,wine: true,source:"https://www.ambarrestaurant.com/menu-washington/"};
    // H STREET
    var bigBoard = {listing: 35,name: "The Big Board",location:"H. Street",foodType: "American",price: "$$",cocktail: false,beer: true,wine: true,source:"http://thebigboarddc.com/",coordsX: -77.0023317, coordsY: 38.9001383};
    var smith = {listing: 36,name: "Smith Commons",location:"H. Street",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.smithcommonsdc.com/menu2"};
    var biergarten = {listing: 37,name: "Biergarten House",location:"H. Street",foodType: "European",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.biergartenhaus.com/events"};
    var hCC = {listing: 38,name: "H St Country Club",location:"H. Street",foodType: "Mexican",price: "$$",cocktail: true,beer: true,wine: false,source:"https://static1.squarespace.com/static/5327507de4b0c44d90acc3c5/t/5a0336319140b7583646359a/1510159921295/MENU-DRINKS-WINTER-2017.pdf"};
    var pursuit = {listing: 39,name: "Pursuit Wine Bar",location:"H. Street",foodType: "European",price:"$$$",cocktail: true,beer: true,wine: true,source:"http://www.thepursuitwinebar.com/"};
    // Logan Circle CIRCLE
    var kingFisher = {listing: 40,name: "Kingfisher",location:"Logan Circle",foodType: "American",price: "$$",cocktail: false,beer: true,wine: false,source:"http://www.kingfisherdc.com/",coordsX: -77.0345797, coordsY: 38.9098115};
    var churchKey = {listing: 41,name: "Church Key",location:"Logan Circle",foodType: "American",price: "$$",cocktail: false,beer: true,wine: false,source:"http://churchkeydc.com/#menus"};
    var draftTable = {listing: 42,name: "Draft Table",location:"Logan Circle",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.draftingtabledc.com/menu/"};
    var loganTavern = {listing: 43,name: "Logan Circle Tavern",location:"Logan Circle",foodType: "European",price:"$$$",cocktail: true,beer: true,wine: true,source:"http://Logan Circletavern.com/menu/"};
    var sotto = {listing: 44,name: "Sotto",location:"Logan Circle",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.sottodc.com/dinner/"};
    // SHAW   && U ST
    var brixton = {listing: 45,name: "The Brixton",location:"Shaw / U. Street",foodType: "Irish",price: "$$",cocktail: true,beer: true,wine: true,source:"http://brixtondc.com/#/menu",coordsX: -77.0275162, coordsY: 38.9170045};
    var chaplins = {listing: 46,name: "Chaplin's",location:"Shaw / U. Street",foodType: "Asian",price: "$$",cocktail: true,beer: true,wine: true,source:"http://chaplinsdc.com/chaplins-desserts_in_dc/"};
    var dacha = {listing: 47,name: "Dacha Beer Garden",location:"Shaw / U. Street",foodType: "European",price: "$$",cocktail: true,beer: true,wine: true,source:"https://dachadc.com/beergarden/"};
    var drift = {listing: 48,name: "Drift on 7th",location:"Shaw / U. Street",foodType: "Seafood",price: "$$",cocktail: true,beer: true,wine: true,source:"http://drifton7th.com/images/menus/Drift-Happy-Hour-Menu.pdf"};
    var shawsTavern = {listing: 49,name: "Shaw ' s Tavern",location:"Shaw / U. Street",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.shaw s tavern.com/menu/dinner-menu/"};
    // EASTERN MARKET
    var belga = {listing: 50,name: "Belga Cafe",location:"Eastern Market",foodType: "European",price: "$$",cocktail: true,beer: true,wine: true,source:"https://cdn-assets.indigenous.io/account_1346/Happy_Hour_food_2017_06_27_JZ_1515530138399.pdf",coordsX: -76.9986338, coordsY: 38.8865922};
    var placitas = {listing: 51,name: "Las Placitas",location:"Eastern Market",foodType: "Mexican",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.lasplacitasrestaurant.com/8th_Menu.html"};
    var mrHenrys = {listing: 52,name: "Mr. Henry's",location:"Eastern Market",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.mrhenrysdc.com/happy-hour"};
    var radici = {listing: 53,name: "Radici",location:"Eastern Market",foodType: "Italian",price: "$$",cocktail: false,beer: true,wine: true,source:"http://www.radici-market.com/pranzo-lunch/"};
    var uglyMug = {listing: 54,name: "The Ugly Mug",location:"Eastern Market",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.uglymugdc.com/food-drink/"};
    // COLUMBIA HEIGHTS
    var bravo = {listing: 55,name: "BravoBar",location:"Columbia Heights",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"https://www.facebook.com/Bravo-Bar-247126958778878/",coordsX: -77.039649, coordsY: 38.9282274};
    var theCoupe = {listing: 56,name: "The Coupe",location:"Columbia Heights",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.thecoupedc.com/menudinner/happy-hour/"};
    var elChucho = {listing: 57,name: "El Chucho",location:"Columbia Heights",foodType: "Mexican",price: "$$",cocktail: true,beer: true,wine: false,source:"https://www.elchuchodc.com/"};
    var theHeights = {listing: 58,name: "The Heights",location:"Columbia Heights",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"https://www.theheightstaproom.com/print-menu"};
    var wonderland = {listing: 59,name: "Wonderland Ballroom",location:"Columbia Heights",foodType: "American",price: "$$",cocktail: true,beer: true,wine: true,source:"http://www.thewonderlandballroom.com/menu/"};

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
    // hide theses select element until one of the neighborhood selected and booze icons are clicked
    $(".booze-wrapper").hide();
    $(".booze-row").hide();
    $("#choose-your-booze-row").hide();
    $(".result-row").hide();
    $("#map").hide();

    // Triggers checkLocation when neighborhood is chosen
    var selectedVal= "";
    $("#neighborhood-selector").change(function() {
        locationFiltered = [];
        selectedVal = $(this).find(':selected').val();
        checkLocation (selectedVal);
    });

    //shows text displaying the location when the dropdown is clicked
    var showLocation = function (){
        var newLocation= locationFiltered[0].location;
        $("#locationBanner").empty();
        $("#locationBanner").append("<p>"+newLocation+"</p>");
        $("#locationBanner").letterfx({"fx":"swirl fly_bottom","fly_bottom":"forward"});
    }

    // Appends target div with restaurants that meet drink criteria, from chosen neighborhood
        var printResult = function (looper){
            var newName = locationFiltered[looper].name;
            var newFoodType = locationFiltered[looper].foodType;
            var newPrice = locationFiltered[looper].price;
            var newSrc = locationFiltered[looper].source;
            $(".booze-row").hide();
            $("#choose-your-booze-row").hide();
            $(".result-row").show();
            $("#map").show();
            $(".resultBox").append("<p class='result'>"+newName+" | "+newFoodType+" | " +newPrice+ " | <a target='_blank' href='"+ newSrc+"'>Menu</a></p>");
        }

    // Check drink functions - filter out venues without chosen drink on special
    var checkBeer = function (){
        for (var j=0; j<locationFiltered.length; j++){
            if (locationFiltered[j].beer==true){
                centerMap();
                printResult (j);
            }
        }
        showLocation();
    }
    var checkWine = function (){
        for (var j=0; j<locationFiltered.length; j++){
            if (locationFiltered[j].wine==true){
                centerMap();
                printResult (j);
            }
        }
        showLocation();
    }
    var checkCocktail = function (){
        for (var j=0; j<locationFiltered.length; j++){
            if (locationFiltered[j].cocktail==true){
                centerMap();
                printResult (j);
            }
        }
        showLocation();
    }
    // center map function
    var centerMap = function (){
        map.flyTo({
            center: [locationFiltered[0].coordsX,locationFiltered[0].coordsY],
            zoom: 15,
            pitch: 20,
            bearing: -17.6,
        });
    }

// Button dynamics javascript
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
    
    // when you choose what type of drinks you want, it calls the respective cheeck function
    $("#cocktail-btn").click(function(){
        $(".resultBox").empty();
        checkCocktail();
    });
    $("#beer-btn").click(function(){
        $(".resultBox").empty();
        checkBeer();
    });
    $("#wine-btn").click(function(){
        $(".resultBox").empty();
        checkWine();
    }); // end of booze choice on clicks
    
    //Reset button onclick
    $("#resetBtn").click(function(){
        $("#map").hide();
        $(".result-row").hide();
        $(".neighborhood-sel-row").show();
    });
    
    // after choosing a neighborhood, .show(); the price point icons and animate like the booze icons.
    $( "#neighborhood-selector" ).change(function () {
      $( "select option:selected" ).each(function() {
        $(".neighborhood-sel-row").hide();
        $(".booze-wrapper").show();
        $(".booze-row").show();
        $("#choose-your-booze-row").show();
        $("#cyb").show();
        animateBoozeIcons();
      })
    })
    
    });  // end of $(document).ready(function())
    

//----------------------Map Script------------------------------//
mapboxgl.accessToken = 'pk.eyJ1IjoiY2hydXN0IiwiYSI6ImNqZHE2NmlpcDBuZ2YyeHFsMGw4cWlubHQifQ.yVPR_ekkoTim3eEElQt76w';
    var map = new mapboxgl.Map({
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-77.04268,38.921753],
    zoom: 17,
    pitch: 20,
    bearing: -17.6,
    hash: true,
    container: 'map'
    });

    // The 'building' layer in the mapbox-streets vector source contains building-height
    // data from OpenStreetMap.
    map.on('load', function() {
    // Insert the layer beneath any symbol layer.
    var layers = map.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
        }
    }

    map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
            'fill-extrusion-color': '#aaa',

            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            'fill-extrusion-height': [
                "interpolate", ["linear"], ["zoom"],
                15, 0,
                15.05, ["get", "height"]
            ],
            'fill-extrusion-base': [
                "interpolate", ["linear"], ["zoom"],
                15, 0,
                15.05, ["get", "min_height"]
            ],
            'fill-extrusion-opacity': .6
        }
    }, labelLayerId);
    });
    //End of 3D Extrapulation//

    //Beginning Icon Di//
    map.on('load', function () {
    // Add a layer showing the places.
    map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    //--Adams Morgan--//
                    "type": "Feature",
                    "properties": { 
                        "description": "<strong><u>Madam's Organ</u></strong><br><a href=\"http://www.madamsorgan.com/menu.html\" target=\"_blank\" title=\"Opens in a new window\">Madams Organ</a> Lively blues bar offers comfort food & drinks in mason jars along with music, dancing & a roof deck.</p><p>Happy Hours: Friday-Wednesday 5p-8p</p><p>Happy Hour Specials: Enjoy 1/2 price beer, wine, and rail drinks. Thursdays are $1 off ALL drinks to benefit our non-profit events.</p>",
                        "icon": "music"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.0421372,38.922032]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Johnny's Half Shell</strong><p><a href=\"https://www.johnnyshalfshell.net/menu\" target=\"_blank\" title=\"Opens in a new window\">Johnny's Half Shell</a> Fried oysters, gumbo & chef-y seafood dishes in warm surrounds with a sociable bar & maritime feel.</p>",
                        "icon": "alcohol-shop"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.0435031,38.9218514]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Smoke and Barrel</strong><p><a href=\"https://smokeandbarreldc.com/menu/\" target=\"_blank\" title=\"Opens in a new window\">Smoke and Barrel</a> Barbecue chow with vegan options & a rotating beer list with rare brews in a dramatic space.</p>",
                        "icon": "circle"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.0422128,38.9223012]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Roofers Union</strong><p><a href=\"https://roofersuniondc.com/dinner-menu/\" target=\"_blank\" title=\"Opens in a new window\">Roofers Union</a> Unique American fare & craft cocktails draw fans to this rustic, 3-story tavern with rooftop views.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.0427305,38.9218512]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Shenanign's Irish Pub</strong><p><a href=\"http://www.shenaniganspubdc.com/menu\" target=\"_blank\" title=\"Opens in a new window\">Shenanign's Irish Pub</a> Bi-level game day spot doling out burgers, sandwiches & other pub fare, plus many Irish beers.</p>",
                        "icon": "beer"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.04266433, 38.92193781]
                    },
                    //--H Street--//
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Roofers Union</strong><p><a href=\"https://roofersuniondc.com/dinner-menu/\" target=\"_blank\" title=\"Opens in a new window\">Roofers Union</a> Unique American fare & craft cocktails draw fans to this rustic, 3-story tavern with rooftop views.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.0427305,38.9218512]
                    }
                    
                
                }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "icon-allow-overlap": true
        }
    });

    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'places', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
    });
    });

    //Shows Neighborhood Circle//
    var circle = L.circle([38.92193781,-77.04266433], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
    }).addTo(mymap);