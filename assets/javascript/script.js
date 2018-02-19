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
                                    //----Georgetown----//
                }, {
                    "type": "Feature",
                    "properties": {
                        //J Paul's//
                        "description": "<strong><u>J Paul's</u></strong><br><a href=\"http://jpaulsdc.com/menus/\" target=\"_blank\" title=\"Opens in a new window\">J Paul's</a> American classics, raw shellfish & cocktails served in brick-walled digs with an old-school vibe.</p><p>Happy Hours: Monday-Friday: 4p-7p, Saturday: 10:30a-4p</p><p>Happy Hour Specials: $5 Cocktails; $3 Beer; $1 Blue Points Oysters; .50 Wings; $6 Tuna Roll</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.06350700000002,38.9049927]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Pizzeria Paradiso//
                        "description": "<strong><u>Pizzeria Paradiso</u></strong><br><a href=\"https://www.eatyourpizza.com/happy-hour/\" target=\"_blank\" title=\"Opens in a new window\">Pizzeria Paradiso</a> Salad, panini & signature pizza plus an extensive beer list in a cosmopolitan, brick-walled setting.</p><p>Happy Hours: Monday-Thursday: 5p-7p</p><p>Happy Hour Specials: $4 Draft Beer; $6 Appetizers; $12 9 Pizzas and $18 12 Pizzas</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.06547899999998,38.904745]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Old Glory Barbecue//
                        "description": "<strong><u>Old Glory Barbecue</u></strong><br><a href=\"http://www.oldglorybbq.com/menus/happy-hour\" target=\"_blank\" title=\"Opens in a new window\">Old Glory Barbecue</a> Barbecue specialties such as ribs & pulled pork, plus a rooftop patio & sports on TV.</p><p>Happy Hours: Saturday-Sunday: 11a-3p, Monday-Friday: 3p-6:30p</p><p>Happy Hour Specials: Weekends: $7 Brunch Mimosas and Bacon Bloody Marys Weekdays: All Draft Beer Half Price; All Appetizers Half Price</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.06221299999999,38.9053772]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //The Sovereign//
                        "description": "<strong><u>The Sovereign</u></strong><br><a href=\"http://thesovereigndc.com/#menus\" target=\"_blank\" title=\"Opens in a new window\">The Sovereign</a> Wide-ranging roster of Belgian-style brews & robust Flemish-inspired fare in a cozy pub & airy bar.</p><p>Happy Hours: Monday-Friday: 5p-6:30p</p><p>Happy Hour Specials: $4 Draft Beer;$4 Spirits; $4 Wine; $4 Snacks</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.06305020000002,38.9054976]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //The Tombs//
                        "description": "<strong><u>The Tombs</u></strong><br><a href=\"http://www.tombs.com/#!menu\" target=\"_blank\" title=\"Opens in a new window\">The Tombs</a> Veteran university haunt in converted 19th-century townhouse serving comfort fare, brews & pub grub.</p><p>Happy Hours: Everday: 10p-Close</p><p>Happy Hour Specials: $4 Shots; $8 Pitchers</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.0704882,38.9060732]
                    },
                //----Friendship-Tenleytown----//
                }, {
                    "type": "Feature",
                    "properties": {
                        //Chef Geoff's//
                        "description": "<strong><u>Chef Geoff's</u></strong><br><a href=\"http://www.chefgeoff.com/menu/chef-geoffs\" target=\"_blank\" title=\"Opens in a new window\">Chef Geoff's</a> American dishes with a twist, in a classic space that's both kid-friendly & has an active bar scene.</p><p>Happy Hours: Monday-Tuesday: All day, Wednesday-Sunday: 3p-7p</p><p>Happy Hour Specials: $7 Wine, $5 Snacks, $6 Appetizers, $6 Cocktails, $9 Supermugs, $5 Drafts</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.08478170000001,38.9331895]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Chatter//
                        "description": "<strong><u>Chatter</u></strong><br><a href=\"https://docs.wixstatic.com/ugd/c2a145_505cbb0822af4f6994c566de5806ad6a.pdf\" target=\"_blank\" title=\"Opens in a new window\">Chatter</a> Local haunt with upscale American fare in an old-school, step-down, brick-walled setting plus TVs.</p><p>Happy Hours: Monday-Friday: 4p-7p</p><p>Happy Hour Specials: $3 Select Drafts, $4 House Wines, $5 Rail Drinks, Discounted Appetizers.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.0843491,38.9587395]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Casa Luca//
                        "description": "<strong><u>Casa Luca</u></strong><br><a href=\"http://www.casalucadc.com/menus/\" target=\"_blank\" title=\"Opens in a new window\">Casa Luca</a> Stylish, airy Italian eatery with big windows, warm woods, red leather banquettes & wines on tap.</p><p>Happy Hours: Monday-Friday: 4p-6p</p><p>Happy Hour Specials: $5 Beers; $6 Vino in Bottiglia; $5 Cocktails; $6 Tonato Deviled Eggs; $16 Cheese, Cured Meats & Bread; $6 Casa Luca Flatbread</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.02674439999998,38.9017319]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Front Page DC//
                        "description": "<strong><u>Front Page DC</u></strong><br><a href=\"http://www.frontpagedc.com/happy-hour/\" target=\"_blank\" title=\"Opens in a new window\">Front Page DC</a> Classic pub draws crowds of young professionals for happy hour, pub food & power lunches & brunches.</p><p>Happy Hours: Monday-Friday: 4p-8p, Weekends: 10a-3p</p><p>Happy Hour Specials: Weekdays: $4 House Red and White Wines; $3 Rail Drinks; $3 Miller Lite & Yuengling; $5 Margaritas $5 Appetizers. Weekends: $10 Unlimited Champagne or Mimosa with Brunch</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.04396969999999,38.9084482]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Yosaku Japanese//
                        "description": "<strong><u>Yosaku Japanese</u></strong><br><a href=\"https://www.yosakusushi.com/menu\" target=\"_blank\" title=\"Opens in a new window\">Yosaku Japanese</a> Long-standing mainstay with traditional & creative sushi & cooked Japanese dishes plus a happy hour.</p><p>Happy Hours: Everday: 10p-Close</p><p>Happy Hour Specials: $4 Shots; $8 Pitchers</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.081389,38.9514858]
                    },
                //----Adams Morgan----//
                }, {
                    "type": "Feature",
                    "properties": { 
                        //Madam's Organ//
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
                        //Johnny's Half Shell//
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
                        //Smoke and Barrel//
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
                        //Roofers Union//
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
                        //Shenanign's Irish Pub//
                        "description": "<strong>Shenanign's Irish Pub</strong><p><a href=\"http://www.shenaniganspubdc.com/menu\" target=\"_blank\" title=\"Opens in a new window\">Shenanign's Irish Pub</a> Bi-level game day spot doling out burgers, sandwiches & other pub fare, plus many Irish beers.</p>",
                        "icon": "beer"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.04266433, 38.92193781]
                    },
                //---Dupont Circle----//
                }, {
                    "type": "Feature",
                    "properties": { 
                        //Mission//
                        "description": "<strong><u>Mission</u></strong><br><a href=\"https://www.missiondupont.com/menus/#happy-hour\" target=\"_blank\" title=\"Opens in a new window\">Mission</a> Stylish Mexican eatery with a patio.</p><p>Happy Hours: Everyday 5p-7p</p><p>Happy Hour Specials: $3.75 Tecate; $5 El Jimador tequila shot; $6.75 Mission Margaritas; $6.50 Avelada Vinho Verde & Diseno Malbec; $21 Margarita Pitchers; $6.50 Red & White Sangria; $21.82 Sangria Pitchers; $9 Dupont Margarita; $28 Dupont Margarita Pitchers; $7.50 Nachos and Quesadillas (add Shrimp, Steak, Chicken, Chorizo for extra cost); $7 Small Guacamole; $9.50 Large Guacamole</p>",
                        "icon": "music"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.04521199999999,38.911459]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Hank's Oyster Bar//
                        "description": "<strong><u>Hank's Oyster Bar</u></strong><br><a href=\"https://hanksoysterbar.com/dupont-circle/menus/#happy-hour\" target=\"_blank\" title=\"Opens in a new window\">Hank's Oyster Bar</a> New England-style seafood outpost with clams, lobster rolls, a raw bar & daily specials.</p><p>Happy Hours: 5p-7p; 10p-Midnight</p><p>Happy Hour Specials: $5 Rails, Select Beers, and Select Wines; $5 Happy Hour Snacks; $1.25 Select Oysters (5pm-7pm); 1/2 Price Raw Bar (10pm-Midnight)</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.038115,38.910867]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Firefly//
                        "description": "<strong><u>Firefly</u></strong><br><a href=\"http://www.firefly-dc.com/en-us/menus/food-drinks.htm\" target=\"_blank\" title=\"Opens in a new window\">Firefly</a> Restaurant built around a large indoor tree, serving seasonal, local New American comfort food.</p><p>Happy Hours: Monday-Friday: 4p-7p</p><p>Happy Hour Specials: $3 Draft Beer; $4 Glasses of Wine; $5 Liquor 'n Mixer; $5 Seven Salty Snacks Menu</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.0458097,38.90763949999999]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Sette Osteria//
                        "description": "<strong><u>Sette Osteria</u></strong><br><a href=\"http://www.setteosteria.com/dupont-menu.html\" target=\"_blank\" title=\"Opens in a new window\">Sette Osteria</a> Popular Italian cafe is known for its pizza & people-watching from outdoor seating.</p><p>Happy Hours: Everyday 4p-7p; 10p-Close</p><p>Happy Hour Specials: $5 Cocktails; $5 Bubbles; $5 White and Red Wines; $4 Beers; $5 Small Bites; $6 Margherita Pizza; $6 Flatbreads</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.04551370000001,38.9123332]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Beacon Bar and Grill//
                        "description": "<strong><u>Beacon Bar and Grill</u></strong><br><a href=\"http://bbgwdc.com/happy-hour-bar-menu/\" target=\"_blank\" title=\"Opens in a new window\">Beacon Bar and Grill</a> Hotel bar with a mod, colorful interior, piano music, a rooftop lounge & a popular champagne brunch.</p><p>Happy Hours: Everyday 4p-7p</p><p>Happy Hour Specials: 5 for 5 Happy Hour Specials - $5 Appetizers, Cocktails, Wines, & Beers</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.03805090000003,38.90702780000001]
                    },
                //----Southwest Waterfront----//
                }, {
                    "type": "Feature",
                    "properties": { 
                        //Hank's Oyster Bar//
                        "description": "<strong><u>Hank's Oyster Bar</u></strong><br><a href=\"https://hanksoysterbar.com/dupont-circle/menus/#happy-hour\" target=\"_blank\" title=\"Opens in a new window\">Hank's Oyster Bar</a> New England-style seafood outpost with clams, lobster rolls, a raw bar & daily specials.</p><p>Happy Hours: 5p-7p; 10p-Midnight</p><p>Happy Hour Specials: $5 Rails, Select Beers, and Select Wines; $5 Happy Hour Snacks; $1.25 Select Oysters (5pm-7pm); 1/2 Price Raw Bar (10pm-Midnight)</p>",
                        "icon": "music"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.02389619999997,38.8782596]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Jenny's at the Wharf//
                        "description": "<strong><u>Jenny's at the Wharf</u></strong><br><a href=\"http://www.jennysdc.com/media/docs/JennysMenuMay2015.pdf\" target=\"_blank\" title=\"Opens in a new window\">Jenny's at the Wharf</a> Standard Chinese favorites plus curries & noodle dishes are served at this simple Asian eatery.</p><p>Happy Hours: </p><p>Happy Hour Specials: </p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.02304859999998,38.8778525]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Masala Art//
                        "description": "<strong><u>Masala Art</u></strong><br><a href=\"http://www.masalaartdc.com/southwest-categry/happy-hour-at-bar-only/\" target=\"_blank\" title=\"Opens in a new window\">Masala Art</a> Classic Indian eats alongside hard-to-find items offered in a basic dining room with a lunch buffet.</p><p>Happy Hours: </p><p>Happy Hour Specials: </p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.01803310000003,38.8776828]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Station Four//
                        "description": "<strong><u>Station Four</u></strong><br><a href=\"http://www.setteosteria.com/dupont-menu.html\" target=\"_blank\" title=\"Opens in a new window\">Station Four</a> Creative New American cuisine in a swanky setting within walking distance of Arena Stage.</p><p>Happy Hours: Everyday 4p-7p; 10p-Close</p><p>Happy Hour Specials: $5 Cocktails; $5 Bubbles; $5 White and Red Wines; $4 Beers; $5 Small Bites; $6 Margherita Pizza; $6 Flatbreads</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.01803310000003,38.8776828]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //City Bar//
                        "description": "<strong><u>City Bar</u></strong><br><a href=\"http://www.citybardc.com/menu/\" target=\"_blank\" title=\"Opens in a new window\">City Bar</a> Rooftop hotel bar featuring craft cocktails & city views in a casual ambiance. Open seasonally.</p><p>Happy Hours: </p><p>Happy Hour Specials: </p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.01803310000003,38.8829816]
                    },
                //----Petworth----//
                }, {
                    "type": "Feature",
                    "properties": {
                        //The Airedale//
                        "description": "<strong><u>The Airedale</u></strong><br><a href=\"http://www.airedaledc.com/menu-marquee/\" target=\"_blank\" title=\"Opens in a new window\">The Airedale</a> Brick-walled soccer bar & beer garden with European & local brews, plus unique pub fare.</p><p>Happy Hours: Tuesday-Friday: 4p-7p</p><p>Happy Hour Specials: </p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.03240579999999,38.9364211]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Looking Glass Lounge//
                        "description": "<strong><u>Looking Glass Lounge</u></strong><br><a href=\"http://www.thelookingglasslounge.com/menu/\" target=\"_blank\" title=\"Opens in a new window\">The Looking Glass Lounge</a> Easygoing bar with stained-glass windows & other old-time flourishes, plus open-mike & quiz nights.</p><p>Happy Hours: Everyday: 5p-8p</p><p>Happy Hour Specials: $4 Drafts; $4 Rail Liquor Drinks; $2.50 Half Smokes</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.02443240000002,38.93501190000001]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Ten Tigers//
                        "description": "<strong><u>Ten Tigers</u></strong><br><a href=\"http://www.tentigersdc.com/happy-hour/\" target=\"_blank\" title=\"Opens in a new window\">Ten Tigers</a> Asian light fare like soup dumplings, bao buns & bubble tea in chill spot with Wi-Fi & cocktails.</p><p>Happy Hours: Monday-Thursday 4p-7p, Friday 4-6</p><p>Happy Hour Specials: three drafts at discounted prices, $6 for 1/2 Liters and $10 for full Liters of Premium German imported Bier; Rail Liquor and Wine by the Glass for $6; and Half Off Appetizers.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.0243537,38.9381214]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //DC Reynolds//
                        "description": "<strong><u>DC Reynolds</u></strong><br><a href=\"http://washingtondc.menupages.com/restaurants/dc-reynolds/\" target=\"_blank\" title=\"Opens in a new window\">DC Reynolds</a> Relaxed bar serving brunch, sandwiches & eclectic entrees in a brick-walled space.</p><p>Happy Hours: Monday-Friday 5p-9p, Tuesday all night</p><p>Happy Hour Specials: BOGO Everything</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.02436490000002,38.9348639]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //The Pitch//
                        "description": "<strong><u>The Pitch</u></strong><br><a href=\"https://www.thepitchtavern.com/menus-2\" target=\"_blank\" title=\"Opens in a new window\">The Pitch</a> Sports dominate the screens at this hangout that also hosts live bands & serves beer & bar snacks.</p><p>Happy Hours: </p><p>Happy Hour Specials: </p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.02469459999998,38.9402604]
                    }
                //----Capitol Hill----//
                }, {
                    "type": "Feature",
                    "properties": {
                        //Boxcar Tavern//
                        "description": "<strong><u>Boxcar Tavern</u></strong><br><a href=\"http://boxcartaverndc.com//happy-hour?_ga=2.197806761.744928053.1518799018-1523407922.1518555652\" target=\"_blank\" title=\"Opens in a new window\">Boxcar Tavern</a> Narrow tavern with a Victorian London vibe serving upscale American pub grub & a weekend brunch.</p><p>Happy Hours: Monday-Friday: 4pm-7pm</p><p>Happy Hour Specials: $2 Off Draft Beer, House Wines, Rail Cocktails</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-76.9958297,38.88655910000001]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Hawk 'n' Dove//
                        "description": "<strong><u>Hawk 'n' Dove</u></strong><br><a href=\"http://hawkndovethehill.com/happy-hour\" target=\"_blank\" title=\"Opens in a new window\">Hawk 'n' Dove</a> Farm-fresh, upscale pub grub, plus brews & wine turned out in spacious, industrial-chic surrounds.</p><p>Happy Hours: Monday-Friday: 4pm-7pm</p><p>Happy Hour Specials: $3 Draft Beer </p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.00122720000002,38.8863627]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Lavagna//
                        "description": "<strong><u>Lavagna</u></strong><br><a href=\"http://www.lavagnadc.com/\" target=\"_blank\" title=\"Opens in a new window\">Lavagna</a> Housemade pastas & other locally sourced Italian eats are served alongside wine, beer & cocktails.</p><p>Happy Hours: Monday-Friday 4p-6:30p</p><p>Happy Hour Specials: 1/2 price drinks</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-76.9952897,38.8816014]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //The Ugly Mug//
                        "description": "<strong><u>The Ugly Mug</u></strong><br><a href=\"http://www.uglymugdc.com/food-drink/\" target=\"_blank\" title=\"Opens in a new window\">The Ugly Mug</a> Casual bar featuring numerous beers on tap, classic American fare & TVs tuned to sports.</p><p>Happy Hours: Monday-Friday 5p-9p, Tuesday all night</p><p>Happy Hour Specials: BOGO Everything</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-76.9951997,38.8804673]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Ambar//
                        "description": "<strong><u>Ambar</u></strong><br><a href=\"https://www.ambarrestaurant.com/menu-washington/\" target=\"_blank\" title=\"Opens in a new window\">Ambar</a> Small plates menu of traditional Balkan dishes, plus regional spirits presented in rustic-chic digs.</p><p>Happy Hours: Monday-Friday: 4p-7p</p><p>Happy Hour Specials: 	$5 Beers; $5 Wines; $5 Cocktails; $5 Small Plates</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-76.9951547,38.8820276]
                    }    
                //----H Street----//
                }, {
                    "type": "Feature",
                    "properties": {
                        //Big Board//
                        "description": "<strong><u>The Big Board</u></strong><br><a href=\"http://thebigboarddc.com/\" target=\"_blank\" title=\"Opens in a new window\">The Big Board</a> High-concept pub for clever burgers & draft beer sold at prices that fluctuate with demand.</p><p>Happy Hours: Sunday-Saturday 5p-7p</p><p>Happy Hour Specials: $1.50 off all drafts, $2.00 off wine, $10 Yuengling & Wings Special during Late Night.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-76.999749,38.9000349]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Smith Commons//
                        "description": "<strong><u>Smith Commons</u></strong><br><a href=\"http://www.smithcommonsdc.com/menu2\" target=\"_blank\" title=\"Opens in a new window\">Smith Commons</a> Multilevel bistro serving New American fare, beer & cocktails in a chic converted-warehouse space.</p><p>Happy Hours: Tuesday-Sunday 4:30p-7p</p><p>Happy Hour Specials: selected $5 cocktails, wine, and $2 off selected draught beer and bar menu items.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-76.9887476,38.9000573]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Biergarten Haus//
                        "description": "<strong><u>Biergarten Haus</u></strong><br><a href=\"http://www.biergartenhaus.com/events\" target=\"_blank\" title=\"Opens in a new window\">Biergarten Haus</a> Multilevel bistro serving New American fare, beer & cocktails in a chic converted-warehouse space.</p><p>Happy Hours: Monday-Thursday 4p-7p, Friday 4-6</p><p>Happy Hour Specials: three drafts at discounted prices, $6 for 1/2 Liters and $10 for full Liters of Premium German imported Bier; Rail Liquor and Wine by the Glass for $6; and Half Off Appetizers.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-76.9865672,38.8999352]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //H Street Country Club//
                        "description": "<strong><u>H Street Country Club</u></strong><br><a href=\"https://static1.squarespace.com/static/5327507de4b0c44d90acc3c5/t/5a0336319140b7583646359a/1510159921295/MENU-DRINKS-WINTER-2017.pdf\" target=\"_blank\" title=\"Opens in a new window\">H Street Country Club</a> Tacos & tequila fuel mini-golf, shuffleboard, Skee-Ball & more at this Mexican eatery & game room.</p><p>Happy Hours: Monday-Friday 4p-7p, Tuesday all night</p><p>Happy Hour Specials: $5 Classica Margaritas & $3 Mexican Beers.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-76.987135,38.8999419]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //The Pursuit Wine Bar//
                        "description": "<strong><u>The Pursuit Wine Bar</u></strong><br><a href=\"http://www.thepursuitwinebar.com/\" target=\"_blank\" title=\"Opens in a new window\">Pursuit Wine Bar</a> Wines by the glass & nibbles like charcuterie in a rustic-chic space with a date-night vibe.</p><p>Happy Hours: Tuesday All Night, Wednesday-Saturday 5p-7p</p><p>Happy Hour Specials: $3 Off Standby Flights, $2 Off Glasses of Wine, $2 Off Cocktails, $1 Off Beer, $2 Off Smaller Plates.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-76.984617,38.8999493]
                    }
                //----Logan Circle----//
                }, {
                    "type": "Feature",
                    "properties": {
                        //Kingfisher//
                        "description": "<strong><u>Kingfisher DC</u></strong><br><a href=\"http://www.kingfisherdc.com/\" target=\"_blank\" title=\"Opens in a new window\">Kingfisher DC</a> Intimate, subterranean bar with beer & shot combos, free popcorn & an industrial-chic vibe.</p><p>Happy Hours: Sunday-Saturday until 8p</p><p>Happy Hour Specials: Unlisted</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.032181,38.909397]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Churchkey//
                        "description": "<strong><u>Churchkey</u></strong><br><a href=\"http://churchkeydc.com/#menus\" target=\"_blank\" title=\"Opens in a new window\">Churchkey</a> Snacks, flatbreads & cheese plates accompany a large selection of bottled & draft beers, some rare.</p><p>Happy Hours: Unlisted</p><p>Happy Hour Specials: Unlisted</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.031551,38.908483]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Drafting Table//
                        "description": "<strong><u>Drafting Table</u></strong><br><a href=\"http://www.draftingtabledc.com/menu/\" target=\"_blank\" title=\"Opens in a new window\">Drafting Table</a> Informal hangout offering diverse American & global bar bites & cocktails in contemporary surrounds.</p><p>Happy Hours: Saturday-Sunday 9a-closing, Monday-Tuesday 4p-closing, Wednesday-Friday 4p-6:30p, 10p-closing</p><p>Happy Hour Specials: Weekdays $4 drafts, $5 rail drinks, $6 glasses of wine; Weekends $14 bottomless mimosas and $5 bloody Marys brunch hours, late night beer specials</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.031574,38.910793]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Logan Tavern//
                        "description": "<strong><u>Logan Tavern</u></strong><br><a href=\"http://logantavern.com/menu/\" target=\"_blank\" title=\"Opens in a new window\">Logan Tavern</a> Casual American eatery with a modern tavern feel is known for pre-theater dining & Sunday brunch.</p><p>Happy Hours: Tuesday-Sunday 4:30p-7p</p><p>Happy Hour Specials: selection of light fare, beer, cocktails, spirits, and wine; all other wines $2 off, beers $1 off.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.032766,38.909814]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Sotto//
                        "description": "<strong><u>Sotto</u></strong><br><a href=\"http://www.sottodc.com/dinner/\" target=\"_blank\" title=\"Opens in a new window\">Sotto</a> Cozy yet classy, this speakeasy below Ghibellina serves retro-inspired cocktails & American fare.</p><p>Happy Hours: Tuesday-Saturday 5p-7p</p><p>Happy Hour Specials: selection $8 cocktails, $5 draft beer and wine, limited menu.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.032316,38.911539]
                    }
                //----Shaw && U ST----//
                }, {
                    "type": "Feature",
                    "properties": {
                        //Brixton//
                        "description": "<strong><u>Brixton</u></strong><br><a href=\"http://brixtondc.com/#/menu\" target=\"_blank\" title=\"Opens in a new window\">Brixton</a> Hip hangout boasting a first floor British pub, second floor lounge & a large roof deck with 2 bars.</p><p>Happy Hours: Monday-Friday 5p-7:30p, Saturday-Sunday 1p-5p</p><p>Happy Hour Specials: Miller Lite tallboys $4, Tecate $4, $2 off all draught beers, rail drinks $5, New Amsterdam Vodka $5, all wines by the glass $, selection of food, including $7 for paired sliders.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.024196,38.917185]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Chaplin's//
                        "description": "<strong><u>Chaplin's</u></strong><br><a href=\"http://chaplinsdc.com/chaplins-desserts_in_dc/\" target=\"_blank\" title=\"Opens in a new window\">Chaplin's</a> Charlie Chaplin/1920s–themed eatery for Japanese fare & cocktails named after the actor's films.</p><p>Happy Hours: Happy Hours: Every day until 7, excluding brunch hours</p><p>Happy Hour Specials: half off beer, wines by the glass, and selected cocktails.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.023724,38.909809]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Dacha Beer Garden//
                        "description": "<strong><u>Dacha Beer Garden</u></strong><br><a href=\"https://dachadc.com/beergarden/\" target=\"_blank\" title=\"Opens in a new window\">Dacha Beer Garden</a> Outdoor beer garden serving German brews at picnic tables year-round, plus wine & cocktails.</p><p>Happy Hours: Monday-Thursday 4p-7p</p><p>Happy Hour Specials: $7 Absolut mixed drinks, $7 singles, and $14 boots of Weihenstephan pilsner and hefeweizen.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.02216980000003,38.9112383]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Drift on 7th//
                        "description": "<strong><u>Drift on 7th</u></strong><br><a href=\"http://drifton7th.com/images/menus/Drift-Happy-Hour-Menu.pdf\" target=\"_blank\" title=\"Opens in a new window\">Drift on 7th</a> Fresh fish, craft beer & drinks are served in low-key surroundings with a seafaring theme.</p><p>Happy Hours: Monday 7p-close, Tuesday-Friday 4p-7p</p><p>Happy Hour Specials: selected $5 craft beer, house wine, rail liquors, and Maid cocktail, plus daily food offerings.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.021721,38.9147997]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Shaw's Tavern//
                        "description": "<strong><u>Shaw's Tavern</u></strong><br><a href=\"http://www.shawstavern.com/menu/dinner-menu/\" target=\"_blank\" title=\"Opens in a new window\">Shaw's Tavern</a> The New American menu changes with the seasons at this gastropub with exposed-brick decor & patio.</p><p>Happy Hours: Monday-Friday 4p-7p, Satuday-Sunday 5p-7p</p><p>Happy Hour Specials: $3 Miller Lite, $4 Sam Adams seasonal, $5 house wines, $5 rail cocktails, selection of 1/2-priced appetizers.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.01972080000002,38.9152178]
                    }
                //----Eastern Market----//
                }, {
                    "type": "Feature",
                    "properties": {
                        //Belga Cafe//
                        "description": "<strong><u>Belga Cafe</u></strong><br><a href=\"https://cdn-assets.indigenous.io/account_1346/Happy_Hour_food_2017_06_27_JZ_1515530138399.pdf\" target=\"_blank\" title=\"Opens in a new window\">Belga Cafe</a> Authentic fare like mussels with fries & a long list of Belgian ales plus a popular Sunday brunch.</p><p>Happy Hours: Monday-Friday 2:30p-6:30p bar, 2:30p-5:30p patio, Sunday 4p-close bar, 4p-5:30p patio</p><p>Happy Hour Specials: winem draft beer, cocktails, bites all 1/2 price.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-76.99450230000002,38.8822149]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Las Placitas//
                        "description": "<strong><u>Las Placitas</u></strong><br><a href=\"http://www.lasplacitasrestaurant.com/8th_Menu.html\" target=\"_blank\" title=\"Opens in a new window\">Las Placitas</a> Salvadoran seafood & pupusas, plus basic Mexican fare & margaritas, served in a relaxing space.</p><p>Happy Hours: Monday-Friday 3p-6p</p><p>Happy Hour Specials: 1/2 off all drinks.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-76.99462600000004,38.8773619]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Mr. Henrys//
                        "description": "<strong><u>Mr. Henry's</u></strong><br><a href=\"http://www.mrhenrysdc.com/happy-hour\" target=\"_blank\" title=\"Opens in a new window\">Mr. Henry's</a> Corner pub with a gay-friendly vibe that serves burgers & craft beers amid Victorian-style decor.</p><p>Happy Hours: Wednesday-Monday 4:30p-7p, 10p-12a, Tuesday 4p-close</p><p>Happy Hour Specials: an assortment of food and drink specials, cheap margaritas on Tuesdays.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-76.9982594,38.88518759999999]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //Radici//
                        "description": "<strong><u>Radici</u></strong><br><a href=\"http://www.radici-market.com/pranzo-lunch/\" target=\"_blank\" title=\"Opens in a new window\">Radici</a> Italian breakfast and lunch spot in Eastern Market.</p><p>Happy Hours: none</p><p>Happy Hour Specials: n/a.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-76.9963634,38.8858566]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //The Ugly Mug//
                        "description": "<strong><u>The Ugly Mug</u></strong><br><a href=\"http://www.uglymugdc.com/food-drink/\" target=\"_blank\" title=\"Opens in a new window\">The Ugly Mug</a>Casual bar featuring numerous beers on tap, classic American fare & TVs tuned to sports.</p><p>Happy Hours: Monday-Friday 4p-7p</p><p>Happy Hour Specials: $4 mug of lager or Miller Lite, Port City Optimal Wit, Bold Rock, house reds and whites, and all rail drinks $5 each, assorted appetizers.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-76.9951997,38.8804673]
                    }
                //----Columbia Heights----//
                }, {
                    "type": "Feature",
                    "properties": {
                        //Bravo Bar//
                        "description": "<strong><u>Bravo Bar</u></strong><br><a href=\"https://www.facebook.com/Bravo-Bar-247126958778878/\" target=\"_blank\" title=\"Opens in a new window\">Bravo Bar</a> Hipster, but not hampster, -friendly local bar.</p><p>Happy Hours: Sunday-Saturday 5p-8p</p><p>Happy Hour Specials: buy-one get-one drafts and rail liquor, a shot of Jim Beam, a PBR, and a hot dog for $6, $4 wings, $2 pupusas.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.0227792,38.9277962]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //The Coupe//
                        "description": "<strong><u>The Coupe</u></strong><br><a href=\"http://www.thecoupedc.com/menudinner/happy-hour/\" target=\"_blank\" title=\"Opens in a new window\">The Coupe</a> Sleek, 24/7 coffeehouse & lounge serving American gastropub fare, milkshakes & specialty cocktails.</p><p>Happy Hours: Monday-Friday 5p-7p</p><p>Happy Hour Specials: half off starters, beers, tiki punch, Malbecs and Ugni Blancs $5 each.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.0281549,38.93263340000001]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //El Chucho//
                        "description": "<strong><u>El Chucho</u></strong><br><a href=\"https://www.elchuchodc.com/\" target=\"_blank\" title=\"Opens in a new window\">El Chucho</a> Creative takes on taqueria fare & margaritas on tap make this tri-level venue a popular stop.</p><p>Happy Hours: Sunday-Thursday 10p-close, Friday-Saturday 11p-close, Monday 4p-close</p><p>Happy Hour Specials: $3 Tecate, $5.50 margaritas, $5 shots specials, late night food options, 20% off all agave-based spirits on Tuesdays.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.02778369999999,38.9310775]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //The Heights Taproom//
                        "description": "<strong><u>The Heights Taproom</u></strong><br><a href=\"https://www.theheightstaproom.com/print-menu\" target=\"_blank\" title=\"Opens in a new window\">The Heights Taproom</a> Bustling restaurant & bar serving American fare in a publike interior or on the patio.</p><p>Happy Hours: Sunday-Saturday 3p-7p</p><p>Happy Hour Specials: $6 cocktails, draft beer, wine, and sangria, plus appetizer specials.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.0323027,38.9297164]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        //The Wonderland Ballroom//
                        "description": "<strong><u>The Wonderland Ballroom</u></strong><br><a href=\"http://www.thewonderlandballroom.com/menu/\" target=\"_blank\" title=\"Opens in a new window\">The Wonderland Ballroom</a> Variety of beers & DJs spinning keep things lively in the rustic 2-level bar with an outdoor patio.</p><p>Happy Hours: Sunday-Saturday 4p-7:30p</p><p>Happy Hour Specials: $2 off drafts and rail drinks.</p>",
                        "icon": "bar"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-77.02794119999999,38.9299319]
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