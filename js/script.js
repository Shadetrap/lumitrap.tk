// data-jbox-title="Dance, porcupine dance!" 
// data-jbox-content="<img class='fit' src='img/arsotzdragon.gif'/>"
//!Main code
document.body.style.zoom = 1.25;
$('body').css({'background-color': '1s ease'});
//!A possibly working: "Loading site, please wait"
function load(url) {
    //* display loading image here...
    console.log("LOADING DATA");
    //document.getElementById('loadingImg').visible = true;
    // request your data...
    var req = new XMLHttpRequest();
    req.open("POST", url, true);

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            // content is loaded...hide the gif and display the content...
            if (req.responseText) {
                document.getElementById('content').innerHTML = req.responseText;
                document.getElementById('loadingImg').visible = false;
                console.log("LOADING DATA FINISHED");
            }
        }
    };
    request.send(vars);
}
function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);


//window.onload = function() {
    // redirect to lumitrap.tk instead of lumitrap.tk/17
//    window.location.href = "http://www.lumitrap.tk/";
//}


// new jBox('Tooltip', {
// //content: 'This is my jBox',
//   attach: '.tooltip',
//   delayOpen: 500,
//   //delayClose: 1000
//   ttheme:"TooltipDark",animation:"zoomOut",content:"Use themes to change appearance",
// });

// new jBox('Modal', {
//    attach: '#myModal',
//    title: 'Hurray!',
//    content: 'This is my modal window',
//    blockScroll: false,
//  });

// var mobal = new jBox('Modal', {
//     //theme:"ModalBorder",
//     attach: '.MyTooltip',
//     content: $('#grabMe'),
//     title: 'bla',
//     width: 400,
//     getTitle: 'data-jbox-title',
//     getContent: 'data-jbox-content',
//     blockScroll: false,
//     adjustDistance: { left:200, right: 220}, zIndex: 4e3,
//     responsiveMinWidth: 0,
//     responsiveMinHeight: 0,
// });
//!Jbox

 var mobal = new jBox('Modal', {
     //theme:"ModalBorder",
     attach: '.MyTooltip',
     content: $('#grabMe'),
     title: 'Temp title!',
     content: 'Temporary text',
    //  width: 400,
      getTitle: document.title,
     getContent: 'data-jbox-content',
    blockScroll: false,
    //  adjustDistance: { left:200, right: 220}, zIndex: 4e3,
      responsiveMinWidth: 0,
    //  responsiveMinHeight: 0,
    offset:{x:-193, y:-150}
 });





var myBla = new jBox('Tooltip', {
    fade:false,
    adjustDistance: { top: 200, right: 5, bottom: 200, left: 5 }, zIndex: 4e3,
attach: '.bla',
theme:"TooltipDark",
animation:"zoomIn",
trigger: "click touchclick",
//width: 200, height:$(window).height() - 160,
  //title: 'Grab an element',
  //content: 'This is my jBox',
  //content: $('#grabMe'),
  //getTitle: 'data-jbox-title',
  //getContent: 'data-jbox-content',
  responsiveWidth:true,
  responsiveHeight:true,
  adjustTracker: true,
  //adjustPosition:false,
   closeOnClick: "body",
   closeOnEsc: true,
   animation: "move",
   position: { x: "right", y: "center" },
   outside: "x",
   isolateScroll: false,
   //offset: 10 0,
   offset: {x: 6},
   pointer:"left",
   responsiveMinWidth: 0,
responsiveMinHeight: 0,
   onOpen: function () {
     this.source.addClass("active").html("Now scroll")
   },
   onClose: function () {
     this.source.removeClass("active").html("Click me")
   },
});


//!Next part of the code
        // window.addEventListener('load', function () {
        //     var allimages = document.getElementsByTagName('img');
        //     function myFunction(screeziz) {
        //         if (screenziz.matches) { // If media query matches
        //             //document.body.style.backgroundColor = "yellow";
        //             console.log("derp");
        //             document.body.style.backgroundImage = null;
        //         } else {
        //             //document.body.style.backgroundColor = "pink";
        //             console.log("derp");



        //             for (var i = 0; i < allimages.length; i++) {
        //                 if (allimages[i].getAttribute('data-src')) {
        //                     allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
        //                 }
        //             }

        //         }
        //     }

        //     var screenziz = window.matchMedia("(max-width: 700px)")
        //     myFunction(screenziz) // Call listener function at run time
        //     screenziz.addListener(myFunction) // Attach listener function on state changes
        // }, false)

        //!On Page start
//*---------On page start--------------
//!*Preload images using jQuery
$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}
var underline = false;
//var pawp = document.getElementById("pewp");
//var pawp = $('#pewp');
var pawp = $('poop'); //returns a HTML DOM Object
    
//*Scroll to the top on page load:
// function bodyOnLoad() {
//     $(document).ready(function () {
//         $(this).scrollTop(0);
//     });
// }

//*Create BeepBox player:
var song = new beepbox.Song(song);
var beep = new beepbox.Synth("5n41sbk4l03e00t7m0a7g04j8i2r1w311024321311411f000000200000000d210001101111111c000000040000000h000085060600000v310220400000400o22200b4z018M0ic040020g0p21YEA62B40t86a4goSa2Fcyxf0UxwYn8RaeM95Edg005goYgNBaNoN3u000ahglOlC41Hc7Gp0Rj46Gowlll5ipB261FaCcI0002pQ5S00002o526jM4P6kf3oM0000");
beep.volume = 2;
beep.pause();
beep.play();

//*-----force these GIFs to start-----
var gifSource = $('#lumipop').attr('src'); //get the source in the var
$('#lumipop').attr('src', ""); //erase the source     
$('#lumipop').attr('src', gifSource + "?" + new Date().getTime()); //add the date to the source of the image... :-) 
var gifSource = $('#lumipeak').attr('src'); //get the source in the var
$('#lumipeak').attr('src', ""); //erase the source     
$('#lumipeak').attr('src', gifSource + "?" + new Date().getTime()); //add the date to the source of the image... :-) 

//*---------------RANDOMIZED EVENTS-----------------------------------
//*Randomized website icon
var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
var icoimages = ['img/ico/1.ico', 'img/ico/2.ico', 'img/ico/3.ico', 'img/ico/4.ico', 'img/ico/5.ico', 'img/ico/6.ico', 'img/ico/7.ico', 'img/ico/8.ico', 'img/ico/9.ico', 'img/ico/10.ico', 'img/ico/11.ico', 'img/ico/12.ico', 'img/ico/13.ico', 'img/ico/14.ico', 'img/ico/15.ico', 'img/ico/16.ico', 'img/ico/17.ico', 'img/ico/18.ico', 'img/ico/19.ico', 'img/ico/20.ico', 'img/ico/21.ico', 'img/ico/22.ico', 'img/ico/23.ico', 'img/ico/24.ico', 'img/ico/25.ico', 'img/ico/26.ico', 'img/ico/27.ico', 'img/ico/28.ico', 'img/ico/29.ico', 'img/ico/30.ico', 'img/ico/31.ico', 'img/ico/32.ico', 'img/ico/33.ico', 'img/ico/34.ico', 'img/ico/35.ico', 'img/ico/36.ico', 'img/ico/37.ico', 'img/ico/38.ico', 'img/ico/39.ico', 'img/ico/40.ico', 'img/ico/41.ico', 'img/ico/42.ico', 'img/ico/43.ico', 'img/ico/45.ico', 'img/ico/46.ico', 'img/ico/47.ico', 'img/ico/48.ico', 'img/ico/49.ico', 'img/ico/51.ico', 'img/ico/52.ico', 'img/ico/53.ico', 'img/ico/54.ico', 'img/ico/55.ico', 'img/ico/56.ico', 'img/ico/57.ico',]
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = 'img/ico/0.ico';

//*Randomized pixel-dot-overlay images. I call them stars:
document.getElementsByTagName('head')[0].appendChild(link);
var stars = 'img/stars.png';
var greenStars = 'img/starsGre.png';
var blueStars = 'img/starsBlu.png';
var yellowStars = 'img/starsYel.png';
var purpleStars = 'img/starsPur.png';
var redStars = 'img/starsRed.png';
var tearStars = 'img/starsTea.png';
var images = ['img/stars.png', 'img/stars.png', 'img/stars.png', 'img/stars.png', 'img/stars.png', 'img/stars.png', 'img/starsBlu.png', 'img/starsGre.png', 'img/starsYel.png'];

//*--------------BONUS FEATURES-------------------------------------
images[Math.floor(Math.random() * images.length)]
var secretSound = new Audio('audio/secret.mp3');
var sansSound = new Audio('audio/sans.mp3')
var secret1 = secret2 = secret3 = secret4 = secret5 = secret6 = secret7 = secret8 = secret9 = secret10 = secret11 = secret12 = secret13 = secret14 = secret15 = secret16 = false;
var isPlaying = false;
var lumipeaker = false;
var sanspeaker = false;
var windowFocus = true;


//*-----Website Title Click-----
var pokemath = [Math.floor(Math.random() * 151) + 1];
var botanicula = ["audio/botanicula/1.mp3", "audio/botanicula/2.mp3", "audio/botanicula/3.mp3", "audio/botanicula/4.mp3", "audio/botanicula/5.mp3", "audio/botanicula/6.mp3", "audio/botanicula/7.mp3", "audio/botanicula/8.mp3", "audio/botanicula/9.mp3", "audio/botanicula/10.mp3", "audio/botanicula/11.mp3", "audio/botanicula/12.mp3", "audio/botanicula/13.mp3", "audio/botanicula/14.mp3", "audio/botanicula/15.mp3", "audio/botanicula/16.mp3", "audio/botanicula/17.mp3", "audio/botanicula/18.mp3", "audio/botanicula/19.mp3", "audio/botanicula/20.mp3", "audio/botanicula/21.mp3", "audio/botanicula/22.mp3", "audio/botanicula/23.mp3", "audio/botanicula/24.mp3", "audio/botanicula/25.mp3", "audio/botanicula/26.mp3", "audio/botanicula/27.mp3", "audio/botanicula/28.mp3", "audio/botanicula/29.mp3", "audio/botanicula/30.mp3", "audio/botanicula/31.mp3", "audio/botanicula/32.mp3", "audio/botanicula/33.mp3", "audio/botanicula/34.mp3", "audio/botanicula/35.mp3", "audio/botanicula/36.mp3", "audio/botanicula/37.mp3", "audio/botanicula/38.mp3", "audio/botanicula/39.mp3", "audio/botanicula/40.mp3", "audio/botanicula/41.mp3", "audio/botanicula/42.mp3", "audio/botanicula/43.mp3", "audio/botanicula/44.mp3", "audio/botanicula/45.mp3", "audio/botanicula/46.mp3",];
var abe = ["audio/odd/RFSNDFX_0095.mp3", "audio/odd/RFSNDFX_0096.mp3", "audio/odd/RFSNDFX_0097.mp3", "audio/odd/RFSNDFX_0098.mp3", "audio/odd/RFSNDFX_0099.mp3", "audio/odd/RFSNDFX_0100.mp3", "audio/odd/RFSNDFX_0101.mp3", "audio/odd/RFSNDFX_0102.mp3", "audio/odd/RFSNDFX_0103.mp3", "audio/odd/RFSNDFX_0104.mp3", "audio/odd/RFSNDFX_0105.mp3", "audio/odd/RFSNDFX_0106.mp3", "audio/odd/RFSNDFX_0107.mp3", "audio/odd/RFSNDFX_0108.mp3", "audio/odd/RFSNDFX_0122.mp3", "audio/odd/RFSNDFX_0123.mp3", "audio/odd/RFSNDFX_0124.mp3"];
var slig = ["audio/odd/RFSNDFX_0110.mp3", "audio/odd/RFSNDFX_0111.mp3", "audio/odd/RFSNDFX_0112.mp3", "audio/odd/RFSNDFX_0113.mp3", "audio/odd/RFSNDFX_0114.mp3", "audio/odd/RFSNDFX_0115.mp3", "audio/odd/RFSNDFX_0116.mp3", "audio/odd/RFSNDFX_0117.mp3", "audio/odd/RFSNDFX_0118.mp3", "audio/odd/RFSNDFX_0119.mp3", "audio/odd/RFSNDFX_0120.mp3", "audio/odd/RFSNDFX_0121.mp3"];
var bandicoot = ["audio/bandicoot/aku_lse.wav", "audio/bandicoot/c_whoa.wav", "audio/bandicoot/cllct2up.wav", "audio/bandicoot/cllctfrt.wav", "audio/bandicoot/crtcrash.wav", "audio/bandicoot/crystal.wav", "audio/bandicoot/drvd_bg.wav", "audio/bandicoot/frt_spin.wav", "audio/bandicoot/fruitchp.wav", "audio/bandicoot/sel_bp.wav", "audio/bandicoot/spik_sw1.wav", "audio/bandicoot/spin_nme.wav", "audio/bandicoot/tnt_beep.wav", "audio/bandicoot/uggabuga.wav"];
var gaben = ["audio/gaben/ep3.wav", "audio/gaben/errr.wav", "audio/gaben/gaben.wav", "audio/gaben/stop.wav", "audio/gaben/tf2.wav", "audio/gaben/thanksforlistening.wav", "audio/gaben/uhhh.wav", "audio/gaben/hopefully.wav"];
var hexagon = ["audio/hexagon/superhexagon.wav", "audio/hexagon/menuchoose.wav", "audio/hexagon/menuselect.wav", "audio/hexagon/die.wav", "audio/hexagon/rankup.wav", "audio/hexagon/begin.wav"]
var goo = ["audio/goo/discovery1.wav", "audio/goo/discovery2.wav", "audio/goo/discovery3.wav", "audio/goo/discovery4.wav", "audio/goo/goodeath0.mp3", "audio/goo/goodeath1.mp3", "audio/goo/goodeath2.mp3", "audio/goo/mumble1.mp3", "audio/goo/mumble2.mp3", "audio/goo/mumble3.mp3", "audio/goo/mumble4.mp3", "audio/goo/mumble5.mp3", "audio/goo/mumble6.mp3", "audio/goo/mumble7.mp3", "audio/goo/pipeEnter1.mp3", "audio/goo/snap1.mp3", "audio/goo/glee1.mp3", "audio/goo/glee2.mp3", "audio/goo/glee3.mp3", "audio/goo/glee4.mp3", "audio/goo/glee5.mp3", "audio/goo/glee6.mp3", "audio/goo/glee7.mp3", "audio/goo/glee8.mp3", "audio/goo/glee9.mp3", "audio/goo/glee10.mp3", "audio/goo/glee11.mp3"]
//var goo = ["audio/goo/glee1.ogg"]
var fnaf = ["audio/honk.mp3"]
var braid = ["audio/braid/enemy_bounce.wav", "audio/braid/got_piece_easiest.wav", "audio/braid/got_piece_easy.wav", "audio/braid/got_piece_hard.wav", "audio/braid/got_piece_hardest.wav", "audio/braid/got_piece_medium.wav", "audio/braid/got_piece_trivial.wav", "audio/braid/monstar_kill1.wav", "audio/braid/monstar_kill2.wav", "audio/braid/player_bounce_high1.wav", "audio/braid/player_bounce_low1.wav", "audio/braid/player_bounce_mid1.wav",]
var punch = ["audio/misc/punch.mp3"]
var engi = ["audio/misc/engi_nope.mp3", "audio/misc/engi_nope.mp3", "audio/misc/engi_nope.mp3", "audio/misc/engi_nope.mp3", "audio/misc/engi_nope.mp3", "audio/misc/engi_nope.mp3", "audio/misc/engi_nope.mp3", "audio/misc/engi_nope.mp3", "audio/misc/engi_nope.mp3", "audio/misc/engi_nope.mp3", "audio/misc/engi_nope.mp3", "audio/misc/engi_nope.mp3", "audio/misc/engi_nope.mp3", "audio/misc/engi_nope.mp3", "audio/misc/engi_nope.mp3", "audio/misc/engi_yeah.mp3",]
var solid = ["audio/misc/metalgearsolid.swf.mp3"]
var papers = ["audio/papers/speech-announce.wav", "audio/papers/speech-entrant.wav", "audio/papers/speech-inspector.wav", "audio/papers/speech-entrant.wav", "audio/papers/speech-inspector.wav", "audio/papers/speech-entrant.wav", "audio/papers/speech-inspector.wav", "audio/papers/speech-entrant.wav", "audio/papers/speech-inspector.wav"];
var minecraft = ["audio/Minecraft/minestone0.mp3", "audio/Minecraft/minestone1.mp3", "audio/Minecraft/minestone2.mp3", "audio/Minecraft/minehurt.mp3"]
var pokemon = ["audio/pokemon/" + pokemath + ".mp3"]
//var pokemon = "audio/pokémon/" + pokemath + ".mp3";
var category = ([]);
$.ajax({
    //url: "soundfile.mp3",
});
category.splice(0, 0, botanicula);
category.splice(1, 0, abe);
category.splice(2, 0, slig);
category.splice(3, 0, bandicoot);
category.splice(4, 0, gaben);
category.splice(5, 0, hexagon);
category.splice(6, 0, goo);
category.splice(7, 0, fnaf);
category.splice(8, 0, braid);
category.splice(9, 0, punch);
category.splice(10, 0, engi);
category.splice(11, 0, solid);
category.splice(12, 0, papers);
category.splice(13, 0, minecraft);
//category.splice(14, 0, pokemon);

var aNo = ((Math.random() * category.length) | 0) + 0;
var aNo = 13;
var choiceee = category[aNo];
var honkActive = false;
newAudio = new Audio();
newAudio.volume = 0.9;

console.log("aNo returns with: " + aNo);
    //console.log("choiceee returns with: "+ choiceee);

    //$("h1").on('mousedown touchstart', function (){

//https://github.com/tutorialzine/web-notifications-demo
//Small text https://www.spiderarmy.com/tiny-text   
//Excited for halloween? Halloween's my kind of jam! I call it walloween. Partly refferencing Waluigi. And because it sounds funny. Walloween! Mwahahah. Wallo-wallo-ween! Wallo-wallo-wallo-wallo [MAKES YOU SPOOKED. Avatar changes creepily, punch sound stop, if music plays, it gets super weird.]
//Man I already miss halloween. The next 11 months are going to be SO BORING. Have you noticed stores are already decorating for christmas? Lunatics. It's like getting... Xmas shoved down our throats.
//Ok my face is cramping up a bit.
//Could you punch less harder?
//I'm changing sound effect [Changes to a squeaky duck sound][Changes to Undertale Text sound] Okay this is getting meta.["I'm stupid, I punch people"- sound and title text change] Oh hey, you can talk to me? [Yes!] Ohoho I like where this is getting.
        
//Hey, why don't I tell you about this song? [plays song]
//If song is playing, annoy the user by changing its pitch or settings.
//Did you know this song has a secret in it? Let me enable it for you. Tadah! Ain't that cool? / You'll have to wait until it's at the end. Hope you'll like it! Just a little end.
//(Annoys user by playing rickroll or All star randomly, if they are in another tab.)(-Snicker snicker-)
//Hey, I like you. Too bad you need to punch me, in order to advance the text. But not always, try stopping now. (ow you didn't stop, nvm then.)
//readystate lastModified dblclick drag dragend ended hashchange input load loadeddata mouseenter offline pagehide transitionend PageTransitionEvent language onLine geolocation (count amount of page visits)
// ouch oof argh ow stop that. do you mind? Seriously? Not funny! -thekolwiki -cough- REEEE Grrr. SCREECH Hit me again, I dare you!
// I made a cool website - and this is my thanks? This displeases me. I don't hate you..! Okay okay... You can punch me. I don't care. No really. I don't care anymore. In fact, can't feel my face anymore.
//going to drink an punch-imune potion. Brb.
//No seriously :c Look deep inside you. Deeper. DEEPER! You are really stubborn. Stop punching Please. Ooo I like being punched..! Punch me harder! Feels good! PAIN FEELS GOOD. MAKES ME STRONGER. Please stop. I'll give you a hint, to a secret, if you don't stop right now. I'll give you a slice of cake if you don't stop. Cookie? Lollipop?
//Awe come on! Just stop!
//What?
//You're saying...
//That punching me
//Is the only way
//To advance our conversation?
//That ain't true!
//That does it! Time to unleash my master plan!
//You must really hate me.
//Think i'll stop talking?
//Sorry, I spend 2 months
// adding to this conversation.
//But it's a secret. So I can't tell you.
//Stop. Now.
//I bet this gets pretty boring after a while. I could write a whole harry potter book. 
//Don't want to keep you here all day, even if I wanted.
//*Punch RPG
var today = new Date();
var ClMain = 0;
var ClBrowser = 0;
var bagles = 10;
function fuMain() {}

function fuBrowser() {
    ClBrowser += 1;
    if (ClBrowser == 1) {
        if (isOpera == true) { document.title = "Opera covers up my face." };
        if (isChrome == true) { document.title = "Chrome is garbage anyways." };
        if (isFirefox == true) { document.title = "Firefox is garbage." };
        if (isSafari == true) { document.title = "Safari is garbage anyways."; };
        if (isIE == true) { document.title = "Internet Explorer is garbage."; };
        if (isEdge == true) { document.title = "Edge is garbage anyways."; };
    }
}
function BAGELS() {
    var pTimer;
    clearTimeout(pTimer);
    ClMain += 1 //Next sentence
    //console.log("ClMain is now: " + ClMain);
    document.title = BrMain[ClMain];
    if (ClMain == 1) { pTimer = setTimeout(function () { link.href = 'img/ico/38.ico' }, 250); }//confused
    if (ClMain == 2) { pTimer = setTimeout(function () { link.href = 'img/ico/37.ico' }, 250); }//look left
    if (ClMain == 3) { pTimer = setTimeout(function () { link.href = 'img/ico/36.ico' }, 250); }//look right
    if (ClMain == 4) { pTimer = setTimeout(function () { link.href = 'img/ico/35.ico' }, 250); }//tilt down
    if (ClMain == 5) { pTimer = setTimeout(function () { link.href = 'img/ico/39.ico' }, 250); }//look down
    if (ClMain == 6) { pTimer = setTimeout(function () { link.href = 'img/ico/45.ico' }, 250); }//noyed look down
    // if (ClMain == 7) {
    //     clearTimeout(pTimer); pTimer = setTimeout(function () { link.href = 'img/ico/2.ico' }, 250);
    //     if (today.getDay() == 0) document.title = "And on a Sunday?";
    //     if (today.getDay() == 1) document.title = "I hate mondays."
    //     if (today.getDay() == 2) document.title = "At least Monday's over."
    //     if (today.getDay() == 3) document.title = "Two more days 'til Friday."
    //     if (today.getDay() == 4) document.title = "Meh."
    //     if (today.getDay() == 5) document.title = "This your fav. Friday activity?"
    //     if (today.getDay() == 6) document.title = "What a terrible weekend.";
    // }
    // if (ClMain == 8) {
    //     if (today.getHours() >= 9 && today.getHours() <= 17) { document.title = "Still bright today."; }
    //     if (today.getHours() >= 17 && today.getHours() <= 18) { document.title = "It's getting dark outside."; }
    //     if (today.getHours() >= 19) { document.title = "Why, good EVENING."; }
    //     if (today.getHours() >= 21) { document.title = "How was dinner?"; }
    //     if (today.getHours() >= 6 && today.getHours() <= 9) { document.title = "'Morning to you too!"; }
    //     if (today.getHours() == 5) { document.title = "Shouldn't you still be a sleep"; }
    //     if (today.getHours() <= 5) { document.title = "Shouldn't you be asleep?"; }

    //     // if (today.getHours() >= 4) {document.title = "Shouldn't you be asleep?";}
    //     // if (today.getHours() <= 4 && today.getHours() >= 9) {document.title = "Punching people in the morning.";}
    // link.href = 'img/ico/15.ico';
    // }
    if (ClMain > 6) { clearTimeout(pTimer); pTimer = setTimeout(function () { link.href = icoimages[Math.floor(Math.random() * icoimages.length)]; }, 250); }//noyed look down

}
var BrMain = [
    "",
    "Ow.",
    "Ouch.",
    "What the...",
    "Hey..!",
    "Excuse me?",
    "That's my name!",
    "Would you stop that?",
    "Stop!",
    "Argh.",
    "Don't press it!",
    "Oof.",
    "Why are you doing this?",
    "It's not for clicking.",
    "No clickie",
    "Bad user!",
    "ECH.",
    "Seriously?",
    "Not funny!",
    "But I made it clickable.",
    "-cough-",
    "...But still!",
    "Pretty please..?",
    "Punching is rude",
    "How unprofessional.",
    "Have manners!",
    "Don't you like me?",
    "Aw.",
    "Something I said?",
    "In that case,",
    "Can you forgive me?",
    "Owh.",
    "Was that a myes?",
    "I can't tell!",
    "How am I to tell?",
    "Is this kunfu?",
    "Or taekwondo?",
    "Oaw!!",
    "You've got experience",
    "That I can tell!",
    "Awch",
    "Ow",
    "Oofh",
    "Oofsies",
    "Ouchies!",
    "Stars are spinning!",
    "Birds are chirping!",
    "Someone!",
    "SAVE MEH!",
    "HELP",
    "H-hALp!!",
    "I'm being violated!",
    "Can't we just settle this?",
    "Peacefully?",
    "Over a nice cup of tea?",
    "What flavor would you like?",
    'Huh, "punch" flavor?',
    "User...",
    "This wasn't the idea...!",
    "Just enjoy the music!",
    "Listen",
    "You're having too much fun.",
    "What am I to do?",
    "Ahem.",
    "YOUNG LADY!",
    "I AM DISSAPOINT.",
    "GO TO YOUR ROOM!",
    "IMMEDIATELY!",
    "YOU'VE GOT HOUSEARREST!",
    "That's right.",
    "I'm your parent now.",
    "I wrote some contracts.",
    "I'm moving in tomorrow.",
    "I'll teach ye propper manners",
    "You won't like what I'll do!",
    "I'll bake pancakes often...",
    '"Oh no!"',
    "Letting you stay up late...",
    '"How terrible...!"',
    "Eat your left-over veggies...",
    '"Just end me already!"',
    "Oh that reminds me.",
    "How I feel like a veggie",
    "...from all the punches!!!",
    "Argh!",
    "I surrender!",
    "Infact I've done nothing else!",
    "How can I make you stop?",
    "I'll do anything!",
    "Give you a massage...",
    "Walk your dog...",
    "Empty your fridge...",
    "No? Not your fridge",
    "*Sigh*",
    "So this is my life now",
    "and yours apparently.",
    "Hope you like it.",
    "...",
    "I was kidding earlier.",
    "You're not punching hard.",
    "Pffh.",
    "You punch like a girl!",
    "Nah",
    "Didn't hurt.",
    "Nu uh.",
    "See",
    "I was just acting!",
    "..Yeah, hehe..",
    "I'm pretty resistant!",
    "and beware...",
    "I could throw a punch back.",
    "Right through your monitor.",
    "A giant muscular fist.",
    "When you least expect it.",
    "Sounds impossible?",
    "We've got the technology.",
    "In ES6",
    "The next Javascript update.",
    "Just you wait!",
    "Also I need to work out.",
    "To make my fist muscular.",
    "Alright, lol,",
    "Amused you long enough!",
    "Congratz 4 your persistency",
    "This is my last line lol."

];

function myprettyface() {
    pTimer = setTimeout(function () {
        link.href = 'img/ico/18.ico'
    }, 250);
}

function randomizeIc() {
    pTimer = setTimeout(function () {
        link.href = 'img/ico/59.ico'
    }, 3750);
    pTimer = setTimeout(function () {
        link.href = 'img/ico/0.ico'
    }, 4000);
    pTimer = setTimeout(function () {
        link.href = 'img/ico/0.ico'
        document.title = "Lumitrap";
    }, 4200);
}

function cleartime() {
    var id = window.setTimeout(function () { }, 0);
    while (id--) {
        window.clearTimeout(id); // will do nothing if no timeout with id is present
    }
}

var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
var isIE = /*@cc_on!@*/false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;
var isChrome = !!window.chrome && !!window.chrome.webstore;




     $("h1").on('mousedown', function (pokemon, pokemath){

         //pokemath = Math.floor(Math.random() * 151) + 1;
        pokemon ["audio/pokemon/" + (Math.floor(Math.random() * 151) + 1) + ".mp3"];
        pokemath== Math.floor(Math.random() * 151) + 2;

        //Reset timout thingy
        //var id = window.setTimeout(function () { }, 0);
        //while (id--) {window.clearTimeout(id)} // will do nothing if no timeout with id is present

       //TitleAnimation
        $(this).removeClass('beforehonk').dequeue();
         $(this).addClass('honk').delay(100).queue(function () {
         $(this).removeClass('honk').dequeue();
         $("h1").css("cursor","pointer");
         //Reset timeout again
         //!I SHOULD NOT CLEAR THIS TIME, but it stops my other cleartimes. How can I avoid that?
        //  cleartime();

         //Which Will it be?
         if (aNo == 0){
            link.href = 'img/ico/amanita.png'
         }
         if (aNo == 1){
            $("h1").css({'font-family': ("odd_fontregular"), 'font-size':'80px', 'padding-top':'10px'});
            link.href = 'img/ico/abe.ico'
         }
         if (aNo == 2){
            $("h1").css({'font-family': ("odd_fontregular"), 'font-size':'80px', 'padding-top':'10px'});
             link.href = 'img/ico/slig.ico'
         }
         if (aNo == 3){
             link.href = 'img/ico/crash.ico'
         }
         if (aNo == 4){
             link.href = 'img/ico/gaben.png'
         }
         if (aNo == 5){
            $("h1").css({'font-family': ("hexagonh")});
         }
         if (aNo == 6){
            $("h1").css({'font-family': ("Eartmb2")}).addClass('h101');
            link.href = 'img/ico/goo.ico'
            //$("h1").html("LUMITRAP");
         }
         if (aNo == 7){
            link.href = 'img/ico/48.ico'
            //$("h1").html("LUMITRAP");
         }
         if (aNo == 8){
            link.href = 'img/ico/braid.ico'
            //$("h1").html("LUMITRAP");
         }
        if (aNo == 9) {
            link.href = 'img/ico/44.ico';//Hurt Blink
            myprettyface();//Default Open-eyes animation if not overrided
            if(bagles == 10){BAGELS();}
        }
         if (aNo == 10){
            link.href = 'img/ico/engi.ico'
            //$("h1").html("LUMITRAP");
         }
         if (aNo == 11){
            link.href = 'img/ico/59.ico'
             setTimeout(function () {
                link.href = 'img/ico/59.ico'
             }, 0);
             setTimeout(function () {
                link.href = 'img/ico/49.ico'
             }, 201);
             setTimeout(function () {
                link.href = 'img/ico/43.ico'
             }, 1000);
             setTimeout(function () {
                link.href = 'img/ico/39.ico'
             }, 1400);
             setTimeout(function () {
                link.href = 'img/ico/20.ico'
             }, 1800);
             setTimeout(function () {
                link.href = 'img/ico/21.ico'
             }, 2200);
             setTimeout(function () {
                link.href = 'img/ico/59.ico'
             }, 3800);
             setTimeout(function () {
                //link.href = icoimages[Math.floor(Math.random() * icoimages.length)];
                focus()
                link.href = 'img/ico/0.ico'
             }, 4000);
         }
         if (aNo == 12){
             $("h1").css({'font-family': ("agitpropmedium")});
             link.href = 'img/ico/papers.ico'
         }
         if (aNo == 13){
             link.href = 'img/ico/steve32.ico'
         }
         if (aNo == 14){
            console.log("console log: "  + pokemon);
            //pokemons = ["audio/pokemon/" + (Math.floor(Math.random() * 151) + 1) + ".mp3"];
         }
         if (aNo == 15){
            //
         }
         });
         pokemon == ["audio/pokemon/" + (Math.floor(Math.random() * 151) + 1) + ".mp3"];
        var audioOutput = choiceee[((Math.random() * choiceee.length) | 0) + 0];
        //honkSoap =new Audio(audioOutput);
        //!*If I want to see what sound the browser is playing:
        //console.log(newAudio)

        newAudio.src = audioOutput;
        if (newAudio.paused) {
              newAudio.play();
          } else {
              newAudio .currentTime = 0
              newAudio.play();
          }
          if (underline == false){
            // $('.underline').css({
            //     'animation':'fadeOut 3s forwards'
            // });
            // underline = true;
            }
     });


    //-----KEYBOARD EVENTS-----

    // The Spacebar key
    window.addEventListener('keypress', function (e) {
        var code = e.keyCode ? e.keyCode : e.which;
        if (code === 32) {
            e.preventDefault();
            if (isPlaying == false) {
                beep.play();
                isPlaying = true;
                //$("#pButtonID").html("▶");
                $("path").attr("d", "M0,0 L0,14 L11,7 L0,0 Z");
                $(".bigMedia").css({"animation":"izPlaying 0.3s ease-in forwards"});
                $(".poop").css("animation-play-state", "running");
                
                $("li").css("animation-play-state", "running");
                //$(".element").attr("id","SomeID");
            } else if (isPlaying == true) {
                beep.pause();
                isPlaying = false;
                //$("#pButtonID").html("⏹");
                //$("li").css("animation-play-state", "paused", "filter: grayscale(100%)");
                $("path").attr("d", "M0,14 L4,14 L4,0 L0,0 L0,14 L0,14 Z M8,0 L8,14 L12,14 L12,0 L8,0 L8,0 Z");
                $(".bigMedia").css({"animation":"izStopped 0.3s ease-in forwards"});
                $(".poop").css("animation-play-state", "paused");
            }
        }

    });


    // Firefox Supported Keyboard events:
    //var tempoVar = document.getElementById("tempo");
    //*Change the song's settings:
    document.addEventListener('keydown', function (e) {
        //tempo/pitch/reverb keys:s
        var bbSettings = $('.myNotice').jBox('Notice', {
            theme:'TooltipDark',
            autoClose: 750,
            attach: '.myNotice',
            content: 'Settings',
            color: 'black',
            stack: false,
            color:'green',
            fixed:true,
            fade:0,
            animation: {open: 'zoomOut', close: 'zoomIn'},
            
            attributes: {
              x: 'right',
              y: 'top'
            },
            position: {
              x: 10,
              y: 10
            },
            responsivePositions: null
        });
        if (e.keyCode == 49) {
            if ($('*.jBox').length) {
                $('*.jBox').remove()
            }
            e.preventDefault();
            if (beep.song.tempo == -20) {
                console.log("Tempo min.");
                bbSettings.close();
                bbSettings.open();
                bbSettings.setContent('Tempo Min');
            }
            else {
                beep.song.tempo--;
                console.log("Tempo: " + beep.song.tempo);
                bbSettings.setContent('Tempo: ' + beep.song.tempo).open();
            }
        };
        if (e.keyCode == 50) {
            e.preventDefault();
            if (beep.song.tempo == 20) {
                console.log("Tempo max.");
                bbSettings.open();
                bbSettings.setContent('Tempo max');
            if (lumipeaker == false) {
                console.log("Lumipeak true");
                var gifSource = $('#lumipeak').attr('src'); //get the source in the var
                $('#lumipeak').attr('src', ""); //erase the source     
                $('#lumipeak').attr('src', gifSource + "?" + new Date().getTime()); //add the date to the source of the image...
                document.getElementById("lumipeak").style.display = "block";
                lumipeaker = true;
            }
            else if (lumipeaker == true) {
                console.log("lumipeaker is already true, therefore don't run the script again");
            }
            }
            else {
                beep.song.tempo++;
                console.log("Tempo: " + beep.song.tempo);
                bbSettings.setContent('Tempo: ' + beep.song.tempo).open();
            };
        }
        if (e.keyCode == 51) {
            e.preventDefault();
            //console.log("channelOctaves: " + beep.song.channelOctaves);
            //!*Oh, this one is useful:
            //console.log("instrumentVolumes: " + beep.song.instrumentVolumes);
            //console.log("instrumentWaves: " + beep.song.instrumentWaves);
            //console.log("instrumentFilters: " + beep.song.instrumentFilters);
            //console.log("instrumentEnvelopes: " + beep.song.instrumentEnvelopes);
            //console.log("instrumentEffects: " + beep.song.instrumentEffects);
            //console.log("instrumentChorus: " + beep.song.instrumentChorus);
            //!*Useless unless you are in the beepbox editor.
            //console.log("scale: " + beep.song.scale);
            //*Loop start!
            //console.log("loopStart: " + beep.song.loopStart);
            //!*Loop length!
            //console.log("loopLength: " + beep.song.loopLength);
            //console.log("beatsPerbar: " + beep.song.beatsPerbar);
            //!*Overall Bar-count!
            //console.log("barCount: " + beep.song.barCount);

            //setSong, play, pause, snapToStart, snapToBar, nextBar, prevBar, synthesize, frequencyFromPitch, volumeConversion, getSamplesPerArpeggio


            //!*As it says, it's how many samples per second there is.
            //console.log("samplesPerSecond: "+ beep.samplesPerSecond);
            //!* Works a bit like a tapestop effect. DON'T SET IT TOO HIGH.
            //beep.samplesPerSecond += 1000;
            //!*Enable or disable intro or outro. Behaves as true or false.
            //console.log("enableIntro: "+ beep.enableIntro);
            //console.log("enableOutro: "+ beep.enableOutro);
            // //!*Does not work this way.
            //console.log("song: "+ beep.song);
            //!*Better not mess with this.
            //console.log("pianoPressed: "+ beep.pianoPressed);
            //!*Displays the current volume setting.
            //console.log("volume: "+ beep.volume);
            //!*Displays precisely where in the song we currently are.
            console.log("playheadInternal: "+ beep.playheadInternal);
            //!*Displays current playing bar.
            console.log("bar: "+ beep.bar);
            //!*Standard is from 0 to 8. Depending on how many bars you've set the song to be in.
            //!*Displays the current beat position in a bar.
            console.log("beat: "+ beep.beat);
            //!*Usually 4 parts in a beat, unless cranked up to 8.
            console.log("part: "+ beep.part);
            //*Displays the current tiny arpeggio position, like when more than two notes are played
            console.log("arpeggio: "+ beep.arpeggio);
            //!*Obvious
            //console.log("paused: "+ beep.paused);
            //!*Channel sample changes every time there's a note playing. would be neat for a visualizer.
            console.log("channelSample: "+ beep.channelSample);
            //*These are about the reverb
            //console.log("delayFeedback0: "+ beep.delayFeedback0);
            //console.log("delayFeedback1: "+ beep.delayFeedback1);
            //console.log("delayFeedback2: "+ beep.delayFeedback2);
            //console.log("delayFeedback3: "+ beep.delayFeedback3);
            //!*All these I don't know.
            // console.log("effectDuration: "+ beep.effectDuration);
            // console.log("effectAngle: "+ beep.effectAngle);
            // console.log("effectYMult: "+ beep.effectYMult);
            // console.log("limitDecay: "+ beep.limitDecay);
            //console.log("pianoPitch: "+ beep.pianoPitch);
            //console.log("pianoChannel: "+ beep.pianoChannel);
            //console.log("loopCount: "+ beep.loopCount);
            //console.log("stillGoing: "+ beep.stillGoing);
            //beep.stillGoing = true;
            //console.log("effectPlayhead: "+ beep.effectPlayhead);
            //console.log("delayLine: "+ beep.delayLine);
            //console.log("delayPos: "+ beep.delayPos);
            //console.log("channelPlayheadA: "+ beep.channelPlayheadA);
            //console.log("channelPlayheadB: "+ beep.channelPlayheadB);
            //!*Don't know. the ammount of billiparts notes are made of entirely?
            //console.log("arpeggioSampleCountdown: "+ beep.arpeggioSampleCountdown);
            //!*Don't know, It's always on 0.
            //console.log("drumPlayhead: "+ beep.drumPlayhead);
            //!*Don't know. IT's always on 0.
            //console.log("drumSample: "+ beep.drumSample);
            //*Don't know. volume intensity parameter to know when to limit the volume??
            //console.log("limit: "+ beep.limit);
            if (beep.song.reverb == 0) {
                console.log("Reverb min.");
                bbSettings.setContent('Reverb min').open();
               
            }
            else {
                beep.song.reverb--;
                console.log("Reverb: " + beep.song.reverb)
                bbSettings.setContent('Reverb: ' + beep.song.reverb).open();
            };
        };
        if (e.keyCode == 52) {
            e.preventDefault();
            if (beep.song.reverb == 3 || beep.song.reverb > 3) {
                console.log("Reverb max.");
                bbSettings.setContent('Reverb Max').open();
            }
            //beep.song.tempo = parseInt(tempoVar.value++);
            else {
                beep.song.reverb++;
                console.log("Reverb: " + beep.song.reverb);
                bbSettings.setContent('Reverb: ' + beep.song.reverb).open();
            }
        };
        if (e.keyCode == 53) {
            e.preventDefault();
            if (beep.song.key == 11) {
                console.log("Key min.");
                bbSettings.setContent('Key Min').open();
            }
            //beep.song.tempo = parseInt(tempoVar.value--);
            else {
                beep.song.key++;
                console.log("reverb: " + beep.song.key)
                bbSettings.setContent('Key: ' + beep.song.key).open();
            };
        }
        if (e.keyCode == 54) {
            e.preventDefault();
            if (beep.song.key == 0) {
                console.log("Key max.");
                bbSettings.setContent('Key Max').open();
            }
            else {
                beep.song.key--;
                console.log("Key: " + beep.song.key);
                bbSettings.setContent('Key: ' + beep.song.key).open();
            }
        };
        if (e.keyCode == 48) {
            e.preventDefault();
            var el = document.documentElement
                , rfs = // for newer Webkit and Firefox
                    el.requestFullScreen
                    || el.webkitRequestFullScreen
                    || el.mozRequestFullScreen
                    || el.msRequestFullscreen
                ;
            if (typeof rfs != "undefined" && rfs) {
                rfs.call(el);
            } else if (typeof window.ActiveXObject != "undefined") {
                // for Internet Explorer
                var wscript = new ActiveXObject("WScript.Shell");
                if (wscript != null) {
                    wscript.SendKeys("{F11}");
                }
            }
        };

        //*Forwards/Rewind
        if (e.keyCode == 39) {
            e.preventDefault();
            beep.nextBar();
            beep.snapToBar();
        }
        if (e.keyCode == 37) {
            e.preventDefault();
            beep.prevBar();
            beep.snapToBar();
        }
        if (e.keyCode == 38) {
            e.preventDefault();
            //document.title = 'NOT FOCUSED'
            $(".poop").removeAttr('id').closest('tr').prev().find('button').mousedown().attr('id','pewp').focus().scrollTo(100).addClass(".poop").siblings().removeClass(".poop");
            mobal.close();
            $('img[src="img/play.svg"]').attr('src');
            // if ($(".active").length) {
            //     myBla.close();
            // setTimeout(function () {
            //     $(".poop").find('.myTooltip').click();
            // }, 800);
        //}


        
        //pawp.scrollIntoView();
        //$('#pewp')[0].scrollIntoView();
            //var texta = document.closest('z').getElementsByClassName('z').innerHTML
            //console.log(texta)
            //document.title = titleChange;
            //console.log = ("outputtingh:" + titleChange);

        }
        //*Next song
        if (e.keyCode == 40) {
            e.preventDefault();
            console.log("Play next song");
            $(".poop").removeAttr('id').closest('tr').next().find('button').mousedown().attr('id','pewp').focus().scrollTo(100).addClass(".poop").siblings().removeClass(".poop");
            //myBla.setTitle('Hello!').setContent('Some content...');
            mobal.close();
            //$(".poop").closest('tr').find(".myTooltip").click();
        //     if ($(".active").length) {
        //         myBla.close();
        //     setTimeout(function () {
        //         $(".poop").find('.myTooltip').click();
        //     }, 800);
        // }
        //$('#pewp')[0].scrollIntoView();
        }
        //*Info box keyboard button
        if (e.keyCode == 73) {
            e.preventDefault();
            //console.log("Launching info thingy");
            //$(".poop").closest('tr').find(".myTooltip").click();
        }
        if (e.keyCode == 8) {
            e.preventDefault();
            beep.snapToStart();
            console.log("Snapped back to song start.");
        }
        var myModal = $('.myNotice').jBox('Modal');
        //*Secret button
        if (e.keyCode == 83) {
            
            e.preventDefault();
            // $("div.jBox-container").remove();
            if (secret1 || secret2 || secret3 || secret4 || secret5 || secret6 || secret7 || secret8 || secret9 || secret10 || secret11 || secret12 || secret13 || secret14 || secret15 || secret16 == true) {
                $('table').css({ 'animation': 'imageFilter 2s ease forwards', '-webkit-animation': 'imageFilter 2s linear forwards', })
                $('h1').css({ 'animation': 'imageFilter 2s ease forwards', '-webkit-animation': 'imageFilter 2s ease forwards', })

                //     var bbSecret = $('.myNotice').jBox('Notice', {
                //         theme:'TooltipDark',
                //         autoClose: 6000,
                //         attach: '.myNotice',
                //         content: 'Settings',
                //         color: 'black',
                //         stack: false,
                //         color:'green',
                //         fixed:true,
                //         fade:2000,
                //         animation: {open: 'zoomIn', close: 'zoomIn'},
                        
                //         attributes: {
                //           x: 'left',
                //           y: 'top'
                //         },
                //         position: {
                //           x: 10,
                //           y: 10
                //         },
                //         responsivePositions: null
                //     });
                // if (secretToggle == true){
                //     bbSecret.setContent('You found a secret!').open();
                // }
                if (secretToggle == false){
                    $('*.jBox').remove()
                }
                if (secret1 == true) {
                    beep.setSong(zSecret1);

                    if (secretToggle == true) {
                        secretToggle = false;
                    }
                }
                else if (secret2 == true) {
                    beep.setSong(zSecret2);
                    if (secretToggle == true) {
                        secretSound.play();
                        secretToggle = false;
                    }
                }
                else if (secret3 == true) {
                    beep.setSong(zSecret3);
                    if (secretToggle == true) {
                        secretSound.play();
                        secretToggle = false;
                    }
                }
                else if (secret4 == true) {
                    beep.setSong(zSecret4);
                    if (secretToggle == true) {
                        secretSound.play();
                        secretToggle = false;
                    }
                }
                else if (secret5 == true) {
                    beep.setSong(zSecret5);
                    if (secretToggle == true) {
                        secretSound.play();
                        beep.snapToStart();
                        secretToggle = false;
                        // $('#woody').prop('href', 'https://www.youtube.com/watch?v=h_eK42Sw7DY');
                    }
                }
                else if (secret6 == true) {
                    beep.setSong(zSecret6);
                    if (secretToggle == true) {
                        secretSound.play();
                        secretToggle = false;
                    }
                }
                else if (secret7 == true) {
                    beep.setSong(zSecret7);
                    if (secretToggle == true) {
                        secretSound.play();
                        secretToggle = false;
                    }
                }
                else if (secret8 == true) {
                    beep.setSong(zSecret8);
                    if (secretToggle == true) {
                        secretSound.play();
                        secretToggle = false;
                    }
                }
                else if (secret9 == true) {
                    beep.setSong(zSecret9);
                    if (secretToggle == true) {
                        secretSound.play();
                        secretToggle = false;
                    }
                }
                else if (secret10 == true) {
                    beep.setSong(zSecret10);
                    if (secretToggle == true) {
                        secretSound.play();
                        secretToggle = false;
                    }
                }
                else if (secret11 == true) {
                    beep.setSong(zSecret11);
                    if (secretToggle == true) {
                        secretSound.play();
                        secretToggle = false;
                    }
                }
                else if (secret12 == true) {
                    beep.setSong(zSecret12);
                    if (secretToggle == true) {
                        secretSound.play();
                        secretToggle = false;
                    }
                }
                else if (secret13 == true) {
                    beep.setSong(zSecret13);
                    if (secretToggle == true) {
                        secretSound.play();
                        secretToggle = false;
                    }
                }
                else if (secret14 == true) {
                    beep.setSong(zSecret14);
                    if (secretToggle == true) {
                        secretToggle = false;
                    }
                }
                else if (secret15 == true) {
                    beep.setSong(zSecret15);
                    if (secretToggle == true) {
                        secretSound.play();
                        secretToggle = false;
                    }
                }
                else if (secret16 == true) {
                    

                    if (secretToggle == true) {
                        //!Enable 3D movement
                        $(".bgShadow").css({'padding-top':'55px'});
                        secretSound.play();
                        !(function ($doc, $win) {
                            var screenWidth = $win.screen.width / 2,
                                screenHeight = $win.screen.height / 2,
                                $elems = $doc.getElementsByClassName("menu2"),
                                validPropertyPrefix = '',
                                otherProperty = 'perspective(1000px)',
                                elemStyle = $elems[0].style;
            
                            if (typeof elemStyle.webkitTransform == 'string') {
                                validPropertyPrefix = 'webkitTransform';
                            } else if (typeof elemStyle.MozTransform == 'string') {
                                validPropertyPrefix = 'MozTransform';
                            }
            
                            $doc.addEventListener('mousemove', function (e) {
                                var centroX = e.clientX - screenWidth,
                                    centroY = screenHeight - (e.clientY + 13),
                                    degX = centroX * 0.005,
                                    degY = centroY * 0.005,
                                    $elem
            
                                for (var i = 0; i < $elems.length; i++) {
                                    $elem = $elems[i];
                                    $elem.style[validPropertyPrefix] = otherProperty + 'rotateY(' + degX + 'deg)  rotateX(' + degY + 'deg)';
                                };
                            });
                        })(document, window);
                        secretToggle = false;
                    }
                }
            }
        }

    });

//!Nother part of the code
    //----BeepBox Links-----
    var zUT1 = "5sbk6l0oe00t5m0a7g0ojvi7r1w21333111222221110011111111111111f03000000000000000000000000000000d01000111000101110011111111111111c00111000011010001100000000000000h00000000000000000000000000000000v02024000404030001100000045000000o2320b1234123457895789ababacde01234123567896789ababacde012131213467846789a9a000004567456822222222333300000p2e-5j5hryak9ztlmj6yGG16COICqorx0h1w6s381w8cw6i381B0O0p8cw6k381AwO02Y0eg201m1BwHKYg0H8GH0U0htI0bHaCMr4RuNtlwS9KOI1Nv4lBVocCHLyaGI74lmnmldwS9GZyjWbgtg3e1A0PMp0cA6g35Mp0cA6g3a1A0Ogp03Ns6g391A0Owp0cA6g350p0cA6g3a1A0Ogp03Pgp0cA6g3a1A0Ogp0ci1A0Ogp0cg1A0Pgp05j8cs4I211i2l1i2E585BgkwG110A0l0H1a0mQ5gaMmwJ1k18yMmwvf1k2I6i2Y58awkwDf1i2E5U4xf3k6Iag7y0000000000004qoAxhdzb3AoE7868YMehB1OcIegchV0sza3Apgsz0gzAp8szc3Aposwrzh4EzkhG9ExIY0qy6e01g11w20c8z-38N86hy8cxh77hAajk1NWVx0m50sYrNgA54tnZg19wR4ctk20k0g1w2w678cz4wp6s38k0O_FGdh3bik0goEOIyz8HGFl4kBj7z8Nr8M78Osz5cz9OcH8OlOclOcD8OIz0Iz4czaOcL8NhsDdOcD8OYzdOcT8OIx8qMSOy9-hApmhBV2gIV77xF3k6CgTxF3k6Yeu6Ea85yL0000000000000ar7N1z8i0QFGYEyMckT3RNu03d100H0OMlTu80lAllws08KS05RBjodyqLoKGMr4Tpm0ULyaOYI6jlTN5lm3yaHbHaCMr4RuN8-3Fi0O44dqqu7ke4Y2cLk000000000000000Eys6wd0q0Q1E3g6w8FyrAp-hDV0YH8OIzaO1yC1g4g81wgcwBIX0dw6i381y8cwwtd0Gaaaaaaa1Qkkk0E3hhhhhg0Ol0aaaa0kk0E3hhhhhhhgcMQkkk0E3hhhgjEEEE5hhgt51uyywd5555518Wa2t1mwG0000000000000000";
    var zUT2 = "5sbkbl00e0bt9m0a7g0fj7i0r1w1111f0000d0001c0000h0000v0013o3330b4zgid000000id18Q0000018Q4zg000004ich8N4z000p23xFxOiH8ixAS4Gy5pAQ4Gy5ha1aqilx2IO14y39aIxa66aMBkgHccl1aExkiwicl9aMxmogAkgpc4amAqP1kmAq31oiwhid9wHb5U0tU402I3b1ntUw1mhlm1M0yXo0nmldwS9GZyWH1IjtCm3y-8DbOMpdnv4lloe8GIKIGr1IjlX4EQwf1gaw50a250a250a0hQ0E5g2w50G0k0E5g2wkt0a1k0E1gp00";
    var zUT3 = "5sbk3l00e0bt4m0a3g0fjai1r0w00318111f00003000d00011111c01100000h00000000v33005050o3300b000id19m000h4h8Q5ms0014h8QwFGM00yogh4N8j000p27-kMOkaoYo1q6Ebk78OF8dEmMehCm1L3FEqjceMdMwSxUzbL391u0e0Me01w0Fwgy10c3O0pSg39O0e8V0cP81BV0cD80VCg3cO0pug39O0ebV0cL81CV0c_8KsP81BV0chO0ofA0sL81wug34sw6pA0s0Oa0IMx-Q3o60aoR90g5c64MGh0wrPfc1VzpS0X3EGgc0UzGe9S0QelAmSYRJX68p2Y0cU805o6m2KXN02IyXI3w1lSM0KIGr2XdluPdtwSpGKI1Nv5VBV0n9CHUCGH1NdRBRBjodyqLoHpGwfh9UNVgC0EC4hOSMdVDC0uk9wNNf4oxAepN0dzyuaScocxMAO0sMN280f03xaP9OrB83wTwh0Xc3k5H3i3bOMRpcyVwqMpCoB1O6Eq3y68J0o868U0xwTyY0jSnm1BwHKYg0HbCX0U0ntI0bHaCMr4RrIQ3oCGYI75YhepBwOqK-8GGQ74lmnmldwS9GZyJCG6Zm6U7upN1H3m3bONp5o0";
    var zVimNo = "5n31sbkbl1Ae00tam0a5g1Aj_i5r1w125222251231515111111111f300000000000000000000000d011000111111111111111111c022022000000000000000000h000000000000000000000000v100000100220201000111000o4030b0ww8c220wM882321gMsg952hoMqe7A29cE110go00lb5P1AQre7jNZ0xh8Qylc110go4411x0Eoe8jG5aEa63y18Eib63hMZmHmb5yNoImb5yNoImb5yQ00000042110g84g3210wk8421gMoc70wg00a52xg8Ui94yx8Aib631wMqd6zg18210wwEka51wg84g631wUg842x0wg8631wUgaf7zNU42143NUYug002800000088640wwog0110Mw44321gMsc10y1844320hgIod62NwQoe7A1V4Aj0wiw44320ggc80aByVwOqdD088640wwoga63xw842110w84420wgg8Yuf7M042110g84431wN00631y0oc651wMoc630wwoc650xwoc681wMoc631y0oc650x0oc681wMok010wgwc6340Mocg31wMEc632wN0c632wg84g000000003w0p2oJ5C6OAaoAoGgV6bA6hyE-hyF0Ch0cohYwgVKX6c0-hz2gp6c91ApcFwNBTIpcGo84ojaiIFxMy30WP4ao4pcTsCb6b4fkpK-4ptRTIptX6nuNyN183X6rFZPvjtjj0QQMdc7tjlnjpjjrt9kCCnioYVeOCFPEdxFEvFDEqz8ZpAZpKpxFHYYljNejNhFJv1Y10i5z90A36ubo3DwL0tW8cpB8eGOWwsgjff1vIxL2FxyEV6_CVelAViFA-5c-4QdfyulkOWQnsP5R6CLvM7pSILaOIPbldvxd7Dz-aGGLn9OsHbM3eN70KgJD9SsBld7hAcHykQJ5kQ93yKAKkchOsH0s0PI_0c01s0OKXSJDaN3dOIHaOIBsDaSJHpOIXfOIHaOIARsuJrLkA2e9UA-FjgQ5suJfhDDKrvCt01Aq0P3DIxn7D3zciVHbV1eTpSuWOtBc-YXpOsZRcud57gZLGXbtX9SJPcvGv3pEH8UXg9R7xbyIE-pHTdTfM21FGFFVLaHP86CGKsR2V2ggA4912yHdL1Ma0wo5d7C0tjL7yKqUDHaJHpQ3qSFQ6GPrSID4sgR7Fs201wgeeD0080200w080200w0bqLSg-gWg0A0902g0A0902_IGOWDaP8DqULaSAR_KaSFkNMFScHojmQZDoDOTMSld32PKepMjNiQnkkMHBjHbyurYejfXeXGsDytTKAR-ZCkQvaqX9kQZewas97scMMH8Djzcvwiu6VfsFGsXs0vAaCuxGczRCjRCVC6CLPNlf4Vf5nN6jjjjjjjjjjjiL4Ve8VmlBpSlDVmhAU7BpukbcdrAN8Nz_8NnIz6cwOcoi38OXOch7Oc_Yy-0uEEV1Payw0000000000002Cecy12opG8yhAp68V6jAoHAo3AoW2oI2CnKVN6hApKhAV6Kz8i0Wmidc5jj0QQMdc70QRlQSkQSTil8ZdwG0Q0E5I3785g6w50Iw4hzz0awd0a1k41E5g6w50Iw4h3BZhMq7cp6hyehAwIUgN3dOchN8sMl0q0k2VwoV0G0Q0E5A0y8sAl0q0k2ScwoM0G0Q0E5I3795g6w50IwoXGoAoqncp6hyehAwDhVNcbczkchj1ysTuNbaOIH4sH5cH8Os6OILatdzTe9zUaxE18QB1ck58i00000000000000000000000000000002VJuD8gMkx301039xUd_-cxw8OovyVE-s3k5lCvk5oRnllR8xrk5gKrbE0_CXEW1U0O080O7sdDwzpw0O7scxg8O888QO2bCN_tNckOWj7X9j3BdjDuw1jgMAP_TF7HcDHdPc5dvDyGu9Oua5dHU7OOr61A8o044pcf058z9a-OhFxaRsRdgbDcJ4bXtQEKllpKXrKB0000000000000000000001lc4jxk2E5g8q1k2EkMg8O4MoScwZwegFyym38j4A50aqgp2Ygawl6PIsPAX6gL4xOep1Asi2Bc2sDoOsAup5gbGdDyczpOtz85cmczokNg8Sdz8S2wZi7oY91AsO2w7kX6PAw0000000000000000000000000000000000000";
    var zUT4 = "5sbk9l00e0vtbm0a5g0vjyi2r0w333211111111f200000200000d010111011111c321000000000h600000000000v250000100500o0430blmnopqrsbcdefghu1234567812345k9a1123456711234567112345671123456811223415112234151122341511223411161616159272921592729293429cdef8p2glaqDiCzRPhjnUjhWaCMu6ACkSnwGWfmFwmlzzhVQt6kkNZj3AGsr9PNY8lQed7Q4-2xkRKebkQca6CjR2ocgs5wyoI9x1GoEsJjy522Vyxj3Bwhj9bxGsgwP0Fx2hhVh1gltdkbnm-ZJj21zoOcxcmcxjz5yRecqrqD4p074ship8mliCa7jYkpkMxgo63wU5GYgP400dj212HB9emB9ajj6oOnjhBOIsqfezE08FzG9xEdc8Sg90NyO8cXexrePGSPIXmPIWLIXbT0p6lIXeVIXeVIXeRIXeVlmU46hCrePJ0OckStDqStDldDpuU38NyStDvStDrStDlqWWXHD00OcLpSt2StDldDpSJDpRnqSnF838PdDpTJDpRjpStHpSt1StBW638OJDpTdDpRk6hBrePGKPILywp0dw2D64GEAb2gAaYoFiOw9td6n001j53h1z4Yz9OcD8Osz9O3yehyehBp294reNBp1kMwgIzkcz9OcT8OIzbO3Jp6PApehAV6jApegtD8Rb8Osz9Oc2Oe8eRIozApehAV6tApmgsD8SdHoSdgSdwX6NIruNIreNI00000000000000FBh1RkQQClwGGqqjaRSQQQCG2HFFFc30gtdd9u07j100H0OMlTu80lAllws08KS05RBjodyqLoKGMr4TnBwf1Ov2g05V0cKXLyaGI74lmnmldwS9GZyJCG400000000000000kMe3u6E20epg4waOMGU80d7931wFkMg0glpmlNmOy151OwR0FUE5mlB90NkC2Dklam3FXD0mRwYsOMu5pocxn102EX9p35Q4VgrMTxF1Nmk3aOguk7a1CV0arwtvBwUHb1AtktY7ep0cDf3k2CMa1a1OgrKg2CU7mVoeGOMp7l4202cw1U0R12Wa-MmntV6hdm2GGJw1dK04Tgeb23Sy6TND8kMhbjAHtJe43kooSzICszqeal85ao80fausw3unJlwEkN0Gei3ODydCF83p7sTcPqj1DCa3PgcHCdCE7uXvlsm2xjxAXA00000000000";
    var zUT5 = "5sbk3l00e0yt6m0a5g0BjHi5r1w200210221211221111111111f010000020200000000000000d121121111111112111111111c010022000200002000000000h066006000000000000000000v110110131300111000240000o4420b12121435n6789abcde789abcfghijklmmIH0000213456789dedfghjkdedfglmnoqrstwwxy0000000001213464I1278464HGabcdefghijk0000000000000023245676e324568989898abc0000p2mX5cpJj56jcjR3pQ4zyoXKrKrKPKANTdPrTdDsRvtHI7aPtLrStQeXt93vLXS_IX-9OlZgWgUdGuErewAPjhXjf4j72j3B4yd1GwqzVHCurAp1h14zCXbo4-qVLvPXXPOqqYhPdH4U2BkCcN8kywaqlih9wpb582BkBw4BwA1jqiU2ntXhmR9d9X6KXJW5KXLbKXsNECD8m9HrKXOGHqGIGGtYQ8456QKbKXVKXLbKXwbKTAnbKYKXLrKXPbKYKXJTjgwk50eWCKWGIGGAqHaGICrOGHaGYGGtPd2V7grLqGwINwtwIp2Penujf5Rv5ljZ8VTcjPcYRlllndln4PNcYjan5lkYPGncasPfdlqpQnRiCPMaoo5aoO4FHT9bJ3GWoLFC9WxIW254gEwag0000000000007xMedUiR3pQ4CeVKruVIXx74NjhdjcBcgb9j51GwqxcsD0cMFBcati5d0Q7estqChEesKwo4ur1P-FU58O0FzjIRWzKsk34U3yhjoj0Uhg5d8Gq23c2Cy9qF0kyCK0AkN182AkRg4MypsCGA39-3Fswug9753j7okgo5wmg38wswml8S7lA2Pcw6hpA2OaH3FO1pug38HO26lktmgkOcwm2SQDtA5cz85Blg87nA5cz85OqA1iuKhI5cz8a7BV1j8O26r0eCOTs9MdzFHS9EQqJ0ReCNRFDlovg15QSKxV1-_jfxdex-43FddC882C4oO8co5Ao7ApehwmhymhCp6nApChAV6pApCgepApChwmhAV60V68V6pApuhCp6jApCgA5CgepApugA9Ba86k8ypol0000000kP22x4i4NoR0Cdd6NIreoC8HlkeA50tz42pKoKWwAaNfpBTr3zfKpzS8wI8y7GXGqhpythFfyGXBwWKXocoDIncPu-l4m3TsBp8zU3kukr6Uj5co7hJjR3pQ4CdR74r6ZD9ybllbJQshN6Q5cvHGljpbwpdlaFHR9EMCEidiFItGpSQHNaokQFz8kFFMvfGCPMffQYQLcYV9gdiYVO1jOyLzaCz8O2FbQQGFHn00E000000002Y0eO201m1BwHKYg0H9GH0U0hdc0bHaCMr4RuNtlwS9KPb93Nv5ptV0cKXLyaGI74lmnmldwS9GZyJCGa00000bCoq8MJlkUylleoJlmElioEaoyRBgYrq2gH6ZCntIfb8ZyVCruI8IdcrU627GB4eC7GXJwNAVPcSgm4m8ZcQ8aoDmk1F3geyw8Fwg980c6VAwOtEl0IA8V8JE6RAwOtEmQ391g3q795J0SIA6jJ2Swp8cA6QeQbq1ygcA6i2El0G13gba1B0Ogp8ay50agroVgJI6m391AwG5gaAgIzaF8ilc42Ah93Pi84YNIXfs0WH90fc1ESuFOuG1NmjRfk2VEQJPIEEWeEYQKIzw5aQfKv0C9-i39Yc5gb9200000000000000000000";
    var zUT6 = "5sbk3l00e0ft6m0a7g0fj8i2r1w121114111111f020000200000d121112211101c000002000000h000000000000v020305000350o3320b4x8i4Al6hkox8l4xpSAQd18j4xci4N8jh4gPcO8y8y8p2alapxmCazjyC8QUBydea3dm8QVEWsGD11CDaFONQVle23qpPH9xgy36hAr4Eyb6jN74p6gCd6PIp6g-0JzoOczoA-oOu8Uz8OeoStz8O7Mgr6NAp6NpP6jN74p6hP6PIp6g02A2fk2Ad58aqoh42GAwaOGJGGyCA5gaqoraGSIEyQx3h8wFFAYGHaK1jj9plmlq2CCjOGIE3j9Xy4NuOupTJzoTGrIGDeFKowja8Asji1ZlR7ifsYPPyh4tNJtNTnsZPObT7s7y0Yy1EAgkQOullBn0FFAIGHaL1jj9Vlmk2UStygs5Bplk7BpllKlBlgmtDnnpmlltBpllSlBlnn6L0Ua1OIGG2OIGG3OIGG1PIWWXaOGHIHaGKOIGGWFK6EnuQe2wsHaGKOIGG2OIGG2NHMe-_aOGHYHaGLOGGHOCj2g4o7AoaF0ygy96RN6lApn4sgtou8Mb8Mjye8SK8OIz0u8UwWxN60V62shN6RN6lAo3N74005U0c8402I3b1ntUw1mndS1M0KXo0nmndwSGGZyWH1ITltU3ze8HcOMpdnv4lloe8GIKIGr1IjlX4wEwhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhgkwe510F0A827a1kgF1i3a1IrgcA3hcWByC0s54iZLgcpez2tl000";
    var zUT7 = "5sbk4l00e07tam0a3g0fj5i0r1w0301f0000d1111c0000h0000v5502o3300basat0000aasK0000abac0000hb9c0000p24-FzOyb6jA1OIz4JuhBV0sD8N78kkRlV60V7cO2_aO2WFNxx09zQyb2osimPhIr5fpEScz8kVOMrh1zN74pKhydc31kQe544idWyWDsCni9cr5nkpeFc_R4Ay1QMW1g1cucw50cz81g3Ap0a0p6g38O0k0UL2MqpWSpwvdJJNn1c2L03c00zg1BwHKYg0HbCX0U0ntI09LaGMr4RuNtlXtlpmucUyILb1ARtYhllwUyGOWOFI6NdnIlIRgao70h031AwOgp8cA6i391jNfgOwrocA6i391j5HqEE0Ch8cBc6e9VE79UGyw7cwPaqqqqg";
    var zCastlevania = "5sbk9l00e07t5m0a7g0fj7i1r1w13210001f00000000d10011001c00000000h00000000v00001130o3120b4i8Qlx4h4h4h8zhm4h4h4h4yd5oh4h4h4i8Qlh4h4h4p28QQMqkMgoAlc4R06nEc10Go8LSreQFwEL8kMf331Aaqp8tgaqMlO0bbbb090lB0-A87E7eJPsSTdPuI7VBCVCmVKpvCVI1wfE55WC2GM76s508fgwoC2w45w8ffELS0VUa0nXUcY5105c4MG0i85c55w6t8Qao8IOiC23eRNu5c30Mwp2CCg8MQwhFAHqM90kZ9Tt0VIzyurrCVLmzsOPsPbcTdJPsCD0DoEJkMlm0UP0E12q635gk0wY20VZ5-M7f1g2_v1DwE1OMag8wgaos0EEE3hg2yyyyyyj1hh48Fuy8aqaaa6M5550qa0kkkkkkm0EEIFi09cA55ga0k0QQtodwo4d8uEd8qwMwna1g6xcvYABs2wxk2wwR0E3hAV9aE512E5095cKnb1g6zpOiloa25ga20Fwq2yxj10Yei2yz9Oqa0kkp8sCz9j1yz8tA556i791hhAVd50aacA6jhhAQkei2yyyz9Ogkkkkpei2yyyz9Ogkkkkrd3AwEEEESsA55556jAwEEEEOqcz8Scx1IVejAQ0OqaaaacCz9SqadyzpSqa00";
    var zBirbday = "5sbk9l0ce00tbm0a7g0djpi0r0w4121f0010d1110c1010h0060v0111o4410b04FzEiFHDI008gKgBqz76M00y24pj76kO008gxOBcsFj800p2d9C9cyB8aa6186ANoj1yCn5kB9i5I7p5b9zFFxPIW3Ir6NIVelOszoSdH9OIDaSJDpSqL74gBU2pBFE4Vaq9fpSqivyCC55d1NjaxCAOojhk1tlR7G-F_Gb4w2qWjFFHWTGapJilswFDgEy9zhN7NNj9xM7NxciinzWocfhbQC3R7kwV8qacwvBIkOEtXC4Ql0nw3Uw-weE1WyF80ABGWqr-A-EFCPrJM60apQacFzvO202ZCs4261X4KXI3S3tTuntSdP8hI8dEg8apvTQSnRgIz3PBXrCpvwM50M08f0gMzC9cxKo5llctBj3zMzoR39M79OJHpStB5RUfyGGxkxwyGGEDIyp215ntm9P5QbDc6aHaGYGGUGHFAGFwcoc9clMqHa0Co6CbioeQQ2K9j8Db19pvhdLiaZP24jkGGGGGGGGGGGGN9iGGGGKs2j190Agl1j46Y8Z8ZpOgTfogwogBtTttTrS9tToRXcU87MptTo7I6XKYKXIrCazojC3lkh00FEaGoA0j0_9MHNJ14ejw2o91AVfztw77p8b0mVerNKjAYq09AXAwOhn2EBQOO1cs9ccfaOsH9YS3CYA6jCwPsA6jXA6i2E41z1x02hC2a15sbJqyyyyy0EEyONlyNmyxcm1w00h9ysC1-8Vd5dmjBpmjBpd5dn9OIH9OICyCH9OIH9OICyCFE0y05A0i0J8i-aUz8Uzr2FwwjNvdVn4p7ctI6PP75YTNn4p7dxSuoVHClc4ifdkZi3aj1HKeWUzCgkwOAwqS0sNOwu5VgdDG-9UE75tjRf5wULGKbUzGKpXodHa1IYTNf50UF8yKFh1z8Xwo000";
    var zUT8 = "5sbkal00e01t7m0a7g01j2i0r1w1331f0000d1111c0020h0000v2513o4210bpCop26IFwpnhhjjhhjjhhjjhhjjhhjjhhjjhhjjhhyeoqaaqqaaqqaaqqaaqqaaqqaaqqaaqqaddd55dd55dd55dd55dd55dd55dd55dd55824M0GEimGJwqGGEeGG3IB8aG4GGxE1Ig8NM7nRyQ62xpqG4wqGGEiGG3IB8aG4GGj16weeKY0eK201m1BwHKYg0HbCX0U0ntI0bHaCMr4RuNtlwS9KKI1Nv5VBV0cKXLyaGI74lmnmldwS9GZyqoY0kMM02e2wHH1m1oMUUQcc30Yi1E170wi5oaM9FZ1L01Dww0lwpoaXL40aOVKMe05Tr02WOFI6NdnInlodyrHH0snNupug3bKXUyGH1N5lBRBjodyqLoCC9ag7wE1g1cycwd0dD91g2w2Ca10cw50ePAwE1g1j24zp0A96hN8a0k0Vz83g0";
    var zUT9 = "5sbk4l00e0Ftam0a3g0Hjpi3r1w3121312002111111f0000000000000000d1011011111111111c0000220200000000h0000000000000000v0000000010002000o2210b288O5ct2gHqVY492JHDMzaJ8OJucGQzb5YW008wz8kNQ9kNHDMgBj6Kv2cFQzaJEODicIpLE00y2c8wAaoFOCgAFyDap2lboRiTfkJzlbx6kM0248Mx2hxiBakNS5akFj7okFiBalxiBal2lb00p2kO8CgoM2oU29Ap6gsF4i0V6gCyMmDetiBGoURsWFBNEEIqoStM78O0Le7g7K6927akMMEVw32a-JC6xbai9IjidNccg2zkAFw4b2p82CgQoNcyn8pevsj9GzUqAbmjB93j0xJa8HYTM5ZAD8EIhpA4b2pk7K8R4man8rVlOqzVrVjAVvBekkNHAp14icyKP8aB44zShJV7fmSOh2xc05A8CgO6KC9AOkzGYbjeF8mf2WWw0oXM0wwxug39GXo0hllws08GIKIGr1IjlX5rdk1G8UvM2yee6F1xwQOb6Afi8i2841StDo3gI0ksox0mCfy8AkpuhhleoqGj6xdmAxXh0X_--i5x8idPoS2F10m58rQBmO584I1g2w4C2w4E2w16O62g7j8OV31FUy92gAeoRlmgVEJlhq1MKiQyy9BF320OhINGRy9cxOpOp2sO_6f2dCsxCyP94Nxx36C656tT8dOokMMxv264Tw0BcU58b0atqk40gI0r0oxk1U08ChBV5ifij60YpN6C18uX0XE3I3Kc_8HM0Wo805o6m2KXN02IKrI3w1tSM0KIGr1IjlX5RnIjtumkxj3xp63AqWV4xYic3N10Yge4FjdOpeF7y9z09DjBQR6CGhh4z8IAcyGsgiw6hIp2gTmOlB3V2pV0wug29ApChl48Kv0fOhOHaudctl899460XePIgofO5O0CHsgI0p0oxu0Fxx08yhhCp51kMOFX3XhfA298od9mh8mgiE400Ce0Ab2gAaooi6NI5j3aBcoddehYF8kwq1g2w5oa0iga05ce0k0E1g2w50a0k0aoYp0a0p6g38O0k0ebMI6CuLCo6sSST5I4M8XWgcp6hAp6hAp6hAp6hAp6gsP8Psz0Yz4cz8Ocz8Ocz8O3yChCV6pA9BhAr6hCp6jA7d1g3AwPwk0My3Awdwa0pmi32mKWIU3Ip6hAp6hAp6hx1ApehAp1Ocz9OcD8Ocz8Oc4OcT8OIwU3ApmhLqDIpuhAp6jApugsD8M38PczqSdz9OcP8OYwVehAp64uhz1ApChwShAV6ap1Mf8Nb8PYzai8zaScH8OswFEQFzn9nRP0rHGQNqh5zpFLcC5ca09Gdw8sw50a0iga0agQGi8000ao70h031AwOgp8cA6i390kYh1ba1JwOgp8cA1j5HqEE0Ch8cBc6e9VE1OuaEE1P8cOCCCCAR0h4JciYDq1AXmisjEkygvOqcAYi2w2gIV8cD91AQ60i4zDczzgk0StwX84w81Nf4si3y0sjT1icHyw8wq3Ggp8cA6i0-5xSwpeQ2w7kk5iFwgPv3dPHgpeRAw0000000";
    var zUT10 = "5sbk4l00e0nt8m0a5g0njei3r1w1131411141110111f2100201020000000d1211112111111111c2200002000000000h0600016000000000v0110311130003000o2300b4xci56u94xeHHaKI4xci55lDyqLdPITe000i4N8j4xhmlBpmc00h4O8y8y928y8yp2exaoJ8whwmhwehBp6lApk1AaUsgL1DtScT8PszaOcH8PrszgwzKX6rApShBp68M6gHywMQ48X8bgmwwwi2okxlMExp24nw1SMg0aMcI5tTy05psTo702XJw1tpkS3oCHSbGI6NdSpoebUysLb1ngRzz3A0Q3OyD66y06gFcd1nz32j0Ev9hcp34sDaNr0IP9Akg8kUNL_kbV2-FELMdldkMwph1zxs6hwejjw6jiCbKXIQGV8EOdYtUz1sg3ji7aOcHa3ji6OdddMsz40H6d54AjQxKS2M6W20110Q52g00FyF8whAV60V6lApmhBg6gC40FN2M4udUzdOcT8OIzaOcST8UXy0zNL4pKhDp6lAoz0p2Ka33ggzIwJ1q2218sO5n2y5A4jj44xKEj1nSJz4tDo1yePIogrStIljzgm8200weE0GD65l0Aw0gw0aX12UD7LxkUNLHNFcqsCYRi8coC1Aoy1AoE1ApKV6rL869Nu1G5tNlOGOpO_Vzf_8Ng38PtOc00VgPA43kaVyHBlP610p690p6u1AptXtEMP8eHLCerLCXKh-lmpCNyg6hyw6hw86NLcO1nz6wzgkhpS9_AGA362Fx81FF3Br6lJ1FF3XHqp4e8VMlz6yyiagAfS0m0Tgnwwgq2x80kMWh0z8j6gScgOcgOcgOcjOcgOchO3LV6hLX6vAp-hDV6pApChy6gkMAsz8R7oOsz0czbOc_8PszaO3Kp6hKX6jApKhBXuoFBOZOc04Ya64Vz8VgSc_8OYz4Yz9OcH8PcwX-hAruNDO6hG5ChArCNCmp6U00nw0Q000604llo702aHbHaCMr4RuNmPl6000FM8ugFAxj92Ci1FA280qC21CjJS3aSYDrI6lJVeTocHrOjJSqyBa5SVNKjNKwOJL9SX1BrujJS3aSYA000000";
    var zUT11 = "5sbk8l00e0vt3m0a2g0vjvi1r1w11111111f00000000d01110111c21000000h00000000v00101000o3110b12481567124815679a9bcdef9a9bcdgh1234156712341564898abjde898afghi1234125612341256797abcdf797agchi11111111111111111111111111111111p26HkNOigIAqrm1h5z4IzbJqMRxHHrIz0sz1cxPIzeOckwm0OcD8Nb8QRKQgoQRYBukp6hA96FGVz4Yz8FQQudzvx6SgJHFGqszcOcy1o38Mb8jf1-QeUurVzcOekLLw00004aoZgk3rkEyNBglZdjApI3rnkRkROdcCVC9lRglXAptdlZXrlrnjkP13nTnRcNkTTOliCzVIrI8Pvn44z3ij8QM5ddr0V62p6jAelnpr8p2CKaaqqFNJPcT4o3A9DEGq_HN4hTkQT00002CCMCs4U3z0Mk31etyjppkVuiFzCn8icz8kzi6j3hiFEY8yMdS96GgFGpCOc63h1cTV6q5cZEnw0Pgg0aMcJw1upepq04ptTuNllX6NlnIkU0ldfjEF3hy6hz3Ae6j8OcxjkOgp4fqyCLww000000000000000";
    var zUT12 = "5sbk2l00e0st3m0a7g0tjri2r0w444441441111f112220220000d101101101110c000000000000h000000000000v000000000502o3010b288MAaoW4GmNHDMzataSLzeJw288MAaoW4GmNHDLzataSLzeJw288MAaoW4GmNHDMzataSLzeJwakFiBak8gx248jGewUjdoVY00p2jAGq0SFEx8Cj6b9CNu4ZGwBsnMzG5GdTdGGm1s_bUTfjc7L7XDc0j5zoaq3yqihFHyxR5d5FdwbehlJ9F09StPr8DcWLGPJwGWIZhlJtotDsSObT4OrAHbf539j2FF8Is2O4wCCudFEyLkOlRWoQVnqjih8VHyaWGnUFpJJJDxKjRjYoU5A93NYpXlWCiKLFGe9lp5tlbjk4ye8QFB8J9gwmEQ-ihhi84AKg5YM998x91xEEA6k4aq9qpA9Eaiqai9xa4fdQ9AgCAkgWLhF9BsaAeoCrioH5PmYCj93P6NU_UVUqgYTP69lAeRUnTKPB1MfrTdDa8AQ13oUk5wCvNKIC34e1VBDzgK0tHysAyAtP85KsOCp13IYPPuPB1PdLhdDqNgxVU6hGwI3PueREMx8szwb9WlUaf2ws9aogH2v4MeSsn6p_z15N557s5U0skc01M0g20FGIU03wmVCn00mw16tTntfs2XKTuWS04tARuVuY2yIXrDuXwkRltVll4nhwQt21E0hp0E6AyAqacxEAhIkkr1O2d94Q4qGmCEkhjhpjaBFa42VgUMEF42in4gLI4iihii3jhh8cFu075300s040waqHe00U5KpBM05E0hDtRTjT0KXJTKJw17pdnKnL0EHeSVTKU6PJZCrJlkh9E50E0CygCh15I0S4Qy0AmM3oMx0CiKhpgdD9TkMF8Jw50e8U28JA52pI9EKBdgwiqo6cFEa4g0YC3IbOw-mAlcpkQVL6udY-CixsvaNun3eZTUv7O9P2fzxM3NLNLN8eQ9pYXhhP2ovfoEAa7vhoCb0Kw6AyghU0GtR57kss-8UyWwT4r29jke5Dudfu8VapkJ9gwncYikky19bD1vv2iieiglCyygpiY0dg805o6m2KXN02IyXI3w1lSM0KIGr1IjlX5Rm3oCWYIAkwe11O8aH4g8OWYGhPaX4EcR60158iQh8E0kMe1R5w4yaSJE5mk1A1IXoebUHq1ksE6hk3GKEYo8si3GuGSwl7a7h0xOsSUmlBllA3BzUz97AV0sweigd8sw56if9O0V0sAwqsWz4cDaKOGcL9EOYD9GOIGLaEOYCwVujhBpekFiQ1EtUPOA0b5_25lGl229Xg1Euo2GT8HO-WPbaXb09yMA97c8jm0sDGWcgOsGPaFOYCHbOsCLaOGYGzbOq2pkcq_aAjA0sghhbh80fkxWw560zOsweg79gMFQB-sF9l5o04ktMfksyahM8Y000000";
    var zUT15 = "5sbk3l00e0ct5m0a7g0fj7i0r1w2221f3320d1011c0000h0060v0020o1200b4xd54xd5000i4Qki4Qk0018Oh18Oh0004h4h4h4h400p27Vzj3aAg8i2P8Q789VeghTswehAhXugy3gdLo9UBAslA3PcwebV4uXAsm3tS2urA1Uz89NWzA1OcwaC44CC41I1U6OcD8kwhgxsc4B1X4v0Cg78O2rccy0OeAu4Zz5IzaOepOdD84qok8wgA45A9xPA1kMwAo3qScT8VL8Nb83yehyehAV4uzp7aehIV0usJTZzfOchO6oqi2hkt_N2C4kz7ReNUjAreg7MmwJ1SexIz4szkIxC4x-hMzAoLAo3AhY2p68V6jA4uwszw78h1A7ADGgQshPSgefIn8XhOdD83RCshOxN7cV20haiV_o3Ap0FDgy104MEOdT85AV0dz8Sob2V0dz8SYwioQQp0e8Oe9wJeg3oOdP85AV0dz8SucEUbI0Uz8TcwmtA0Sczxb81NZU0dQ402I3b1ntUw1mndS1M0KXo0nmldwS9GZyWH1Ijtum3y-bOXO0ptTv4lloe8GIKIGr1IjlX4yA1MEc2840OhkyF5iaAl8w0";
    var zUT16 = "5sbkbl00e09t7m0a7g09j8i1r1w23212111f00000000d00010111c00000000h00000000v00101010o3220bA18QlDwi8y8Qdh4h4icA4h4h8Qkp2bngFxM2A5g4PMGkNQdA6wV8b0iobwewVgd2P0l0I1a0Qfa1Lp993g2Q5U4OMCooof0f4wG1AVgawlwI0O0ago3BwG1u2j1PK8wpzPCPIAIcC211k3weDsSgswwtjJwAgkwG1VuXeQ2Q791y8947274PLwG0CDRxNx110L1PJfi6O3A43GtI4A2A5gfbTpSwmwQwS0d0100F1m2g190N2kQegF9U0lgggwA465M0M1xN081wHU3YCWPGFxJFx0o01IeVli25oxeiMRG321uTcxePJrmXtuYIhgFxOa15iag5iaEl8Gw8qhl2F5kaAlgGhl0gS2E5ga15gawl0E026wl0G1l2Ahk2whm0gS2EctJM904y2g00ao_9xAwcD2o6jB0Os90pek39OMpek39OMebUgwOYA6lAwOIA6bUh0NCOgpmi3aOgecu4wcpYA6lAwNCPMpC4wcqcA6cKo36b2k3z9x836v90CvgV5cLSos0Yu2I5Mb00L03www0lwpoaXL40aOVKMe05Tr02WOFI6NdnInlodyrHOMsnN4VCm39GXUyGH1N5lBRBjodyqLoA542g900wOgpMcA6k2h1m3b1BwOgpgcA6k2gII0VEcA5wagpgcA5BB8cQ6maQ6k395k1Pgp8awkwOwp8bqrwpocA6i395oaI3BwOgl0F1B0OgmkS0PgpgHgpgcAlg7d1AwG1i2ABB0P0oy3d180J1CwOM00";
    var zUT18 = "5sbk4l00e03t5m0a7g0fj7i0r1w0101f0200d1111c1010h6550v0003o3230b4zgh4h4h4h4j4N4h4h4h4h8i4h4h4h4h8y8h4h4h4h4p22JFDSCezjCozjCUziCD9tHpFTdDqFQrEm_jDVRevDkX_qSqtPpSGt52CUrj8wFK6FXBU0c0402I3b1ntUw1mllm1M0yro0nmldwS9GZyWHS9KDc1Nv4nBVocyXLyrUCX1hlpdVtm3qGHSaSqE55Cac5c3EeyC1GEGFFFEGFEi0H8cg0";
    var zUT20 = "5sbk6l00e0bt6m0a7g0fjai1r1w01010011f20202200d01010211c00000000h00000000v00403000o3330b4h4h4kh4000ycPcPh4g00000d5pUCw004h4h4h4h4h4p289moqw4272xgMa0dwp0_Z_SvvUm8f_vZ_T-oTz_L-_X_UI6_Z_SvvVF7ms624xwUs7r1N_T_pZ_xU_X_L-_P6009hA4E10xMEkc2pAjcf_L-_X_owVwc_XYI-_MV_T_vX87_owrKXJKwOXOX98Kf-_X_L_cM7f_vBDT-7f-_X_L-TrtJQGyRD1wx8oe71Pc1L_vBDT-7f-_X_L-TrtJQG0095y2E10xMEkc26_X_LZA5_xP_c2Y0ey201m1BwHKYg0HbCX0U0ntI0bHaCMr4RuNtlXcTlCpcYnN5Vum38KXSrHI74nmjullwS9GZyJCGQS9dRcI191z0kAmddxqi6w28I0E0y9054021WoUE4xo1P0a08AhR04g86C68y304wEUw6NA0QwQ4w91Pf4wh2Afk1E3UNUM3C0Q4Jdym1cL4A6c0ihoQS5F8q08yM2w7z054021WoUo4xo1P0a08AhR04g86C7y8c0i2zy0r6g3i3gi0A7cYi14agZg6wfz7z0eo3gi0000";
    var zUT22 = "5sbk3l00e0ft2m0a7g0fjei2r1w111111111111f000000000000d111111111111c000000000000h006005066000v000100000000o3320b4xd5hAl6u9Ei4Mk61gpUuh8jhkpUuqOZ000004l6sh8p2dQaoBRlQMEQMaFM60IjciM3aevjvjufqFPXWtH9OPCSRkS3SGsOSDq8Bd0Q76SYnoP2CtDqUM6VlJSsjePJ5cyxp5Jdc5PMeCsao8laoG9TwYNtj8wXhjh8aQaoOB554z8kFDlmCyO6xSaaaaGWqFaijhw1AenhhhprjNlT4Fxjuu0qaaaaqohdy4g5U0u2100H0OMlTu80lAllws08KS05RAlodyGLoKGZyrHH0snN5pCm39GXUyGH1N5lBRBjodyqLoHqGw02C8H4dlcMAp6K3jcoMRDeKJFK8SlToK61evvrjuhLHLPO9yIao372q30IMFDpSKc3KlrtD4PIXhj8wmhjjjgCwk3Fx8CIeNnj80VRd4wHgXl5517yaa1AehhhghWwmEAiCCif8P2pu07q100H0OMlTu80lAllws08KS05RAlodyGLoKGZyrHH0snN5pCm39GXUyGH1N5lBRBjodyqLoHqGw00jiAogxH9FF2ypxdeihqoyBs3ijGFGF9KSWGCjxbqpaS2jc0M6GVP32TnM0qMSlRpC8lijBXGGitldl9eP52RkOs9rj9mMm0o3ltpxxrHU0doraWIP4aFaGp8eodAVejvw-jAVdGOYB8isCHrOsD9JmnAVejrw-bogsjkQMgu0VxcL01yww0lwpoaXL40aOaGMe04nr02WOaI6NlnInluNdRRwebUyIPb1ARtYhllwUyGOWOFI6NdnIlJlga808G1k2E5gawl0G0k0d0G1k2E5gawl18F08wOqcw6i3b1An0EOgl0HOcE58aIz9FG1k0V0a0k0Eak0E1g2wEq0k0E1g2w50a0k0E1g2w512whE1g2w50a1k2E1g2w512whhc1Ohk2E5gawl0G0k00000";
    var zUT23 = "5sbk3l00e0ft7m0a7g0fjji1r1w10131111f24222200d20111111c20000000h06000600v01000000o3320b288My2cFyDgBiMy2c8wz8kNQ9kI8wz288OCexaBI248gx248gx248gp29skQ-Qj8j7GJcc54yc1OcCCB46cHolcYN3Ckh8OIxduPMxVLC-oOYzCuonw1SMg0aMcI5tTy05psTo702XJw1tpkS3oCHSbGLpKGHM76shupBwObK-bGKMshlptpkS3oCHSaSqH6CiqG8cp6gCr6NIozAoxApehVia361V6iyEMfO4m1wKCc2C46A17E84g8O0p6g38O0p2pkukpehyegCtufCMsNA0Ocw6hP7cpuhAV61p6Cm2AMk4-67CcjOf0kmhwK000zj438Q4p4zg578AqOd8qwR1hR4qidookcy7t9dqRagtYBRDriN7v9dqTFhjZk2TPKgTujbKXv9dpQ7sgTOjl4h998Nfr26n311G3uhAi8002C88628Q1AwS4q0IA6Izg6QdwocdomMd96wd0rMMMp8aY05M805o6m2KXN02IKrI3w1tSM0KIGr1IjlX5RnITllU3ze8LcOMp5Tv5Rnoe8GIKIGr1IjlX5rdlFAeC238k0F1igE1OE8cxg2A592w78wF8k0F1igE1QwH8k0F1igEh08_c1qgE1i2Axg3I1qgE1i2AwFywg3OwmAa0kC1Y1wRxwwR1w2dh4000000000";
    var zUT30 = "5sbk1l00e05t4m0abg0fj7i2r1w211200511111f000123100000d011100111111c000010000000h000006600000v000011100300o2200b4h4h8y8y8y8h8Qhllllllh4h4i8y8y8y4i8Allllllkp26IaoI92Xwm8ilupAVCppnwmjCoxpnCpepCmlw000FbDd1n5Pss7313qquIFPzxryap_VelDoyQQv4NWFGkRXH9CFySAbmpy5BupAVCppnwejCpRBupAVCppm00kN-3g5c3w90hAr9m03g71gr6hIBg00irM0p8805o6m2KXN02IKrI3w1tSM0KIGr1IjlX5Rm3oCWYI75YhepBwObK-bGKMshlptpkS3oCHSaSqEA2y1d55555555555555555555555555555555555555555555551j0z8EEOcyyyyz8EEOaa6Iiq54XeNhhAp55556hhhAkkr4DpSaacz8EEEEOaacyyxIh8h8kjIX556hAkkkkp556hhhhhhhhhhgsz8EEOcyyyyz8EEOaae8DpSaacz8EEEEOaacyyyyyyyyyyw00";
    var zUT32 = "5sbk4l00e05t5m0a7g0fj7i1r1w22214411f30003000d00010111c00000000h00000000v20010120o1210b4h4zh4h4h4gh4id4h4h4h14h8Qh4h4h44h4ycPcPcPcp25xkMW8k4a0k0w2512w2oYWpWqoiddlSbpZc31pSvjvvDpY78gfDUzj1guaozjvvyec_17wdsy5d3g1u028402I3b1ntUw1mndS1M0KXo0nmldwS9GZyWH1Ijtum3y-bOXO0p4Rv5Rnoe8GIKIGr1IjlX4wFxhr1i4Bnpjpppnpjpp0RRRSRSkSmmlS0j61QPU783F7ifF7ieQqosxjbw80aos4a250a0g12wxg1cs7jfm70zF7ifF7ieg7IxjgU01j1Vc0exe6KOGaWqcKYGzaFa3aOaOGTbadHcGyKCzbLaEOG0CbbPv5F0hOBuRIptddehJTJr6njjNeNNtYlIptddehJTJr6ni00";
    var zUT35 = "5sbk9l00e05t7m0a7g05j7i1r1w11111111f00000000d11111111c00200000h00600500v00000000o3220b4zcP018Q4zcPgjcPp26KkNUj3x4y4wEh1zCeoVzC0s8YhP6hAp6hIr6NwmjNegYlN7csNP7csNP7c0UHye8OeoUzoSchOsz9tHoh9zGeoVzCeoVw75shP6hAp6hIr6NBVf4V008QNNAxojhMkMYwkQY1iddx7Ry8ItpRtvgfk8-wuUWDGGuHWx7RvktlRlvgDk02CeCC7294p28cshIshAshM3IsgA57csNP7cp74f4X74p74shIshAshwoadzCe8Uw574p6NYPI8ANAshN6NN6hN75r74thP7csNP6hN2Y0k201m1BwHKYg0HaCX0U0jlI0bHaCMr4RuNtlwS9KKI1Nv5VBV0cyqLyWHI74lmnmldwS9GZyg16Gd3rjJEasi204we110OX5BwH1jvCo3b1o3bImm2I5w5ejci4OPbIennISrCrtCnosKKNhRdQQw0";
    var zUT37 = "5sbk7l00e0kt5m0a3g0kj8i0r1w1151f3000d1131c0030h0000v0555o2210b4zcN94gicP5mu04zcN94gicP5mu94zcN94gicP5mu04h4h4h4h4h4h4hp25aBkMxwl0F1F59yH5ubkaE42kR2wgl5dEHNlyI5F1iaAxi2A601i2ElMHNo840aIFu8aA03abLG1lBwkx1lp4w0i1Mwyg9og0Q1B8nodKg0aQ2gaHHg9I2CMcBkNtwE2CprFyyq5-rDVD5Tckcfcl8X7Ikgk4bd8UdQMyf12NyOkXUPeC21t9oPe2dW0v6dP8LwwoOptx0-bfGcA5c4Q1hF0giE5aF2B5Bd8OpeSTlBo2hRo3B4tI7npOsCAejjwasGW_wm0lAq40a3N15nBp50OA4fFx14Riyw1Mwh0J39KYCQ91G85SxJpCNdO2y1MAw0wp0ahp8w0";
    var zUT38 = "5sbk3l00e0btam0a5g0fj7i0r1w3011f0000d2111c1300h0000v0555o2310b4xci4QhmtTsi4N8jhmu8y18i4x94lDtTghd14O8zllkp261FzW6C23mCuw6i3wgOgkQ_xYEc6701Zi38i0qARuwYAddEp6g38O0pb83x1M1l2Yg4222dk8kxwaGgOA8agOpgKwe4588iMwGGOk491IE8nmEoxrs0SagChGQ25dfBcvqI5OoiCLNGePnjhWAecFEI3UxdagiMI5GRSQF01I7wgcz8xHA0Ocw6hFz83AxGqdzE2apI9zhwmhyKhBp7fOcP8OIxcnaHlc_iaoY9E-Aqr48yjhgaqNhjI21h8gg0Ygha5wp00c0CK0ogho5lk1Mw0CMc0M3aKX1Ei25wr5wr5q0hFws230C95mi38OwkwOaIA6hjILsGLp1Apwagp5mi38Vgagp5mi38OwpKi39i4L8Fm0RClYi38P0kwOaIA6g0";
    var zUT39 = "5sbk3l00e0btam0a5g0fj7i0r1w3511f0000d2112c3000h1100v0304o2210b4xci4QhmtTsi4N8jh5pTtN4h4h4h4h4h4xci4QhmtTsp24uFCWCdapMmmCz8im1AARXKl1U1lNMwkANQcgOJHRePCUzy68Uxyld5gx4Rg0a5Uw8444qEgF30lkwxi44Eoxdow1MwgDk644Tujq4wR42XgSFKOE1G858i5owgFCWCdapMmmCz8im1AARXKl1U1lNMwkANQcgOJHRePCUzy68Uxyld5gx4Rg080ygwgBUwyk40cw060jn0c88I2GG0Ugl84U3g6kxtwSV00Hgb0SaM0zhdJ4ms0P4kn54Qi-jiEGEBYCHbYZPepBrngtgOYLdJKY8lG9Gpw";
    var zUT40 = "5sbk8l00e04t9m0a7g0fj7i1r1w88111111f00000000d20111111c44000000h00000000v00505050o3100b4zhh4h4h4h4id04h4h4h4h8Q0h4h4h4h4Ak14h4h4h4p260les1445cwlWWM94i3Bm2CgpdSxOH1lo5eY1sg2NVue68Dv8dWwkO2CgkO2Cgm00FA5cU5mec2rE5BS2GG0GhNMllu1gzHKMleI240Gctus2D726FPwNFM05cQNW4Qi1p56g13AgmaFz0Vpd1E56hIr5d6gC52y374lkkYOdd1Nu07t100H0OMlTu80lBPtws0bKS05RBjodyqLoKGMrtlnm0UPyaPcI6htTNtlS3yaHbHaCMr4RuN82Cek1sO28c86cMsKX3C1OGI6o79KQeo7bKMpx6Md0o4c2ww0Ugx10PwVtS3b3x06236oentEcIe4MdwNG3BTocMDg80hEw14G2t1awahE9k4G1k2E092wBg2wxgiE2Aa2l0G2ya100";
    var zUT42 = "5sbk7l00e0pt7m0a3g0qj7i0r1w5361f0300d1111c0000h0260v0000o2410b4h4h8yd5py8zhmo0004h4h8h4h4h4h4h4000018i4x8i4x8i4x800000004h4h4h4h4h4y8wp24VkMWAqWqp6hJJJJFFJJJSSSQQSSSSSSQMIzpjwGWGqqXarbbaqqXatBBBtlllBJdlddtBKGKOSCChAqGGFaCChFTnnkQTnmSSSQQSSSGorr8Oldcz8OlJJJddJJKSSSCBcbsSSSSSCCSSQL01F0w0lwpoaXL40aOVKMe45TsRRkwOWGS04nlo702pKKYYTN5pCm38KXUKGX1N5lBRBjodyqLoHpGw5cfGa4goOaacz8EEOcyyz8U5hhAp556hAkkp6hhhA0kMeh03EEpwlSlJVd6jAkXtVmTARc42sA75TBsm39OsyDrLaSM00";
    var zUT43 = "5sbkbl00e0jt9m0a7g0kj9i0r0w1210f0000d1111c0000h0000v0003o4320b6hAQ4zkipStDG04x8i4x8ipStDG0kB8V4zgipStDq04h4h4h4h8zgydgp285ykMMBxQ3E7gC54aspCICK03aEekbaHa1Bk7aj31yP0og1OgpMsAt74hpwd63AUeb90FxwVJXmt5AwOwVe48p3a1IXGC61Cr5MAewt0Wc0yM0t0W1QsP5y8W1RwkEExw01NoKewt0We0oIQt0W1Qox4FNxaYeChQOeCkUFCb401QOeChQOC62L01s201m1BRTu80lBPtK45TsQjtV5Tr02VHJM0CqHOMsTN4VCnAntYnltYNljhdTIntX5sPljaQMMC80snwS0zFAtczFBed02ba07j8Wp7jfBtNozEWp7hE8k4qaKNQOeChQPG7Rcc209NC-OxPYGxpocGwVoZoVct8WhWg9xC67b7k2bYhOYDaM7C0OMVMWxQzQzJ7ieAu1793F7ifmeIt8WhX1OgXhGsoh62fD0QJ3D3G1xw1Owlwh90ugE8k4a0kkM4gV8sYei7a3g6Eek2zB1OgVgsAek1A37V8cysIeS2zBxG3g6w6hAxF3i7a1hOgR1E3g38OgQxF80";
    var zUT44 = "5sbk5l00e0ftbm0a7g0fj7i0r1w1111f0000d1001c0000h0000v5005o3440b4xci4Ql6hkoi4N8jhkp5hx8j4xd1hk5540000O8y8y8p2anEK6NhoQiGyCPiyrdaaplcREsP9Ib6XbKYPbKYPbK-mZCm7TUQpCpCrCpCpKpupPdbIjNMYCHPcKXPcKZ8SspcMwaspz1K2Hwasp2U0c3m0jzn03wYwoK1wWU2D6cL-1b0qK1wYwoK1x2M0oM0hUcI1OK1x0K1z01w_tLq7aHILI890kUQ1w05Mxo0do0c7XIXs6n0NvMVCpCpwGM6b_wyM6bw1PcPcMe42U6c00sPcTc17wOM72U6pCpCpCpNC1Mwn0Nw0MvKkUNuT1BMdn_1lwcn_1V0Ns2f15Me5McPcPcMlo3l_3wYwoK1Bk1No6tTrSUcK1y_xzMBoge60316035Mc8lMdo00UgI86c06vU6H_wOTstFj3rE0c501BE0dtorrgRRxJJ3nm6P3Cs03w8601Nk300VKVEsU3c3Bwo07f0M0erKq79g0oaQcz01LL3uCj-rCVC0oHw7gwd03Dwo074Mc03CXCxN4300VKVEsj0M0erKq7D0pwsI300VU601PtPgUy1w0sTsQe9wo07dTd2L81yww0f05wpoaXL40aOVKMe45TsRRkwOWGS04nlo7029KKI1Pv4lCpocyXLyWHI74lmnmldwS9GZyD06qFhUiFcJc3x901wE0FwA9p8a0rgIA50dH91g2pQ3s9w";
    var zUT48 = "5sbk1l00e0Ktbm0a5g0Kjvi1r1w11434111f00303000d01101111c10000000h60000000v00001050o2200b000wv123412341234u56789abc56789abcdefghijklmnop1213412131213121348989898989898989abcdefghijklm12345123412341234567676767676767679abcdefghijkl80000000000000000011111111111111115673456734567p2ehkNW8FDwzM4c05jn-bKohT1U26IaCRUaCngawn0G1o2E3a0J1o2Q5EawdEagaWfmzSa1jovgXgaMd8agmwF1q2U3m2Y4w2A5gbgfexG3AwG1s2Y2CRt0v3V5UYz84kQ_TNzx7w8yR4sHsu8UIzmhubHsAzkhTDyeeUMyT4sPtu8UUzkhuaIsIzmhSTyeb9w6CcNxL38xw0O8kPl_d3q6QdErgR1W0R1G3k6i3k56CbEq32zE3gomg3i6h3k6i3k5BgMUr0SxI3k4nw0PMg0aMcKKXN02IyGJMwyXCyrL8KXo0htlK04jtum3C-8DcOYyXLyWHLCaGqWGtKGLoHCqF6AbUq33KwLHx049M88uW2ez90SVbLluPcVkswIdQ4stfXTcW9Hx6GU7Ev9mfD9ZWeGGhT9dKXURw7mM3-00w-vIbSRNMaU-YTfK9HwaHU3m7O2E-k_JOe2G_KGHwuxOlz-cDTFuGGhZXxTqfMhjj_29HMjI8C000aoJ1xgQ5kPHsEc66wHBek6Id1n5D0MSxI3k6Idgmj3q6MdEr0FCYTINiM8dcxAgwQO7xM7gZE4dcxKUdcAlcxC0Aaa6wHOKY_PGoqp38ExFAdi8nHgN47pwe0e2Zgbj8p6gQO6ji3NEoz2QxRyx6oNy-6CgOcxqp39G1TgN47miFwdcp0da8qAwQO6GgKe4C8j1NAMD3BWoOomCgKoOat1GGwV4xT4Ny8bAM41Ka1FAcyC5EAdagtQchxSptwtclcdcxAp3j8q4MKU68wXRk1Fzu5FAcwG6CgRbxWpwM8g000kEdIBj9aCh8Mj8B42il1awAFwsax4Ccwig0oa09490F0QwOhrhawl74egbp0A97d0F1i3p4Ykb95AyEVz85IwEWxVE58agr8Ka5g9Edg00000000";
    var zUT49 = "5sbkbl00e0bt5m0a7g0fj7i0r1w1241f0040d0011c1000h6000v0010o3320b4zgidg004h4i4N8j000h4h8j4xci4N4h4h4h4h4h4h4p27yFDOC6yy1689EsVeNyegCf6PIpehCsaoBIo1AsEd0u0upPp7g0Q1OJ1Oqoobku8OKpOtzbOe8Stz9OcgU_4Jz0czB0wgkO0e91ht8VUq0Veibawuo2U5dMcA55BSs6wejAAxsP2eQxepdljCblkVyjelljSpqd8yuOrKXuNbKXUGGFCLsky9P8GGXCqUGLGGK-KQxfp5TtLoJTtYXqn8ftXTq5VllsjdlF8RX_g5vJtTvmGwwV__V05cdwh0z8O4NAYzpO0p6hAV68p68p6hAruhIV0cz8OYz0szw6hAp2oZV6PA0Ocz9OcH8OYz8OdiOdD81Ap6lApChOcz8OdP8Ssw6hApehBp6lA0Ocw6PIX15u02Y402I3b1ntUw1mhtS1MwGXCyrI6htSM0yWH0U0hdRVoerUysPb1AntYnltwUyGOWOFI6NdnIlIRgFws23i0zb1jk2yD8OwkV6k2D8OwkR0EFOcE5eg0";
    var zUT67 = "5sbk7l02e00t3m0a9g0fj7i0r1w3311f1100d1110c2000h0000v0403o2210b4w4h4h4h4h4i0h4h4h4h4h414h4h4h4h4w4h4h4h4h4p21_FFQ9D1kFJofStGDhw9d8W89dH9AYyD905U0dk402I3b1ntUw1mndS1M0KXo0nmldwS9GZyWH1Ijtum3y-8DcOMp5Tv5Rnoe8GIKIGr1IjlX5rdki2EsXPL0rkmRUi90";
    var zUT68 = "5sbk7l00e0Ft7m0a7g0Fjti7r1w31121311133315333113111311111111f10020000000000000200000000000000d11111111111110110011111111111111c00000000002000010001000000000000h00000600666000000000000600000000v20020000000003220100000010000000o1330b27Tx2488gxx248gx4FyDaoG4GmNaBIBasTf008h38kNz6ewWalEBiRckJjUjB64Vh24dX00000x248gxsVPwx2ANi78ky7HoRiSd248g0248gx4wUx8e8i3y4gUx248gPy48gx5coNAwp2A75cu0Mgok4w1cKMp5oqMpohOM9xVClkSkMem39IHIPdTr6E2gmpigRpdBdKS39ISYPDetSNG3i6I5ocI6hm6I3ceVOgLc4fjjjjjpaTQQQMAH3LbMRddJRdcB3OQfbMZYcYJ3QQRMZdcD3OQfbMZYcYJjjjl45d9zumy2CCCCCCCCCCDxaPaHuGOCCCCCCo8wFFFNq_aHu--CCCCCCny2CCD5obaHup8wFFFFFy6o8wFFFFFF5U0q444qWgI5BTq04VtRo7029Fw1tpkS3oCHSbGI6TlmlwecUyILb1ARtYhllwUyGOWOFI6NdnIif9c3OX4_aIC5FwtI6jpJVDxyq2aa9A6Yu93njjnjrNocCSKPcjbTr6EddddtdKS39JHG8Tmyb6lApy8cpEerSdyLycI3ceVkMNp1uS18bsN8qICOCTr1ASrupUVRJrdo0000003m3sOGH0m0JOMpdJJKpUXJSAcV84MNwFzP1oa39wgQmllo8CnuTGrnCwCu10XBoDjGrwWfkSuFI_KUl3zuA5KhAUdBpKlCVmnvBplEcCD81jAVmlCpmlo39j6xZrkgoMb9O9j9N7bOkMqj2zg-9OYHaOIz9OE7aOYH9GJJOIgODUHoIKGSGGyjcco3gdyz8AID9OcX9OszdOuEvC-EV2wqKqGGUzyeaGGUGGHye8UGGGS--IlIxj1aFPBY1ysB9FEYFzP1uksgCuAFNBy_y2GsVW5Y8EwPNTssrNe3O5ehwddejM2D7LYh0lbQA1CsPOBR76siFNxA7W3jNmMDUg3UsDP41kbM0V222dt8m2OXJ02sKWI3w14QM0KIGr1IjlX5Rm3rGHaM76shmnBwOqK-8GGMshlptpkS3oCHS95jDfck3F42pWioYqC23GFh1zbFFOe0dyCC1nD_Pe9UXC4VS4xsMW_QMhn46XLqGJLrKZGGSYKXOZKXXI6wpagsOFPzAwfBagcUyFDwQCfczhjjGaCn6ExUjNY1dmgCn6wFDOFNxXSERsNP6RO3ARiy9ng0fxfBekFBMRfzfsSkkQYpVsxNf2c1dmhVhEfBfzLqz0sNP6RO3AQLT_co3AV4FAUzBVaod9xhEv4VulBpmhAVk3BpulARmSVm8pjYlImnlrllh9C6c1E6NhAimjAV6tAVehCVaoQ6C1Rcxn8OkzQz9tEOlenprtDwi1z8G1hApwaczfh2zK40ofyqqrqWGGHqGGHqGGGHrrrqGGEeWGWOCCQ00001sNpjEc2Bgo3q0VAVBpuQ6GGID0SXocPap0gE0ncoAji30Fk60SweompgsLq3llmjwrtI3ClClN2w3u02p116KAb1ptSw1entm1M0yqo0nmldwS9GZyWH1JRlBo3ze8HbOMpdnv4lloe8GIKIGr1IjlX4KZCHG99EwSA5ttqidagQYA2qaihIakhgC978fNmXO8J-5wTpPKVSgepDOIVCVlsTioWsvYC75ljF887tniqidfzfuqyAAr2B4k9yhO0YlKYybvxodSsXKtA3CpYHepKlndQCfwma3BuyBRvdwQasiWDp0VxFi26GG3ll0GGxg0mxsgqGxsNsR8c0zgo3q1pB0HSwRllAU6Tr8yZAwqBttTttTrO3tTrSbtTttTrObtTv5TtRTtRTtYntTNtTrShdmc0u0KjhHKXHKXUKXLyXKWXK-rKXUzMJHKXHKXUKXLyXKWXK-bKX7zQsiHKXHKXUKXLyXKWXK-bKXU1R9aKXKKXLyXK-bKXHKXUKXIu9B5eKXKKXLyXK-bKXHKXUKXLw2XKKXKKXLyXK-bKXHKXUKXI_6MgtbccA0j3zlUehGKAtXJzr2y3-g3yXUztIKGGKTtSdLy1uOEhjjHKXvcE6XK_2XKWXK_2XK_aXKWXKWXK_aXK-bKXuPhsPfj1rFaC1wqGGEaGGG1cM000000000ao72E5gawl0G1k2E4d280qgAdc42Wi0F86eFOuoVGJHCepWDGeGHCKEWD9VzCGSKo7CuFWzGGVHGeFOuoVGJHC08ravFihohXzMLMzMOKWY8WD9VzCGSKoVDGuEWGKqWzGigQtjR7llRnktjAYNPlrncsOmge279XHbVDaSsHpOJDaSsHpOJDaSsHpOJDaSsHpOJDaSsHp5amfY9YaLMHCeFOuoVGJHCepXDGeGHCKEWD9VzCGSKo7CuFWzGGVHGeFOuoVGJHCepWDGeGHCKEWD9VzCGUgE6AUgL07luRwpoaXL40aOVKMe05Tr02WOFI6NdnInlodyrIOMsnN4Vum39GXUyGH1N5lBRBjodyqLoA0000000000000";
    var zUT76 = "5sbkal04e00t3m0a7g0fj7i0r1w3301f0000d0001c2100h0000v0110o3320b4zg00000000id0000000018j0000000000000000000p25LFxx0h1w6k380FPEqg0dg1I0Ogp0dD0tQ6M391A0jiW1Ggdw6m381GoeU3o1DwO0svUd31I0Ogp0eb1S0kXehAVg4PMs21I0pzEjJcgqHb1k1dfIaouwh1w610O09Ft0Rg6M3a1A0SMtE6M3a1A0O0i8awlwF18wF1k3o1O0r0cM6g3t1E8dw6k380Cvc1SglwH1k38GOwmwJ1k1dfAaos2wx9FqEc15kbb1ONlyOgoAaEmm3BwE1kb91ByG4CDSbM0pg805o6m2KXN02IKrI3w1tSM0KIGr1IjlX5RnJRlto3ze8HcOMp5Tv5Rnoe8GIKIGr1IjlX5rdkFysC1U4xeOgrmi3qOgrmi3aOgpmi3aOg00";
    var zIsaacTheme = "5sbkbl00e0ftbm0a7g0fjvi2r1w110110410111f000000200000d211111111111c001001001000h000500000000v100000000305o3310b1234565789abc0de1234565789abcdce1234123456789a9b5112311111113114p26Ua3x-BdMZ4MhjoZ1jjQWWCD5OpOyrecRQISARRzjjgaCMKFzgCNy5WOhFY0HAi5fuZTugIGKFERSsRJQRdBbc9gsdsAEIqCyNyg000000001hsfwFK7MSjxQkSj74td9ejg6eFDqACqCPDTmzqjni9dd0Kd759IpRTuHGqUDJt9nx8LkQq87KKcIG3xPdkD34aCNGib6900000000058W4PEEEEEEEczhhhhhhgp2yyyyyywO554xhh0k5iya1_8EEEEEEeEV5555551N38EEEEEEcxhhhph0k51MXOAUowkCdN5zkg00000000002ngpTOyNA6cCZ43N5823xlU0GY-Kkc0Y0Tloy3jO1sTo706XJy3dK84RoeUGHo0htlws08CWWM20dL8dpBEwg3GbK-FKKMucnnzd-dRoeqGHVyg0000000000000";
    var zCantina = "5sbk9l0Ne00t5m0a7g0Njvi3r1w2212131141111111f0000000030000000d1311111111111111c2000220020000000h0000000000000000v0000000010000200o4210b123456789a9b123456789a9bcdefghijklmnopqtu123456780123456789abc123456789abc0000defghijkmno0012345678012345657898q12345657898qabcdefghijklmnp0012345657011111111121511111111121544444445666c76899aaaaaaab0p2ExaomEwhAV6jApehAQV2oQWxjIp5deEoxjiFx2EoBN0zCp6tApehAV6jjAsjLkX6tAaoMcrReNwioGfe9Bmu9VzeOcD8Osz9FOe9TGtzdOe8Slc435ucc943J7G0Bn36zyqcERj36xA600C61P6jAoBrApSgi8c8kM2f6qHoSwXejBlr6Q7pOsG2HORestBNj35hVw71PDeptmNJ1SsDaGSdEePAVlJumHNxQS2DVhP023DehYOHoSwXejBlr6Q7pOsGWLbXocXhVw1ViFGOciGG1vvAaop5wRxwHWV6hS5sd10M9j47j1P1cD1Mpdlc7jljCpelAVocCGCGCGAVujBpem39GFGFGFHFGFHFGFGFGFGFGFenAVmjBwOqGqGqGq4woOWqsw2CwwiaFAuCi5CFyNR6hARpChAlFB0cA1mgnrUzbEIJOsCGL8OamKcq9T0K99xhBkMf4pddcDAp7w4PjcmEef1rNfcpd61Vd84NA-8Ocz8EOcywwkMw90FzzqCsyA12D6fEiCm4xl8EwhT03LnapM7sVSZkFzAEaoEeBcdywEjMw2K423uTn2r0ebSEe0S0q1Kr0Iz80kMwEeGGiGAU24JAqGWFiG1HO0pc5A0PIwyskJFFFFFFFHOcCD8Oqsz9w82-CH8OXqqqqqqjjrApdehATSkFAPAQQQQQSTr68nTkQQQQQQCC_8Oqsz9LLFSsCC--WhAZz8waqp78OaWIz9c1jj0nlV6t1lQM41jj09wwkr0cyz81Akp0cyz80tz8jd3Q2iLAF2gAdw2g8Cwkr0cyz8StCzoStCzo0Rce7VjbBc1fOD9i2B82u9j1A5fx0f2aY9YaWD9OsD9OgtjR03R5tjPnkVfxfxf4-4wFY81UHMk10OY7nn2nTp0OP3m5GCWHGcuHyLLJ87biwWKG-KvLLdx2RPjhxge9AF7C0XlXdtuMgXlXdtuM7aOcz8Ocz8Ocz8Ocz8O02C4i8whCp6jApehAQV2C65aoq58e8FFj6iR2CBnz32h_xbG17dOc_8Osz9OcCD8WDDWtzzIxcGdgFSc5j5LMPB4YlP6tApehAV6jjAtPTteNNCgCj6V8X7yy1U9r0iHxzhNd5Q19DhU8YhDp6trApSgi8c6j12PqJzq3IVellIrgtD9OE2LbkVNQYkMNr2gshNullP6Q7pOsGHoSwXejBmlVqD6to7e08ecU7PaKoSwXejBlr6Q7pOsGKLbWXer2gY1YM70cz0acxj38j0A4Ogn0S0F1Go1P2Aywo4Gog5wwAMFOgpddc3jPgdA5ePB0OqGqGtE1SgkXek39GFGFSwrePjljljljljljJkIaI6DxgH1xx82OsA33AV8loceapFBm33ACi11Se1j76hAAw8kMNqjd4HA4g8Ww1jeKFje0Nj72Fjb2OJj792kNgvaooiolR-k0ULgU6Lo1JW90nX0d1UgS1spA0ao85ZJkJj9g411llkQOtlY46GAdh8OagaujAVejAVejlIpdehAQV6j0SRQRp6nKpejAVejAD9IScCD8Oo2OBcCsCCCCCC1wdz4rqbWqqqqqjjvApdehAQklXejjt0lOszIpczj8kV6j1kV6iukqWo2_e1jQ9N0s0O0U1hA0Oacw60Qp0cyz803AV2pEuIY51g410g6M30E2z8Oqqcz8wacz9FEO075YxcKewaqqqqqqrZzGdDoj7w6RjjjjjjjlIsguFSeEVGCCCCCCCHoOaGo2SnwEeL8900005cObrGqowBGjoCbB6jAQozhBRMdhOHWrqW9iAOd5kB1FwUC908egAqOCh89858agkwF1PapOuktE58agkwF1i3kQPseEww0sRTKaN3pp4cH8nS7Gqp2gwXHHGbHHANAsWWITnnlTTnnk64Tmi2g6wUJd4gXk1k2LA5c0303U0idcBtvwcbA6GhwaaIy0Ple8ydfewE1o2w5MeeGOwplhYoA963HHHGJwWGqGq80McB8OBYz8Rgtdtcb8OdxLEEEwaaabGaab4VEnOa3lhhh2kkki555514OltYz2SOdR5RRRttqolT71bXXWGaa86xcTsKCKMRO4z8MB6NhwIxr0MdJ5d1waba8eWSyId0qMQ1ejhgocwd0qgQ1eERM5dWD4c3Ua00k001je-0w820wefBhDLV2hAbF2gKEx92OIy000kwe11wF1i2A58agkwF1i2A58agkEwhAwF0qgkwF1i2A58agkwHc503k2E58agkwF1i2A5hhc209grtcwFAV0dKDyc0GGSwpl8cz9SJw6PjIpllmQ3aF1ApeQsw58agkwF1i2A58agkwF1i2jE1g2z4bPCo5CO5unBRRVunnnBVttunBRRVunnnBVttunBRCCK25vhhhhhg2-gIPYW-LbOWWYLbHHOYKIRVunnnBVttunBRRVunnnBVttunBRTk0EA0mwd0awkQV8cCyCB8iAwvSGMkwFFKWjLyZgPKqQ03WM47Ap8asz91jAp8asz91jAp8asz91jAp8asxV8asz91jAp8asz91jAp8asz91i1d4w9SufOF2LbOWWYLbHHOYKKLbOWWYLbHHOYKKLbOYM0000000000";
    var zSubboss = "5sbk7l00e0ct6m0a7g0fjfi1r1w33311111f00003000d00011101c01000000h00000000v00000010o3210b2UwOCexaBIqY01Jo4iy5ct2lK008x24cwOCgoWg0a52A9mEMm1eQ00p2o9Soq4FzMFzx8pWpsQUzN06hIUEFxR1bFw_hhgFxNl3lh5Mzykzrj0lVuvrvvBi6ctcLnlu6Vj5X9LHGHTshArqo2LbPXrXYGgNzFBWWAMLjziZj6zy9mKG8euPb86o8wC1cYxPU20AZ6PUqg1m3DKulZyo8yGHUgPb86ooxC3AxPU20AZ6PUqg1m2BlUNME0Ppa_ksiArqo2LbNyJLLOF36eCnHGX_0DoPVqKG7PIOO1C6-nVJcGdnwWnccum7cAuy28WoxgUSiZJkgZ8UB8SQM5unDSTTVkxz7jbRRr-sX6hvllvCVBc1n1g7g6aM4B9idllkAFxRASK2kMlgaM9BEptdldiCm5ocAlgGwF1-FzhKSlQwkMNENeKGKRj3eDdK0FxPnKqC58f7DtL1i221y69kRkR9DSFNzRqD66xmtZBsiA6AFzhJMk3i1j36zdHGHwlccWlg8cvHq4eFiZtlyo_pZRJc1nBVZJZ-l8oNQOZtionFNFu2Cb9yj32IAUhcqF7fF1liC5isqvLc6jyU2Q2oU8c2A0l0B5cLSoqg74s8QsjMzn4i6RjyyC7k4KC2hkkk9CkExyI4nA46-8Gowp6K2FGdOewRaolkHLztBtg8c7wzyddldlqKn6eLTyBNdf2agqWCd6A5ZZdT4VRlls2CxiC0zhhhhhhhthhgWiOA3k1ec807a6EQRkR9Do3e5kaUfwQaB4kg06ZYqU2HHFA-FNiGGK1Ypl0wNQqW5cnj9NA100j721wkw2E2sr5Wpc2KAEjMGhNeA5laolsvU2Cn4yCfSjjye0kUEFxRxbF06JgC152C2Vt555555555555545hhhhhhh0Qkkkkkklcbhhhhhhhhhhhhhhh8kkkkkkkkkkkkkkkcxhhhhhhhhhhhhhhhphhhhhhhhhhhnhhgRkkkkkkkkkkkkkkklkkkkkkkkkkklyraaaaaa96yyyyyyyhEEEEEEEEEEEEEEEACyyy1waqaaaa4M-Oqa4A74zoJEtSyyKSCyyyyzzsCyySyyyyyyyySyyyyyyw005ajXj1J42AMfOtHqSIDqi0yDoSugdSZLDdHCeaSuaOtHqSGdFa7dtI58agkQwEFVzCtyCA558atz9F1hi2CyCx1j0wF1ji2yD8StyBam-OWMkYhAXtVtoaqaq6A58agkQwEFSe9SaubLbH1jN6jJTBRwFEFEkGeSCv2pOpFD9D9CCsCu9B86_6cCz8EuVYaTIDMH9SJHqOtHye9Uzyu-XrS-cSKoUH9SadDyArsNUPrpwZKlJVfdrmRAXnksjN74FmrFwtLzecOtH9SJHqOtHCe9UzyvbcSZLzdHCeaVPebS-sSGdFa7ekp8TrVTDsDqSJHKuaOdDye9iATdLrUPqVzyJDyIDqSJGzqXOnqULyIDqOtHqSIDqVzyu8UDGYSZLzdHCeaSuaOtHqSGdHHdtLzecOtH9SJHqOtHCe9UzyuITrS-cSKoUHpUH9SJHqWPucOGtLzecOtH9SKITzdLGepUzyurLrS-cSKoUHpUH9SJHqESJE0";
    var zSnapShot = "5sbk8l00e0ftam0a7g0fj7i0r1w1121f4320d0101c0000h0600v0013o2400b4zglpN8Q5ms000004zglq18QlEsid5oQ4h4h4zhmd5op29CFzMyb6jAUgpmk6L9OYHbOAPXF6NNgqwR1HUDaOILaUo_4s2xG3m6PysLaPcHxfN761JUB4OtQdePBpipTuoUHysHaOwRVenBpulRJi91zywR1F3nNelBpulMDVzz0R1Xzc3jPelBtXu038100H0OMlTu80lBPtws0bKS05RBjodyqLoKGMr4TnBwgwy-8DcOX1BnlYhllwUyGOWOFI6NdnIjjf3hdxn7zbhB4mebi5H1cD1a8Q98BtjvksEV6jR68R566xn7ygJBd7_xjCc2F7FX6RApmhBV2pSGQgMcnh684Ah1n7zbB54mf1b8M3MzfFFUaKf6x8iCzRMFP61ahWuNJp6lApugCtGhLQQq4NNaE9i11L97BRVlapZQPESWGQho7PmVB1Oqu6bhwI5nN0-aGG3NqhMex8o7HKq2FB0MCd50ucPWKI-csl0S1EYrXKLb3Ik-d-ESWG-87PmXB1OquKYZUZNDdthUNUMHz10NAmQQkvbeN8a_G1ZRlk7y_7ao0918222844a31S26MgS25045Wv52Ec6M381gawn40xS2SMbo1g1j10waoAkkkh8E7P0a1sMgO0k2E5R09no4HwwyhR57c2Uww0";
    var zPangolin = "5sbkbl00e0ht7m0a3g0ljgi6r1w1218431111111111111111111111f0000000000000000000000000000d2111110111011111111111111111c0001001101100000000000000000h0060060000000006000000000000v0000001102100010000004000000o2420b008xAaoFQ9kJznfx400x4ch2Cat24FkJznf008h34gFyDgxalamNHw0288wy288wy288wy2c00p29H5cUNV9co4e92C6y2i18yI5C3L1K3m6I8Ti58qy9Pcy10ciO0o3A0Nb80u8OkzA0Pcw6pA0fcAasw6tA0Pcw2Go81p9QQMJldaMRllcfmdQNS6ji5kOoiIelqoJkid5t4zpbj545mwYwuw62QPeBU605cgeC4FGFGFRC6j0FBinJcbQg8Ocz8O4NETdz8Ocz8OcyYD8Psz4sz9OcX82A8kx4qA29N2w1Go81aF0wlAVe0UzAV8Vm8VejBVujAzBVujAVunAV8UHDpejwe8VeielyejAVunAV8VunAVejAVumev9MBdldl8Mcznjljliab7xaCDyg3IMMM5cIShGgpq8FybTMJd0kx92e8Qk9zhAQkk3DnnkTAg0hGg8xagE0aC21JJdc7jjic39kQRRQQznnjjnnjicFakQMtdd8McBjjnnjidttddddtoTF2XAVejAVeie1VejAVejAV9VkDj8QRkR2CbZBtdldl8QnnkR1i4E8Fxs1c60p0a0l0E1g2w0QwA0m0F0CdN400mo84F0qC1ejCR9Mkxjbc3bUKzaHyeaKOu97DcPe9OqYHyIFDDbh0LCepUGuqKOu97HcPepOsKHyIFDDb90000000000";
    var zFlowerDance = "5sbk9l00e0atbm0a7g0fj7i1r1w14102111f10000000d22211111c00040000h00000000v00000000o3310b4zgidmu14h4id18RpM4h4h8Q4zlDwh4h94kAgQh14h4p26eiaoNb0kxAgFDq740VaFD8R1N9jenFif4mkxH3K1P0VaFDbnyRa0GIIJKWhSkRxH2CzlBxK3O8q0QkxjnL8V7aGG3u7sNeQaokQWrxCF5cqE6Acw5cV4eq79lcRLkkzG5t8p0eQ7a3AGCsJkbkU6GOOWZIe3FIrgYWXzHddKa82Cr0kNoPgV6i78OgV3wEsz4MV6i78OgV3AxOcAehB1OIOBI3Aposza3Ap8sxj6EUbEotz92Fx0NAxS4Op1Erq7oPgYhAxSed1Ejq7oOwV6i78OgV2jj0UNk4Cw28wqgAr8b0rmNJ0SsA6PIrgcDoN1Sz8A10a0p0a0m0E180rgrL4r8b0rmNN8ea1AwSJE5geaScRSMpmNIwH1Jr74wUE58a0slAwS0p0cw00";
    var zThisWorld = "5sbk1l1ke01tbm0a7g1ljRi9r1w0110000011111500211142010214441111111111f0200112205000100230001310230000000000000d1111111111111111101101010110021111011111c0000000000000100000010001000000000000000h0500000005000000000000006066000000000000v0001233400400000133000000100143123100000o2220b12121212121234553455121212123455345534553455uvwxzvwxzvwxzvwy3455345534553455EFGHIJKL001323232323234567556789a989a955675567ccddccddwvxywvxywvxywvxy4567456745674567EFKLMNO0000000123412356788679a123412356788679aklmnopqrghitghfuesitesitEFGHEFGHEFGHEFGHzABCDIJK00234567676767fffffff9ghi7jl6kdffffff9g7i7i7jmopopoporqpopopos6767676767676767b000000000p2KM2CcH0RgBllk3llltlll21CK3wE6GGG3GGGwGGGE4q8P4Ad2gYshhhhhhhhhhhhgeyyyyyyyyyyyzoEi5ywv8uNP7ckkkkkkkkkkaogkk000000000000000000001Oar824IGFHGGw-GOGE8dllk5lllAV5ejAkVapx478RGJLwWWGqWGEaGjGJ3lll2lllpehjAUbllkCa87dJIJGGGSsyD9PqGGIAcgoQMJQbblkRRlgClBlgg0006pXUa-GGGSGGG2GGGwzPl1TMtllk7ll1Mdllk8CpXoa2GGGJGGGwGGGE9sRgtY7lll1Rlgs3lll2dCuS2wGGGHqGGEaGGG2vHl1TMtlliC227kF0wR1Mdlli8Ez-CuRh102wGGAhaJGGGwGGGE9YRgtW80oawl0GcM000000xj6lwqEiGGG1GGGKGGG30Tnnnlllnlllnlll1wVHwUa1GGGwWGGEaGGGa8OOgQk93NN2C6555556hhhhhh6yyyyyyyyyyyxj22yyzC8Z2V57ksNhhhhhhhhhhP4ukeoEVzCaaaaaaaaaaeoeC8Tkkkkkh7jjhjjjh3kDwqaaaa8xFFEFFFExqjM555554fjjhjjjh2kzLEEEEExWqqaqqqbWmFxI8a1k0j7CyAagAp6hhAVehAdQg50G0qgkkxScz8EOsD8UI000000000000027EAKxo26IGFHGGx4xqOGBU7lll1lllkQkQQkQN4Ji21sjOzNo-2-0xpuGCKGG4GGGmFwwKb2FyyrBQ7aRkRRlglkDkKSGGG5GGGFEFFxqGGw0000gZJc90Mtllk7lll0Rll1wVHwXUeGGG3GGwU6GGFW8OLsk93NN555555555553WaaaaaaaaaaaaaeEXx_mZhhR7kkkkkkkkkkkkfULyae8UyyyyyyyyyyywcbcRZI5lllvlll1lll1wFGwXUeGGG3GGwU6GHGwMAPSMk5lllrlll1lll1X2CG3LwWGGB844eGG3wl442GAha32jfr1gi850GcM00051MWwFcr2HaH6M25lJnCdw0ayPGV0kmexmhAQihFyejhhhhh4tdd5ddd4dieyyyyyyGCCyCCCyGAs9hhhhh4ddd5ddd5B9qqEe2x8e2xbXXXXXXXPTTTTTTTTF2lxj1Mmll4Jgsteyyyyy8Wqqaqqq8qAc3hhhhh4ddd5ddd4bi60EEEEExWqqaqqq8iBXi21bBCC45cINFCCqpFCCqpFCCqpFCCqpFCCoUCHjejdcQPjejdcQPjdcQPAPjbj32CqpzJTIPjdcQPjdcQPjdcQPjdcQPjdcNFCCqpFCCqpFCCqpFCCqpFCCqpOpznujdcQPjdcQPjdcQPjdcQPjdcQORclMaaa4NyayD8wszKcyyhEMxiCsn8yMAd6Er6NGeNIqFIsMDydz8EUhSdzgZzoSZzojIX2hQp6hA96M58O4h8EjQxP7kp6hAtg7GeEEjRTctNLr6NKr6NECNUgDydz8EUhSdzsSdzsSdxeZIu4p6hKX74rmNI9Stzycz8Of20-4u4kfpzhZcQPjdcQPjdcQPjdcQPjbj22Cqpp3jcthlFCCqpFCCqpFCCqpFCCqpFCCtCmFye9gCb52oN7hjAgehIp4hregAf2QNOeyii5zBqwNYBA0IczlA92iy974kkYhjg6yCxur1gtDdpllClBlmVmll1wyP323xWpxlllcwGGGCgdlllllllj46GGGGGGh0FcSv6chOcKaqbaiF68p4vbtIHOGGGYGGGLaGGGGGGGHOGGGGGGLaL6vacD8OE-gfB6jAhYC4eOLaGGHOGGGYGGGGGGGGLaGGGGGGYGYpYEOYzcmFBNe0NFzMhE31kkAq0HF7geAc7hi5jbzhBcW5XgW1QxHEF8Q1nk6CAd8WwHen6n6t5j5d5cF9kxi6dX8CWr0A9xnVkAb6lAps-HkAkO5891Bh5j80000000aoD9wg183M92iD9u3h0A50a0k0E1gi3N8a0p0cw50cw6g381g381A0E1g2w50a01O0p0a0p0cw50cw6g2w6g2w6g381A0E1A03g2w6g381A0E1g381A0O0p0a0p0cw50a01O0p0a0p0cw50cw6g381g381g381A0E1A06C3ga0pocA75TJwOGOwrodKZI6S3rLr1JwOg3Ogtg3p1AwUK-r1N0Kr1P0dA740VKMXgwYi2w6g381g381A0O0k0O0p0a0k0E1g2w1mo4m3p1NsV0a0oxmk2w6llcGo85pc-4kplasccPggaxyHOsO5j1g8kwk24ki4i84y118fz2o40E1Ap0a0p6g2w6hA0E1g14idzo05ek518m4UoE2k4O1e2phwCuU1UgC30dw2g40S0r05c42ae81N00Yg2x42cz8WzoScz8Sdw56NIr6NAp6hA8yhN74sg781R0eE1I0Xyzy0sg3y0r0dw6M3yae81N01SwE1D0Og9OruS3aHa1JwSXSMrodKR846ZI74w7AwWw6O391PtZS1ixASH1Rweo1Rweo1RlxSwr01YS2w6O391NtFgnMcK-a1NwdKZI6S3rLMPr1N81V8a0p8cA75TJwqgcdvum3z0spuS3r0FwMTrajaTs1NE1V8fa0tTIpgeWHtSet1NEdKUFCdI6rIsjeQ3sOapwvewVw75wOgtXLBoe85Poeo1IwUw2C3btwWCkhk1ZU2w7xtNB0YqHuWf3wsq1EXe5O6WBjx0gSClc43IGCD23o6XKntGg05YrKXKZW3tTtTtQ6XKk0ulgmkB8hBTNTtLt6pCpChLtLtSZQrTrTtLt6ZSns3kUhbI6nsrtYrQcpdS6k4P0cCoUTsKUVCo3PKMVinqcK85jgcGGwqgE28IZnsu7_TTErThCpCpArTrTtLt6ZSZTrThLtBT0_aX0Wk8dSxf6pPTMQwooCeKS6cAP2D23KY1r_7t6pCsPYsjaA21K883kUAB51GrJKs1lVU0000000000000000000000";
    var zCrashWrath = "5sbk2l03e0pt6m0a7g0sjgi4r1w12111111211111211111f00002000300520000000d01000011010111011011c00100000000000000000h00066600606600000000v00000001200200120200o2300b28p2C6gFzE6g04F0004FkFzhx4cxj38kNQ38NyB00RPnds-4gy6coO88xpw08wy2DasFODiEo0y48gx24gxja48gx248gx7gAp2oxt84a1Hwo6CGJ8baqGXaqGV1cao2K0JwbU20AU20w820BiXIeO5ci0Dg2w4xaMwqGMk0FG8Dk2w5ltoqGp4d0qakx8fc1gA16npmy9elmy1ejN6jnNd8jkMhakMg8VzaHHXDGGHcD9OcyD8fe1g2-kx0RlwE1jkheE50aGWMRkO8q0QkV0Fw638Okx8ieF9yPR69V6hApmgCh6hP5ltBJTfyC3RYB8i4zynkYNyuhAp6lAthAsNlnprtPWFBe8y36gC4F1r6gyh2oOL8fcp7cYjj9ibUngc30MddltBdltBdlsxj0lM5I1v0g4L0g410g3F2_89yEi4x8i4xT1w5c0LApagA97NiUB82cjOcz8OIxcyczCaGXbrKv00ty2dkwwN2ggA4912ggp188i22gi6jlumYO3Y200w08020CGWqH0FGLbupx-x88i24wwC6x8i4x838gAH2OQdbMYMh1c4gj144Mh1c4gj144Mh1c4gaog20q0y58gC1g2gBl840gelm2w5di8Ak2fa1g2GKIdl8p4d0lj4JcbsD9MxAUbycGPsOkg8OG-9F2KlNujAVtBCPBlkp6hAp5miEup1g2gIx0RlwE1jlAk2fa1g2GKIdl8p4d0lj19F6iA92hkMg4Ggioa0l0E3AllSmTs-ehjlnpqCbSOA16vAp6hBp6hR7cllSmTrUFBd28cp7AF1r6gyh2oOL8fcp7cYjj9iaZ_8Okx8icA1j10A4C2w5ga0V5ltBJSuap4tNAtllIp7x7zLeYNAsPNddRUXT4p77nr6hP7fswsNAsPnIp7csOX46GAbA468i238912ggA49118939GLbuL0w06go04010jltdlwkRnBLnEcMA4912ggYk92gA90qXbrHU20w820AU20w820N42_X_L-00w080200w080200w080200U00w01i4yk1g2gBogdloa0kR8yhhajxY6Cbkx8i4xt8i4x8i4wCgw382qos8wNA9ElaooRXio-TVncp7e9zoywg0QOxeEO4MIwJz8h8zG-uVz8VDyqrF4tDyczxeHoOeoVlV1Vz8VDyqpi159MTxUzCczDHJz8WzHKguoOepHSczCepfACVz8VkwJz8VzBfA7CczCqZz8VzChj5OgJAbHF2--------YrXXXXXXXZwM2CUsE0000aswdGsg05p-FipeVyD21cRTCkFwwl8nTO8mD4gxvyC1ig79wwVuRDYTKrn5ozK0SJHsOZLdSITyZPqUHdT0skeo39OMpek39Owpek39Owpek39Owp8EwtN41jAp5dehAkQV6hjjAp5dehAkQV6hjjAp5eiaD4h0feYlnNeRIRreRIRreRIRreRIRreRIRreRIRraY0pND5SsjJrdmPJrdmOFN0VygDplpmlmkHN2wTgZrP-vy6nwnxuRJpmvBwGOIHdOYTbPtLqSIHdOMrgVeXBpKnCXuRJpmrBwG0FwFAAxjBD4wpYFVTdXLsSAMqPtM6RJrCnJVKRCYnKrn5pKU3yBkUwtXyGKbPubTJHCIXs1JrmVBXurJpL5XCRNmrK0UE00000";
    var zBrodyquest = "5sbkbl1qe00tam0a7g1qj_i9r1w1233323331813014122142531111101111110111f0030000030000200000030300000020000000000d1111313110311111111111101111111111111111c0002220000100000000000000000000000000000h0000000040600000000020000000000000000000v0000000000000100000000000000010110000000o4410bvw000000009cCj9AOpc00000000010Mwk0742g8Iod73O1400a5j1AQre7jNZ0xh8QylcDkaBqNqJmHgMEkJnbS35APqdmPtMVteTzRYn0fw000vfDPU610wg83Q4321gMsg952Nw0sf04298CkaEka52Jn5P1AQm6CPzM0tf8A2ZwNpJ6HpKxgEkbxOWtG5axiCjFAWpeCjGBqFeIp0084410wgg42110g84410wgg42110g84410wgg42110g84410wgg42110g84410wgg42110g8441f7zNUmc6yi148521gwk8521hUsu572004210zhEQq10wg884210g84210wg84210wwg8431wMoc631wg842210wg4210z1wMoc631wMoc60wg84c631Ug842ywMoce31wMswh32h00p315O6CcI60j4jMgujAxGOIKHaOwKpC1Xjliadmphz2pTcTpGhHqYI8kNNF6-5Hj3KLaOGIDbwsDcHPaqwFEYrar1RMz8QR9D_5epL4kUUApCB10aDcdaGD443dm1USrp2FPzm8HNzN9ixcvwlilcD9lRP1nppc4zi4S-ngc3lD1KctYDm5j35QkkNCtCd3dA1Yy6kxEkUwxw0FPm3j8leE84djC5HhF2AyoyrCch1xprFzyTtFwm2w2oMEp7yIWFX6XKXGX36WgMJlmplxAMl0KpLVKll1GGwR1tlCtbt1zYoSt3OsQfx8a0apohgFNBG0GpocGUU87zUhkUMUBjgMAIyIjO4sD8JcuxGqA10syFn310E5ob0aoo86Odc-f6JJoUMMg8Bd7HyuaUysAvceC6jITrmSlzFzCVmplllleC65Bo0qgGioyqoMujCxi1A6NIX8cHpOWIHa21A4184E5RCopC0IN653wp4wB2OIoCg30y7je11D-k6ntcc9dgpQMOkHSOItccGG1tcd0GH05U0k000s09I1w1u0SVOYyGH1AllV5VdnoaXKYyWHg0HyqLbOXLrDyrK-4cCHPbObKWXK-dH0p5ntkVCVARtz9Fztva9CzVkBCplBgWaqIPcGPcBCdBxG10A5ePi7gwb0bQ9d2I2mgwwow1pxj8a919wiKMq0aHBM7I841h06bw0yM40MYdBtaoU6jljBg8uMs2i4w8RsI41B0C92Km290kPUVzGcz8OcwqCm12pAaooA4eEWzGcz8Ocwqp40kNM0MaYpo2cyB90FNBRfcGoo5x7UM2A7ck9pMUUMN81DKwtnjkd8y260-k3Ocwaq62A374sgf9O5z3zz3ypjfxj31GCHCKoOIwehA3lNWNUF46eGUwfdQQXDx05ecJfNHefuzRakjaCutg-IFKFW6OsL9HFOYCIt5dtdtdldZdldldlgRsuce9FCCqpOqWqGkMWGOL65zkUS2CJGGDHYSQqh42lUPUHSle8bpjoqusF0fGAxokUOMcOc00Ocw78kUMU2kEwAaOwla452xH7uxPxw0E9xTrUPUPUgIosostwPN5loZzfO5stmPEhkUOApj6CasPAABcQO5eV9xM6r0MO0tf1kVFr42jJFcGD76q2O7B57B6hAp56hAkp6hA9DMny5Q_6eoVz8Ocyz8Oacxjb2xcK4Eo2bT8KthhR6hAp56hAkp7x6EQLM6yz8kVNU2SadgODGspsjAGsoq27593hP4YPBlNndlCDUWDaFVxdnBce4MEOcz8Ocz8rUnaCm5DxLxaqfe0VeliToM3qOI0OsHL87piCn2ocp6hAp6MCNYYxgOuVkMOqO-ppxRrjbCyherVP9jQ70tjrnNdeT0rBBCPiBjz31LqTGsjN6CD4p2Bdcz8VenjBpioRaosl0aYoYmpaD64xGC65HlecI81dfgXxjjNGO4MM8j9wkQshViAdfdcMMVYoEGkwwpkOMEwmFBSC28Cvkzrjjtj5e9O0WpFCCqpFCCqpBlWpFCCqpFCCqpx4XkEjEwljE8m03em01ReojBMx2Y26gwwx9zwbOa18wM49mq0q81GFCCqpHKTs_SE2hgp09h1108Qxm9chdcof9Mgao4wE1AxGSIKHaOEFyM6wd15cq0Q1Oa0V0kx83g6wzg5cuo6Ic24aL6e2w2Fxwm5jjMd5N5JczG0gFxMFzxjIxAgGq60y7CaqGtE8lecK4IAaCu1ouUVOCNjb2L9VE8uq3PC8xN9j70h0Fxy8wWDq1BxjfzclUMM8QmhvU0xA0VndwMcfclMlk7BkMf08uVF3IkRkXguW1JZo1jb0Dywsq6xcq-F3u6YeNjB1OsEoiWK7emFSrg7pFVQ0rgkwOtQaCu10f20i05cKem4o6ggG84E61pC6pwbchxgU6h89gIH69A0M8xQPwgp_B0AA0ujf9Bcc16haOA3k6GEcC6h2C55em6IaoYkQS12FNBYgUyFxx9aoocGog4Z8Cc9JVPB6UqgQ1E3ghjjtA1FHKxSZKIuY58mYIeiddB20ML3Tk3pltlkFNB-3UjvjkCdek4CIosq60P1sFR1wMM8qgQm6Y8UqhIFGFG3o6MdEgQn1GGG39iddldkydWKm21o4N8lOMi80Cv2gAtpAp6hALkOM8j8w2C6913GeEWD8Ocz9uFww4wq0VOA210qsB4i0FEs8wNN74fOczCgF08wM8dgv20V6Q3aOh7C02o44c8A0bSsAuQiGOJD96nzemFO5_MILEF1NPCdKXD1EOXLbTgpKXKx6Fwwq6wfxEcQdgq0QpgcH94nyL7cD9WE6SV2oHCq6zNGwYLzwpPAdKW4HScn1b9PbEZ-lSA5PeClaGEellllq80E7IWXLGrGOYAwiN3ntcB_a9xVGGFB8fepBl2YywVKX3FKH2Y0eM201m1BwHKYg0HbCX0U0ntI0bHaCMr4RuNtlwS9KLb1Nv4jCpocyXLyWHI74lmnmldwS9GZCiZ-69llu5llllBlmi47Blmllllllkn0s3GGIGGGGIGGXgH0_6XKYKXKKXKKXIKbmydnlTntSO4GtKHLrKXG1kLrD9KXHKXOVSrKWXKOXywlRTtRTtF2hJltXdTtoitxHKXHKX3BTtRTtBVUbqGHGGGGGOGH90XaGHY3w0gE00a002w00E008IK5ZllllegIjmNdrllMxggndTtM0n1T0wxn0wxn0y9gnyFg7yFBuz6gcbjuIrc6wpM0mo1HwF0b0ROYj0cc6dgf1aBMO0o0bz1o0FQP2cxk5obcc4iPmg1h87805Pj0IoQTc5xiiswm9l585KmP0iA2g4ASgf0-iaGo1jNwm83oy3OyhmK761qy1dC3fBvcchHY7MepaCo39Dc1CpwcCsM3SbtTrVzCS65rVzyTtSnyZSMeoTpzy9llIPC0TcPqGJzc31RtTvn_ovlTtBuOGHJ0P6_SgAPJXEOge-iAWV2ll1i4DkF3uQr_43uPHKX2d1H2YpnIqMMlTEibK-CcgdN4GGU8K32UKXLzKXyGHwxUc7yXKMZwS65TtTpuaTuUyXLaGwYKXLcPcOXK-BwZYqGKdTuUKXLzKXDKXANxV6ILeXmYTtTOMxxtllstTtNtTv7tT5ln7tTsntTNTtRTtTgYzVglYOwm3BvpzbyIx9B80o2C205PL_Y1txeoGuoZEQpwvBtTpnP34Y70Mepb09EcztQ6rKwOdTgfoKpCfCeroogrSrtTxnIqqhRP6KXGGwKpQODBlmMDX27dOWKF40k7BlAJRTqpu2kaXJSBebJkfcHlBlliGoqAHGEnAg7dSgpnlSnAF2m8qXFACzR4MYRlsPal4yxJSGG8eo1Pl4dRRtBV3MhvyXGGG3PeRBlkM2m6OqGEnAc6A2RLhSTlLi4ne358ngFyM6wzg6wd6g6w8nwgD000s1aGyi036Y01w9xpd6ntnC4C0z4xM1l12d0gzWgkgKx5iV92JQd1m2gGGGHDcXM1aMgHHYeZwskhl0-c1E8Q1E3hg6waoY1E2FzzhylRgQPMY0wbwM8q0V6jpof8OGU8qoOB50kPEOa0Qk1Oa2UNkkQkQkFCI6hthjhjgmnELEFEFNr8y2yCyCwJZ5Z5d5euHPl1470aYsQkOa2DsIM5VgEKEFEFVnMwwo5ck61wo4qrxzx1QBEE3s6Cwd50v2qiUJh4l5d5fa_cgdA30M427sEE3N6hg6ywegFNBgc7okUwED83N6hg6-Aehg7aS9O0X6hg6ywehN4Dkyk0OPmnxTaaWaqauRY8o61X1wo61bzngyygdj6121Ir14K0Qp0Z21Ir140000000002qg1s1c231A680000000L03D0w0lwpoaXL40aOVKMe05Tr02WOFI6NdnInlodyrHOMsnN4VCm38KXUKGX1N5lBRBjodyqLpA000000000000000000000lc43wF211OgV8sAei793Ax3AEy1Xi850Uzzeah101NotEejNuRNo0Ym7q3AEO18Xu8ErKlmTBlJVKXEhM52gIp2g4kr6NIkr6NhhIkp6NIk3Sadz8SadzoSadzoEEiBzrYhB-s1Aqoyf7cNePaSYDrLKGebUDyXOJL9SXUGwv5YjNtVmTAXtYlhNqkD8kPhBW5nIxaHahaVe6u2w54izwzkEGvX_3WYg_3sDrLNGzy-9UKYHrOtK-aE2FwwnTfaa850Uzy-ah101NotEejNSRCxSYDqVE74srNnewUJ6iQecOGS-qULD01ULzeb3Jts3qVM75xSwVf5wSKb0fNLuYvZA9kYnNn5TVlhNv4YnulJVeTv5k1YbYpVTNE74snNnzEebYH_zcGJLCKbPh-dXfzSpmTAXt-dksmB1SQ8Fm08pSkoBbW38jqiAF4vifz_zupmTAXtFgZc1noaim83acBEu7vURmkw000000000000000000000000000000000000000";
    var zHexagon = "5sbk8l00e0Nt5m0a7g0Njni4r1w31331381813831311111f00000000000300000000d01111110111101010011c00000000000000000000h11110101001010500000v00000300001000000200o2220b248h248p1AaqZXEiFiSboVPDesVY9MDakGlJmRrlI000x48gx248xh248W49kBil9kBilfw-4oNBeAWjFew0x24gx26cgOhakFzEgBilboJySbqVPDesVPUfw-3U0000wx248gB889gx24MgxasVQ7etaBakJoiIoNz6cqgp2yT58a4MUOcz8Ocz8Ocz8Ocz8Ocz8Ocz8Ocz81hBpS52gs9NND4sg8aANYh0zpStzpStzpStzpStzpStzsUFj7zN1h33Qgsnri2zGuESqqgkreNIQQwEStztGVTut46Tri2zCgpdd8acA6jji2z91CRs4JG8sscUwXdnxwBYZ864w8O0rv5RVuNN6g3rUKLbSe8O0s4w8yIAQMBq1YEQCBaVxj1xc2eo1Ntttv4shN0ebHHHUzye81NEbHsPxr84xS6F1ha-gOIGy6lBkgOIGxj5pg9yhMlGostTNoe8ULyXUI74snNtYm3yebUKNUoMshMiYkzNoe8ULyXUI74snNtYm3yebUKNUn1N719NSsm3yebUK-b1N75GoktTNoe8ULCX5nz728XYEh1z2b9kOMESdz9OtzoScD9jf1j70y4spsSiOIGHaOGIPdxNkwM_h5zG96WDyJzoFGFSwV5dle1xPrbqhsNUoKUFP3yiaYw8rtSTtTeXoSaWXKJTrtTsXwV5ttTmXHcfsRgx8gWcgA4ygAeVCpC3JctYlIjsygAdKXrKXDtIr5ttTmXJKXKtMsyKKXHtTzsRgx8gKpMV2g6C4iiioORgcCCEei3aFG3AwOEyH3AwNsraYOH9i2HaFSGIDqOGtGH9GkUQyaf8FSGwpddgsA6ljk791BkRplgcAWrIGH9UHaFSGICGGDaGOqHr0V8cQXqYSH9h2HaF3IVmRBkR0SIDqVhJM90eqC72o41Odw56hI1Odw56hI1Odw4FAr0szos6wr6g78S0kp6M78S0kp6M78S0gehI1Odwi4oiC76IygOIGy6lBkgOIGwd8jAh8Ocz8Ocz8Ocz8Ocz8OcwQUVrg9ylBk3aOG1Bpl0OIGwpmlgcHaE6lBk3a7aE6lBk3aOG1Bpl0OIGwpmlgcHaE6lBk3a42opKEwJ0kwK5JrgtEmRJ4t61034edpawBgkx13ORJUGp5j8Gp5j8Gp5j8Gp4tcwV9IGwpmlgcHaE6lBk3aOG1Bpl0OIGwphVl0MDOG1Bpl0OIGwpmlgcHaE6lBk3aOG1B7Bk3aOG1Bpl0OIGwpmlgcHaE6lBk32zaE651Vl0MAOG1Bpl0OIGwpmlgcHaE6lBkw2oK_JS3e001uz6B4NRGGkMFSJFcqIDyuaSKaOu2eiNrqOlUGT5GGu9SJHyIDyuaSKaOucGPdH9nzHsWGD9GOGGsCHaGFOqIGGBsCHaG1AQRplgcCCHaG1AGsqhlfSTJUehcGwpmlgcHaE6lBk3aOG1Bpl0MyOG1x4-lgcHaE6lBk3aOG1Bpl0OIGwpmlgcLaE6o000FF_aqut2hk2j2B84ooxj7Ed0q0Q1E3g5ce20xO0Q1E3g6wd0sw2o42ka8fm0Jh0B82wX58aJDq3IkwGSie2Ot0Zq2xc75cef4tI56TJTJwESZKZI56TJSeS2zrTQdI56TJTJwESZKZI56TJSeIEadZi2y3hSMkruTuS2zrSXSMkruToWPF13pf1dM5KTNCjND6pJYpAYpNCrv6pf6spwwjbLK4MUOcz8SczoOcz8SczoOcz8kUNUjOdz8O1Oe0czoOcz8SczoOcz8SczoOcx660u8Uzycz846TIr5RehIp6NjjAr6hIkQV7cpAr5J8V76XRclQRpejjljlAVddlfpxqUf4shtietKrRdRdmjAQRkRpejjljNSXN740Edj10Z8mcz8Ocz8Ocz8Ocz8Ocz8t8gzEj4z8Ocz8Ocz8Ocz8M78M1Wcz8Ocz8Ocz8Ocz8OcD8OBW21s142Gaa0V8cCyywei39EEE8Rk00000ao70i43N86jB0OsE6jB0OsE6jB0OsE6ipzsjp00A0fwdR4SxUi1M7B0OsE6jB0OsE6jB0OsFM2OYsxqCAz854Pzufe0WT4gpek39Owpek39OwpfxSYF4MRMYs3zsU6jB0OsE6jB0OsE6jNdVNIzNEedqo47v6lJwOtKUOJI6jJT6lJwOtKUOxSMpbc2_hwzdLz0pf6pN6rv60OucPycSZKZyZLrLoLaH8Euc1Nzc7cUzdLz0pf6pN6rv60OucPycSSC21tVjn15xGJlcmZz8j1x86dzyczye8Se8Oe8YoSe8Oe8Vwut1Pei39Ogpei39Ogpei39Ogpei3979h0Dyczr1NelIYhArge9OJDyczq1NelIYhArge97aSu8OdM74VmPN6hJ0UDaSu8OdE74Vjw5BYV2Rd96g00000000";
    var zBowser8bit = "5sbk7l01e0ct8m0a5g0fjni2r1w131221011011f000000000000d111111111111c000001000000h000000000000v000100000000o3310b28p2y6gNQ9kI00y6gExAct2lb008xy8JwyCexaw04coNz6coNz6g00p2dkaoYwG1a0F1a9xVxd0EwgdGtUXq1E28kpehAYXIQW5AXePBfaSczlsD4cNn3zbGK8ULyYgOIBVmoFPx_-_N6jApf6rdeVAr6PAf9OshOIgPYhOIToPdDeNb4IBVCpyelDozyekCnL48yNIO3VHycw4xPa8QYjN6hR6NI8wNF1IfKJHoOuVXDyu8U_0sHpFWzzdxVehAp6pNfcYjN6g78O0o5AddfnOdiV31IpmXIpmPwm154i0qitMw30d2S0pegk0000001j72i2zaOcD8Mb8N3cj33h0zzswrkXNSQ3g4gpOcD8V4kgwpQryK2LuNdU5Ip6hAqxBaUsptlN735M7yelAL8MdjD3pMd0UD8Oszwh4mt6UHwHRj29UxympBoxye8VmrIp-FUByC9VbMEPIiOIgN74sFcLuo1R86XlcYaBcIaRdb1U78esVkQf4PQld75Q7dZPJYaYdjhYUC-WFFY6eyj7B460V6g38O2w000000aoY3wxFEq6mgdob0kwF0Cnm19xTBwkNUXEU8280kXei1j7DId46e8U4OsHoem2M5mVAwJ1s2HoTYz8eY28JzbQyOglpSrw6u1eJ5we408w1i2A58ewwcLysI1BwnwAMgenBwE1m3pieq2610wAMkXem3haOZAVU4QucLgI3P-4dTwiqsqGh5C2E3g3Fkhf77E-70X1VU58aglpek2U7sFD00h9N6jMj-kWlrS3YhweRwKM000000kM00kk0EE1hg2yw550aa0kk0EasAk18g46lgcE6Q79i8x82dw1OgkV6hP86lIp5gasz8SqOJz8dgsA6i1aia0y1CQ6I2k4XRerehac4Q0000000000";
    var zCaveGrasstown = "5sbkbl08e0nt8m0a7g0wjsi3r1w3111823112141111f0000052010010000d0111111121111111c0000000000100000h0000000000000000v0000112020120000o3130b288O5ct2kamNHDMv6kWlJv6trVQ0h1ucwOCep2l9moVA9kBr6IqNH70000000QFyCexawy6g000mNr5ImM0gx248h38kNQ7gcxj7gt2BGmFqBwp2omaoswFh1A5ei21Osz91jB0j7DoN78N14mcyhFapZr7ckXmMA5lihRr2gtlsQEAwgsHyeWFQnoXGHKJzKGKqXwxY661TYDMDNDzKaUDyueXzo1g0xVzDJDD-9FM6GTyqsQEyhNZ-RAYjPf5YlNf4YoEyyhND47CuUU_yuEUzyu9Uzye91IEAM3C07wz1b90O2D910VehAwFOwtPIozAowF0wNAid9XHoVyDqSdGHqSdGHqlwhg8elN75kWdIrlmRIrlmRN13ONge_AYjRf7slNf4YsECyggYNPTcY_Nde0RmYjjCDOzz-9VDCufUDyubUHyu9UNh90zD3jR7n-kZhN74YjN74sjNf4u47xg4JUi2D91pAV6i2Da1TeNyehy7B6h8QDGL2eEFSJzqGSJzqGSL63BshNlezr6RlJr6RlJsggYIk3LVf4ZPNT5sjNf7u44fcsZPffYjjwdlL4QVFXzz-9VDCufUDyubUHyu9UPKesdfktvUPR74sjNaqu9OxRf8fxetmkSfGAO4wrewocUyCLTRY2lcI878Y9jhWx85cL6osotODysGF8S3Taosi75sTCSU4s1OkxoVxjnNEh5yFBQw3uhAV6jApehAV6jApehyZOc5OcD8Osz9OcD8OkNUj3mh1z0sz9ObP78ehAV6jApehAV6jApeg2Ro3ApehAV6jApehAV6jA0JejApehAV6jApehI93iA5uNAV6jAfJ66FFFFFFFFFFFFFFsLvjjjjjjjjbgRtsJ3KKKCCCCCCCCCCoowC287c4gkQQQQQQQQQQQQQKSSCCCCCCCCCCCCo8wtttdddddaCm4CFxxhy6jwbSouCCCCCCK7FFFFFFsL3QQQQQQOYfjjjjjiWWWqqqqqqWWqqqp2CZTU2p6jApehAV6jAthUXAp6hw6jwmk0000000kQZq0LHczn8Opj71jhUSHX3lprmm8FmCP7CsCsCsCsCsCsCsCsCsCsCsCsCsCsCjw2ejejejejejejejejejejejejejejejdjga0C6xiCpgsCBcnbatH9FHKi7oFP0V4z8OddltddBJddRZdc3tz9FM79FM79FM39FM79GOYCDcOqsT9FJRYz8iczjlppjrtjlpv0QSSQQSTkQTllSmJXo_pJiW-JMDSz8mCFPnVelG8agkw000000008kgf0A10cywd0cw6hg6w6g38E3g381Ak4d0cw6hg6w6g38E3g381Ap0rMlQQQ6A6k18iICDq1BpeRJkXgcE6RAQXg74k7gsI6ntDb1KwUT9FSwpmjJrleQ3a1JpdeRhhhjhhgqgpgdH9FSwpmjJrleQ3a1JpdeQ3ztgLgSyQ3B0Q872mjjJ0OIDqSGtE6k3qOqtyyGx86qaa3AwSwslAQXgcH9SJGDq1B0SICDq1IV8cAV8dE6RAQXgcH9SJGDq1B0SICDq1BpeRJkD40rujAXuRJrmRJrmQ3qOtHqSJHqSJHqeS39OsDqSJHqSJHqSwrmjAXmRJrn5rmRADywpejAXmRJrn5rmRAYk39UCz9UHbLHOZHvKSM000000000";
    var zCrypt32 = "5sbk1l00e0Ot8a7g0OjJi7r0w14111111111411116211111111111111f00000000330003331100000000000000d11111111111110102111111111111111c01000000000220100000000000000000h60000000000100000600000000000000v02000000210010111100000000000000o3300b0000EEEB123412356789wxabcdghijklm0GnopppvqrstqrsDC00v00EEEAtuxy123456789abcdeghwHIJijklmzzznFGDCpqrsB0xxxzEEED121q121345678989bcefghijklmnopwpArstursrvG0vtvxuuus1111111e43435656564389aaaad1euuur11111111y0p2Ut5ceAk2cH8j7hSl442cD8N78P1Sc_9Os5NjcOsTdOYDaNbfOhx-8OAj8kUNX7R3GcP8Osz97GcP9OsL9OIBcLbWqxSZD9OsP9OIDrIFG5Cnj2PhXomqC0MU4Kc0MlT8I4wM3JTyi-Tu0I0WwMoEL1HINZQ6j8ZIfvkG894aspswrcz8EwNAkkkQSQQzrlaa884p6hBtnBQRMtl5lRRJBs4c1hhIp6hAshAkgl54xhl2kkid5wQQkr6hAp6hAkQkp6hNCpAViF0Y5ee7d0D51BF131SX1hv88qaaaMQkk0fnFBOCuzyiqfeja3wm8Rozycwf9cywhyay2924X4gu4sky96jAoxSAe0itf5VD4pKgFNBw0p6ThnjpjidLx6syp6hRunP6nApehAzIpujBpujlIpehAV6_IX6kaqAM8EA51Ykquweq2FNDNUcCKKA5lgW3g1c-wr5mThly0a9fdlC6bP4ipjz2ss2skmVxzIde8Bjn6o2yTIczol5dGGOXKWXKWXKU3S0raCIKWKKXKKXIv5550z5czOhSl442cD8Psz4xScjOsD1cjPcDdPsL9OIiPYAovycF4O5ecuNZgWzcOcD8OhWzcOsDbOsH9jbO-CFmovHxjzNP09NhrC6aLgtP0kkZxAb0EE6KXKKXKKXJenDl0D8niD0pbsLwpaX4ipXVOgucnUzIde8Bjn6o2y_8zol5dGGOXKWXKWXK_bDl3V5QyBE6SUxy4Q8R3u02Ce6C6DAVe2pu2pe2VKnAVm9o7AGP3Jly9cFNWV84UEJP35mFN4GqUP0kmZxAj2EFJlmntTntTntSDbPG0jAbpjwcxK5ccOAki38aoV5GCjAUdAVmiCmz8O4wHcd1woyjastKm1eabsMMRGshaCKcM55Lop3WyCRlptTttTttTs1X0dBjmntnntTntSvyRgtkFlbSlRRmRBPjlMY2FjhZI002kO-i2V50xcs14OepAp6rerVzCeoVOCOq-qVzC-oVSgHDtj3B4icCP8OIzqX7PY6Nr1InMuVq4KwEi3JJJJJJCCWWWWWSSSSSSVFKKKKKJJJJJJCqS2wHoaSSSSSSVxwE63wEaO1JAGWVm2HwEa3JJJJJJKoEa1wUa1JJJJJJIIIIIi14PrrrrsRncpzhjj2zaGIz9-Iz9GIz9iiOcGGOcyAIHaGIxsNb7IaaF9cqe9U5PcLbKYL1krNr9GYLaKIzaGIxmosWN4CsCsCsCsCsCsCsCsCsysysCqpFCCo3qXmzYCsCsCsCsCsCsCncep1shaGIGGOGHaA7aGIGGOGFncKXOGGFSGqGnCGGHqGG9FP2GGS9Fq4AGGGGGGGF7dGGE2AGvMQMN248gB0Qkkk1EEER976jhQqV3p2hKjbgADHIJjg_VBcuu0JP0TFAqtTqOID9OAh8OKauyCDyJH0ciMfdkgg8O-bZc4xLFwqqo2GGmIHHFFBWGGqWqGqLxGFaGGG-GGlKHFFKGGGFFApBGG5C6iJMkEib08NhbcaY3Jm3oDySMdcQPjasQewcuP6i2689zw3Sp6hChT4w0QwpMofaKoCaeC5vuiczdGC21qod9wi2LMA2oTZRTZtkS-dhn9Oguu1UAfafaAx9jMyC7a8ApdShBp6RPKc63oJwSbUef2aa16ap72eOEwwhAV6tAoyeNyCjAV-apCjCVKnAVm9p-ipEpQC2NKIqt1BcMJ9Ko0xfULkslN6jAoxV9zA-4py9AasoWeWxR6pApehAzT6pAVenAVmjTAzjkbccMfoyhak9BK416a9pxkQYhf5m3y9VFKUysyqpFCkX9D9CCqp7LQh8WcBM0thaojxshNd0Uyun6Uz8EEjCxQ1PxA8EA6gkNO3kYD9Mn9OIBcJ6hFG7bhg8Okj8kUNWPk5442cP8Osz96kYEixcJMM8NhaojyshNd0Uyun6Uz8EEEOcyywrv6cjO4NQdDMz9OchOci7oNj9Os5NjcOsTdOYDaNbfOjFIFMb0tz0sxjzgU093H0EyAhyqya96hR-8thBV6jAp8X6nAVmnARr6jApehG6PIpg6CnOoYyj3lMx1G-40JocY1X-ubvPMr-ubvPM7LVUJ_f1jAUMUgoMogoMoeu8UfAVejAVejz9w-jAVejAV9UJw-jAVejAVecu3VejAVejADy-46jAV-vDV-9UfAVejAVeiucS46jAVejAVeaUfAVejAVeiuu38EE38kkkow38EEEEEN01MgcyywdB5560wOaa8eyz80sy38EE3hnhhC0OaacM4A0ZLoEER78EEER38EEAaacwXYyyzoObaac_8EEEPYzvn388gx2Ad5550qaa3Tgp550p6yyz91Akk1IEEEf91Akk1GEEEOgp550qGaa3N71ID9Os8YT9Ps8sD9OsD9OjPcT9OsDcPs7NwOsD9NwMwOsAYXfOsD9OsD9OYL9OsD9OsAYTdOsD9OsD9PI_9OsD9OsAYlMv9OsD9OsD631YD9Nr1YkMsYqI8sD9OsD9OsoI8IDfOsD9OjN71YD9OsD9Osoc7OsD9OsBC6ikucoa0n0E180E1vIkkk7wEac2PKa1y8a0i6PGhGoo00VguY6yyywd551WOYobls61jAUMofBVubUg7H7EUJlMs6Hoebm31M7LVUJ_f1LVUJ_f0u_DyTYY6_DyTYY1X-ubvPMkVece46nBV-uu_LyTsQ5ejDV-c646c63DMwem7x26yyywd551UO4q0p2C407gew6gdxawagkp1o-a8Q0j2zCIz8Ocz8j1yyw-a7ofD0Qkk9O9Wc0fi0sEfi0d556FocZMtwZMd5550qaa0dj32p4k238000FM8u1809c18284X0ebLyMruToapSMsnN0ebLyMroXtwPZM6iB1twOJI6jNtwOJI6jNtwOJKywubI6SFwwTAYTocHrOubLbHVA2cePIklrmhif6o3aVP9WKMpmTAYnocHrOubI6lPuhgfdS7q3Bk3ypSwXl1OwVlrcQPJshgf5k7q3Bk3ypSwXl1OwVlkPjekwd0Xl0VTbI7dQ7aGGwplpl0FDCwu5YM3yXUI6SeToapkMgbOGFA7kPJrlkO2CsHaGCgkPPl50Vl0FDqOGFA74PJrlkPNmlioBr5J7dTNmQPnoQO2Cv6YGGp1IPJrlkO2CsHaGCgrcYlhgeRgapUHaGCgsjeRJlj8apOIGGp1jaod8iEieToapUHaGCgsPeRJljfmVlu5r5t7dTNmQPnoQO2CurOGFA6PeRJljf6plsRIlQsTv5pjac5Sej8fbKt0y1eM3yXUI6TJS2CtI75Yg3yXUJ2rp7rI76sm3Ctw75TNodLrI5cXoebUw75TNo4gH00000001Owu4FsnwcOJA6pCTwcOJA6pCnUln7WB9mTPPB07CwpKstMcOJA6pCTwcOJA6pCnPlstLdq3DF1pgYQ3dPe1NL92nUqFwwpAYNRJXmTUnv4PR7dGoc5XB3R0esPMPgpBr8cPdL0pBr8cPcLKGUTuWVDv3sGxWw6rCo3DtVLLuIOuoWSZHr1RKZpNDmp8YM3DrOMpKYTNGoCpfc0VSYI6rLdYrPCifc0XSYI7mXRveZVAYM38O0p6g38Ocywksg73a00000000";
    var z3DGalax = "5sbk1l1Ae0ntam0a2g1_j_i3r1w0111014122220011f3000000003000000d1011011101011111c0201000000000000h0000101150100000v1000100101241022o3300b2xwoga61x0Eo642xwoga61x0Eo642xwoga5uf7HRY-3y18Em0000Uwia5w000od641U00063hx0u0000Uwe863hx0yi9B2FoKo8AypgGmbC6xAQr7w001aCjG5bFGSiFAGpKUrGRyRsLocmjd2yhF1gIm531N0Ac742gMsg931N0Ac742gMsg9330OYcc3bMP0gN3c134cM4cgP0gNpfU3lAPqdmj-0RpcSzkqe7A1EUugr4mV9Mja56N5Kis4Oxgqe7A1EQIleDzW0WufE4a96AgEAqhOBj9R2BsKlaRyQ642A0Uw223y2gosfuLxMx_09B2FoCkaByVwKobC2VwCkaBypgGm9B2FoCkaBypgGm9B2FoCkaBypgGmcCzpMOqdD3FU-we8ki8WufE3y54ybBOVsKnhF4GpeEiFAXtiGlH5aFmImK5X1yOpKmzlQX000000000000000000000000g84210wg84210wg843210wo8821www862210o8821www86220wo8821www86220wo8821www86220wo8821xE00010wgca821www8e3y0wo8821xUw86220x0ma4z0p2pYbciaJKXacIOP3hAcMSphBCmolcc696GGGERitlllhGAGGGGzlrlllkQMZOQgoO8aC3uMCm0FBxjNtrwqaaarnN2Cu5aC64z8Y8JnfddBUh8yNAkicBQwQR8cs5jb1Bcuekw_2sgkQsmDTntZPT7leCKGyCFYMH1xxnPf5lKCGKyO0q8taMoVJ8yM5Ynprhjk-UXPLlccburtBIxhjkXaaabHmC698Sll9xkA5lligd8wRBfGGaaaGDRqCe5Dzf2dXGLj7HaGODBkk4mFTFGMbkXPAMd-RZwQRllllllllllcmqqWGGHl9llllmGhGGGGJkDlllkYLrYEO86C2uNUwapokYnmU6yyyCRYgFDxiFxx8Of2bkQt5BUh8yNAkicAQwQR8cs5jb1BcuekDj8lkkRfC5occa-pUGJQRlQmg3h3Fm37dF4i0LyXbqaqDT7utWFxxrPrIJAaaqDphhhtqQ00GQ0kkgqGGh2F8aGGLaAMWq0Ey8GcCAblljGi6-GFj31oo9RshAkmTLJ5m332Zjb1Bj32zDTrhhhrqQklp50w3XNi371XBcueQyCb4Dblll5i21GGGGGEF2llllk40FCWCyMy91Q3oS3EeNI7kdzoHwLyWdndtA8aQQ9p3wrj-B9upjhncUxXndeM4aKoRllllJlmlllllJTqGHaGIGGGGH8tlllBlmlllllAa-GGOGHaGGGGUBJRllllqMwGGGGGIy43lllllAMMqGGGGHC8604debnd5j8bNCplllll4Rhdlllj67FHGGGWooipo2Cm5aC63JoLeOtllllGAqGGGHlrllllrpemGGGJkBllllqF6GGGGRilllllWE4eGGYqGIGGGGHq43llpllBllllp3GGGIGGOGGGGIxnRlmllplllln4JKGGGGHD_ZllBllllrwwG9GGGIJZlllllobwq9GGGHCKIigJtdl5Gxr80xmA7rLw1lllllq9FPhAt2V4CXIm6VFQllOf1OGGVlXllllnGHqGGGGY3TRllllrq-GGGGHlTRllllp7-GGGGGOftlllllE12GGGGG00mKMGGGGGJ_Xlllllhnz5GiW2k5X2ALgtyNwdcv0Mgo6ZM1lxGEEHAbOkfeEE8K430xwgKAGWaaaa9dM1kEHBnDHMjdj30-yyKCRSP3jjjiU6yy8aqn9kj1jjsXWa8uCBQQkmTlKKyyCCBRkklQQKoaa8uCBP1hh3QSe-yy-C8DaQkgRdbCiyyWCBOJ55JdbC6yy8aqnakkgZdbkMMmiyxj32z8EugluZhhtjuU2nFFFFs1hh45dbAG9wFFKtZ54fjiXGabGqnc554fjiVwEExWqnvhhvj4jBqa8uCBP9hh45dbBbqqqqncB54fjoVm8aqqqn9QkgZdbXp0M8o6NM1lxi6FcqdyKgv5kj1CQZiZG8qqqqn2OtQnnl_JE_xZlxzQoNrIl9t2K0Z9swFwsaw50G0ca80o4w85A0O0eA58ag9wwwOwp87B0G1g1j10P91g1Fm8lRqk68sTPEcBVwawkwOIA6iQHthTeb_ytE507q2A7x0dHp1I0Ghyt51p8B8AqACkA86Ab9UKWpamw2A9FiixVpV90Oqa6BptW03rOgk0twagkwj4H91Pi8000000000000000000000000";
    var zVVVPushing = "5sbk3l00e0Zt6m0a7g0ZjSi6r1w1111111312313131331111111111f0000000000000000000000000000d0111111011001001111111111111c0000000000110000001000000000h0000000000000000050000000000v2000000202211122221002000000o1330b1232345452323234545674589aaaa23232323646b2c2d22232322232e2c2d1023245656787824abacdefghijjklm1m1no78pepqtutv00232322m1wxtutvy00002343461789234abcd34efwwwwxyxyzAzAcdcCDEDFzzzzGHIJxyKLDEDFM00342111111111111111111abc11567811111111961171111111561196111dp2F45ce0lll0GGG1llk2GGE5llgaGGwlll0GG6E5llgaGGwlll0GGC44gOtgaGGwlll0GG6j13OlgaGGwlll0GGJ1rrk2GGl1v9l0GG6m1v9l0GGG1llk2GCE4drk2GGk13Tl0GG6l13OlgaGGwlll0GFj7H1HsHaGNwMuiOIGErwnTR0GGG1llk2GC313nl0GGBggQBk2GEpw1jtk2GGE5llgaCotk7eKH1lls2WWE5lgTwxVaE5llgaGGwlkR0xHqwllqMof9pmlkdMbXWwlliobVaE5llo8uKE5lkM0xVaE5lgO88qKE5llgaGGwlliU8wAWwlll0GGG1lkcG27LG1llk2GGE5mRmq2SSE5lkC26LG4d0aGGwlll0GGG1llm2w4K2A4G27AGwll3u2--E5llgaGGwlliga0k0C4588u-EgT0KKG1llk2GGE5lkG27AGwllmwJJG4000000000000000000000000000eP320jb0pzRaqe6CvBv5YM0FNFssaora9cuewuM58d31VCHyupAxSg-4-0dp7tXuFEssRnG5YNRcAf5xTueH8WXoZnfOPU14bcqggQO6CgQO6hIdcxLMdcy5cr0Q1E3gFNEW6u5u4VddtRUFC_VgCtaqdlvcRrf4TyCldbcc6L2eXSZjgEYaHR2-oXCi5dzqcoxpzu46CgQO6CgR1WiVlpnbdLhaN5GK2gkNAFd4msAd0q5ed7g0WHOD9FJAp0v0bRzbaC6zw93tjLQCzNPnkVddZZUY9wwO0k0OpSfaWWRedyx0hi16ASoWBVtununnBTBRVtVtuaaVtunu3SoMaVtunoxpzi26CgQO6CgSZPKlmlTK-1aN5GK2wkNHLFFxGkMF1AGsqew1RipsVddQz83M9rjjjjP8cDMw3w3fA54wFA5cwOaWrXXNX_Hu8Zc_-eKKkUOYPKcCv3XGrHwaFAxRUM2zCcz8O0klrug2zoOcz81hiKA6g2zoOcz81h8W3A0EScz8O0kkHJp0adz8Ocw55eRA0EScz8je1td71HYsjoZ8tiLQ5dzAxpxM0Cxny82pkp6r68wp7BlqD6ntFzP9zF22w4y3C9jbzwagHkUSayNVw50agsNfcsTnnIQCBhw074sMy9002u2g1j63zxk2Ck65AwY9Om0sRM5IwkRaaA9S4MF3M274MpoaAgIUTggFwnBwF1s2Q4X7cxSwVMcI5gdzc2O3ykQV5QQt6ljf1joRaRed2ow5ecF8380kOgML60k9zhwehA8yg3sa96CCCCCCCCCBCvcGpEsBw00000000000001kUSam0kUQF42hEjiC6gi3cd41cK4NVANUE509074jN6W3zqRD3DfDhUKkwE7ykgoOdz8SeVDKeb1TcyCvumCHU0FIryD6J9sFNBhMGsr4H0rCr62FNIkzqD6B8waspvlM1UZ8UoNj351g2h0P3ykOUQ82oW5qK7e75Voq0rosk7ah1z8i2z8SeWBcW0t0Map_pqqLx-5F0QAbSRJrmRJrmRJrnAirnh9PCRMgwIO-9AV4tY50947z4FBNLwUgHUCBd6yyY10jgEUm7CQgoOf6czoWWv2ed1RcBNE706XE6r2qewaD675X_409DTQz8O2D6m61ym00tE00000000000GCi6zUM2xcqcz8O0kiePA0EScz8O0kkKFNIm1ir7MZiquz8aC49vjrjljljljljljl2lkOldldldldldldgSkO4Bnnnnnnnnnnnnprptnnnnlr8TRRRRzPwa0nwpxNapsrM4NZHlMVS1yVW6AlcWOti6l3P2Ci65T0a4NoPANEj09Waa1qp8vFcMVA5cINFD9D9D9A5cRPJpAO2CtCsCsCsCgkPnEXcVcwFDpD9D9D9A5cRjJtAO2yqp0P1Rf8A54wFDKhUHdCgkPPcVcVcVcwFCStXcygkjj8eoD8A5cy7pD9A5cYjejejej9C7sL9A5cXcVcVcVcCot6P9A5cXcVcVcVcCotCsCgkPIPAPAPAObg9Op1jePejejbcY5kled2pMa0lecG05edq11O03sMwgMweC454RwwogcTtO9E6hdpuq3dTlcAdxj3w52oIo2Cd2o1nhhgbj93pASosO2CmoQPAPAPAO2CrsHLpAI00000Fws180d42dI6PIXgdHoSwreNJ0Stzq1IXeQ3qSdE6PI3B0FEF1jhi2CyA5d58aqagkQkwFESwkp0CZ0bWaa1h4DqE3hg6ywd50qa0Qk1EE3hgb8l2QwqSeH1AZPPtYTN7epChPnepPn5XtXuSO1KYHaHapwRiodplpgIzqHywudQVwcHNzq1hIpgcHoSwrdek3aSdE56iek3pSdE56NB0OJzq1IQVgcHoSwkr6k3aSdHoO60eofcPJ0UKDc1BsNJ0Stzq1IX6Q3pStE6RIrgdDo7q1IX6Q3pStE6RIrgdDoSgkpei2w3iy9ztOx3o3ze8SwrePJ0SJzq1IX7dXNocGKbUzyMreMf5TNocGKbUzyMreNNtYm3aHy-8UI6PI2O5KZHoUI6PIXwdHoSwreNJ0Stzq1IXeQ3qSdE6PI3NC90RN7dwOupVK-rUzCYz8VBH610npk0000000000000000000000000000";
    var zTheRiddle = "5sbk5l1He01t5m0a3g1Ij_i6r1w0331210312211322111111111111f0000000300000000000000000000d0111000110211111111111111111c2222000000000002000000000000h0000160100600160000000000000v0000110000000000000001000000o4310b0000000000044321gMsg931N0Eod0000000n5iNsMpb5P1ESseDzW12yhF0Eoe84xwUwkcw000000nw5M1wNpcSzlAKaByVwOmbC3hIUtf7Q254zj9R2BkDkalqNq000000000ww8c220wMw4411wgg4642xwUwia5z1E4411wgg46473O14Aja5iNs220wM8823294EoY8fE48MMzh7x2okb63g88230ww8c8e7A298CkaBz9EOrcCz9IUt000000000gg46110goga62xMEoa742hgIo952Oowa62xMEoa743hMYwh952Fo0531gUkc53y3MAkb62hgIC84yxoMia5APUkc53xgMke86zxV0yia5iNQ000639ESsew0044310Mgc4310Mgc8a2xgEka52ygUwg84210Mi52xgEka52Ahgka52xgEka951gEka52xgEAe84210wgc4xgEka52xhEUu84210wg84ywEka52xgEAm310Mgc4380000p2yNtdeWht9dz57GwnAVckjpJIj2b4goM785oUMwMo0j6xck5eaGp1g1Jmi8H662632C43eQC77coF10PNl8GUModmIUGG4wEUCKMlcE6kNESlz3131zpSxlNwM9SdFoMMgM8j23i0z0Iw1pxi1VgC7a8cp-hDV2Ck1OKc61MFHAzdcVDj6x8p7ohcwYiUxcagozlG9FERsoy1785dJhYlBYXAl7Ap7u9FQ7Nn4kRRmO9FIsAqhw5luNoqD6l6V5RdltyYNARp6jiunoFNxlmPnoKPAkV6jkKjAlapg483vEhOaot8wNDV6vAttNR1Vai96wk92gqqduPy6MotCyFcmYGGEWAhoOIxjz2ztCGI_3qV2QU3rHpXXC3OkMEEWzCa3jf0iex8S4jofGbf2kxodcQdcm938kxh8fGGWkNx84lzz2318MczE5eaGp1g1JicyaNxwxwMFx0PJ9xNP6aggcYliaKc63lHeaGx8ae9HI5ja1BcqdBn531zpSxlNwM9SdFoMMgM8j23i0z0IwmokwcwFBcekgoPYzfO5cE3Bsoc3xkR50AcFEHmCc30kFyQFxh8waCq7N7a29AmV9Pe474aatSptK1mZ9MeW510wGT8VCh0AygnrEgsy227tTlJUD9yyCwAXiciKKH000001kQUkGhh8lP5waDc6GGyqECG9GyqECIh3TaGG9GyqECG9GyqndGYGGECG9GyqECG9Hb2PaGG9GyqECG9Gyqne2PaGG9GyqECGbKGWOJXaGG9GyqECG9Gyqtcdu3GKBoa1GJJJGJFIG5j9iaj6xcT1je_oi6XohcwsPy4MFh1zrGUMkQqKsVxjz2zKFJG7CILHsyEsz8YcjjE7yK8WysKGSUkSeh7z5ecGdOhKC6xr9idttts1jjl0SmMzTMlczj9RkOdc3nljh1fr8OdJdddczvh0QnkgrQikBrpll8OyoiCjln1ngrOkF1nRiJkHhlhlhnhoZYxn9RitQBhpjjnjjoYL0QlQgl43nnhnhnh2f8QOkBt8OcF3glY9llliZsFtl0OI3l0SSRgdJJjOIJ1Rg4H1Rg5Jtk39TR3ED40Zj8idyKoE80jC3llhdkjl4Rhdkjm8xwVllhdkjl4RhdkjiVJnBll4Rhdkjl4Rhdpompllhdkjl4RhdkjiVMmpllhdkjl4RhtRnmlLpllhdkjl4RhdkjjZHMtlQH1gdlJJJlJdBmGicG2zSJR7028crtkwAd0Yxrqqfuoyb0YnI9EQECgf58ygFNxhflRmi0YrAueX29I2CHnP2pKKF9MIEEA2lUzyhXJj32B4rtyM000000000000000005ddy160whwqxjenwo215cdp82c7OcD8Osz5sz1Iz9OcD875sz1Iz9OcD8Nn8Mv8Osz9O1NBOc8cz9Oc7OcpczfOcD8OswsoczfOcnOcT8PIzfOcmOc7O1Nr8Mv8Osz9OcmOc7OcD8OswsnOc7OcD8Osz5Iz1Yz9OcD876r8MwOcD8Osz5Yz238Osz9O1NxOcX8Osz9OcjOc8cz9OcD879OcD8Osz9Ocpcz238Osz9O1Nj8Mv8Osz9Ocpcz238Osz9O1N38Mv8Osz9OcoIz1Yz9OcD875Yz1Yz9OcD8NwOc7OcD8Oswsocz238Osz9OcD8Osz9OcD876r8MwOcmOc8cz5Yz238Osz9O1Nn8MwOcD8Osz6b8Mv8Osz9O1Nr8Mv8Osz9Oc_8PYz9OcD87dOcT8Osz9Oc_8PYz9OcD87dOcT8PYzfOcT8Psz5Iz1Yw3U9p4QkSckeG1ejANiclLwo41lMYk55xO1yCaJ4kMh3SMtNx1AoJAofA00000000000000000000002onAnQfMmgA8eA23dmQwgbL8KSgdSO0CtyXUKSgIOb4ipUyXWKQw9SrJF0wTuhtZTrA35TRtyCa1PepBVtTBKgJTqC20xqao2g4wuh0zr1IX6Q3pSdE6PI3J0E1g2w50a68dEpmwV81kOguOhk2E4d0G1k2E4d0a0k0E1g3I7vXWIu0Kb0A85D0OsE6ieSQwgeRYwgoJ36geoO0CnEmcPesNAbczVsy9mjBozBVu0zAF0-y12o2gdDoUHpSea1IX0Xi6z5KgLrLlRyCo5PEG1k25A9mKA238ed842XObJA3tIw9DoK-bJB9cUfs0i1Z42dY6PIrg78mYNj10-I0000000000000000000000000000000";
    var zRickAstley = "5sbkal09e0jt3m0a3g0tjoi1r1w21324111f00003000d00001111c22000000h00000000v00000010o3320bO4gO14cFzEiFr6Kv2cFQJaZc0O4ghx44xzEeoW3Eex8h1a4gi004gO14cFzCgEWAGgFoh3a4gO0O8wy288oy288wy288oy288wxwp2iAled38rjhMkzYld32C1j1WhGj3RSb4PJkAW0YXh0MldaAyS5c2q0Qk0ENGoob0Fxw0TQnGsotTFxhiFEVKzMYjhkFxxpB1HXMV2CubEYeThrKVmjBUuGLKmosOFDAq73Pd5nmpiCe1ofHaa85jb9AeFFUe0VCGHGEEGj7Dbjfzj8wxUVrrNm7cPlecKpWBcbqXalj36Nj71xd7PzaXalcGW5csaJRj31LcFHFv6WYsGi6Jcr0V3NmspTnmto7G5C7Caoo40kOO92C7lvtkLA9_BTBD4Gog6pJdtbUPTz0f6iaY01s01dE805__YM888gi2i3w00CxyEOMmnqRllBlCpLvw00w4200130w0jiwwzvLuLqcGgx2LCF0wy-4VtTs2bUbC6or7YyNc4wMIcCMIaZCJMEorSK0y1wHCbTt46mVCPleo14Ftlk6GGGGwlljOS_LZwyxwFx4Z431kQHSNKF-COawgzc6ZWZGTvMuBl431kQM00008T01Ai1o0sF0bkPjdcRTCXMRchlc6aaasiLEENxFshOaabcMehhhAVbyuhhhlBmkkp53Cp555um6L9OIxOYyyyDa3hApegVehhhjAQkk9wliVuNhh1p97rFsT8EEGOGdyz8Oqn8SaabsMzKlKvAkknpd556FkKnAkknpMZTaO754NoSdzoESaac5tmOdzoSadyyzdtnOdzoSadyyz1Soa2XEChIr6NhIkkogeHp6NIr56Nhhx0XShIr2C55PjNn4kkriPMBN74r6wkr52okqgaz334Ixx05U09gg0aMcKKXN02IyXJM0GXo0nmldX4RuNtlXdRpu2kw04wgICD8jxOQFcDaBa2FjwDITITsSsPcF5j0w2C21ZKjUhB0SqGna1jhBkFyjS1TkOC3l7lZOVweWGFOwpdlbIsMxUPS0ZpJWaz3369ro2kfPNYEwhQxAKsA3ejjApfdoBbKcEsg0GGKYPFexB9KUBZR2Cl84559K6tQwiEXwq0R8ikw81gy16hIkucr74p6gFw99wPAYjIras80asG6cUsg0GGAUcPGGeFXBOu8ZeisPKISV1ixxz4JI1a7VU-uEWgh0BqogdoQwgaBj10gVHGcU6PliFyNI0EUz8j4yxc6dzycz8sE7kRpeNB0SvaAqpkwgkg004wD3WakCjBiB1kYPC08pKVIVCpi0";
    var zRicklovania = "5sbkal09e0jt3m0a3g0tj_i1r1w21324111f00003000d00001111c22000000h00000000v00000010o3320bn7zW56AiFAWBmJwalyEMMoICrhGSrK7bFS000001qEkGBo4412wgg4863y0Uoe83yxEEm0031EUCc6AxU4432wggc863xx0oe64a590m042g00ea51g8Q821zgw86210wg8427zxMMm0p2zYled38rjhMkzYld32C1j1WhGj3RSb4PJkAW0YXh0MldaAyS5c2q0Qk0ENGoob0Fxw0TQnGsotTFxhiFEVKzMYjhkFxxpB1HXMV2CubEYeThrKVmjBUuGLKmosOFDAq73Pd5nmpiCe1ofHaa85jb9AeFFUe0VCGHGEEGj7Dbjfzj8wxUVrrNm7cPlecKpWBcbqXalj36Nj71xd7PzaXalcGW5csaJRj31LcFHFv6WYsGi6Jcr0V3NmspTnmto7G5C7Caoo40kOO92C7lvtkLA9_BTBD4Gog6pJdtbUPTz3482lcI6AM1W0Qk0EupHC0app4xj3STMGA0pGj1z2c4E6g180j6hPqqCkScU5Mrwm0TsWCFu02E402rwe0L__C11122gigs004Qcl6m2OXmGGIGIPdXY0040wg008o402qk44rZXTn2Vz2c4E6g180Aq9aCFC6y8glF0QA1eE0A0i54BjkRshx22jUHyt60P3jP8HGGwX6HCc8giwp05Ef3sSCFKScU5Td9wiP2Lwsi3HsWCFRglC3cUehwAO7dTM2VD5K-Nw89qSoQRQygkP945tSWZb46jesgVcUCemkgl4wEh0zobLBJ2op1IUbBkIMQg0reOCezKQRLaR6tNetrrPLrDd9znR6FKhhR_cVCljRCwStDDtWCJVWzeUDeJJV60O4UA4KtpNxwhM1n1meHkogZjCVlflY3pSv3uoY4RU0Q1y1wkcp703GF02doQ2c2F112XdXfQDgHgkcKOKU5W5TkwwipvlIf857wiwYl0Gwoc65hpxlulmkyP7opUiGwtjz2hFc6dw7s0O0pq8cFDPAvllR7kshRuiFxx0-ljPlBaoZF0NYPUhUgy16PUPBVm0pn0mkCd6h-gg7kukshAlkFBSDd12OeCtjz1Xfaaf2cz8OczKsxc-68nPGoodthhP6gy37sVehAVKlAaoolukC2HBVenAVCbp-bVKjCpe1oHXm_JwIHpxzuFEoQtgA-bJFLwaqGTyXHLKu8jkWj7LM0ru8OqGXbo7qHJPJBkUMV1TQwpOrbkOVi5zkU6KA0varkMM80FByOO3qgKgUa1w822nJ6l8gxnPkwghv2sKXK15Y5P3cdz-hoC2gom6jom5uPmUkcdXn0h0MlP5XKy3bsPpGDc0ykKGG3llllgaGFVrvT-MhgMkMyuy1wGqlXoTk_jp5g8hC3uZuRrLUfiGy1wGqlX5Yc86KXJX1KXKKXKKXLaGwrcPaGHcPcPaGIpw532HKXOXKWXKWXKTIGGEnya862FFudP-HKXUKrKKXKKXLaGwrcPaGHcPcPaGIpKTcHKXOXKWHKWXKYGGOLcOKGPcTcOGH0000004rw00A2M0TU1qCqpFCKYTu600eyjoPCbtSVwRlkRlllIPgCTtVlluTtVllrv88CTtXllllllmRl0XtTBllXtTBllIw3gdtSBRtTttTttTrTbtTyeVCrntXJTuptTz8nEltTuntSD08ID84QFgmLEGBdgb55aY8L0bkbHQ8m112f85TtxQhwwSg5r12GkR0IckbMyY0JgKBAUj5OCodFFA0000000FyaFwNhhjylZ56cdbyehhhpC1OaacD9sjOaaaIGOyz8EsP8EEHOMRVelAenAkkkVgqcz9O79OaaasCyyxc2GnbSaa8b98XtbCV555mlhIkp6jiV6NhhrC4tOJPYyyyX9EEERaBOYyyyXe7KVmgUECb6NIr56NhhwHGShIr6NhIkkpHG-hIr6NhIkkoeP1gnt4OdzoSadyyz21Rr8SdzoESaac87uOdzokMEKquaUyyzqmu4K8UzoQ2zoEj2zi1koooBAc80L01i201m1BRTu80lARlK04jj02WOFLpGXSpGLoCWYIg0000qqqxU5QDj0M5dluP2KWXOgaqmdnATFwM00000002A00A25AQV2semB9AVkFglas4ZCZCXCPCpB8Go40kMgfJOv2cE6PliVgaqcGBciuMeWCkMqEWLKnc1Tllek39GFtzC4f6uM7HdLhkoooNbr0ix-ufB42eAcBPAwpOqsz9VH4FtNB3y05llTCt9QcFdT4LKEkOF0wEFdMPKA2l7s3g6F2iA10a4g8OdyzNzoUz8O5c19c6sDytzpjx01jBgND3y05lkD1CtlhRfsKjN7FOjCtRCT8akccoBJw9g_f7PR7i284Hj21H6A21kGo827dthD0SqGlcmdw574p2oAk9wNIshAp3B0WCH9ScE6PVkzjaA22y0000091e7QkFcDaBa2FVDc0gPtPpPcOA00000000000";
    var zDiscord = "5sbk3l04e0ntbm0a7g0rjni3r1w1333133661111111f0000000000000000d2111210211111111c0200022000000000h0000000000000000v0001000010001000o3200b28p2yct2lboRzCdoW4oOx6cMy6gFzEiFr6NqZImLx6kUhBg8xA28pj7gA8xB28qwy6k8xG000yz6coNAacoOz6oENzacpMp2dS8QPgxQ3A1Oh7mewtczmhS3E70zE8XxMgV4ChOoW1O8V9zj6SyyyW-Bj60A50cGyFQV8a0plapRp6jBkRkd8y0dcI3XGNQOMpHmCzykAQOME7lNUwxbu0anFRmWpogSWWpViBmkqCm5yoZapUy8leceqjfzylsuce4tzyWqNH-6Jyg45GoUCH76xNxPdsNS3ljtNosxQQSQRkTlRlQOemdXuZDVddaD6Ns0zLqrfsaZFYRtL0JTtLotTtL0dTtLpZTtYntTNtTv5TtYntT-9GXUCHLyXK-bKXUKXLyXK-bKXUKXLyXK-bKXUKXLyXK-bKXUKXLyXK-bKXXSNRTu97in8Rck3y2Ca82YIvgCq002dcSxQ3AhRAs0ewtczmhS3E70zE8U0s6eh9IqL669tFzNjpriFzwi2w6nhmWsA50cKBj75H8Sgpldl3kwh81AkkkRlQX8a0pt5rFOgk0OWkPWOcDaFGEv40kOUZCwhjbyw1nhUMUJj74yZGoUSnkGUsoZmFDygd2v-VxC5QUMRll07c-54TcuFFCeHt4IPVDeCIR-9pUss2PmUk6SCe81bjhUVDCosau4PU2p0jlczHn75cF8Fz_0kOcyqmFz2PBFDTAQQJcKfa0pHYjQPCa4LLFj6gjhAJTOc3r1O6RLX_wpaO1FTtTsYz0SMYzGmEWzXXXQj8co01jfxjb2wDyd5c4o6wDjh8m6P89Vd5tFJwis3mjdtpeKKKMTp1fbEIFdJ1eKy1HdR1eyygEdl1eyG-IRn6I0000000Fwsawl0G1k2E5gawhwOl1awBg9j55iaC21gtEiCa9mibq3AySIAhSwV9awBgiUEFmwXJyVL95PwsAmRAyeQ795Jp8JEHPhOjww00000000";
    var zPuzzlePlank = "5sbk9l06e0rt8m0a5g0Pjti5r1w181111333813210111111111f000000000000300000000000d221111111212113121111111c100000010000000000000000h000000000000600000000000v010000021100101000300000o4220b0000264xhxct2kagB2Nx8koj7000Lev2cEPFmRYpRLDg0008gx24gOC8sy278wgOHicGw003LwdoVzUhBeBrnNA00x248gx48gxA6gp1C48gx248VPDesZk9gFr6Kv2cFQ28p246gx248gp246gx2CcoNz7gxaA8iEp248gx248gx0p2vV5ckdc7I1OY1OYLbkMwHjw00UHyYNn513QjeC56Pw8VoaMm0F0FN2ZWoSaoE8jc46uAHbxWQ58bMkwW_eIWXHVW-OMuFYeM7bM7N0XaS_asTtOILbOY17b1m2M585e8bL1UUFyE8gY0YPyepDVK90tsQ49gaTcmGEpX0agm0F0FN2ysFwwVw83c457tXQQhoP-wlck6JHqOI1jw0XaSYNcTjWHyuaj9Hp3nLp6jJWFKVFYnBrn5r8rdT8OtIpYhND6slIxHTcz9SZTtPh2HN0wzwV6O2w4w2xj9dh4f2of4si2w4w2zx4gYhf4si2w4w2zB7pOhjhkqs0UIA8BDz2yy5DaDb1o2i93nUNA0HWIKetP6NKwEH9Rw6PoSJA58awmzIO1Oc4Osz8OsD8OcD9O5cAmg2FN2PGD4jcxVQ5LcpF8lcm4zlj4wnwgYFsS3yOgxPMr-i2A5UbOgMT4r6EwE1o2M58aw3UW3qSu91AwE1wffw7CwsNPvcwPwsx0P0l06A5oagkwkNEqD81o2A0ymcom8aVOMkAuLPcYurlUwghgtzygk0A0kap9G8ysO9Ecll1yGGNllpEIJqid9FcJKiGCa2Un9rKVum7unBVunBVpYhNHEHL4QMoj41M5uTaXbMMILbKYrsbwwsLbKRPY__PY__lMwgmD30i_bOqI_6v00R9uhq8DghIjYUokk8JjvEoZyItVM7cmGM3cmG0Fww4o6gBk0kQkAEj9xcm2l-3c5vLpJTtVtTo98vduMkgwgNaocF6h-c3LxI31iuOrKXVKrJP5KC03C95lw0v4U4405So2VARleodlSRlwHKMcNka19QdcnAMoL8Mr9Ocz9Osz8OsD9kNio1vuXXFAyRd0XGv1jLu5lmhnAxLj70P4D1foF3x3Eea6iUGZ0VyvvAH3MG6261X1KXLbKX18zpE97MgMsntAHM8859X9KXLyVK-bFo55k2_-1q242Tt1o3EbsPsA87slKVdSRgo02wnvg4Oipci0nOPvoeqGKuFdP9GH1D10wV9woOS42GI1t_W2iKMgkU2OX0P90T9Cwg5a0GGMmP48e0WpIck6wVxhtY0s62Tt0ChdA20L03Eww0lwpttTy05psTrw1tSM0KIGrS9GZyWHS9KLbULy9PcL8KXUKGXUyGOWOFLoCHS90tcw03x2KD9KMsjlTNcVdnoa9GYyYCHI54RuhtlwGCGWHwgaYIQgpdRunltV5luhujlTntTN6hdnhdnBlpkRt4RuNtlVkRuNAjlQjlXtsjt05cnAMoMc40211nApoaMiU1HO7czL3TgptxVKNJTKW3bLlj29l406c6OcB06cDoOoyOcHoMvoOEnoMikj8cUjgoYr-ws1JehGqxQOeChQOckOh7cgF431CptS3cYrKYPbKNNwSBgwoPplm36rfHMoRVtS0spDIjB0N0oRVtVwcqdaMH1zdBTo1NGMFY46nBTocrsYh86dmnnw76n9KMpCntwPIHH1CVtq0sqIbkr1BVlS36re5Y6dentw7cPqh1DptS36TeKMpKlJw76r2tg86nBlocpI9W31BVtS0spJRg8g6dunuo36ziIaMp-ntw76zb221zhB19wNGUXeNCOXIsptW_1zbBS636j2o486c-5BU0sqs6411y-m5ococ8eI6bUgno1j8s5d261MNaoE5pc30TU61EWp7j84y8Op1wo000000Cx424w8j0EkO8O0FyhIs89wPhAYjg1e2aEg2aC4bWg8nyB8ua6jlJVdmTARrujlJVdmTAR3JVdmTARrujlJVdmTARrujlJVdmTAR3NCTJRYpARrujTT6rCRNCVnNCjlJVf63NCVnNCjlJVdmTAYpNCVJspKlYpARrujNwYpKlYpARrujlJVf6spKrn6rBv6pdmTAR3TU4Uks1LJck3ZYqI2p6FwNUw0OmoKqO0yub0A1oFyg1ebJ0y1rj50TkUeM2p79wNUW39pyVH829kUwe1UMuEjBGLa4NqVzO_MulshA9MVg5ck6KEUyyw0000000000000";
    var zHappyHogwarts = "5sbk0l00e10t5m0a2g10j_i4r1w18101181111111111111f03000000000000000000d21211211112001111111c00000000000000000000h06060000500506000000v00000000000000020000o2130b0wwog221xgMsg952NwQsb63hV0oh94OxkIufE4hU-wgG5axkEmG5iVuKnI6axiEla5GxkKnHBX1y110Mwkc742hgIod73O14Aja5iNsMpd6zpM00f7PW54zkaliJkIlaRGVuMoIB2BkHlb5iJqKnI6b80000000221x0Eoe84yxoAic6210Uyi7zO1gGmbC4qhaEkG5ixiKlHlr1yseG5axkElbBqRmMoD3E000000000000000000000000000000000000000000842100g842000000010wg04210w0000000p2bW5l261Ji29JcT1AkNAb4PAhinp55twkj8VCgWAkh83IOeOf4rd-OahArdfx8X2isyaiV1F6FaghaSmtqgG5C8CALiq83r0M43lkybk30CfCqo21fABWmMweFi2ig3hdnhjtfz9i7eEviBpUgOdFFbG80000aF3zaOAgb8F3EmoyGAeGOayqCgayqDcw000WpFn9MXOaoG5C8LwByqhE7jc1HGvd8fKnpg7TrrnOO1ECGj70CyKO0000000000apJ9FJzwaqoM3x1lmcyCcx8FDuahItua9It8i8FHK3ufgkx0zh9S3gCDa3DilgF9I3d9tEQBP3YFwqzFij9fOB5dAQkm4htUA-EFLey0O3kzkTjId4Ul9d1fC58QQ0QlTPLdhjjf1k5VFl9uw7inUtduxQBO000fNoQwj1wrHs1dcNKi5brdQZ_fKfgp998E1Yd-u0Qz1br3OO0EHY2ytaar8G9GuGaqV80000000008QNAANM4Pq59u16AqxH6h59swQlRIewQzowooWkAOjN5iddIQAR8pEFQF7oq9IEFI6yKgqit7cCAKO1Fy5oq0Q1ewd0kx82H8gqgQO6CgcwAwnUowOor0DN8q0Q10051u91idgkkkgk0005dtk7NwkBO00ngjzB-Qni1mGHhqgaRd2VbAU2b8WHsAOsEnh1mGOxXHr5Wnc1Ny5MnwZIsChAg00000000004q87yE4000000000000000000000000000000000000000000";
    var zDubmood2 = "5sbk1l01e0ft6m0a7g0gj7i0r1w2461f3330d0111c0000h0000v0021o2200b0i4zgQ4x8Qlx8Ocz8Od5hkkicz8Oczhkl54z8Ocz8Ocz8Mp2e-FwMC45Bpu1mpCpCpALwuqA4xIkimvy-jyujBSVmjrBpCiCd_yKcOY3MaPcPcPcJMfdU_oEKEIOsL9OWIH9GOI_9UkFw3TQMBdc3jjjP6j9lMdBtJBlBCRKXmnBpChCVCGGCGCCKCCDdOGaUmO4KIGFHIFHFGJEIGHRmQTkRTQTkRRmRitBltdRRCPDlmlmRnmpqOOOCOOCSC-GyO5Ix9wIGFHIFHFGJEIGH9FsM4gwGGGGGGGDc6GFP6GGOGGGGGGHC9oeV4RhdrMgry3lkVx8y8KgljmRlepb265TlllltRltllpllwTtjfsRlo225RllJlnwO1xllk243NllBllllWP0KECG9HM723WGGWCgKWGJGGY4-XMCqGGGGGj31XGGWGGOGH2ccaGG1s63RllRllPModlllllllllllv1g8bGaHpCKH12GGKGGIh21OGHGGHxx32GGGGGGGGGGGG112GGGGGGGU723Agwgnnv5ln5ln2Emllky43NllBllllWTtWyGSpHwo4eGGWGGOp2OGHGGHxz21GGGGGGGGGGGG112GGGGGGGU723Agwgmo5NllMazL3g47llsnCEwQC157MTtY8CG9FP78gwL2GFP3CgLaGHqGDcBfKsM9CGGGGGAMMuWGDcaGHaGKOccaGG1s63TllTllRMtRllllllllllkkMEFFExaq8uCOCyOCOGGCCyGCyNoNUwHIEEFxPhljhjjjcd5Bd5ddcNknQQkQQOZ4gkSQmQXWbWqaqqpmy7FEFFFIEJFEFFFFEyioaaqqsOQh1jhjjjphrjhjjjbkh1jhjjjjhjjnhnjJEJFEFFFGEHFEFFFIEJFEFFFBq8wFEEFF5c3w90u391AwOgp8cA6i391Awj4Xq1AV8cD8EQwSwrmi3q1AwSIA6Q391JrgdE6i3qOgq0rgdH91J0Ogrmi3q1AwSJE6jAwOq00";
    var zMiasSong = "5sbk5l08e0btam0a7g0jjsi1r1w33313111f00000000d10011111c20000000h00000000v00000000o3300b288wy28p2CewWlbkM8wy288xAaoW3FkJj0y288wy6gp2CatiRc248gx24gh1248gx24p2gtkNUh6z0AMQ4gENb8SRsectt1cZ7uKxqleceFPCiMk79WRcacySiAqWWWZXzuOrHsGYCJLIkMUVD4wTF3iCD_JSmMk7Mc1jaraCm4BUNNCZIgbJlZuzDSQYPNuZ9iddls5Mc1jarfan4spDki3yaoQU1U-y76PrU8nAiI3vnUiHzNxyRGXn0M7gc1DlsjUnpKQRkOjnlnRLpRn4YnpKQRkOr18yNw7mu4oxArqK76eGxQzLngRaD67kVP9oa3ASZhr9idtttutKZATmVlVdrpBnARX5RJRtttutKZATmVlVdM00000aos9x0M5rCfwnpcxnprtvaisB0RlSpTypdc30kRlSmTc10RSo7Um0RgdtdtBJRYzjlnC10VBQB0RlU7_VtzttlnLnrcY6112j7HcM7aU-2SIPfGGxaqGXbrChFwqY123Ma1GwaqGXF6hAqqGY4U7dJwo63FOFHcHpq1wbYY8f0qGGqXbXXWqo6O2PMMI1GGxaqGXbrC-C1HM48f0E6G0FGHKAp6hFGHMjwsSS1woeDaCIOJIFwo70MMIChHIJKLB9aGKO3wsA4fbHIKA96CGKlr82O2Mcpb0qo6KCKOSW-hFGHP0wsSS1woeDaCIOJAGHo70NkI1FwqWqXbrHV6CGLc21Pro61wWsGqNe1o20w8b0MwYCgHIJKLB9eiwqGXcXNcCC1waqGXbrC0wqXc3Yb0qE6KCKOSW-hFGHP0wsOWiwqGY3_YKNEwqEbdQb0qE6KCKOSW-hFGHP0wsOWiwqGY3_YSU000005cmaGqqqpzy6KKCCCCmy1BEuCCCCKKp8wFFBEwFkMwFsZcPWo6S8cC-Ad3vuybejji6CGId558qSmxWqqqqqpxy2CCCCCBKKFFFFOsyCAd5ZUkNEsGKCCCDpOaqgQlRxSTbFFFFFSsyCAd5totIsmxWqqqpxxWWWqqqpm7pm7FFFFHHCi8aqpq8alc86nfLFFFFLLLLFFLLFWA000005c3xao8w8cAmi395AwOhp8794FwwPAyE1AV93p1AQk8whIw000000000";
    var zCrashRockslide = "5sbk7l00e0Vtbm0a7g0VjNi4r1w22222541112111111111f00000000002000000000d11000111111111111111c00220200001000000000h06000100000000000000v00000000000000000000o3210b000000001st3456uvEtr4568abcdefghq2t34567ijijklklmnmoklkp00000012134545456712131267abcdefghi21312678989klklmnopklkqr01213121312131245121212454789ab8812131245cecefgfghihjfgfk121111111123363334233633357fffffff233633353b35800d1111111900p2D44qpIb676esgmHNBDhaD66zAwwHNzxgyaC65a8IpehAV2PxNxI2p5LIX6lApegFxNNiqH2D65BmoFN509eAr2pIaUsovwFxMCf2oQakoYiFzBhVs0FNw_iL6e57KFxxiyb6jApegFxNNvB52KcDjgK6hFCOKD76f6n76xxhEoMo04EwqWNNNJtzg1r4GD77tTR552ql2D5726FPNT4aqI306jmtfziUQJH10dsedbziUQKdbyqhkdnDhRi0j2qXUsqf6n6n6n6n6n6ma3fPfiqNDPDUAlFzf9OrCsAYyIcpHJxNEYsqf76zNNBNPPAPcPa6y5cqwR1F301F3k6Ad0xE3i6AdgqgR1F6ao7kkkkQkkmQkkmkkklkkkgd554xnhhphhgdB555J5541nhh8kkklQkkmkkkmQkkkQkk3hhhhvhhhlhhh0Qkklkkkgl5541hhhnhhgdt555J555J554zhhhlhhhvhhh9kkkid550Tkkkmkkknkkknkkklkkk5NEEEEKEEEwaWa92yyxdzb5j64hjd4mcecYox1lUQcq9kUMQk911nz72x5RccakhoOsz9O5ceebjlokUMIGP5e8E18uIWzbO5sc8mlD3z3o4OekqpJGUsovwGopQasoYiCxgFNxpWD634GYoUksGD77M0aos9zNgCOkdoab6yKmkyD80EFNzx4aC6t6hKgFNx8_88uk8w00003GUogIQQGossnVgC72r4M0000000AQNEEEwo2wd0qxyjAWaaa90d8qhyjFEEEEF7jicNINGB54D8D9OZOsykhpcuhePAjAVJpeheOoYEfpO9OsysD8DpculuPAjAV4VeheO8ua3g6wd0q0Q1E3g8q0Q1E3g6wd0q1yjmtfDhVQvMg1n3ziVQut7DhUCAkxlVQtkzP2aXUsqfefefefefefeea3fPfiaNDPDUAlG03CL02g05V0cKXJw15lm1M0yGOWOFI6NdnIlIRg1WQ6vCkF7Gaony3v00gWz0c1ntXTmndS3GXLKWOVI6RlnIQ3oCGYIlSMUQued7zzhUUOUV_1CpCpgk5dcoQNEEEwo2wd0qxwag2B5555555555555555552o0l55555555550QkkkkQkkg5554x8kklQkkkkkklQkkkQkk3phhhhhhhhhhhhhrvvhhhhhhhhhhhhhjkdl5555555555555555555555555555550RQkkkkkkkkkkkkllRQkkkkkkkkkkkkRkznhhhhhhhhhhhhhhhhhhhhhhhrhhhrhhgdl555d555l555ZZ52r6mfzE005o6m2KXPOHbCX1UTt-lRBjodyqLqE6PdlVoebUysPb1AntYnltwUyGOWOFI6NdnIlIRg000000000bN0V880274o1waXLuqOVKMsntYTmldwS9GZGwrcRnBwULy9PcI6htTNtlS3yaHbHaCMr4RuNjx1dlw00003Qsu2001N5S02KXPGIKrI7lTvlRBjodyqLqE6PdlVoebUysPb1AntYnltwUyGOWOFI6NdnIlRdl8FzhljjjjjjbN3jjjjjicL45ddddddRZddddd8RRQQQQQQRRQQRRSSzaMZddddddddddddd8TTQQTTQQTTQQP145d839MZddddddddddddd8P53QQQQQQQQQQQQQQzbMZddddddddddddtoP33QQQQQQQQQQQQQQzckgkQQQQQQQQQQQQQzcaox1z9x1BVunBVunBVunBVum0VunBVunBVunBVunBUJx1yS40Fwvhhh0M555d555c3hhjhhh1kkklkkklQkk3nhhhphhhlhhhthhhlhhhrhhh0kkkkQkk3rhhhjhhhthhhnhhhlhhh0QkklkkklQkk3nhhhphhhlhhhvhhhlhhhrhhh0QkkkQkk3rhhhnhhhrhhhrhhhlhhhphhhthhhrhhgdt555Z555J554zhhgCNB000000000000000000002C1EBc42wV84g81IxShp8sA6M3p2bny51gO6D2hlmP0ywsO3Cs11Jk3a1IV8dGwp8dDa0eRgcE6PAwSG1AwSsE6RgcE6PAwSG1AwSsE0Xl0Owrei3qE6i3pOwdea70dNFMMNLmQMi8JIsg886pluMftS3HwtPAwSG1AwSsE6RgcE6PAwSG0QUgaS_btwtHgsq3CsA6RgcA6PB0kMiakMgqh4DC6A014GU88A3UVAdu44iKNFwMhlG885ud8wq3yGLOLyIDrG-qUHyNoCnNL5e3a4FwMpMsKM8Mj8dKOO2joJu8k6rxFMAnScM8E7zaC21a800eaE6k3pOgrl0UDyua0f5k3f1IV8dGwp8dDa0C1gcA6RAwqscdl6Rl5ao94yRMghaDCf36oBkN1CgshNndlIrndlPcwUzyxd22PgIM8E7BgepOgrl0Ogrek3NFj11HKuoqg04jP0Jc62pLDeGOtKHkggaUHy-aGYLqOtKHUHyKb000jewKQ00000000000000000000";
    var zLinusAndLucy = "5sbk3l02e0yt9m0a7g0Ajvi2r1w331211223111f000000000000d001011000201c000000000000h060000000000v100000011330o1020b12223422234566671213482234349abcdefgh01232442324566678232442324449abcdefgh01234562345788889234562345a5bcdefghij1111111111112222111111111111344444444p2j8aoLnlll9CRlBgdlmkCdhi5zyGWGKaGOGWGIHyzN75lRlsllBlRlpn2xUzwi3GGUGHaKGGOKef4stlllNlmltllBsgZiEEGddjGEEGdf46L9IGGUGHaIGGOKaf4slnllNlgUMYyoUkFEIVe0UDBVtuRy1R30HrqqILpSVeYAsxd418VBDdD4szfEUz9Sc3SGJh97ywQ1E3ypVHzWXWqILCtKjwihOegiepKiffDBbgidn2f4s1Yj900000000D1j6csF2NwapwehjB9EIFFAYguoOlckiBddi89rhidwekCMA4YAX0sDo9ZcNuNiwc8iKXKKXJP51ElN4GGj2FA302oCFyNNn4lJkrmNn5shlUuv3XXWXKWXK_3q_MGGYaY8_MTMzyK8HyK8UHyaSGaL1JaCsPxghj6wF6M70ld54wyCr7slZEDpjhoUGDoEFOswRr6TjIkkQx8smwEa1GGG3rr0TRng9Hjj0mpJkP4CsyICsA5CbcVcD9GCsCsCGpOpOqFD9D9GCsCi5cDqK-X0OqGYBcOi75Ea4wqGGwOBJ-vys4t0MaCGmwE7fMaCGLa000bM0X0805o6m2KXN02IGrI3w1dmM0KIGr1IjlXd0S9GLb1Nv4jCpocyXLyrGI74TmnmldwS9GZyJCG00009MkNwOAb6kCpqoIkViqbaqrfc7GcBj54Fjjky2mQu8OL2Ah8Oaqw-4-4YOkzo3A9I91f9eM79S2uitwejI5iF0w5l5427NZci4x8SdzoSdz8icwGpPemhYcfz0sDNwDA7p3AGqq91lckBY8apI9EIqNs0Ylh9Vegp7ye63w7yG9bajcFFHzlO5MxG0ShV-wORddLIseOAp6PTx2Cjt_8Dx6hjlA-cLN_HKdTNB9c5caq90OY06a201m1BwHKYg0HaCX0U0jlI0bHaCMr4RuPgdyqHOMsnN4VCm38KXUCWH1NdRBRBjodyqLoHpGwtKHOLcI5tTD5pkTodCHUKIGr1IjlXd0S9GLb1Nv4jCpocyXLyrGI74TmnmldwS9GZyJCG00001SWLaYOMlTuslBjtwSqLyWOFI6NdnIQ3oCGYI75YhepBwObK-9KGMsjtptpkS3oCHSaSqEGg88l2oAp556hAkkp6hhhAp1h4weM783A1O0V0sweg4X56hAkk92gpmFwwuFwwOQMgaJ8mB841fyurWXdS-HTGKJUDCZQ00000000000000";
    var zNecroLobby = "5sbk6l00e0ht5m0a7g0hjki4r1w22665216612111111111f00000300003000000000d11101110311111101111c00200002200000000000h00666606606000000000v00000000000000010000o2200b00gxAaoW4HkNj1228p2Cap2lb2Mb1A2892CaoW3E2AagA248y5aoxiB648jEp2mLlcehkAaxigaNlAahi81j0F420p6g18326PI1Ocw6hA0SixKwL7n8jEzcc1gpLycMM8daKit_XleCVctnoZctZvVT-4HhtTbHFO4iG5IDvOVFMgeRVtASVDlOtmleXDgg6eCeO9gMzAEwNAa8EA3O4oogOu8O4hoj36Uz8OcgO9YwMrAX4uQWsH7cWMGGODX_Ox79Wz8YE7Auk8pf4p7B3caNWpFDykMMWg00000nw1Mgg0aMcI5tTy05psTo702XJw1tpkS3oCHSq1Ijlum3y-8DcOMp5Tv4Tloe9KIKIGr1IjlX5rdkao78whAQV0cD83Ap6jApehAV6jjA0OswelApShx3A3Cp6pjA0OswehApehAV6jApdeg39O0IwIOCmgcPIYri8qUb81weg7aOcx83I8Xdw6njA0PcwerAp6HUfz28sWXo1Dp0sH8Odos8Hdw6njA0Orcz9wGor82bc2uGH9Ssw6hA1Ocz8SpOdz4Ur8Osw6hA1Ocz8FFO1Qhxy2IDpO0p6g78OczpD8Sc4y38Osw6hA1MaCA45AaYgey200wY0hw60HKZg0HbCX0U0ntI0bHaCMr4RuPgdyqHOMsnN4VCm38KXUCWH1NdRBRBjodyqLoFMwCGNkRsOQMRAgEM9cuJzw3yJzyodledbw5c-regGKoOYx46e8WK7FsdZle4BiCBx8pLcsNR40GD6n0famhntRs8kZhBp2B6uJaCf6EaFzNh8Fwda84ohQV0cD83Ap6jApehAV6jjA0Oswbc9iWpFD8pwAH2C3g000000Go840j8z83hhhg38O0QQi0R0Ocwd5550cz82C25hAp42ek3oO0Qkkk0Ocw2g4p50hE1Ip0qaaa0p6g1c2cyw8Q0Scwd5BcC38O0Qkk320Ocwd555ocz81N61QkyC5zC0oH6c1j14Ly0Qu6eoepCVR-CaMywYbUwd7csntXoYycM36o0tlN0qeEUGJHAjj6owsRN0f67ckD8mNQMgaGKb6l1P6g6yyyw6hA1px0AdcQO3NHN301u03r100H0OMlTu80lBPtws0bKS05RBjodyqLpE6NdlVoebUysPb1AntYjtlwUCWOWOFI6NdnIlIRg000000Fws2Y2C21-i541391Jp8aMkXuTJ1j1DpFSua7b1k3rOgXui3qOglwFSZLq3NaoAVa1d2PcCKFWAfsp0dD91m2DoSJAfkXdePN0YPbj10SKGi0PHeFUHyusPrS-sVDyK9VPdLrVPCuaUDDcSZIusVDyK9VPdLrVPCuaUDDcSZLDepUHyusPrS-sVDyK9VPdLr7DepUHyusPrS-sVDyK9VPdLrVPCuaUDDcSZLDepUHymoepB8Pt8-5pUPRfdu6-4YlNfdXmRPvcYlNfdXmRPvcYlNfdXmQfdYPNn4YTJrndYPNn4YTJrndYPNn4YTJrndYPNn4YS4000000000";
    var zP2CauseOfScience = "5sbkbl0se0rt7m0a5g0UjEi3r1w0000011133310111f2222100014400000d0000011100011111c0000000000000000h0600000066600000v0031000030000000o3210b00kvE456778899abccdeffgghhij11234456778899abccdeffgghhij0112344556677889abbccddeeffghllmnooppqqrrsstuvvwwxxyyzzAB01122331122114455667755668855llmmnnllmullovpwqxrrpwqqsspw0000000000000000000000000000012121212121212121212121212120p2v6aop51MddkBjlnjlnjlnjlnjlnjk0M5ltdkBjlnjlnjlnjlnjlnjlmqqE6CGjFGHFGHFGHFGHFGHFGHc50SQRlQRlQRlQRlQRlQRlQRlC3HIFGHFGHFGHFGHFGHFGHFGHddltdltdltdltdldddldldddhJwqqqpaCGCCCGCGCCCGCGCCCEN32gtdkBjlnjlnjlnjlnjlnjlmpwwEaCGjFGHFGHFGHFGHFGHFGHdc5pjlnjlnjljjjljljjjljliom1xqqFaCGKCGKCGKCGKCGKCGIM450QRitdltdkH9QSQRiBdltdl9AGo6CGkFGHFGHFGHFGHFGHFGHchMk3jltjlnjlnjlnjlnjlnjlmpe2GFGKFGHFGHFGHFGHFGHFGHs9n0QRiBdltdltdltdltdltdlrwU6SCGKCGKCGKCGKCGKCGKCGJTTgddkDjlnjlnjlnjlnjlnjlmUaKOCGKCGKCGKCGKCGKCGKCGKEwyMc5jlvjlnjlnjlnjlnjlnjlm00001WqE6CF49iCGJ8aqGWqGWkwWHVCGKCGI0000U71pJdltdltdltdltdltdltdlpFGHFGHFGHFGHFGHFGHFGHFGHapUY51MddhAEaKOCETQRgddhHwE6SCERMttBdhAHE61FGcBrn0QR6kwE6OCERQTSkR6hFGwWqzagk50QR6jxaU2CERMs3rjkpi-K0FGds70SQR6jLLwqqzn1lSkR05U0sU402I3bHKYg0HbCXs0bKS05RBjuNdnIRJllCnND4jBVujlTN5lnN5lBRBjuNdnIlIRhj7d23wGqFeCGKCGIMttBdkDjlnjlmqqE6CGjFGHFGHc51mQRlQRlQRlC3HIFGHFGHFGHdI30QRildltdlpJHwqqFaCGKCGIM43pjl9kRlQRlCC1IFGHFGHFGHddk7jl8QRlQRlC0wE6CGiFGHFGHc7n0kRitdltdlpLwrqqGWqGWqGPvn0kRiBdltdlpwU6SCGKCGKCGITTgddkDjlnjlmoaKOCGKCGKCGI00FJu0o0R6gcAo0M1A000nw0RMg0aMcKKXN02IKrJM0KXo0nmldX4RuPmRlmpv6shenBVdnv4llv4lmnmldX4RuNmPl000XtnBupttTD5psTuTtYnmldX4RuPmRlmpv6shenBVdnv4llv4lmnmldX4RuNmPldC6X16O1CsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCnw15APAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAOYg8sCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCny11APAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAOYi8cCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCnw11APAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAOY08cCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCsCny11APAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAPAOaVxxzArA3llBlmllpllBlmllpllAPmhlpllBlmllpllBlmllpllBlmllpllBlmllpllBljN8w8IGGOGHaGIGGOGHaGIGGOpH8GIGGOGHaGIGGOGHaGIGGOGHaGIGGOGHaGIGGOGGUAg4ellpllBlmllpllBlmllpcRAlmllpllBlmllpllBlmllpllBlmllpllBlmllplkY08i7aGIGGOGHaGIGGOGHaGICqOaHaGIGGOGHaGIGGOGHaGIGGOGHaGIGGOGHaGIGGw000bi210B43w92gA5wawao8038rLp1tU78bGI2gfwkMgui0w1kUgEh2AbK8RLwh0Y3C16W3p0C0y3KmgRSA5U2FgBlOg88awi0903F0yR_wixM42kidwWI5M00000000000000000000";
    var zJMJFields2 = "5sbkbl1Oe00tbm1a7g1Oj_i4r1w21112221321111111111f00000000003000000000d21112001020111111111c00002000220000000000h00000000006000000000v00000010000000020000o3410b00000232xN0Akb0wMEsg952M8ca6331EUug8AypgGmb4298CkaByM0232xN0Akb0wMEsg952PhIUteDxEUug8AypgGmb4298CkaByN0yi9B2FoIg8AypgGmb4298CkaByN0yn000000000004210w000010wg800000000000000000000oca531N0A00000042110000010wggIod73O14Aja52FkInc2j9ESseDzW12yhF4GpeEkGBqNqKnI6jdERrdT3BQXu0000210wwoke842088653y10wia5z1EUuf7wg88g36y10428411Ewg00wwoke842088653y10wia5z1EUuf7wg88g36y10428411Ewg10y10gq840g8wg46y10428411Ewg10w00c210wg84210wg8c210wg84230wg84210A0o4210wg90610wg84219z084210whUM210wg84uc0wg84210zNE4210wg98o10wg842g70g84210x1M4210wg8Ys10wg842g710E0p2Ld4qoV90SQRaoVRpdlldlgGoUQpdlldiCudmjlljlkapQoBlnjlPmjlljlkfdVlttdndpdlldlgYNDllQRsRARlkRl3IpdlldmRARlkRl2CDhBsQFBGifs3QzjAGoX382QNS6w5QNS6Ct5YNS6GG-GG25YCKjXKX5cU5ct6OGCFj7oShpEI1kPjdcIP9CChsQmp2GGGGGGGsPaGGGEnJ5GG2HKXHKXHKXuPbKXHKX4bSbCU5ntTntTntTJTtVtTttTttTrSrtTuTtSbObtTv5TtRTtRTtRTtXtTuntTntTntTNtTuTtSf5TtY8u23ntTntTntTJTtVtTttTttTv5TtXtToYntTNtTttTttTttTuTtTBTtRTtRTtYntTJTty7kwwrHKXHKXHKXOXKYKXKKXKKXLrKXSXKN3JTBRTtRTtRTtVtTuntTntTntTJTtXtToxTu3OGWKKXKKXLbKXOXKWXKWXKZKXLrKX5XP2Bdd9Hdo18QNNrXWqBcsWICGGCGGkPENaGKCHqOqGGqGFSciGHFGSICGGCGGtz9GGFGSICGGCGGtz9GGFGkNSdA00000000000000000000001caoUdigQQQEyPjjibhPIm50MtLzcCCDymee0A4ou0F2GKTyshHj6oYCqKpO0Yi1xPGF2mxcD4or9Ne7OsLpSj3EAx8OQ5AUBnAUDpAVuPIC7uKGJwYDdKOsiJOqtCAMXRcxbgCPyk9AUDm783I67pGGHISsGT9OHMV0tw97Cg43jkF36RARlkRliAr6plnjlJpdlldlkX69llQRrmjlljlleNARlkRrmjlljlleNARlkRrmjlljlkuNARlkR97kO2zS8cOP3CsCsCsCsCkgoqYYse0wueQEEG0KPU_-pD9D9D9D9BIotttsP-0IFFA7ztoMPeVdp4wpo6jdplpc-RMVUWGLXM2Xfz_XCmssP-lmjdpldD3HHDy--QcbMU7ekXY9D-FE39E3cOIGGM03sTsr677761w08Pi2yL03UJfv1bcysOqPsXcNIstZsUuEk22OBk1TMh1Y4ggcTYPeWLbPgdOMbP9VHxPNwQ0eQEEI102caoWdYNMRWgQUDjAVrctzHqSQxph5AMXJIxagf4UzjAUHjAVmPIC7hbXXGsD4WsD4qIDbStAMXJJlBejDkVerjAVmPIC7sIAbrcD4qsD5qsDa3AeDvEaosshgCOsratsvN3YPehhgFPxFky5iLuFUilaKBrkESP8leIsk5a7vjgUi1xcKsBjL7w9QR-4NXj3HC5eYe9Yp0VB8mIgOAVQMnjfzx5j32mjH21YEUKBjH3iLaFVgpzNeNqWCBOMEExiPeRoHxPxPejiFNxg3ARkKCn56gFRUc889mT8ResuMu0QwFj35t8mIxjMSvw58W79GsomoFxxjsCmxUNgDAMACu2-NgCHMAKgFNwTysow2gc9xxpbGUsUkjUh88zjARpasWdrCPAOmjATeCn6gHBN1gzBg2CzHJenN6C0pzNKlkD7sFxhIlkKFNx0jAlkVsV5iD67f93iFxxrNapZFxPjISeFFpkpnkVmlBViqfeODfefAk9Iv2ib2NPxNNw0w4qcj7rGMkkknpKWVQWUVcedK2kVSDWDjEyR46mvVjjMUVeu0eZwSoo4YPEaDmBFmWCfv2adQOhkXNWPCQhF2Fxxlk_zcFJDfeQ9PNPFRNWpsakhkOyr0lsesfMuVkowwaN54qYyBRsf3ruqtjqv3w1eG0QpF11Wa2FNxJ0ngc3jkHzPxPjcc2tKKGCG1tjD3yZOtKOGCHzbT9SXaGqGnUyJKthIIFGkNWVHtDrHGFGGtcKdKtGKGCFnbDyGGOaqGqE1-ELz9TXbqqBeYeqTpSWWGqGDWzrDqHGFGjgWSVSGWGqE1-EHrDkbaGqKaSVSarGqGnUyJ-ty0waqL443o0Sqo6CGBQT3Utnqv7Lw01QYS0PmfaKIgpD9D9D9D9BIotttsO03Hamp0pNXKIoqGICLOq0P0aOGHaE3aGCLf77vlEHiyyE2X005ci4Noj1w6hlIV2oQXeNN0cyDpOe97pSed1AlXehNePIsg38FSszyhStzw06h4ePAsjIX740OatD8UAtCzy0shjIQsjIX740SatCzyhOtzy0p5dd74YbX740O8wFEUAubEUw74lXd74XuNN0dyLpEUAsDoUw6hjIV74XCNN0cyTpOe97pSe81AkXehNePIsg38FSszyhRfoUw6h46PAsjIX740OatD8UAtDoUQ6hrIV74XeNN0cyDpOe97pSe0gp4fIV74XeNN0cyDpOe97pSe4wp4fIV74XeNN0cyDpOe97pSe4wp4fIV74XeNN0cyDpOe979EUw6hjMJAs3XeNN0cyDpOe97pSe81AkXehNePIsg38FSszyg000000000000000000000000000000005P4Wg4x0moBlJRjA9dlN75jBshlpuRmTlsllshJlmkao40O-rLyWHCqHydGGh4D8GJLCGSWHCGHw7rK-q5j10zzeHLCWHGqHyeaDaUyGOZGJKGUGGUzqGIEsyGO-aHrGK9GK8UGsHyaHbSGSWHyGHy6ocOA1bc29OhqqqMCUl000mCi3TuerUZlucRnz75jBshlpKRmTlsllshJlmkehlpv5lJRn4Rn4slekP6XCgIPNCtpltllthJlmkfvtPCsplsPlsNNkVn4lmnJlJRn5ln4rllB3TKZPfmpPBlRdlR75jBshlpKRmTlsllshJlmkbcTcVPecGKpGKoUGsHyaHbSGSWHyGHydGGOxOaHbUGJKGUCGUzyFOKuXsPDaHCGHCdGGj00E7bKZXCGSWHCqHyeaDaUyGOZGJKGUGGUzqGKsE7M_v2pXPetGKVGKUUGsHyaHbSGSWHyGHyeUi0z8O1VGGULGGSWHGqHyeaDaUyGOZGJKGUGGUxc64wpN341kMgcUTLdXKGXCGUzyFOK8GILqHrGKaGK8XzKsTd000000000000000000000000000000";
    var zAllStar = "5sbk5l1ke00tbm0a7g1kj_i6r1w3115111551325421211111111111f0000000300000000000000000000d0110311111111111111110111111c0000000000000000000000000000h0020600000016000600000000000v0000000000000400000003100000o2200b0wwokc742hgIod73O14Aja4OFoKod6PxQYvg8khcEja5yVx6AiF4GhcAjAOxdgFlaRyRsLocmjdERrdNV1MV9B2rFSYuLDrNW_00088621wwok221wwo86431MMsc742g88621wwogc731MMsg9l2xoMme7A0Msc731N0QAd93ih4Gja4OxcEjb1wUoe63xwUoe84w0044110gg44110gg4411x0Ega42xwUwi84y18wk42x0Ega63yNwIob62NEga42x0Eo220ww882e7A1V0ug7Agwk8521gwk8534w000000gg843410wg8425MUoc63xwMA84210wg8a3xwMoe632NwQsf210x0e631wUoc4210wg848Bwwg84212gsc631MMoc734OE0p2Q_4RGVp8A2FBxiHzww9k3N7bElMUNW05j76zpEkNNbO5csyNp02FzyVNuNnIlQta0yHDhBhaonIMwVsMwFFX24GHvdl43GIpxJU2C6b7B0GpogOCe8Bh8V6mHzwwgHxNzQ0f4sjhPuhBV6o8-rScIuTgCv8FCMFBI0A9mzeClJEkMMykv2L2dxj31z8OdyzoS1zIr6NIkr6NIasomZNgNEUFnz3420WgUTzeEUyweFyIosog4RLshPvfYlgHzN1lgNULDID0sDaOsH9OAN_5j10zqLEU_9F8VUQZNIr6NIk9NGq2k8M9PG4EkVIp-L7EeDOz9SuQBcIO2wGUsUgBFDSAp7k9zSFBxjP7csNP8YPP2gQOeRR2PxPEU8CoeRP76regHxNEZSDk4P0tdfHE9i11xcl7oGY4cxRedrz_6e8EFF5jfzGAQKe8WyH8Ohu036100H0OMlTu80lBPtws0bKS05RBjodyqLoKGZKGIH0spN5pum38KXUKGX1NdlBRBPodyqLoHpGxmuceudpTQQen3Vi00L8OXK-oGG-oGIKIGrS9GZyJCGkMM34E5n710ywqC652C636hAb766201ehI1PxFEUyyzoSdxjz2wbykMG1g0sHCc2VhGR7olMMwd5ytRloGsUApBshAZPvkshN0kNYYqLDxmcec420gZppjRd741SuVP8UNj30YuoSGaubkNN8kNMe5I-etR8X7k3lUMMvVj35NoUMNh097P57dGsok03ClQkptpnvGUU945hmuceudpKQrcsGUoFxx0mceckNc1n351gkMQh506lsecqaBi91zA1pMUOghcHbkMOsAF6ucTKeHeUWVj6BUwDDufV-z6aCm4T9DMAoBIV2K7exx09DkWqvfgiA212oGeNjU0U4WCuKNKQgd8Hm76f6JFDraKu2jgXiCe9iKe210ZLrS5secuK5j75zyqcL8UL9OhTcLoO5secmHUCzBg4lzezacyiWC6afsFxxgag44BecbeSlsc82gn45ccieHUYkxokMMoScxn7z1z5ccy5ucc7L0HzwwjjiaNDNxypOCe96NDmzkUOMG5jVumbYiH6f8NAIxYL7Cacyyyz8EO5cci13Ir56hhAkp2D65RVghTqf2rsGX8lNUgo_93IyHxNyPSRhGkzBkaUYglkclccaK8XzoSdywrFxS5gaaMec7wv4u8SdzokOP8a2FBxkCv2oj51gk5K96gHxPBx0cxE8ChRAbFFZ-0iA232oGeNjUwVzHf6n6mDg3eZh0QyIpYqK1LH6v6zwnvcyJsoYVql15kwFNU07dash9Y3GtgmwkOMi8lDz3DzpPgkA2i2jsPgWJNjaGIAc6GGsjqGxSGHgpkOaH9Hn4OqHaGxS9HeXcGGOuWGGUGG7qGJWuOaH9HkPRAxEw1U__U-vOaH9HYCG5CuFRcINVCCqpwpsPZTqGFP5GGGGE2GGGxOGGGGsNWGGGGGGHGIGGGGJKGGGGGGOG7DHFDCpFCCqtN6qpOpFCCncqdQTdMOGFM8g6c0Y08wnq040O9GS05Rno702aHbHaCMr4RuNjx1dk0FNSKyeOwjx84E55eSR1yHN1gAuawkUEoOq1pjCIF3KRodzpESleaaZn2FNn2bcwx9GQkkl8ckwGCF0FNUj1eu9cB0tUxJoVjdWFdcjNeG-64NGstH8aN0V7hw4urkmaaa82k6mxjy7o4U8oCs6ycikhgO9O_YcUyDd8s4wRudi3FFo09iBzdBS3Mdjg9Q2k3kSA2L75aQz8c0Z6TMBeahOy3M9SyFVCc05eeQ6C070Dg7FDxF3h0iCqH4yqoJylkECaf0jzf4u_yJlkbqpPePe4BPeKqO9TswbpDcGHQ38DpCYGJL8DpCYGJ6IspvbMzFwwaQoYj4iO2-he8_Cp2OGR38BQMYCpJK0000000000000ny0N0g047w2c0M5tTG05psTo702XJw1tpkS3oCHSq1JllBo3ze8HbOMp5Tv5Rnoe9GIKIKr1IjlX5e44Rm000000003HAww0lwpoaXLeqOVKMsTtYTmldwS9GZyWHSWGOI1ND4lBVocyXLyWHI74RmnmndwS9GZyJCG0000005cS2qoMygE6SjwhAOs3qjI6IDnmdjeK115cVhne65xj32xj22Tza5c46aa4No7geEWzGe9EWyyzG1SRcUWeEWzx7ye8UwkSIEqg00xkPjbp6Co8CdygL9CWfz1ssApcu6ruen03MOhcswrNV_VZURcWUc5smbRAW5w2Z9tqny0T0g047w2c0M5tTG05psTo702XJw1tpkS3oCHSbGI6Pde45EnwL1Swhjg602oAp0cxcO2UFD8Gq4j2C632C45f0n4shN0Y0shN74sjN74sgf4YgFxxhN74QueWarxB3g0L01K-01m1BwHKYg0HbCX0U0ntI0bHaCMr4RuNtlXtlpm0UPyaOYI6htTNtlS3yqHbHbCMr4RuNmPl00000000000000WVo805o6m2KXPyIKrI6TtYnmldwS9GZyWHSWGOI1ND4lBVocyXLyWHI74RmnmndwS9GZyJCG00000tcvM0aMcI5tTD5psTodKXUKIGr1IjlX5RnJRlBo3ze8HbOMp5Tv5Rnoe9GIKIKr1IjlX5rdk0000000002qQASxhj8ioOdwQx4gQQSxGGE3jiV6TD90w0j4wV0aC207PbFwyruwT5842Ks3J1UOY1BYYv6EylA1tckjtTbUHc2QMgaDoUOYUPsdFyyhdcLCa9CpqoIcxaBC9ALA21BVvB6shbSbCpr8n9XzyVdCrMaCi3nBStvcsRfBQ-mnB-kpN4-mpB-mjT75OvBT92QA9zFwytL0j4PqP0Go851UOY1JYuuq7yJDo3IXeM7pStweO4YB4itzyutTgrCRPwmC21kK8OlweoLlT4S9O887DxX3XDo3IXeM5P8_L1RlkP5GCCi3y0ZYA10cz80FxkNWD214X0e9Ogpak4O3C05c62pSp0f4sM3dOgaslcPTsjI0UD91AYP87j21ywua1T59i8sqoAxi4OBQMgdTg-erv61Q8bFwylKwO-cfy4h0K8UDDc01Krve1SJDyIM2D21w6WvctjR74ZrKwT74rX0sNqGDj11GGOGFFwwRjcmdkMgoj4Feh10Yg3U-A9eM7pStwaCabbFwArM6TPxV28AX7kKC23CpND4slPD5shAeoKnDllmllllhJckjcFBYNhcPbj5xA9kINcBW4OYJFwwhD4iZyVCmC9lWsD-euy9KgA9bFwyvTwTdP83UjeNNCo3zdMmD6U170xdCr0aC21D6tv_wTdHH0XgucL0pv2pYq7qSudTgryA21ne1SwKK2a1BVBZq0000000000000000000000000000";
    var zNecro52 = "5sbk7l1ne01tbm0a5g1oj_i9r1w8523141331414244242421441111111111111111f0003030000000003030000000000000000000000d1110101011013130101011331111111111111111c0200010000202020010100220000000000000000h0620000002101010602660110000000000000000v4001010110010201010001000000001000000000o3400b00000221x0Eoe84yxoMqe7A298CkaByVkMmdD3FQ-wgEAahaCjG5aFmImHBX1yOpJ6HpKqrJCVFMVt47rNW-aByVkMmdD3FQOuhLU0000000044321gMsg952NwQsf84ihcElb5P1AQre7jNZ0xh8kq54xhGliJoJnbS35APqdmPu0TrdU3xOWtL7HV-lb5P1AQre7jOhaCjG000220wM88230ww8c8531N0Ak042hgIGmbCj9ASseDDY0od63xV0yihF4GteEkGBqNqKnI6b9CQqJDEBY042h3sGmbCj9ASseDAa92qc0008210wg84A20wg84211x0Msg531N0Emc6zxoMqf84Og821g0wa4E2awiNsMpd5P1AQreD3FMWseD3FMWseD3MEmc6zxoMqf88ypcAv000p2_V2Udu5lxsSL3A8dt1xsSJ4ii6Cvyo-VejAVetAzPsD0IDcOsP97Bpm1putAVe8zNbbOQxoOdD0c17weNAr6jAp6gf4cz8OcL8PcwrCvJWWggdlmllpllAO5GmpCrlkf9DcKXOGHaGICrsNNGH9CIGGb4cQWg84jjybllL9ae8AjmRlplkfoCIyq2kunCRVKhdrlkVxtCQPRcxlllcxIMFD9AiGGHKWGGOXGGyLotTtKg6Tt5VlllTtllptRljy1UoBlkYw9ntRTtKostSVCkpzy3lkVDRlullnzllll5W4ilt4k3tTCYTCGHCGGGGVgU9yjKYVCsRlsRllliuvlJO9Cqj4CCCC1FFxaqkEyjiC342Ca1M3jljjnhoCAd3CqR_v5QW46zsOZKAKwxEsPIM982V98newgwGMgCoJklPqYo8gHCzRlkO7p-IQu1iKq_AZ8F8BTI2GKFeWFKyVn_0Q8nJJADcsNsiNLAHDc8GPqpWCgGGGCgSokPAO9lllTtllptRlhnJvBnYHogJbSN3nldeqvnQZzGnobS7llw2Vlk6Z2TtSZDTtTNtTrQ3tTuntTBTtYVCpPtTvdTtKotlzA3llTBTDtTtBsR_ZOg1IHSLTtTyuomGwqGIHCb8f1h5NP7CHsh8CD4mGHCGEfdYPlYNdsRl5sNaGIGGh4LCXLCGHyGHaGwKquzM1v60WK1ULtvguEAjCqHGGHu_ZyqSGHsTDd7yqeWoo36dBllllgdlllllk1llllll0Q5llllhXGGGGGGHGGGGGGHGGGGGGHqGGGGGzMltlllllRTlllllQRlllllRlllq224_KGGQ49YzTgmHLL1kUZdej2mvwfXCRBRkZCLPuEZIrN0H0MEO8ni0gcqr1AgwoSW4Wqupl0NOG-__z8ZtwnLwp1UDh9cb8Lq-3ZvPwpkhl9iDIFkX6mhh6SWDuXAxKKaAaNimZToTM5bC4jnBcXj8lllj8rcapOp4GGGXKGGIKWGEKK19kYnDUUcxrtjDtStskqoxfKXG8AxSIweNd1SOzOXIulPtnjdQO5llkO7RcVcyllltTllmntlklX3KXJO0SXELaGHCTcqWRN0qgNaGHtsMV2_tTacNN1GGsPWGD4mGHOGGGGyKoYRrAbllUXJVioJSlQRpBU76cJBKnCVdtfcRlcTj8lllj8rcapOp4GGGXKGGIKWGEGgIQzi6qEe4PrqqwHVlJAzalPn-MhPhV3JPfGhn8mqEKliHyNAlgRKoDtlllllgdlllllk1llllll0Q5lllliXGOGGGGHGGGGGGDc7GGGGOGGGGPGWGGOGGGGmZytm1lTtRTtTTtRTtRTtTTtRTtRTtTTUltTttTqYiLGGGGGwqGGGGGJ0GGGHaGGGH92OGGOGGGGaCzXiCLWljo91xcubbOFILOhI9xNulcY3A79YaStDbbUhqnktD9PR88CczkAwoXAGqLigIsPRmM7CayV0tzyIFjzb2P0fajF8IrDk4Yz82syFBAMFEoi58kAjv6-oF7AV0tBcStyBPdLJHTmoJa5j6CCCKCCKCC3FFaF0wOybaokgaoU43jljiCvuomDNz8i4zG4MUFU2Vz8VzCeoFbM3P6hP7csN9slaMltcwldH_aAyMCzEQM9kRY1drDKiFJfigI5W4AqRd3zNzaFNHuRTfq9ldr0BjDjWPqHaCOYxO4goOcwGoZG884apocsNP6hAsPP7csNP6hA5VDCeoVzCcz8VDCeokMMEGaCRYBhj8crkPTkWz8Ocz8kUMQpY8ydL4YhAp6hEDsV4aTlRcc6czoPs8cD0yFJeqe8BjnMAQuKkR8cd8L074O9syBf2ib6gdaqLD6tQC1GWDaJGFlNUMWmOkFJn3cdykiFRxc5GYoUkqFzztvjTiISpY3OeOfcQsguTpIQYgtCeAfnswf0zSXrJtSXf01YTpcwUKY_Sy214VtVcPqqLbcJboQummiGnjjDOlAkygO93Swgip1f4y218btOXAy2rhkMO4xpxE45x1G91944SDezTv-ftpCTsyfdFBJ2ye5cp2jFJwarrbaXagSmkRMddltdltbNFy4A85h10z1Ah8OswekYeNAX6NJr6NJr6NILSdzkUvoOHcz8Odxc6a7Y8YhA1UzyadhUz8Oe8Uyx_7shAiRdBJdmhN6S-CG-OGJcmK8NyGHIufmC3LJJFG7okagAs0GpYYI4haaVYooQxYoAWrp2GgAGqWWwFDMEwwhAp6hAasoqcFzNm7yu8Ocz8Qhj32D8I2FEoi_4r6rx1AU47dh4z8OcHrjhV3G7sp6hCYtyGC630s4Wz8j4z8VhOsAejR6PUNT6EX57a7c1jbx464AOdzoS0zXzEt8m4QfAMEN1c60GpYsAi84tVT15cO0xbGog2R40Fxwwkk3kMy3ekgg4KpOsD9jg90fydDw79OIBd5Ev5s1YbVeaFzmCzotnkURZy6j3A1Rcc2qaqqcBC7fFzToCzOC9hQPUkUSj1Zjz3yzGVYoo-RT0P2u00u7gYEkMMoYoyfytz8O0V6hIkkXe8U1I1Mf8kMMEU8EzUrK8Uzydwf58Ip0MGq63TkthvPfkp6g7dUzybcW6O9td780ZrIs464vfZhAow74cz8Qv9Scxem5MYjlPehjAV5ejAkRxIy79OasD8FOsyCAf0aoIp6AejIp6g78OczpOtz8O0V71eFEoj9Jr6U7pScD8Osz0IweiEwwhAp6lAp7n1PZz8O4OQ4woVgYAqeV3Tnsp6hAp2Cm37c1UDycz8Ocz8W62FBxlhhLrTcQk1SGabdOD83lhhnCkV0ufSa8iXgYyJcS0VQfVib8UXfNwPMOsgr84N8j60V0V8cD93d4gYHyM7oMv6720ddeOb8ScC85ccasEf0i8c99Ar6NI17N7B2oIaq7680CzExYbY8i5zoS4Ai0X6NN0kj8Y24yFx0rhgFxw2SkxXPK4AOdzoS0zj7xjb2zMxjgU-Vd7Mfxvx2oCXeMAyg7oS4xo2yp7yg4lcc2Ga5cc7HagAkPS1csyNn1RcKf4cA00007OgYEih8c8uwQxoOswK78kMMyljgMCjqSdYeOCd6jN6jApmg5c3w901E0hI8wMP4iPCAg8SGVI75ZhIthPtYRP6hR0mqayxPCspN6RnuwUI6hT75TNgaeo3PodA6hP7dTJ0pwRiga3CbLnOxdKINpLaFcjMIPtVj11_zfiA_QU4440uj0w2g42WXKsM6U0f48wNI0kwgoWPf3KXXL3L2f2f21tZTmo3s07CeoS09y9ZrLx_Z__x_x7x7x0K-XHc1K03P_cX0a0sXKk2yzKdOgp4XtZlEecE3REa092jPKFiRL6sQFwwjIwUiJjxxFd21-I0h05CyowP5LkNvOGWQ6SC9f5SP1P0sg7NP9OucNj11HaFc6wsTTf5Tjfd1YtTsPsOGpCTDeo5Ck7DcUTesOGYG1TTkYntcF2Q7oUL9UKZLaHCMrv4Ynrc7s1N0tKYHaFDbcF9OlGkEcYlDeVl9ihLcEZi1gucJBbcYQUgqHtGKpLHVSHSqHDaL8Rarc05c2090u38h1xC9KXi849gVza7cTCGVTCetTGKsOF6KMGs87XREae8qog6pJ0OGOMlwESdKZE500IPtgpyVyoCFyXNCFOQBNCoBsyFwwU7K090s38YEpy9pNgcGKb1JwOe8UK-a1Bk7yM9imBAYNNCrgcGKMeiBHHuYE0kMokk0IQgaMFyrsP5202FwwSF00hN2o403BxpynunN6nRtxWLaGCuG07yMQxEFSX3NvcsgA100VouXLbUzbWKMZmB35galOlOakE20mpEns0-2nFi089M8880YC104w83hRTsVwdM0u81A0kwgoVPe-XHKXXK0tMbHKVP0rw0Yg380C8DPKZ__n_T_s0Xw2840XXKIM7603PUcB63qJBa2pWGKb1BlPof47E7SC41TpJGo8fxqpG0zpy3OA3KMp28cu7tNi84rlsS3yMp7csnqs228es07Dgp8cw76XB0OGOMro6C23uINpNybcYS0bd5_-YPs1BlD0H1hUNJTJ0E00000000000000000000000000";
    var zChickenInvaders = "5n31sbkal01e0rt9m0a7g0WjDi4r1w31131331114111110111f00000300000000000000d10011011112111111111c22000120000200000000h06600000002600000000v00005130000300012000o3310be12131213x567458912131213abcdfghgighgiuklmuknoghgighgipqrs0e12191219343634361219121b7874fghgighgijkjljkjmghgighginonp0e1112111234353435111211126668fwvwhgvwhijikijikwvwhgvghlllm0e1111111111111111111111111111fgccjgcopmcccgccngccjgcopgckl0p2Xo5n3z7E9j31B0m4NQlcsmkMYw4PMeEP4QuhYcTyv2f2_2v2aL07E39Ya7MKu9Y8YcY9pxxAtF3sgn44ygih18A5KSXrIygih1rJKSX8A3caXpwTqF0E8wU5D7w4aoE82C63nyyA92pWf2aK6a3daoZ7gFxxoFGqzzcaNFb97mgeXyV1CXyh1CXCXCWGgcEwS5D7o4aoE82C63iCebEkPN5cc0dn351hAkNXexj32BjlQTCoiJOlO92O1Tsn8cTsi8cTsTsTji1B46MIUX0xj510kMMtkOMABdbagkMQbAMM80RdbkEpx49794kygRTnsAglTnsygcwrL9CKV4wHKKV8w5n3z7yL6k1oj7hkNNpjfTrGlPUMXX8whj3GKOGGFn3zhZ1V2UCJoMUQuubl763gob9GjlR4Qtrghjsdwlz3y11aMkNFj5iVD93ywoaDKxV01VDB3B740Jcc5j0INMKA_qsqDcWaovwjzXkMoS4woOguekYn0o1hUMFwwgCvyoAV0GUso-2-0y0k9EXaC4AC1aD6n_F0NN7q04NVUzy4UQw4wEWL8OcwkNgf2WO4PYVA3ccw8V4yAi6i894wAy2h80mXrJKO91nr86XN8wAi2KWXfOgI2HxNzU2FxwOCeyAb2oAaspoEf4Of4VKbpFRasoeoCzPVseA5eoeO2CmD6BjerYOmifcMtT5O3dT4y3dT4i3dRkwpH2PzU25ck41j31Fcvkxoj3-Bc-KpkMMGVDfOCD678R6P5GCoZzVwSsfCXwoXcrtqUsqf_-P3oFwKwi1y1tUCgcwrLfZC3KUygpKCA3dUmsvwgFywwaoomGpon9zgHxNEU02qewCfpQtiFHoibccszAyah8qXHKi8aXHKh86glTAPnsyglTnsAgeFNBzjjassOC7tJY31bev676643fyDnrls-JA50QQMldc3jj0QQYw0W8CaACvKZN2rUB1RV6o3kRNUORNM6oU0Xd70_29wBy0mrxIO2IMC2Cg8h05D7M4aoEfaoodaoUIFzFsz0gCm1PiC64yAbetBts06fF2UY0eGY4Ax8jfhUhlMNgpFYa0000AjSeaBO0qXKMKoZTosGGIdtToqXKMRTty5C7glBcMGGGCgllllllllj86GGFy3llllnaYMJsRllsRlllllllsRllsRllllllllllgYPBBsRllsRlllllndllllsRllllOHdtsRllsRlllllndllndllllllllllllgYwX1RPlllPllllllsRllsRllllliovZq3RkRjRlllllltllllllnllllllllll3PuSRPlllPllllllsRllsRlllllnmZm3RlllRllllnlllnllP7llPlllPllllndkf2uSRNlllNllllllslllsRlllllnnZpLlllnllllltllltlncljLdjlndllllsRgYplJslllslllllln5llndllllllRvmrRlllRllllnlllnllP5nlPlllPllllndkf7tvn5lln5llllllln5llndllllsGjvndllndlllllllndllndllllllllllkfcVpndllndllllllPllllndlllls_dtsRllsRlllllndllndllllllllllllgYQ3rndllndllllllPlllPllllllt9ZnDlllnllllltllltlncrlndllndllllsRgEK6dgYXJRsRllsRlllllndllnlllllllTDlXRlllRllllnlllnllP7llPlllPllllndkh65oMUwgrFcqkNsj7D93yorakQ-z3O01Pfa7ae81qooaC1pz1j9ZTgIMU-5FC5llkO2GGGGGGGGp0RllcgqGGGGVmC4HCGGHCGGFeldHUPEiKeGGAUFqbCzrPhqGHGG7kpxqSGGHDCDr1IHqGGKGGGK4S_yXLHyGGHyGGHz_UPbaUGGGOGo0jelmlmlmlgFPiNXdgJslllqMcKBmmlJllmIpeC6zNEf5llntllndJD5wSRNlllGXpNt-mllll3Pwkbndlln5llllllNlllURlllllnr3Q45RkRjRlllllltllllllnllllllllll3PuSRPlllPllllllsRllsRlllllnmZm3RlllRllllnlllnllP7llPlllPllllndkf2CSRNlllNllllllslllsRlllllnnZpLlllnllllltllltlncljLdjlndllllsRgYplJslllslllllln5llndllllllRvmrRlllRllllnlllnllP5nlPlllPllllndkf0Mkbn5lln5llllllln5llndllllsHP2RPlllPllllllllPlllPlllllllllll3PemlPlllPllllllsRllllPllllnaIRRPlllPllllllsRllsRllllllllllll3PcRRPlllPllllllsRllsRlllllnlZnDlllnllllltllltlnc1llPlllPllllndk0000000002of1xg3901AM2UFEY9zQ5j20C94Rtt8209xllOJmflVwuFIlRs81fCbKdAhVgMofeg7o7s0WWLCWNW_28fkM7g7k0WyPDrxWz1wZjkHGU85YVjNloYGoa7CowkRsi-qGUOIurlMMwc1RdDBTkntr8zRKs7CrBtm20ouvLU-Yy8Tw0PMg0aMcI5tTy05psTo702XJw1tpkS3oCHSq1JllCm3ze8DbOMp5Tv5Rnoe8GIKIGr1IjlX5rdk0C_DE4jvcs4fy3x25cegggd1O0qg1OEwNuMsI2p-VMGgl0U4O0r6g3zaxUgMoeG0w09GU0sE6Rkf7Uh1Sgg0e00V5CZ8zNe31Sgg0ec3CQXtEY9oa7p1k1dfLv3JgSaS3NKs7p1q3Aceh9rJoZ9X0cP910wVL81E-l3YaS000fyU8805o6m2KXPOHbCX1UTt-lRBPodGGLoKGZyrHOMsnN4VCm38KXUKGX1N5lBRBjodyqLoHpGw7MaKy4fswwwu0asoEqkc0sgA37k1T8wNqUuLQs6hAwJ1BVwawoDA0SGNXPd3IwJ1JV0dYelvDm000009Dg0oL600aGHa9CjuNdWLuibKXbptTuntS8kNa2A9SgP4Y14iea3NosD8UK-8OFUAub3AV6TuNk7r3AV6TuNIM0Sp6VmPBU6G-8Te8UGJDcMdlYgeVN75lIVC1GLydPyeaHpPcOsyZwtP8TaSsL0RnN6VN75lIVCpehuudKNKTIVCxGLy4RPdCK01HVyH8TtVzywYTPtFATP40AaAj1jtmg7c8TsNPwtEeplBX6O41kMgbi0M505842nIiGTnN10KqLgutVE6jAwj0T4eJHITg9yOQMgqMuH7T7mpuu5PlXOgc-a4xn8i5ZZttsxlll8i4wpLV0DgGXKNdZMqekTlyQMA3eVXtPKWKqLtXTGwpei3OTfWSKPt1VjVlwZm5ci_2uYGYYrCHTBc4zgZlRfmXK1Y8YaEusYH1g3MDHaLf6VGQxtvc8zaPeZTnP54HsTORYNpHGY17Dvb0k0YFYJHdYHCHTAwpVgAaV2giAZbbHHA95443aFKH7Mz0Mk0WDMOA-SG4V9NFNkwwWzLkrTdeabKgVX5g01hUCzykK0wtg5FgwTdss2w7xLxZnXUwwndnLumxE2C1LifmRTrE4Npqo8dobj2g0LYdWXJXNKqLtYtYq1AV8f7s_HqXdQ7zfzm3RvlwE1Tfuluu5PlXOC35EvcmidAxvpp8kQlO5dcyfko62w74ZrnrRsRuwsXPgcD91UXy7mRSrE5847Kp7Cwpei3zcXCqXKXCHi5VYMycHcXXtvckiJPkNtvcmqWL0g0000000000";
    var zHPAuntMarge = "5sbk4l0Ue00t8m0a2g0Uj_i3r1w1111111111111111f0000000000000000d0000011100111111c0000000000000000h0066000000000000v0000000000004000o3130b0wwoga63y18Emc6zxV0yi9B2FoKocCzpMWufE4a92yhF4GpeEkGBqNqKnI6b9CQqJw044330ggga111MM4443218Eib63hMYwf83OpgGmbByVAQre7zVU-yh8QylcBj9R2Bk00wwo42220g88e10wwwog952NwQsf84i14Elb5P1AQrb7jNZ0xh8QylcDkaliJoJnbM04210wg84210wg84210wg84210wg84210wg84210wg84210wg84210wg84210wg8440p2khagkyi3w2os0E4o0iqew4UA2i1k2E482E1xh9Eqoyy3U4gE1T0eU1R0a05cvYj110G1u2Q1M30wiEE0hPE1cQ18SOy0a3Nw50f60uc0Yo0v293N05dg801wU23wEgk68FFJtBgeU0uU180E1Sw2w7i03SxME3Hwk0O0sg0Y0oG235m2I1M20jg017Ao7s0Ww50eU1T02P32h1RUeE1R0eE1g0Zvji21AaggsxjP1i6x8s3zNnydEFw5g8-6qbOkAdAhwwk0wgk0wwk0e0g602j4r0BcNb4MRgxjf3OgR1eVC1GHeVAxG2-06okiO2ykwEU0Uyu8B86e0u8Dy9Vw-cmsWaQhx0k0E5i2w1E5S1rr074xigH0m0eNC0w1nyc82w50Ggk0d0Ggk0E4pk5Eagk0O8izSHHE2OEkO4M9yynnf1i2E5I1o3aHKo2A5gfO1Uhfx4-4s0shf4jUNM3N4YhfcnNyPDhmyI82w50Hgk0J04Mi4680A0i0Hqah5q201kPMc058yJMHxn0K1u8KPxn2I22w50Fw110I8aY50a1mA6rw0805U8054w56si00000apAlzdahxccVcj3dddpCa91COJczw7aGwzlmcQFyOA92C210jNf0L4aoEA7xy9C3wG3M7N69p69V1Qi06pzj48gQ1eap8q0DaOgQ1elAxE2sjOgQ1e4cMT6MCqypFX9grojJrgdE9SZM76k7oVHKeo0u182ATzY2g79WYc7gsoYEdgjBVgqG3BVgqwDbOl842cw9T-hMoN7M80UDN0jCqe6w9Nf93g4U7v96hx9cSTnAsGc00000000000zjcm6hOgOe16hQl4t0Oeg6hQMhh1a0k0h2w2gk0i3w2os0cA3xs740E1N0a07w2CA458kwwXquoagOagU75yWYhONiUG16AioWcxAyc22w50a0k0E0s5wc0958NEi4wd51jegj4Ad0jN741EEf4Yi6w99X0iAaB0pgq0Bc8k50a1iMa06wm4Q10g1Wh9C_2i1w80zFFw80zFw820frc2w50Fy1g0Q2F1g2wh8E02A7yEC8bxxMEBWk872ygUkc72y4q85wh1w28k0i2w1E1g2g180A0i0258pva190K1k0xF1s2U5obw7Ns0cc6w9F3jhg4-1g2w50E0503gao0k0E4hZA8eU1T0eE0gQ0A0i0904w0xUl1N0e81N0a04fqvsr88o4A0Fxu2w50Fk440Q2xgk0E4iqpzihFA410000000008E6wAMq2o000000000000000000000000000000";
    var zFatRatTimeLapse = "5n31sbk5l0Me00t5m1a7g0Mj_i9r1w1111101000335222133333811133331111111111f0000320001003543054234400054430000000000d1111110111011000011110111111111110011111c0000000000000000000000000000000000000000h0222006000000000000066000000000000000000v0000110101000000300200000032110012340000o4300b52Nw0qe7A284441wggga60000se742nxwOqdD3FU-wkaliJgFlb6jdER04ypgGmbx31A622xwUsa84yxoMqe7A2bMQse7jNZ4wgG5aFmImaBH9CRr02hcElb5P1AQ32wMUca342xoQsb63O15U00001MWufE52BgGkal2JAPq000Mc66zxV0yi10Mgg4311jMoc74yh8EmY00000Cf84iU86220wo8akaC000p31Y12HNzxjqB66C2C7agcq1mRIagovqzIaMooIYPf4YgCfeRIraA238v3KWHuFWzuHqSf3tXoY9VCu9UzMDpSdXMAfxftpLkZhLlJr7xSY1owMUwpglxUwqhlMVEk445sek24g-dz-aofs-cq1mRIuamEX2I66bfcPNf49zPJr6OF0wO79UDydDysDyu8Su9Ou9h2DoStDoStDoStAagQ91jIF2NUiy1a8I8wPIG884p84h9OgkBAGsk3w4Z9MmbcDFwd-5wSkB0kImNQwdHtxigVl6lmk5eg7cr-2BxOKf-rdNGEPNMpmSMwjPhahstQP3Ye5xudBs5z5It83rK5p3BkplpgugINCU7ocHz_CLsOze71Bpswi182cCgZNPcxOcCgV6j8AEFAikcObpAic4O1FzjhwBcEC4Poqyb2ib55553kAi4A20aga12a9528AbcqH4c3h2Fh19091uy32y45eO34AwQu8mH1xyOFhxPaosF0MCfeRIraA23aJ6e5TtlLkZhLlJr2A67KZIfkxNpVCu9UzgaSJzM_MDMD-JXGuETWSJzMXuS8-cYPf4YhUjJr6PUjAYjN6PIX6PIX6PIX0tDpSdDpSdDpSdDph2DoStDoStACLKeWDyuEWDqSdDKlucsbKTurVzNDpSdPtS7H46743fGMYgd8GUsQfE8aUsMc8-dz-afwzUhUPIX6FqzIflwMNpkEMVDyu8WDqSdBi11DMTtTC-oY9StzsTtx_xfxcYjN7kXeNK-4-4XKYXP7xePIrKXI0nUjUjf4YhRePIrLxfxeXLeYNUjIX6XKX2Rm8o7tkowIR8akgoQ2JHokgwKi3XolwMNpkEMVDODOxcutHoSl846lGQoUntRmZjR6ZmRUgF1xXLr7zfcPNfkucXeNLucHYpXHdWDGdWJHoYuTJzMDCpUDyf2tHoSv2l-7tRmZjR6ZmRIu6XSMIgosgcEaMYgd8GUsQa222K7a32bRucsaN_5c7MDMzgaSAgoYAJhS5occmupDyuEj7DqSdBi11B_zTtlLkZhLlJu4ueXSNUPPcYjR7zePIrTzcv6uWPuFWzuHqY8YuTJzNDCpUDGf6tHoSv6gVf4YhIXeNIXeNIXeNIXeNIXeNIXeNIXeM7pStzpStzpStzpStwbSiNF8EM2a240ywx08E8foM2a20002Y0eW201m1BwHKYg0HbCX0U0ntI0bHaCMr4RuPgdGGIOMspN4Vum3pG-9KKMpdRBRBjoebKXSWSrE001lUNMzwydiz3j1YFYEQ2JHokwMQJhS5occmupDyu8j7DqSdBi11wfxTtnLkZhLlJr7xKY3MDCpSuoY9StzuY83UhTmrRfkrRrmNUtLr7xfcPNf4u4XmNI-41YeXGZWDGdWJHoYdTwb46743a2If43iaK7d2wwwIoss84881j71W2Y8Sl846sDyu8Su9Ou9h2DoStDoStDoStAagQ91jIF2NUiy1a8I8wPIG884p84h9OgkBw001WL6e5N0FhxS2C7fz6wlJr2A67KEX2I66bfcPNf49zPJr6OF0wPfMXKGTGuETGSJxi32RcbwagMIGkgkOA5a8c93jIX2gL8yiJnz72DBacfdj3B86dWJHokwM-TJxm335DCpUDy4NFSJzpkwgpmFNBtTlrRfkakonlJr2gKVM5km42kaAl46x15ogo808gg00000m5601olagGrd0000dQwgl-FP1GGtc46GFO0GGtc42GFP5GwD8mGGGGOGFO412TKGFP4GGXGGReXsM9C_a0xeWGIGGOGEvAE5DdlmllsRlullndk3RllJlmRluf_LdlnzllURluatTNcTU0O5TllBlmll3YkwHVGGOGHCGHNGGVGwfaGHCGHqGLb_TGGHOGGYGGL5eXUCrYEYhP6GGOGHMGG6-o88OmqZ0TtTBTtVllSpCprRFfoJTtVtTuntT19pCTtSZyntTBlin6pCs8TqrV0wTtS-ogdTtLgJTtzUSXRX1KXLbKXOXK-bKXuNJKZvc8aXKYKXLbKXVgiV7CXK-bKXOXKWXKTI2XKTj11gWTcqGHaGIGG7Q4BtYTtTBTtLgdTtVtTsztFRTtLC23tTuntT88YzNtTuntTNtTuRl9ZVCoWg8a7SVyRlcUG58g9O8Slc0d42cNC17pkzIp5ehBV6jApmhwBtag4s0aIw9DyuoOczbOcCiKK6Zz89a9fodTtVtTrVz0TtTBTtLoJTtVtTuntTBTtYntTBTtLplTtVtTttTrSttTpTj10R99N0DaOXH8Jf0YP5YjPtRO0TtsMtTudTsTtPtTwt9fy4kIPcOcP1AYPcjPtTaGKaGIGGsMGGIGGjMxlsNaK1RuhqmrCpCvDrKVwvfXL7ZS46XCXL7rL4rK1VChCpKpCpStKVllNRkV0Rltvlsll7V3O-FKIKWObkMfcNr4TP108-XKQGFX1PbJW2z__eXKu0HKXXZ59W0XKXeXL5p9fLkLOGFO1R9fN8-XKHKXYbKXOXKTIaXK-HKBLowd9TATrSbATDdTtYoFtVtTuXtTBlivdXCfgdRiu2_KLo6WADOh9EFsntTydTullapK99VtTuvtTVjludRtO5TrC3ll8Rinj10JaD42lqOXH8JjePcnNdYMg2fKXxaGVPbJW2z__eXKu0HKXXZ59W0XKXeXD81p9fLkLOGHOR9fN8-XKaGL2XK-XKXuMHKXXKWiC54wC3-jAUzAVe9pejyejAUzylmmA1eNAVulIXdmPApeNKkHtc40Akjsg9lHbKIyYMncPIiPtTHtTOTtUTtPtTdTnckt9fy4kIPcOcP1AYPcjMvtOGFP61GEaGmZywI0vrsRDlmfgdTtVARuntS-ogentKgdljS5BTullogntYndmZzptSYwTtTCTtL8llnpdnKntTBTuZjtZjdoZ1ntTNtTOWXLaXLdKXPrKXOXLcKXKKXPKXKYKXPbKXOXLcKXLbKYOXKWXLaXKWXLaXK-XKYHKXHKYHKXHKYHKXHKYugbKXHKYHKXHKYHKXqpAQmlcoS4MEqAwNN52q952pcfh8xid4xh5cx82783B4Me84jmhd0OGHaGwidk1N4GGsxaGIGGvy2iry3llBlmjamntKgG6RBlmllpllwfTJlmRlp4RJlk5lKA23llBlmllhU_-UGGOGH9BbbK-4dHaGIGGOGFW59l4QDA6XKTEiXKYKXLrKXArJdYwgrKXOXKYKXKf22n8Yll9VCpClloZ0RlapCpDy4DDxllBlmlltx9TrQ1tTuntTBTtLo5TtZTtS-o8adSC-g85TtVtTuntS5X5ghV5X1KXLbKXOXKWXK-HKXtc453HsNGGIGGOGHMTqSKXJX2KXLGXKZKXKKXLrKXSXKZKXKKXLrKXSXKZKXKKXLrKXSXKMXtTttTuTtTJTtXtTttTuTtTJTtXtTttTuTtTJTtXtTttTuTtTJTtXtTttTuTtTJTtXtTttTuTtTJTtATKg4F9wsgaGIGG1Blmll0AqE3y9llBlgcGGP4AMrllBlgcCkIKX18rgdGGOGE6llfsxcOD46GHaGICtOXJO5TqOGHaGIGGM7XSGHqGIyqSGG2GTi11GGOGHaGDYnlsllpllBlmlllRjEwwllpllBlmv_rllBlmjamntO6RJlmllplk_0vLqGIGGOGHaGKkqHaGIGGOGG_-SGHaGICkIKXt840wkiUGGOGHaGDLgEqtSZ0ll9VCpzQ3llBCpBllzVwwwVyvtlmntTBljQ80BWbO3lkDCpCpllDdliCpCpEiu9sTtTBTtVtTouwQYPKGFbcPcWGGOPcOGGPw7cjXGGOXKYGGW1iZ7KGFfcPcOGHeqGBcPcPgAYiVKXLbKXOXKMY0vvRTtLolTtLodTtXtTttTuTtTJTtXtTttTuTtTJTtXtTttTuTtTJTtXtTttTuTtTJTtXtTttTuTtTJTtXtTttTuTtTJTtXtTttTuTtTJTtxSXKWXKZKXLrKXSXKWXKZKXLrKXSXKWXKZKXLrKXSXKWXKZKXLrKX2AiMg5RqgE0nIkykjiUKXLbKXOXKTP21KXLkrLnIiXKYKXJYMwbKXN1bAurKXuNHKXOXKWXKTI2XKTj11gWTcqGHaGIGG00bM0WU805o6m2KXN02IKrI3w1tSM0KIGr1IjlXd0SGGPb1ND4jBVodCHUCWX1ATmnmldwUKXLrHpKwLgxHF-AYwRl9VCpClloZ0RlapCpzF0wx9UV2RlpllBljQa4DtLg5TtVtTuntSZwntTTtTrVwwETqrV0wntTBTtVtTon8htdhN1GGOGH9BbbK_51eDi10GGOGHqGL8AkjiugrKXuxbKXOXKZKXKhKQTO11KXLbKXOXKNKC22Oxxeodlmlleo5ljFwwlleoJk2V2RlsRlrlkV20XLlljC9lkV0lluatTNcSWg8c0yeoRlmllu5lg_5gbeGGIGGWGGtc42GHCG1WGGSGHqGLb_TCGHOGGYGGL5eXUCrY0p2XGGOGHaGxLoF6FlLodTtVtTuntS-ogdTtLoOdSC-oglTtVtTuntTOwBOfdTtYntTBTtRTtLo5TtKC22xRKoRlmllplkfE9aXVKXLbKXuwrKXOXKV6XjHKXvc46XKYKXKghV7yXKYKXLyXKZGGjXPcNQwgkfJP5GGpNkagwjAhIGo0q84pzc2eOF7oOaszbOcD8OIz1aWkw8U0lp0jf4YNAp6nApcBtsdX6gikiuMrKXOXKTP61KXLbKXuNrKXOXKYKXK4XtUKXLrKXuOrKXOXK-bKXuPrKXeWo8599e84_mntp5FU7CoJyurKKg6XHC3KXNKXCXKrKY3F9YgyBCpChCocDCpyurKVllNllBljC5llBlg00uWo8b65n5lmlleo5lnlljCbl0KA23llJlmRlegDxrPlkVylludlnyDtYjd-0cxtRlpllBlj-VZ9N1GGOGHaGIGGsxkqHaGIGGOGGXQT42GFQw0aGICkLaXI726Rlllln5lkTIkBkjiuMrKXOXKYKXJYMwrKXuNArJdYMwHKXOXKYKXLB1bAurKXUKXLbKXHKXuMbKXtc453HsNGGIGGOGGrQa4BtLg5liupCoZ0RlppCpllo-o88eoCV2llptTullfgw2nEL8dliupCpBlmsRlapCpCx9UBPtTuntTBTtxuh0QYNV0GGiPcPcGGOPcOGGP0sNdN0GG1BTtVlk30kLh1JTtxFBdg6_y8I3KX40000DUFo49nty-5TulTtRTuu5TtVtTCntTBTuptTuntVNtTvBtTD5TtVtTCTtTBTuf05TtKg5TullpNtTCntSN0KYCrOKXOKXLbP9PbHKYHKX0000FzgC7igc0j2Dpj1xctvi546dPtSdoJ84gE1AwFRq7Ji5wfyFMguc0YpSv6eRt7YoTd7Sdot8f60p8atpG87Nwe0-93UjhT6jMJN2pUm_N7s9whA0LUnWzGMVT4thR6hT6tPR7lZZT57sp0bJWzyMVTftjhT6jNT4pujDr7ktNA0KUpuoM783vvPd7kpeR3Vd0au63i3pVw5f7ktU7eVXCqeEOuaUXpEUz9UXzJDGeoOuuVx4O0WBE_kQthAYjNePhN6jN711IZhVhAYPP2Ced9le605Em3ll1GGwRlgqGEasBi6CgQO4qC20g9wjAVaC28hr6I5dddeuC2Mpel4qg48wnIP1IV5d2og8-ibFwOuoXhW5CGGy3kMguV8lc4C5c4x1j15zCeB1Z9ub3AVfxmNH3jjjjx5MMpeltUMy1uPc6PAkFxh0zV1WnOsDIxSevFUDCsDwwUnOsG8KEXLpBWmC21cM90dckxXoe9FWBj51HhpGGEw-uy1j55ygkMgoi1zyel1Go82nyMVeiFwylIqMQQQQUhsc6jBnuk8wnIP1IFybg0kNIEUxcadX9i1z8FFESqae8Sd8IDycy5FESwV564uiA56PAQ93jAQaggcVfk92PIX6PAQ8yOy3a84rbj6CeU7ByokQthAYbYgCu4TuUxce4M8O0nsc_ko3Ap-vPd7spf7YhDVbs_oVzGcw5_7YNDV6vDYPhR6jNT4p-iTfSeoWz81vMLP7urSZRd7spf7shBVbYXoWzKcw5T3bP60V6vDYPhR6jNT4p-i_fSeoWz81vMLP7urSZRd7spf7shBVcsXoWzKcw5T3bP60V6vDYPhR6jNT4p-jffSeoWz81vMLP7urvksNIr6NIr6NIr6Ndjz3yZzoUzoSdzoSdzojxwdjz2AySeoVzoS2ouHHoSe8SdzoSdzoSeELGrSeoVzoSdzoSdzoS6WS-0_4Qukpf2L4ufX_4thVhA0KUnWzGTXSZRd7spf7shBVetIthT6g2XxCVz0syevDYPhR6jNT4t_LYhR7sp0b-5-EWKeTR7cr6NIr6NIr6NIr6NIr6NIr6NIr6NIjYELoSe8SdzoSdzoS4Mo2CiNTM41U000000L01Lww0lwpoaXL40aOVKMe05Tr02WOFI6NdnIQ3qGHcI76shenBwSqLyrHI6jtptpkS3yXKZKJCW07N_ExYpEh1z9Uoe8jf3R7y4MUj0z814f2_ktm7uTKFEXz9UXycL9PJzGeUO0nscTco3A1PY_CqeEOuaU7Sqe8Ou63wwSuoVz9VXC4j83GmzZjhR6jNf4Xd74pf4s46PR28kpfcYMFzzidj10pv9wOsBj148Jzm2CCCDdj1X9OEzi0x42ZCodD8FEYwg0004Qxy98kzi1B8af2dDBwVx8UfkkMEY8j0zNw4gZHGg8c96S_MXzLaq4g8OueUzbOrJyx82cw7xTwP8yhwegS-_MCyyDeELFLg0zoO0VWy01Uuf2000001KxQ8yA6jhIVfcreOawl1o0002C1O80ugA1zj10gTrUzcOsz8SXSJzbOszzecPrUzcOsz8SXSJwbFN2MwxffsXLeYNDpehArtXmNBVehND6pJYhCpehArtXmM7bOszzecPrUzcOsz8SXSJzbOszzecPrUzcOne3eTkE09pwRas4iD9igmo5TTTx7B74RNn4shNlslN74sln5shN75ky3n4shNlslN74sln5shAs8wi4wfwBLtZhOyQMoeWdLy5e61c3dLoqo8erJr76o1JZ8IMtLaj1LaiwPaITcA1BpBgf4QxkOaChkOaChkOaChkO8aA218kF803g06w0aD39cw0F000FMQTg2lI0xWhih06YEOdGIHoOdGIHoOdGIHoOdGIHoOdGIHoOdGIHoOdGIHoO2FMlmlIp6RmlIp6RmlIp6RmlIp6RmlIp6RmlIp6RmlIp6RmlIp0tGIHoOdE7aScxe5g7aS4goUI46RIqE1B90NA9hq1Br6hKws0tNykdZNQVCSPrMsXIXrFKWXAouSWrIYJCTcSrsPphwTbpTsPpJOSrs1ptASo6KWX3no0CdQUq09PJYANi0AU8g47GA1kOaChkOaChkOaChkO8dcyFAlcyFAlcwh021My3Gu1NC0UE38300sk00f6W3ywcxdQeVwec01KvNgedQ2cCTNKEylNKwkggaqg85_J003rEfaMdc43tSJ1rEdE6XKk3sPN3jwKszD0dE162pVXKrj0L9WTtI0udQ6lTL6XJwUTgtQ03ztOX1KXRvdVfe0ruTNKVuNAsrKRI1UPcHC0eA6C23TrCsgB2B-lT28cto0FwwlQyzNiC237dw9yRUF8wta6a_PtpwnlZT0ui1ni18Gqiwgi5j8Gp5j8Gp5j8Gp4dQMi0Q4cP1kOaChkOaChkOaCh9XChkOaChkOb9AlcyFAlcynj8Gp5j8Gp5j8Gp5j8Gp45jxxDLj14i0ZFwwZWD203DewWFwwTNL9yQ5j14jkUho0EZjBxzM4FKJac6F2FAlcyFAlcyFAlcyFAg0000qkD8xiwKNkOaChkOaChkOaCh0000000000000000000000005xQp4Bj9E0000";
    var zFezKnowledge = "5sbk9l0ke00t6m0abg0kjgi7r1w55515511313111131434443311111111f11101100404000045041144400000000d22110211010111101000000011211111c00000000000000000000000000000000h06020026000000000707000000000000v21103300102000011010001123440000o1330b28oNAaoN2Cct2lbo000x48gxAakNQ8iBiM004gO5ct2lboRPTMy00h300ox30001w68h2wp2nCJddyCCCjxhHHFFHHeKKCCKJkQmQNwQMIh2xdlTC-rVLC4QqRcEDq5WPHeIWxdxsVLC-rVxjgwrkQ8D5WkWDE3GeMKrVLC-oXJddjnHeIWPG4RnerVLC-oXLHepnHcPHeEVLC-rVLCdLLaBVhQ7A7Cew-rVLC-oXLO_CuqVzglWTdULydNjlhgusTesVzsUXajeBv9i4FFkQkl5ihhsDrkPjrij9FkgkyQkOM003QMgkgi763aM7aPsH0YEepDVKlCVmpBpKk7cPITaPsHcOITa3CpSrBpKlCpmrB1_cPITaPsHcOITaj6XtSsTaPsHcOITaTJTpPsHdOIPaPsFcnJR06sTyITaPcHdOKu_lZ6NjaPYH0sHeOJ3TtDdOITaPcHdOKuTupPuaPsHcOITaVXtSsTaPsHcOITaTLTtDdOITaPcHdOJXtSsTaPsHcOITaVXtVDdUHdOIPaPsHDJTpPsHdOIPaPsHu_ld6PsH0cHeOI3OJ2TtDdOITaPcHdOKuTupPuaPsHcOITaVXtSsTaPsHcOITaTLRvhIkOI_aM7aPIHgZTpPsHdOIPaPsHuTtDdOITaPcHdOJXtSsTaPsHcOITaTLTtDdOITaPcHdOKuTupPuaPsHcOITaVXtUDdUHdOIPaPsHzJTpPsHdOIPaPsHu_tSsTaPsHcOITaVXtVDdUHdOIPaPsHDJTpPsHdOIPaPsHuTtDdOITaPcHdOJXZkQrdOI0OIXaMfaV2TupPuaPsHcOITaVXtSsTaPsHcOITaTJTpPsHdOIPaPsHu_lZ6NjaPYH0sHeOKgZTCsTyITaPcHdOKuTtDdOITaPcHdOJXtSsTaPsHcOITai6VtTCsTyITaPcHdOKui5xi11x4ma4h8Eg5mPgSxh0k180Aiw099U0sU402I3b1ntUw1mndS1M0KXo0nmldwS9GZyWH1JRlCm3ze8DbOMp5Tv5Rnoe8GIKIGr1IjlX5rdkj00YGCLR0FzOlFZ9mxjmwVjlF2Cd9mAkPqwE75939IIIOXchJJ6TdJOrbbcKPdJJJPrhOrbbcKPdJJJPrsCMrbcKPdJJJPrsCOOMsSgN6-1KPrcCOOPbJPhJJJPrcCOOPbJPrrnjhwQMLLN3x39AU7kasXujeRQzEU_CWYLDYC-XvFPJVRcp6hQ7yF3bUX9AUbpFWRQxEVRdePHKHHO-eOrHJCClcUrlc8bkzsi08Qg4c0OAM5cH4JH0IFc74wqPcHcOIPaPcHzcHcOIPyHaHeqPcHcOHaH8S0owp8cCgTsHcOKdh1HdUHcOKYXHcOIPaPcHcOKcOIPCIPaVPaPaHcHcOKIGIzq2U5B6wpe0Xn6pmpJpClRDlpClCpmpBpClNClCpmpNlBlDlpClCplBwG8gjeAcwCqz1gs2CdJCjpppBSVESSSVJCjpppBSVG8A4jhP0uEOza44syd0yws8tXGeEWzIwi9CzntSzqdETo5KzvtSzkr8QTHBTht5QqoNIOzacENhccyQ0000000";
    var zAVGNTheme = "5sbk5l00e0ftam0a7g0fj7i1r0w23200211f00000400d10110101c00000000h00000600v00000010o3320b4xci4Ql6hksi4N8jhkp5hx8j4xd5hkl54zgid18Q4zgp2aSkMOh060p6hAi6gy3eF8whJkwFOgkX740OszynqS0pShyeO3aOwpCM18a0Yg7C1fdsM3bOcLygpmk3aS0sM7y0YMb4CfKNDt8EyPymlBVn4xVwmbCdz4upVDaOIz9UAfc2NsNIpncYPAV2I2217c1WwmbGdz9WDGsBi11xi15x820-48kIUwFxQw30cz8O978h1Dr1BkwFh0A5eNN0cD8UBSJw61p68p0cHp1Cr04wE3N0uo4YRP0cL8O-91CpgcJe1ylFDGIplapFBe45iCqpw5apFDjBJc5cwyxy8Uxu2c0bt7WxKPdcXe0P5GpOu3j8kUxvOlMrCVeU5CB20FAPjdcxMClOpSr3DGQPjf0aBcQPwaBcQP0akPj8ao_8wNAp68V69p0kUiBtekpy1NL4pKgVT13SlIpChCp71xu5e8wmOm47eaVeU5zONUhGpncozApehLHkPjf8aJcQPwaJcQP0GQPjeCiR8yhyDco1I5v8Oc1ScLoawb83t0y1eh8cBC3q342pSAw81A1iwDGp1BsTvcPJsM38uogixGsCla6ipgpwpvxcQONxCoYE_Oysyv093bKx3pHMJ3ypUGYF3uT9CClaibYEVzwpfx_ZPeQA10cwfxa5cwOKrLCpSKo1AffnUtCgyFgOja3c3bY9CCmD39cMxPcQPjd25a5dkljdcTtUhAO00";
    var zRickNMorty = "5sbk6l0le00t9m0a3g0ujpi9r1w1101310111120323111332112111111011111111f0000000000300033000000000000000000000000d0131110111213010211000110111112001111010c0020101000002000000000000000000000000000h7002027002600050600066000000000000000000v0000000000103001000000000000003320000403o2200b288xAaoUNFkJznfx6g00000000g8ERIkNQ9kJzDMFatM00000000byeqMNzCcoNzBalaw000000000h46ihxB8iqBIrhY4h000000000p2gm2y3G0491ZA9xPApegC5ehAV6jA91jA1Osx86szpOdD8Osz9OeVO4g9O0ExjAtjAtPApegC3ehAV6jAu4V1up1i1i20CCCBc_2GsqT0C0BLwpehaCN_0aQkQPdQ8L42o4mgwoihbMwCpkFFYaUic24kGwd7fBLLLLqCNTJioi0w000000B8jGaaaa4xoO6FyOF0wNN6wpeNIao8c1Ou9Oaqqaa3KKsCCNu5jfxdv4bwdY39Dt4VuYjPLCL7vUlDELXeVItoB5UzAgK1i4325AsgeWGssuRab7tduejIgXADlleivcxdj5Ni11x8m5c46czoN7ylLA66lnCLC65dnrSf5TttTt4Rt4RttTttTpTdzoIlv5lCrllrCftTJTtXlluTtXlluntJWou-EOsCz8E3hAp7z6hhgC91T5gTu9000aqV2gAk3i2N46cz8i3x864MUOcz8Ocz4sz9O1U1ApehAp6jApehAp6hAp6gd8mWaaaaaa0Gogcaog4p6hAp6hA1pxpfcr6PeNIdc86pOe9DydwePb869j2D8DoD8DpO9S9Vzye8Dy9UzDg1kMwFOf2acz8EE2CNA0iZcuoK4iymCabkL2ZtnoQxsEkwgoEEh5z8O00000000009JeTtHXSr7kytowrb46pp0jb86ppwjej8kMch0x8139SczpOtz8SsDoOdD92QOiuBCjc-cPUN_cZNAtNA1SczrOtz8SsDoh1zysBc6cxa6rOwJcA6pi1zMzKczMzGe8UzyczoO05pAPa8mRZwpBvsO5cz0idky0f0ecgpDM1XxCblrmNUEpbj11KZLr3PtXuSQNhrLypULy-EOebIeRIsnAYnuTJXtXuSVCTq8mCiixDBc-kOO4z6C23dpd1VGKpDCpp0hnxfslUPI1sNpgF87JBCbtXuTJTJEwTJSOBLH3R6oAbD5RBeC45lTBIPrJ_tOdJc18BgFwrVgA1-jIp6PAX6gA3ejIp2A238mCijZcOpBy3cIw8gWBC3Wbc113agFAbj11TSgA_ARARARARARAQ00000";
    var zThroughzemachine = "5sbk5l1ce00t7m0a7g1cj_i8r1w514535411356231353113115111001100110f000000000003030023000003000000000000d110111011102001111111111111111111111c003003100200020300000000000000000000h060000000006600000660006000000000000v000000000020210040000000000124032003o2100b0cww44114i8YsQ9yxqd4keDzVgWu20gMYoQiFyN4Mp0wziZgFlaRyRwK00001IUsBnjJWw94xEu0-vImXdKP4wN8k00r0M9c2j0000A882xwEoGufDAidaCi5yVAQ26zO0UWa69PyBgGkaRyRsroczrxOWscSzlCPqdmrNWYuLDXUF0ryTo000l0lo5m31xgwk874xN94Unc4j9sSo73NEMwF94yNkCqa7k254zj9kWxAPqdmjdWWwfTQ20_vg7zJUXsen3BKNodw000xodgbg8t1yMoBiFkGj0UMej3QhV6KnHBzpKU10C9w428CiFlqne74VIa5afTY1WWteDjFQWtfDrVOPpISp9mmk00p32ui2FNxAUiB45cGkkkwWB478ebNeapjxCsDchPdA6VGD76DmOsEil8OwCioGGtWpwxRC3UnCAwAuy1IFrqqUc7mfEx2WCkVVpEKNeeyCgGyGGAGAqEGGBzzyzz8hlx5kFSsLFAaD64I5SHfzf9gMQu92RFgiSVdaskhwWNZ40mPasQIOD74ntLxpjMxmhmlm9lCRAlBkIsskkh2aI8GDaPBZcDkUMNwRa8apkEEF2nYwV1NupcZPejycimpIwUPuFDGtLz91UxXjdcQODdPbmj1kUMmI9a5uvahW6Ba0wrdBJOqkUEz1RzMw2jwCle6ym5BcqkMizOzcygC78D8ArIysxj21oI896ij0lIwasC2FFj2SC4Gj34SI7Gr0F1hBkV6jBpmhAlqxAi5sDjIU9rBVmlDlVe1lVeh0ggncfcGXxHtSiTWkNVeMV6wCosI6nlVKV-vw0VD2FNwwoFh0PaB558iGknO3yYOpjxCsD4oKPdA76rRcZjJYp8ewZFCCqpjCVCjBIC2FNxIgysti1eu63rHrA55QPBRBPhMcKIJmH09xPBTbKgi2FNE90903asq4OxU8fFya0FCCupCCkFwIqskjAicNp4V4BcehegFx0cm44z99waSg5ej1kQFxrj2lugCRwZhmCzFMH0P3rgt3wkwEMaCGCCK896SS7Arr4-i4V555552D6m1WgcrZtdfcEwPGleRIFNF0slNv4Y8RNn4EwjNl9Y0rVyyyyyzM00Y8TaWqsD8AbIDawZPtzrGF2DeeMthd4wECyq9O9O9FCyrCf1CfcSCq91hdcQi2yq2ir66KVMaEGPaXjcje2BAFEdcQPj8apFBPLRMjacndSCqpFA5cQPjf4Os59gcz0pa1mr7wGcQY5m0RfyN0sMC56hhhhV0vVhGdtd84gpOag8MO1AR0PpOGg8MrGslw3sPGYdYNxGGAsKXJKWpNP5GGM13syqOGMfm-5VTzmtBp6jCpmhAVSlApeo142tBMTS4bP4iD6OIMarFEdcQPj8apFBPLis4O36PtFCCqp1jbeeiSGxajDFHFCCkUy4FUIC2Y0f6ww0lwpoaXL40aOVKMe05Tr02WOFI6NdnIQ3qGHaM76shmnBwObK-bGKMshlptpkS3oCHSaSqFf9JJoamqCwQPjdcwFCCv5dMjacvdSCqpFA5cNDJk0Qu6JlcQPU49hJAOlecdI4MigsgMXtrswEKCsKIKq65e-0q0Yzq04Uo0jww3o0Xw380E03RRGkgkOFhhjyD8swULcCuVD9N697cSgspGD76DmOsEil8OwCioGLACo8tpNf4mg9PMMXtrswEKCsKIKq66MzFCygkjjd4wECwyCxyHKOGaIOKMXP5Ajh8a9ECysysyqpECgoY6oYPqpEA54QPh8a9E8VIoqXD0GyHcHIrCsSxZlallT2RrSqJZUV2TlUw66zBTrFAww10zuPy1aHHKQGXL7IGXLnEacGZSK2uxrKXY0u_K9FPdGJ7tasHdRPld2fqaAdCi0oqe01s5jz363kEwFBiyyAbAEwp1Nu9NjascPAUz4BDeO3DdB0pbXwRecJbReeE40sasX4NFNNd4wECyq9O9O9FCyp1AMpzPdFCygkjjd4wj39Fa1Arp60A0Gsq2QI4jHGsq4ALxmLMk20FCCv2pFBcQyp3229q1BPAm2KGpOVO66KwpsV5RRhncV330Kgi2FNA-531xkUMCeYKWXkUNrLrJe949jz1KZ73j2WZfp7Uaqy2MRPldkwFJPMRD1cENsTGpFCCgkPjdY-dik38M4xvAE9Lp0kI5JxHCGqF1juHK2phyVLkPjdcwFCCrVSFa1AqWWq0-e1MS1WpbM0iK_7tRE4YkwL6XV632HNxDe29hJ6PhvwpqwapFBjz3Cqp3HE1MwGD6xaxj6dMoMwapFDypFAeKg7gdg9ctqof0FCCtCqp3HyxnWQUQ9x73Cmi3wN10kPjf4Pj8puBa8apiygn5JTVjascPASz4Bwl206YkUURaNjzwkB5jywiF9ed8g72MGGsO164fAE6B4Jfczuke63EMsoWGHzGjxCkVVpAV2X48aak8AqYoGGAU4GAqEGGBzzyzz8hlx5kFSsLFAaD66w4FMwjaB558aGD41lZPdcQT8VPuakk4Vqz123qOD76a3GB33EiOB3404GC5w4M8j1xj18g3V819NyO1eu5ZKJKgknjenmnd2Vz3D1akgkOB5qEJKQUFBe6pOrhyiOCga40dVODiD60E4FN090-iow5eedmR4M-j21wo5I94sF191nBF0TAeb7FTHC94Rlleo71x0swdTg1kUMQgla8apkEEFNpa8egsnCjascPAUz4BCr8ecTGpWDrUOgs1XAPRcVKZtKt80GsgexYrdIFOMPAleafaRe2GUCkUA6sAC4eA2dApe1pmhAFkUMQw4MUEEEEEkUOY0UzkqWqupOE61OIGPyaUzsGF2FNAFP111kUMC6YKWXkUNrLrLNi3kUMrLhw_7HMZEwGY9PcH8OshOIz9PcH8OsM284X8kVlSe92de5uqpOCzEF05jy18gWpjA0mjyZoxKXjegFReFMqEgj1lh14YEOs2OIz92C788jpMjaOchN7aOcDfOIz9PsF42IHa0DaMIsi4vwLdcQVmNVbe7AK1tPe3pmhAUzBp6jwClApeculymlDpmhAUBBpSlBVioi-kJjzapwWMwFNGqFNxcCUbKjaD6ntOZl2ioy-93L43MGdMNXwCVcYc8tKGYsoZq1wyGRecc99cuH82OH91OY1HO1FIFFIxVaSS896hAl-6Icju7Mm7Y6sj1tOpFBjzzk2gAFgAVgBLjB1QQXUb6Fxv4lcg91jlj3eb7yTjC94RlleoaexlllKXlldlMY6ulLj1zLakNwYCGOGCWmFLBqo6-C1BaoaJGK7yN9uFN6_jM9AFxTydlleVAMJBlRm3ptBqkh0kM2Iis40wSJEmNgdEMxQxHGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGu1jz323kEwFBiyyA9labV1NupcFMPejycimpIwUPuFDGtLz9jy2SCqpFBerCmICiC4NOcMgBZtQf1TMdJQxj8Mig2q8kXZ-TIW30npe1MwcD1gCJc1ALCS-GGGFc51gJaodTpBtBeppKlSkSmllll9xRlN5dRRg40905CfkQPcp7jt5IMVCCsEAFJCpElcQxQODJ6iXoY4wGV66wHU6SWgFAoaj1vuD5g0c883f014E463dg04Uq22rk4pC3VaMsbja9wFVBtBdCoDaRHkbXCVDTnQSpCpmP0_sGTbTdI26i582K58yAhi8F4kA0cgMsdjbqDClSkZe2DjasAGZgLOpkDUznUdASmmlSukVBCpm7LUzJGGGGGGGGGGGGGUGHyGIHaGGjJFwEl3Mp4gjnllllllllllllllllllllllllllllk6W8FIGGGGGGGGGGGGGGGGGGGGGGGGGGGGG3llllllllllllllllNln5lpmllllllPllllg0Y4I73kYr9pBtBeppNBtB9zyyaVL78AMFMwg2A1kgYnN74my9px2FNEaN5iljmgGsoiEQg-Cdm4j3Va0Qak2FNz6e2Fx3gCl6hN7cOn8dshP6hP7di8j6C0OMk729wwTMdexQRkFxTprs732AFiCCjFFAGqpiCCjAImi13M2Pgs3wqomC3FFIGJ2VycwiRl1QO9jeQO5j8rC58RcMG5sNsG_7Ua3JYgEaWDM3FGFYbIJK2Vza1blk5j8tc_j8tcyeoszlUkbKluJ8oBcxkO7jfQO5j8tcwRTtcxRTtcVjtQrlRlvtOBS736kjFBaGGFBiGGFBeGGEikUnwG-x-LSqpi8qUeCCKGljT284oHvjAoDjjAoBjjaisAVwRtK8cljA3llJljw1lkV0jlkRg742qHpGwllgMZC91MRaoaQDClSkVByomlSkCceV4cRRrlmllllBlrlllidzk6zr0icc0krg1g1g1g1g1g05jz601jaKWjj6DLGSD6wqh0cPqHtAu9OrMZ3wthhhN72cBM7D4lGooQs45czqRc1a5CCGGGGGGGGGGGGGyGGGGGGGCCGGGGGEcNgYQRllllllllllllklllllllkQRlllll1IIJGGGGGGGGGGGGy6gy2qqGGEu8aqpGGGGGxMQRRRllllllllgQdd4hg4gPlllln4ddcRlgYQMYa5c568cqGGGGGIGHaGGGGGM28cqGGGIW8sqGGGI0y3240pm8pGGGGGGGGGGGGGya0y6qqGGE66xqCo33unEudltgpDyaqWGGGGGGGGGGGGGaGGGGGGGqqGGGGGwSgs9i367bGHFBINelGmElTbbXwklRRRYt-k3aPcH2ZEGgyJQTlRTtOu2qVx42aga9GGGsNGGGGEeXBwRTodtTAFCoZxllo2KXKKXJX6KXKKXIex0Q9ntxlTunR_WFBS2KXKKXLrKXHKX3b1rGgz7pApwmcBChCtywszcPbAZPcQ5tTttTuTtTntS6Ej1dpEyOZPskAITtT60e2WbSccgt4qioa9GGGWGGGGwY0-49MSN7CXEmdZKrK_zf4mhqMmaivcXC0HKXHKXSXKWXKMLq98BykTlLpJTtxNk7gYCg0Bc6xCn2Y0cg805o6m2KXN02IKrI3w1tSM0KIGr1IjlXd0SGGOI1ND4lBVocyXLyWHI74lmnmldwS9GZyJCGiC0pG84oL2kV69QQV69iBdcD9fodnCL8dTtLgdTtLo5Tr01W0KXNO0Xc0Ywjeoi2Vx6yAFjatcFlTtcTjaBtTjdQODntQPtcFlTtcTjaBtTjdQODjtQltcFlTtcTjaBtTjdQODntQPtcFkOFjaqv4JYENu4FOcyjAIz8BaqpeBc6Zz9wGqWqpboOFaCW2F3MqaiBcFQOBntQPtcGlTtcTjattTjdQOBntQPtcGlTtcTjatdThlQOBntQPtcGepV0yD08FxMEikFBeCkGXKCrFDGXKCrFBeKXFCWphHKWpKClaXKCrFBeCXEGWpiHKWpKClcc1laCl0Loq2qEuAaylcZntQPtcZntQPtcXntQPtcZntQPtcGlTscDBcFkODntQPtc_ntQPsLfQO5jflTtcTj8tcxRTrMasoooiB45cGkkkQGB5AwULcCkUpD9N69bcSgspLkPReTNAwU2T9DGpPtWXsWgL03s201m1BwHKYg0HbCX0U0ntI09LbGMrlluPgdyqHH0snNupug3bKXUyGH1N5lBRBjodyqLoGGwKo9A9akODjaltTjdQOFntQPtcFRTtcTjaltTjdQOFntQPry3lkV0TtQPvlljA1tTjdwsgbKZCr1jlz3Qj8ZjatcERTtcTjfRTtcTjattTjdQOBntQPtcGlTtcTRllRtTRcTPllBTtcS3GqIA7EKikFBeCkGXKCrFBiKXFCWpiHKWpKCkGXKCrFBiKXJjOCsFBeKXFCWpWKXFCVuvFAaCuHKWpKCgWp3HKPxj0MlUF4ig285eecMAwGAMF16rAwrAKA4KjCp2WCgYJootc_aVB6pntQPtCoV1hCptThotKWZz21wxptSZwyEYcVMTtNGkRhui-XM8625BTv61wxsjlNGkRhui-WVz21wVllNoo8v5TqEt3PapOlPacOKXFCXcPGcPbKWbWTtW4312OXLAl7xKrKURaqEL9vtU4312OXLz0MgK9GUj2zOL8OI2OIz92FNEbB4sImlT8ACAig8KhAU9Bp6i7n68qiCqO9jz2m7y7QNIOGVk1EkE5jnh0KFwAxac8kNMkj8j30h1zyu8UDye9UwG787M2397A0j0wN1SZywd4BAV58Wqaa0kkkFPPJcQiy90u8VVc6eEY8OczDf2e0-8OMFN-3hoq0G0MQ2FQgl03R_ksA2gcsbYhN_4scf4snN75YhNvwIdc-Gaa5ece0wQO7w7OzKadyweuyr6MD35YjN74nXeNI9xrBAwZCm6Fh1jaB558iWkgswULcCv6pOshyiPdA7AWpfMw2tQu7oi2xh257j2x46eoidzye8UxVhOEg84Cdc_txC6ncsENrB2D670gqp380YhgC7BMYCDzsyH9U0UdcxTq9a06Cd_yhQwEFChjz50JcCf09464QU7O1wxFCIWoIucifxaq32o8kdvjNc3jiD4iyp2oXyMdMv1rMyzMyz8jjgAPwqNFz0-17i2yCFjz50LK4M-h1xde3jf0J6FNxzVP50q95cusxf0xAOqaa0kkl9PPJcQi4qpI9zgC54DIX2ocgewmmX5E_7-Xyx4mcyiYFOahQQkk0EEEYoSCq9Yi2j7RJYhgEwxhAmZjAmJsuecB8MaPaaa4goOa97MDqpED2aj7SgrAkucp4zTeh9tBx61mphhhT6hhrT8RcQjx59xXccdiy2ClaaagBQEwV1NupcFMPejycimpIwXssAwcEF1xAcwF1w83Y2nuoEh5z8AQNVOahQQkk8wNAkiasYxQPhe3OokPkkNEj2yLpEIQ1c6admS8E3z2Cb2sLSCjnsshNlsOA96pAo26kEEXx8kbs38t1srsdjz38Lj3yx464Mld0wkNXpNBx6xJJsueeibaOWaa0kkmFPOdjd4UhiokPoEEEEi4z4czc3phgCd2oEmTN68rT2dMleccMMRa8apkEEF2niy3A75VAOD3cVe8N9pCO1ctQOqsxkhYNa188u5hFxM387A0O26g2D10V80L01I0w0lwpoaXL40aOVKMe05Tr02WOFI6NdnIQ3qGHaM76shmnBwObK-bGKMshlptpkS3oCHSaSqEGD6cOwGogQ9BhA9zgC5cBP4YgFxNgMsi2yyyGhAiGsol0V7lp6rAoBAllkSJecq1M1dceaGlpxlgedAupOp0LzMfB5574s8nYhf4s8Yg2yy8WGWO-4XArmhymhymhAU3nUqgYbMGAL2G1NQxPej91YcXM-SgUDw6LLibxtRintk3zF3CsCibSc0AgDUryf5lkM8mD4h1205CdlrAzTej8BX8geEX2OuoVgAwGsoEdagIcbr8aae8OV4Lswag840YeOgsNPlougaUw6EEwNAk9wIk71g9kMcwEl02qV7cHIOrbcOKP9IAsO4Ji0CON8aFaKJj1Fs1saD66lJiosk1EA4NVO4Y26f9EEE1hhkj2rkNB86Ef5F6hM0y374YhNf4siogQ8ChNf4sjN74YhNf4sjN74Yg4ehAs3shNf4sjN74YhNf4sjN0gV6hMbN74YhNf4sjN74YhNf4107EwO4MweoUDye9Uzyu8UDye9y2iAMYXP7g7csjN74YhAAah9yxZ0MgsbAx6S8IzbFOYpMVmj9Lod11W2KXKKXJX4KXKKXIf4svpApZenz87aPau831Q5tTttTv5TtRTtxU6U-8sz9FOID6iaYopfyBMxwlltRTtLoJTtRTtxU8u6C8cz6aDbNzj1G1wqqo6CC2FFKFFwE4aCa8SE2grgFzIq9A9xw8wNNf4sjN74YhNf4sj44B9xHUzyK8UTye9UzyK82C8liA5axRvoV_Ce0-8UDye5-83U5w4whwigag1jdNcme8BdDojBhmj8E22-Obj24GFFFFFFFyagYHjzyZy-COPsSbSb4HalEknClQQQQQQQTnsnDikxtttDpRRRRRStDnkxYoYoYklZHoSGSkx8M38OMFBxZ2RkQQQQOOoq54xp4GpX59RTxTouCCCCCCCCmR2ygIynlViKi3GBtdddddddcFUEs8mh7NcF2M0kM440ai02TANaSJOOzaAtNeibkwou0hBKF2HWAaAaiwXgkO0fq0eMYRcnZHuIHOXJHaIT0pmrKrmVpnBSXmk0eS39Pv2ZHtIHOXtHaIT0pmrKrmVpnBSXmk0eTURJrGc2a0dLvKEOHRck7YPsGPcYejCmkplGCabGNGo8C4a2512w0kMsV1VTeTsDqOr4UpNe20dJj11RajkBc500axUNxNkt2oAAZw2C2j0l1JhE67oh0R83t_GJHkHaYKVc6AwuSXudjwLdTeSQ2Q3I3d0J-Tg9gpSpMkEoEfnnt1Kp7punJSkulQpLBeljNCm79PbacGhj5Ta07kQ0fSJjWHqReOLbAuGi1gSXudYHPtPJJ0J0h00PgbvJQ5Dmto02TgYvN44Vyno0cLrI0B3lep4pD5RYpjBsPC0OZKM2smrI9yrVhP0p477oCCbKRGtCnnBrikB9aoa1_c0kwi8lwg1E3TwebPKZSJWPbHOAMGO_2-Yekwk2584i01UY7La7j10CXOM8wg381JTum3KB84y0EAg0fABnPrCgy1unJSk9ymC356EpeljNCm79PbacGgj5Ta07kS75hItihgB_e8g1xjxAF182Rc4wpj10Qve0OgV8IA6i3Nz81Ix3ABa251iw74b713kMk24gaWwd0cw6g1jxE-ggGsEB8asl5wu5ej4cPcPcYujBT6o4w9MXWk820urweuVjx1TlE-618BpD0qRMxwpBArcJ8kmpuMaXZ3UOQhhdRypcz3RcFyUA01Qz9lVsxJplCU3aNbsSJOOLbJSIE0mtLEoFNkpl0TkV0ktTtkU0cPLAVtNC182seEFgw81VK0VXBe47t3E7B61KoDZUdLrI1Tlep4pD5RYpjlPeo3rSX09No1IaUcIkw0bkwiekMh4i512wxg0FzuMdQ00fsxOVKOa1nxRd02_3Zihwhg1JWFthBiiCa3-pKlpCu790B16O2c2xnta40xndy8kFu1Q2xQMg9hLb0y10cw6TtVotz8ESXLb1I0O0rtSAbouYYwKqT_9506TGBR6l9unVCVlCpUsDcIEOHkMtR3tYuaEcqND1gqS4E0pFCCqpi1I2sC-5aj0L2G7j10B6YI7z0cw6TtVotz8ESXLb1I0O0rtSF0wm5D5lgWgEc80eoeVDmQkslSYhDstJYthgVCntFgE8QPCpCpw5c4B4ao4glZtttttttqodVttvimnnmP4B06lpphlGfuws7tHJLHHHHHHHVLbHHU_bHHVDgplBB5m_PLY5F4ww0eC201SYu1420p0dKXOMX6hhJTum3o1A0SXJi10IFzuMa-Y3Ui7bCX8E5j4KE4xgoMY9-4-6WAC9mRGlB6lvKpmVpnBVGodpCTAYo111g2BbgnesYCbSRKnlVt-RBmrwcHdTdHsIHOXtHa0Jj00IaC21g-p1AyUA6NIxOigv6czyGSoG26mD3O2oDrv6WP0ytHDtWR86aqqGHWChE5da4KawaDa9W2D5ho00kVc_cPcPeMcTfagf7vix0g3Ps1LtjdKTi780A1U6C21TVis6Eao86Xv6XU8tKtPTvr5ddllBig85k1l0RucThMkMoVzCHSoG86nSyyC9STNK-4trNerjCposDcIEOF7yZOM1qUE84_ReRPtJ6lrK9OhqA325OcJR8lvkxkxik7q2Cg1j1gYdY0cXsFSJCNe6sjwzdLOZak95j1g02akeEXftwm7G40bYuRdcmJHkXacGhT4V8Ji1x10hBKF2HWAaAa65j00gW30FwwqA98v6K9UH93k2zakwgqUEA5c6cTCITuOtH9IjxD4U8PrXBajfkMk03K0ag9487g7OPMTDcXuOqJDcYpOzcLNDNPL7KE1UMH0w2g7Le8wDc7M00VuTo1a6Gtcm2cN3zbedFOKpTgVuSFwwUD5wf49yqA37k1HUyTLtMenJS0YqHNzcXzbedFOKpTgVuTUUD3DshNik5lBk1p6UwCazO5NRJun8XmlpK0OIiTdHsIHOXtHa0Lrg0HqTkNaSJSOzaSQMkbbudEUTzsBe9bvbJlEop0K-RakjpmZCUzT9yNS5UZthBrvBBBXVAw_q05lkxpCpk1ya-ug0DEbkQNaSJiIEOJLHXbudEUTzsBe9bkUuSI85cwK2jwCsKYClZpUpR-FtRJqBo186KbR18bcSTDuoVTzutPrgsqFwwXKFxjCbiB__3q7j10B6YI2840O0rtTBwt8k5bkg89Q9wN0lSHvcA45111ciuwLbF42gdsnK91py5LeYNPL6YXCSwURj11Ttj2DcmBa05UrgWo84ETBwh0w6g3rKYIeNAkrtTBwS0p0dKXi5JreaGxQxgoU1P1TcWR86czCLTCcXDJLzKoO7cOXJa516CsPcPc0FwAEw";
    var zDetectivePenguin = "5n31sbkbl00e0vt8m0a7g0vjni2r0w333111311111f000000300000d131101111111c200030000000h606050600000v000100100100o3400b0004U6g8BnaoW0001zhAs-58OCI8gx48gy5fwNA9248h24WcFQcqJwy28p1AFlV36z88wy6gGTgvwNHngFpMx3we0JiAFAams8gz8U8AFaop2sQaD6mgmC7cyCxoC4yDGiw4Uy2gi1D8OsHaOcD8OsTaOcD8OleECcF5ctz1SAy3aqc5A9zhU8lkQBjhkiOVTdT44Mqh5BcGf6KqWDaWHGuEVEYRAVnd1RhCklcswNifib18bRFxFO2Xj32inpxwbJccU1tCzabIMw5WOhHJNpuijGFNBb0FxPsCwYC4yDGiw4Alcc0g7f0jhx4goj6zJ2KCAFB0Qr556NN6hhAp56hAkasgs4r4CfnxEqqgYi6A58sDvPO6lh5xjza10kExFBiy5Cqp8AnhnQBRehi6B85wYwtI5ujF1IYTy1QaL5YPylecI43KpkEhFBhy7Ci98-40YaXBnd63Vcq4MAaGqiFzNPiplRVtFEQEANNpUCIGLbLyu8UUY20pk5BSCFjG9kQl4riqkIFM30iqso02ccOC728cp6hBpejAp6hy6jAV1u0bIrm05Rwo02bw1dRBkxu-BBnD80lBPtXCYrKVJpkTCrJVKVcRTrKRuTnSldWmPfx0fACn8AE60H1oTlS2KWX3j8aXHI5tRSga8exi2w2osr0a4NQdgh5Dyuo1N6M2z91A4jS7iwiUaWKNeo-lmrBGysMXGwllgDj35SJ8Dc81145lkpmHqqAyGqRxGoGIG49agQtg3MvaIyG3Jp5lBV000tH8GwXmhldiLpPvePItMuaOaEeRAlmtAka7qOaEeRAlhj7H8GwYlAlgtH8GKaOaEf5p5k7qOaEKjnpghuCKGqge0UArvQyuMWPB0lRtysNQaH4cJgzQ4A5_zeiR6JyK0kiOJ8KHDI1nlSbJ2GN3bkbAnh6C6CD6eSwOWMptVoaGYBQcJ86Vg2o8IMN2qGUuSmv24AbwMw7Nx6PcP7Ny6PcP7N27wgc50pDi22ia18CoEh4P2EyMgxpwXK2A6sgeoN8Mc3C4yMcerKUSA938Bj39413841383Acy8gOwN2myz45p4V3cEoHA4xgwGGE3A7lkhbAF4alKhgtTyUOKltCGrGK-qKGHGGWOGFWa7CHxcP7EIfcM4jS6NG0H0HGX4VzElm8pqEDceWE5lk9QhMZHiCby84p6gCj6EFwOy9fcxj2zytDtAsD4zP-NAp7kqzPfkYOkf40E1P6jP93GcA69i894WA2w74ozN9p81yeB8a0shyf4AeoOgoB8wAiCeGC7vz6jjAo5AqNWgr6jjAp-gtTt3ji6QerCxFF3q4Vmk6CAdgqgknwA904x80A3RDk5Yz88DeO2-hA4jy0a09zhGCytSyh0KkJ5Nn1zTDsa8UVE1khMU5Nf42g3Cyw-bG-k5Yz88BcAuyzuFj08o70La-s1DO894YyQks8kxg79-9K19n0Kf2l2oQ90ztc5g5e8C2D6opj7lja6j3D9KRyPdD9wzJpmPARtPIoxy68oxy680-0t57id8_64Mp1ylUbzG8a0shyf4BAM64-8_ydUjAMSIK3Xej2DqOJD9y3NDoN34cgN34cgfq0a0u4ozUilj4oyD1O0kg0w90gFww8wSgr75S7q1Ism3p1I7yX3J0Seb1IwSebIeQ3oUJag3XXffs7DwsNPo4x9S0FghKk3HcPuEEOcywFo06rTswUA6NPKxSwr75wSgr1UKMtVN74sVNf4shPtwUHye8VLpEES2Ah0szyu9VzyeoEEhGD2okEoXywumXDtNhAp51hT8EDN5sm4-lk3Dtw6hVnAX0czyX1Br0ubStz8E9GhwKPRcCqCub2uGEfdwSeH1IwSebIeQ3oUL9gFhUYXEus1N7ewSgr75S7q1Ism10E0YVwus1P7e0Sgr75S7qgCiDD084F00000YXEus1R7e0Sgr75S7q1Ismc";
    var zUT70 = "5sbk0l08e00tbm0a7g08j7i1r1w01010111f20202000d01000101c40404000h40004000v00000020o2420b0i8y8Mgi8y8M0i8y8M8h4h4Mp23Vlb7rtM37kT3UkZi5jiL03Aww0lwpoaXL40aOVKMe05Tr02WOFI6NdnInluTlmpoecUysLb1ARtYhllwUyGOWOFI6NdnIlIRg0GmeSXI6iFK7MFWAb6Dciopm28hKok1ycy9Ay0aBzJKU1xGrxYauF2FF5U0sk402I3b1ntUw1mndS1M0KXo0nmldwS9GZyWHSWGPb1ND4jBVocCHLyaGI74lmnmldwS9GZyJCG04TcwF06BCon896goM0";
    var zAmpPlains = "5sbk9l01e0stbm0a7g0tjji5r1w112211111441411111111111f100100200002400000000000d111211011100111111111111c040000040004000000000000h000000000000100000000000v000000001110000000100000o3310b04ghx44xj7ccNP8iFaSdoVzme04ghx44xj7ccNP8iFaSdoVzme28wOy8cNN84kq19kJj6KqZHCL058h12cxgx248gxcoO0x2s8gDp2kq4qoY8yNyegf4cwejA1M384unApmgfbO0UxA1N38dd72jlMl4QO4hEi60i7CBv2GE2DMCD8FwqsCBde4nC4NwcCB8mupFh4CAMG1QaNT664c1N4wg9O5GG2Wg8dlgkNS61wL2cT8Nb8n8GHFFAbp5PfUcbCGFPjMgBsGGfzkjojjXh5zyYwaqC0y30YnpjVhAV68QTp2KzB4qeEO5aCmkzARkGWeso8e9lkXCjljJy70q5442cyz8OkxEOaval846vbwi0ag3Nl7k8yhEl6NAV750H1i2n1i2E587j54ApaiGGGAWGGFaGGGj00005ceAgoPcz4sz9OcT8OIz4YzaOcP8OYz9OcP8Osz2b8OszaO1Osz9OcL8OszcOcH8PszaOcP8Pcz9OcT8Osz2f8Osz2f8Jd7s1dn1kjj8h5x4o14ukxVlcte0IFV0FOaHqsCBde8li6xco39Fi5DCqkh9Fc8FxAw8z1g2A58agh22E5gagk0F1i2A5gaw3k2A50agkwF1k2EO3Uqyr2qvMt3WwaqC4y33KoX1ogqGEdlk6GG3ll1sNGGwKgRlgn8mGEbY810xGGwRlgqGEdlk7yGEf5lguaGwLNfx1UGG2WggdlguaGwK8RlguGGwKgZlgni33GG38v2gwGGFQggaGIGGGGIGGPg0qGGGGJTnh18GG8LBllllBlm29XjdrllCXKRl5TsQU07aaGGJGGM0nw1g402I3b1ntUw1mndS1M0KXo0nmldwS9GZyWHSpKGY1Nv4nCpocyXLyWHI74lmnmldwS9GZyg002rQNko0qGbaqa4x8Oaqsz8EEOcwqaaqqacz8EEOcyyz8O1EEFFEEOcyCD8Oaacz862y6C1y2C0y2CCCyCCCArbqpe7FKLFAUuBdeUkmmzlouC89u0w1LEy2Cywd49h4ddc1j8zcddc3pjjj1h1j1gZcdkapzhgy96hIp56NAr0UxhIp6NAkr6hI3wt6NAr6hhIp6M8rGdz8EOchEEFO2oV56g7fEOcD8OaGq28F9GOiV1s0005j10gh030A10cw3cmIOwr0ebSgk0OsA75TB0Uw6g0ub3AwS0snosE75zkMi8UKMYm3C03PotA6M3yX3J0UIqC290ebKCtHCM3AYO2w6jAwE1AV8a0pei2w6jIwS0p01SsA6M381IV8dw6g3pOgpei39Ogsnuk0tL91N0cwl0cwmg2wl0G0p0cw0X9BEOgsnuk3y0p01UL91I0O1k0O1p0a1k2E1Aawc8nof5Ym3y0p0eqPa1I0ULp1g39Ogsnuk3y0p000000000";
    var zMoskau = "5sbk6l00e0ut6m0a7g0xjvi3r1w2111636121111111f0001000000000000d1002110111111111c0222000000000000h0060606000000000v0221000000001000o3100b1k221212123451lmn6789abcdefghij0001p2g345656789a789bcdefhijklmnmo0001122121212456145678889acdefcdef0001116272228999999993334443434345000p2uOaoIkOdcBj9kSkSkSkSkCkIIFIFJFIFIFIFIFbCNAHxQxSpiYwg-bCrmoAskMaAca0ZIoR0W6uxoqhFAGpaCOCOCOCOAxsN648gdlk5O4Ec9Fx15LpCoD8hHVo8ihhaA54wy168V6hA18uSw8cdlk7CwMKORxOMwwRljcHcpxjcyNcg9D4tOpOpOp2gZdogwqGEfd1xt5H5CpDAhHVo8nAi-ki7B2okV6hA18nclAP0RlgqG33ll1Bf23ll1GGwRlhjB9ZOX1PcPcPcPcPcPcPcvcc2p38wRTtwuMXKXOXKTj30k78F4w8p0x8mCDA2p-Mu2ibAq_5546cT8N38PYz4cwyZDyXo9cs60R9OdLcsNyehDV68p68V16X7dmo5vrW-fUzdOc_8PYz4cwztDyXobA60RaOdLcsNyehDV68p68V14FyNppjpjpjpjpjpjponcWbJj66xcXU7v3LpQ6EXT0XmGkXWauPIOhR2Jkiwy7go1PoSkkM0000ldDBW2FIsNN0kQeQwEkRtzsKQA32K6H88EkMwSgnwIwMgo85cc5i14w-3dVgFEVMPd3AyY9BFEpRrAOuB-EW5WAwVCuG8cCmFBxuF0wMFEq3Ndjz7PQOVj7huiA56SFEVGhfA7erUgujP6VPVfCrVDx1GVPmCmRcVF8tec8x421sNo31GGCVzlwbF0wRlpllBlmk5kDtQPtlllTllipgGokia8ceompygcpllAtlleEbKWGIGGOGHa-FiXFCWKVek1oasQO79DsPaGGGGtgfsllpllBlmlZiBTjdRllntllu8Tz4zUMP7oCeyo4yrcY0xOXJT1i341SoO8XjzoI0vqFdWoISCm5N5jbj76CqpcrpxIF2Ahbj7AT4QMXSdKXpBUgYPcygIwpD4i39DbJy1cUygpcUCgpcxv7_IPrH82pN4wUCmoZTL-34y03hz3K_1Jk2g71tM90sjFxP4wMyE7D_VjV3sEC7uNJTvBx5PcT4b86pN4wOpOXYFD4i39D4O39AbP_p0j8cCrtOpN4wSppzTu_Uci80d6cf_Y6RgbK183wAhNeC7coz6cK1VK-k-gF2EC7uNJTrCnDHKotlkygkO1GIh7XaHcPm85ly8ZVloDJK85lgnP_GXllnTIwaH4hLVGDcvcXkxI1ymo1ENxNDwpxRg90s5T0A1NeC7ci32awva8WTtk39CF3ZOGN4v-WHLcXkxI1ymo3L_Q7tk2Lwi0U94snpycoOUaFbjgKi0002Cbigc90hIr6NIr6NIr6NIr6NIr6NIr6NIr6MthOdzoh5z8Ocz8Ocz8Ocz8OcwVehAp6hAp6hAp6hAp6hAp1OdzydzoSdzoSdzoSdiSdzoSdzoSdzoSdwW9Ir6NIr6NIr6NIr6wX6NIr6NIr6NIr6MtLoSdzoSdzoSdzoSdXoSdzoSdzoSdzoS3IX6NIr6NIr6NIr6NIr6NIr6NIr6NIr6MtRh10z4IzbOc6OcPCcH8Osz9O3DV6hApChAp6lAp6hAp6hA78Ocz8Ocz8Ocz8Ocz8Ocz81jdKCCCKK-UTTkn9Cr0lcPo6eVljj0mMACoiWyVC97INuP4vN0uh80Ygg000000000Fws23i0z91jAp8asz91jAp8asz91jAp8asz91jA791jAao82mPIpgaszqStza1jArmPIpgaszqStwVi84FwNN6lAV6hNn4YhN6lAV6hNn4YhN6lAV6hNn4YRP7cV6guqVDye8OID8OeaUDye8OID8OeaUDye8OID8OeaUDye8OID8O3Nn4YhN6lAV6hNn4YhN6lAV6hNhjCK84tA5n4p8asz91jAp8asz91jAp8asz91Nmg1cizB0FUzyJDoOwkV6QOxBbAEo_DgmsNPKPIpgaszqStwVgaszqStza1jArmPIpgaszqStza1Jkl7a1i3Kwpfx6k2A6Q39ScE58dE6jIpgaszq1IX000000000000";
    var zLoZRidingNight = "5sbkal00e0nt6m1a5g0njhi2r1w111111211111f000000000000d112011111111c001000000000h006000000000v001000000000o3440b28p2CewahAaoW5boRPUh28p2Cew8xAaoW0y6gFAE28p2Cew8xAaoW0y6gFAE00000000000000000000p28J84ge6A8q9z8cAGC9FkwNMNXpz8cAHFwBi3727JCcF0K3GFnzyF1z6lkwg24GgoN5tIGMoOzvkcQ4z216TickxGyeyYyNOBioS4Npwo60GrmwR5Boh6xco21L0dkm5ex8qe9GGpQVaAIFlR9H81j1V46c8XWqqWEn8MeWC4xaEk5EHw5j10qhFA6mba6C94lS7xJ1nbkQMBlw8ilFy6CG8Mm2J0tphWp0YoNVRRVRM0nORdc9l30JFLya6BE45EFs1i1oi79yyVIv8ygx9zepEW7BGqoiFc0g62QQN3jl4w9y5s0YbzUUsQ3woFKecKzORdc9lM431qqoxFBEC1cgHM00000Fyei144OHWqqWEk47tj2gBka2QlNNM266AgG8k0yI5xNR0psJjj2lm0x9mC8qqEz1oaQF2eqgh0e08qNAbwn0Lf3I0PVqCC4GxwmQTN42gwgm2Lah3DzUe28rp2414w9Df3KwMR9qCC4Gx0gJdcgQRh82oxn7778pN2q242aQUX8cdilFFxaE84bjj4dcJ4M9y5u00000000000000";
    var zElectroman = "5sbk3l01e0Ht9m0a7g0Jjwi8r1w331132311121111111251612121111111111f000300000000000000000300000000000000d011011111011111111111111111111111111c000020000000000000000000000000000000h000600630000005000100006010000000000v000100000110000000000000000100000000o2200b1232456789abcecdcecdfgfghijkmnmntutvsecdopqr10h2321111456789898989bcbcdedefgfgfgfg8989dede101211111134567878787878787879bbbbcccc787878781011111111g113222222222222222496785abch222d22ef0p2FZ2PfyAXoB8q0Qmxh5z83g6w8q0Q1F3hi78O0Q1E26wd0qgQkxOcwd0q0xj7FFxNRf9zkC7igcYABmEwOgGc825GsosO106eb1Apa0I1ONZg39FOwp8sx46cH8OszfOd21PCg6Iv40PasE6i54mdPycz8OczaOcz8Ocwf53S0ptek391Ir0awkwFOc1OcH8OYwoZ0IEFHJ3hnkHxNDNv4QzSIGHaOGIT9HOICD0sGKA55ClBkQwOhR90g1CeLk1BcRT8WPfzmg4O3sOHqpHKTovxQPAi3cSXapHKTJ2nP_L-KWpHL4BNUIeN5CsPrLFCKXtSdS9TcHSCqXJS_xQPAjCrtBcRTrSxbV_INL_bKCqXR9sujD4jCprBcRT8HW4LD_N_VtQPnsALb3Dj6y4KFAWoijArGGrqqGjRgtZdldlcHtljvjliBjz3pwv4agEFFOamsecucc86JyC0JIGj1SgdlldaNNBNxRlpdk78lRHkoOUBc-Bzz3z3yWUxn3zfA5Cdp3mgS4dtRTVaNmed3z28wpmsec-ca9DK9BoUMUwEClqcp1yhFxc52gkk90NhIkr556NhhhgoOFzMEyyhAa8G96gEwAhAr1szyczoO54kOc-CCBHctyBEwxhec130rjdtSqPfztCtPaJFCKXtx-rjehepJSkPntLq4LD-P6_YKWpHKinBxSQPNcVCTvjdtSXN6X4XClXjdtSXvPqpO9PdKOCqXJXgBY_-f_bKCqXR9sub3IhpDcSXWpHKTtztCtPaJFCKXtLULlcMCH4gqOGowPf5rlslBlNcVcVcIMpD9DCKaHCIGK9DyJGJCICICsCsCmoIOnyKaFN1GGOpVCuaSGWHaHypOpOpOpOpUHqHyIGK9D9D9DzWWqiQrtYRlpcYjf5rlsRBlNcVcVcVcVcYkP4GKVBCdcYnnji00kNU3gF0wNwgqagF3hD91g30wQ13k6zycId58u679Uw6m6026Ed0r0QkxScTo1woq0xj3Y506gMN704lcRT8AdN06Cr_JRH1h7jfIwGGHMXKVKSXCXCXrK0zVtT_CXBTnu0zVKT_noapAi3dTdSKWX1BSepeowj8f2XqaqDcZdiAg81JSkkRcNQMhQPI0i5KOx4mgZl8enljhiyrouIlq884PAjAPAPAPAPPUojF0wllrlsjejejejbCfdW6GGt442GHqDypOpOpOpWzwn8iFHqLy9PAYysGIyg1PBcCsysCsCsCsCkNNcWmA21cVcYjejejejf4xY8MbyGOp2OGOpLrUKZywtikgg8UG-oDdhOpOXUEe9a9yAujmlBlBplqbysWdBlBplpmlmO7G1bU9sKMYLbLdPyXSa1RbyuaLaPksHbPrnc2y2h6hA3O4j8OcwqYzoOcwuhI1PWqqgQ1kMMEWzp3hi5cqcki2w611E20000000000000fj4yyyy2EEFh4z8KEwGaa7RkkklQkkV6hnhnh0k3j1I2ok90NI0Sdzo1Ir6M3oSdM6NIr0dzoS0r6NI0SdwuwwSdzo1Ir6M3oSdw6NIrMdzoS0r6NI0Sdzo1Ir0ZI6NIr0dzoS0r6NI0Sdzh0r6NI0Sdzo1Ir6M3sS1X0dzoS0r6NI0Sdzo1EuNI0Sdzo1Ir6W3oSdw6NI7kMgcSdzoSdzoSdzoSdzsSdzoSdzoSdzoTdw-NIr6NIr6NIr6NKr6NIr6NIr6VIr6NIr1ZHoSdzoSdzoSdzoS0YQ6wdgq0YpN74r6NIr6NIr6NIr6NIr6NIr6NIr6NI1kMwoS4g8SdzoSdzoSdzoSdzoSdzoSdzoSdzomCd7gTcVejAVejAVejAVejAV8000000000000000002C1M4g0MpgcA6k391B0OgpgcA6k391B0OgpgcA0le41eQx0CD22zTpuXKlKXKnKXBrKXBXKVmXKVous1PMcI6i3a1AwOwp8cA2y01ui39SNrgdEfnnPnntKnKXBd647tTbkGJiQu45FN4xtHjy1SKp0SwN0Cv3AdKZCueXJPdCueXrLpDzKXsPpDzKSXSpUXKTcSp3NT90my16RmRIrlrmNJlJr6RmRIrlrmNJlJr6RmRI1SGSJxFww8wrmNNCrmNNCrmNNCrmNNCrmNNCrmNNCrmM7zcSJzzcSJzzcSJzzcSJxQUgv0hgixKE2nejbGszAU9ZD9Btjm9MZdnnZ0q5FN4_TGs822fA5VhGlrmNJlJr6RmRIrlrmNJlJr6RmRI1SGp0Rz42pqsga7ErCrcYtSTuPf7tSVCPf7tJTIPNTtKpIPNTrtXcYtTrCrcxUXJKZCueXJPdCueXrLpDzKXsPpDzKSXSppyZSTuPf7ZJTIPNKXtXcxjATJLdCudDqDpDx7d1LpDGfVO1K-sgaGCsa58SEgOxXfpglntnksvltVejnlnnxlcw9Be6uJW0SDgJe8CFZFMw_uF0Yy12D20yxJr76XKTIsrKRIsrKXuNNKXmNNKXJX0udTqSedTtLoUTtHoUTtswvH742GFD3ttqx3a7Igpglnde86WzzWFy1AVdtltcwqFA1cFMPRLg6QW5FN4lY9wo140069wOgpgcA6k391B0OgpgcA6k3905FgwEwgy9L60UM6q391B0OgpgcA6k391B0OgpgcA0mD4j_wde47WR8iRe41bYHtTsLtTaTtTbTtOJTtOM0000000000000";
    var zIdle = "5sbk2l1de00tam0a7g1djNi5r1w141111111111422111011111f000000000000020000000000d100000000001111111011111c000000022110000000000000h000000000000000000000000v021042000100220000100000o2300b0000001234345656343456567789abcdcdcdcd565677CDEFGfIklklmnmnmoppqrqruvuvwxyzAB0121212121212343412123434889aba12121212343488cdefghikjklmnmn00oopqpquvuvwxyABC0001234356767898967678989aabcbd676767678989aa6767efgklkmnononoppqrqruvuvwxyzAB0000000012222373722223737445556222222223737442222222373922222244100000000000000p2JY0PmCvQEbFCyU5RlkWp8dlm9TtllBlgU243llplly8dRlmll2VzZMllRltegJlmllnnltlARm8TrF0wRl9zQy343Ap5emybgYNTlnllRRllBllJRjtplly8dK8JlnethnAp5eaV5lYhCsll9xHwAu9OcDAbKGuJTuGGKI1rRehAZrRlbZ4ogrGyEOcMx1Kj78x0LpwlogbOnt8xuZC0Kj3m43PiYVwnwH1SkVepCmmkVepCmo1KVBttehdVtttehdVtqVMge9lRQV4TBRRQV4TBRUy3KllljBjmllljBjmlkbFCyVMdlkWp8dlmoBZllARgYpwfBfkVuTtV6RAXdlDkVw8a9aqcc0rCoyrSntZqbCzwxpURdudjmtolglplk0L01A0w0lwpoaXL40aOFKMe04Rr02WOFI6NdnJk3pCGYI75YhepBwObK-bGKMshlptpkS3oCHSaSqE1Yn813G1GGWsxqGIGGwHGCWOGH4XJQwgqGANWh1y1OcyDbh5EuoXGHGGWWGGOGGSWFKIGGN46T4mGHDeEHOcyD5syFufY9cdmOOD9PcOOOD9PcOP0dTcHHFO9LbHHFO9LbHnf21NaKKD8CYKKKD8CYKL4gtOGGGsGqOGGGsGqOGBOXTdHHFO9LbHHFO9LbHPtQbCdlk7KGEfzlk4uaGwYz0KWD8OuMv6GutTgYU2TCsz9VTCGhNEg5zCeoN39OcDw7CGs3h4CF0iJ41QDQmru5gUSsRNf4pSjymlN7kQVTck5g2h9BzMSFFDxVlmRz1ClpsU3akUzLVluwimrGftTH1T6pAW5BswpmRBpmlNmlGKlKpmlBrulGelu9VmhAW5BsvBrmlBVn2mlymlKVn0mnAp5V8bIDzYHA3aSIHaOKaOJiOJOYhOIHcOIhOK4IH8Ot2OAQc6-EYaVHaOYFd7iOIiOJS-8SASw29yVzA8gqybbo6pC8CZBTvdUfC8ASy3SVCoMspCXKXBMgUa43IOKnlVtuhtUzy0ets1CpDdswXdTwdoVw8u9a8cK_KXLtp5lTm8PvkIgtotOYXHDcLqCYCAsI474Z9IHsOI8tD1dPbO8b64bf30cPcX6OXLDNNc474kpo0TcPyIyGUH0tXGZ4N3tTsXsPtPtPb07b1LfSY_pLcXrPtCYOF3cHIHqOZE7cHsPdHcR40000kNUh1z9OkMMIFcI3aSIHaOKaOJlOJPaOIHrOJhOxNfaOcDgIHzYHqOILaUiOIiOJTaU2OYz95P7_N74mGFN4GGGGDj32GGSGHqGwKoJS7JlnznsnV6hjBEyQfx08ndlntllllUllrllJllllU8S4W08dlnxfz5mhAkUFAl003UhlZRl9xS2hUD8OugvaGuJTuGGKI1rRehAZrRl8Zl8jOblk7R097Gsz9WX8GFwIz9F7wwdiStHa74wX0btDeOJz9F3yDk5NOk1oVw5ncV6jN-hljtApd8YY6_IXmkuJqsY09NM1P52qL6l8QFDRwk2sgkMRc9j1kZhR02D6v076SRm7Nn40tND4ktNBnkZRwc2sgkMRc9j1aookZMFRDM3NYz9i9WzUg1Uhn4k9FYod8nQRkQR7jvj9QSQTYMDn5shNd8MdRRltcxllllllqFxRH0yVz-48UyRle8BlllkWoollmRlrlllleoGlxKw23llUiy35mhAkGogOGgl3V1o7URludllllVllrllJlgv96MZGGYqh5zfYEFOZEv20gKqGKWGGGHMGGSGHqGGGHMhI9Q0gqGL2v6aIz8FNj8G7fOcP9j3_ajb0OJHaOIHyIHkYHsOIHaSYHksEsiOIz9Q7aU_aSIHbOK4IH4IHtOK0IL8OhYFLwYq2hSsz9VR4mGutTvaGHH0mZjApfmZlieuwb7c0AupOcDzuqFM94iqGI41OBPeRB3yndsjN6pAVSlN74QUFAsMl00nN1xecjfTaGSImPaILemWD4t_aHQ2iPthHBdMOngsfxRD3HpeJfzVBjHoebpxPvsozKhweFxMCCqWKMtX5NbGqKl7dkCBXy7pPeewdYftcK4SwAC0Gtr1NfsZP6tShDWC72qpE0000000pHieyQQCeCje1ijHSWjSJB8SGhi5BcfrkNVGSdCHpGSd6AZC_oSqJCEtzi2iSproSqJCHoQm_pBZzpGSqxjBbHMwFFUz8FFSCTojezzJzcO1UKJ-CDoOaqtFKSe8UToPcwkQYt5cz8O52Aczhu6CyAc5ho6CyBgMJ5gqqagMt5Eqqal3nhm6CyAdp6woYcfxBTkQrmPlIQrmVtIQqMrdmPgeGqflIQrmPlIQruzTXd6RIRrd0WMWf9rdeRJlrdeHrICCveQh0nw0UI402I3b1ntUw1mldS1M0CHo0nmldwS9GZGwrcRnBwULy9PcI6htTNtlS3yaHbHaCMr4RuNmPl0asHGJTyhQQZNAkQXjwX2pQs0X6pA3MmlF5jjIp5deQTr74srIpCgf5PKkQX6hjjJpIsgj7dYLA-pGSdCHpGSd6AZCodzpGSqxSd8pbpBJzpGSqJzhrZCnSdCHpG5dfB1cz8O1TiJ0kPQiug4s29V0sYDg02CNUdgFBRhN74p56XhArqCed9FctdpRF9RF8lF5iqgk9d5aiJpFc52C4tqC4l6hgvsp52C4BngFx3gf4rpE59zGSG4xEieF4m0w00000000ao70iw21EgEA2g40j5TqHoOp1A0UM6Rl4Qi3o1NuRl4Qi3o0f5wOgr50OgsnAwSa1AwUImRwBckja1UMi8yd1f95AQ4NVQ6Q2w504NbOgk0E1J0Ogk0E1Jp8a0k07q1AwE1g3qOgk0E1J0Oi6RAwOq1SwrgeEQ6i3KYA6NgcA75ySJ5NCpgcHaI0Xw845wahk0F1i2Ed8bMQAxG1NEdzgp8edOgr50OgsmbKWa0000000000000000000000000000";
    var zOneyPlays = "5n31sbk7l01e00tam0a4g0fj7i0r1w1101f0220d1111c0000h0000v0234o4420b8h4h4h4h4h4x4h4h4h4h4i4h4h4h4h4h8h4h4h4h4h4p21ikMUh4z8wU2J46cD8OIxjzb0R4y00aouxEFwo458awaspo6EAg01iaUigk0E1g18W1wao0oqaaa0k0E1gi0";
    var zElectric = "5sbk9l1We00tbm0a7g1Wj_i5r1w131131212121515115011111f000030000000401102000000d111101010101111101111111c302000202020000000000000h002520000000605626000000v000000100000000000031000o3300b000000000000221x0000072NwQsbe7gEoel7A2Nsuga63NZ0x2xwUx6AiFAqhaC72PxQa63BnzNY_rM7PZWZvfTHRY_seTjBMXtehV0Eo2AgUx6AiFxMIodkaliJgFlaS35EPocmzcOqdyw0000000044320ggc8531N14c7ayiMIo9b2OwQs17zhMcC531N0kc796jhIUtf7Q0AIb62iMIE000000000fnHRWWteTw5I3r0mWdM958xwAIMgCjhIUtf7Q2xiGlG5b-0EkGCGxi_wd6zgw0f7w84300wgM82130w8kc20xgMMe850wUwkb3yg8oe90ziF0yfaA298E554Owkkj3y1g8e852PNUYus93NUYuf7zNUYuf7zNY210xg84a23xwGcE554OwkkjkaliJgFldS35APoemjtQWt0M0sg52xj0ka5f1gEl292xgwo635xwocog1wNMo6360Mocqy00018Ai7xwoco61wMwo63640ocq61wMwo-364PxMU10wiMd0361woc631wNx4AibCgoco61wMxA6366gocWp1wPFA63d6M0000p31x-55MWhisdj745ipmQM_EE1g2w50a08010ln3z78w4NQpi2Gi6H9h5xcqdLI42gIU4A3f491i1kPUFSqHrB846KWTGQxaVzy5ONQsrIXKPVjCpmnBaCNL1YEEEh1z8Ocx42cz8Ocz9O1sC7n-MKC01lkVxUdZllll0FGwllgaGE3CflkVz8-2GpYECMCfcxliCNACVItAFfCL7hdqrSzhJVavyPSLrj3PSDcMlxC-pMN625t5TrSttTrM95Tp5NPSk7cdRgSaoXdETJdMeIuQmXKTISXKYKXLrKXdCCwQPhpBCrcVcXcGCvJqoYOcEAbe8Vm8RpmNA6U-7amHUFFWaoQTlkQFxThgy36hAp284p6hAp60V1KpQrzArllBljScBtxfoKwTXStl2nL0-4Z2TtTBTtLA23tTu9VCptTqFF-FzttljiC55528cp6hA8whAp2p40dXjq-XuQmXKTISXKYKXLrKXdPjpODd5GqsPqGIGGSGETIrKHTco3-sxuXBcc97zKUa__2T__eXKuhrKXsMKXGGGGGsgpCIyGOpH8GD42pH8GICqOaHaGIXKOGFlsecu-j7iJKGi6H92Cd6oC7wE98atz90GpYkXcxpoAbfsqDlBshNaVoWe9TtTrh5D9OcL8dXjxHNaM75rqoeCoaMPuQQz1FdX6yrJXdKN4DImXGTddKZj3N46cH8N78PcxiqoSlRkzE3m6AaS1E3hjla3E3i6AaRzE7ghE3m6IaQzE7gda4CG8mVamXHWKWXyjoDs8TPe6cneoabKTJ6KXIf8cBrlrqrCd6RpdOlTjdMDvjaddnjlTuz1TtcTbPl__jalcFRTpNeAFjfQOB8xxkQzjak8CBjadcFSpBcVjempBcVntRlhMioRlppdgsykQyP6CsWZFDGpkwHKKqAHKPaFBaCHGGzwV4FF6KXGGGpKKXFLGplsxpGAMAq-gGGGHbzsQSs7sPFGDcb5d0VyrKxj3Cyx46cz8O4g8Ocz8Oc1O3tkdyCeEezsSeBf7JzECwzuQq4XOTInuRXqouuQVC2IcTPe68MgHEKXuPHKXuhoKXj2Cxcmo60Jj62wppxJEk64P252p11xcwgMm88ofbo51xsyxsxxsxwYxwYJwk65Oa5O65O63O625e0l9c06w6iy300as8fGascaiq1KoN7KQOBjeO8old8QOB29FkOzjatCpjekPBCpjelTtlks4Cdlmmjk78Bd8INFDeLqpWCl8aXHCFaXIOGpiFGWGEUehaqhHKWGGCrHKWrWCln8mqFc96JcoaGGGOUTdzHFlFxNx0SVIdAWu2k3yvkWoX3jn6Wq4llqVDhluksF8qBwD_CpG8Jeo-tEmo_HchpATnz3hAkAgec1XGG3GHcGHOGJec56B201100wE21g42Ag2sG14rHDx5cTxKCed5lP0qYxGjFxB2vXFxxpCEyRUVSxpz-IN5Cnj7oE58kwFkMwoOqkxEY9kgg9Ux4iqu8kg09SnYaBevFY8Oqv2eVY9UzKqu8Y9SnY4quqFY8Oqv2eVY9UzKqu8Y9h1B867pzRRlIxo8qGqogcPAllj8qpoyNjh10GK9By95llNcJ402aSGvMj-j8eoaWGY9D8GGL2pXyL2GUCuUGGK9DMyJGDYeWj8eobqGY9D8GGL2pXyL2GUCuUGGK9DMyJGDY0i2XKo8WGY9D8GGL2pXyL2GqaGfcGCfBigJkGogcpdagQ8yOEwwjN28AQYgEw0jILUljPlfx6jjUhTfxf4tPjN7xeO_x5Tfk-4pdfx7s-4YhTdf4u4Xa-0A3OgQ-4pdfx7s-4YhTdf4u4Xb-7Ts_jUhAQ-4tPUjN7sVa0I9zg5kQU98QnbkQUV5r5seco7lutehEBkRWupORlQ9q5JP2XtGGGGFN0GGOGHaGIGGOGHaGIGGOGHaGD03tX8CB9INX7LZctjaFAbgZtVcxAhYKYCsKRMyocysysysyrdISXYGWHO93luluhelqVTxOpOp3APAi78Aej8rLOXPdPtn9Aejeh8sysChFxvhgy36hAp284p6hAp2oS2CNZGUsr3Y0aRxNIfeMsoeToGq4japY9z_qP3GQOUSkhoO4gop1jeTN0FFRXttlaoQFx9QktNA8whAp6hAp6hCp2FDp1gvqBvmnb4szj0TSgBc7jj8RkQFwNQ2LdkF6ytqCLq8kU2GUwW86c48NwyWwmcM7cgCkljAXP6EkoiJz1Ncwx683cssyI8kNRcGCgJ45tVcxAi3bL9DbJsKMVcV4xO9Op6C5B528cp6hA8whAp6hA82mGDstC9zv8lkQFxId57sp6hAthAp6hAo3A2Cvi9I9z_8TnSfoklwBtTttToaXKMlTtwHKX0ZAntS1moZO5AbcV4xO9Op2U0ghG0j2Oyx46cz8M942cD8N78j6YlD3zoutwVF98a79FzzOltagIQV0rID8OhMb8Ocz8GGHOqswfBaX8lyL8DaJmK76f_0qyfN-vZCsnunosCmoSA3cc4w1JTwgUebLpBmpZTnuTtKOx11A3i11TmgSXGh1v_eXPcVcHUxA0bl1x5GGUwvCXYrLijtoy14msi8c_4hYNsh7YcNC5h3jbcd4x1InJljeF46TodKWpR4te89pjy2Be1kHODarFImCmxgeCqaCD8GqsswaqZyK76c20FPId4zNfcVoG-cD2FU7O2G4Jjz2DHcHODarFJmqqCaV7RUbC7kQUwPlpcRBlgmolVhdcIgpD9By1cVcVcVcVcVcVcVRVcyFEh8iC6552oZncM-0jbXqh5z4kgop1hSZN2FEJ92NBp6nApOA332000aP6IuMxwO6MxpzXJStFVlcxq-KYCgO91BTAOP5085MwnS9O9O9O9ISXV9wOHGL8AdlVlV4VlHDu79D9Aejeh8symC65cXcxK_yXPdPtn9Af4PAi78D9AqonQk8wNAp6gy16hAp6gCdyFIvqK76M_0aIUsr3PI63JF1gGCx4MCv2o_SVKmyb6gy338apS-8ljKeyQNHHGFj5BcdyEEY8Ocz8h0z8Ocz8M785HxNzWdzl1x5GGpDMeP7i86oSWP3QxpBwjNnIhrLbI3Q5lRuv-RqGc8bawD4puN0Ph2Owx6c4nk2NC0Vy4OyGsLvmUmjKGsgj2w6lZix14gNd34k1WggWcJFy5Dy9C12co8KE5zc3ACklWXWT2OtTFt0cGxRtUGxya0xkogbLKX8KC20mGb3FGKm50cGxO8xyq68E25e0OSC8mu8Co48NwyWwmcMeOphlejLHsb9ThK8Alh5moZi5AbcV4xO9OppOAydxj2Oyx46cz8M942cD8Osjj6hl9L82N2qgSgoEyY2FyNz1jjAGUsoM82LeJ4haGVEcd8aMlEcOHkywjaBh16Eeo8yLe8cPmlle85lmllpllBlj42GO0gZGG5hx1pk4Uzbq8wp8wpggz62bG1oP0sNa72jBTEDsfeXBcezjhkUwDlghAIJNJgXThFDIP6y86q8Co48NwyWwmcMeG8B-ZW9D2PKXLjhWtl3KOT6R3Lt6CuPcq8wpEypwgz62bG1oP0WEsbLuytMYXKXQQuDlgXIJNJgXThFDIP6y86q8Co48NwyWwmcMeyphnLLHsb9TuYd7FRkeXQaB23ty7IPmy86q8mk48NwyWwmcMaI1TANcUep84Xbd4adAO4gWMJ4gcIgIM8hz15R0Ipwlo3z9ypMsOgu5CzUeGwzbprzqwEMwXGINOwy3c15nrciXOpGIb8i9qookPIO6h8moJTwP1CXejcMR345BR45p5pilJdGomQk8wNAp618whAV6jyqoO8FzEQF2TiCd6jjF0FwwtBGo8csnIpehAzBRsnBRpmtkA0mwj2-yw50a0k0E0CbtYr0Z45aC436jiAd20AQQ8yjAQa804V8L01Lww0lwpoaXL40aOVKMe05Tr02WOFI6NdnIQ3oCGYI75YnBTA0OXK-8GGMshlptpkS3oCHSaSqEkNTwo7O8Wsz9FMxkMg1YLqHOcH8OhNlcp7i2DoOqs_wAOZKz8Osz971o32aD8Oqs5QCOZKz8Osz975HI-D8Oqs5QAOZKz8Osz970Xc8qsz9FMjirbkMgoULoOsz97cFOGsz9FMvzcLyebQ7aM7a75E726D8Oqs7U8ILyebj3w584O80fdQZnBRpmtk5cbGa0m0wwk0E1UoeZqCbSrlBpBiA237fkk0E1g2w50ea5dM_5pEK4tcQPjbcSpFBmqqyhrcIN9DpCClxi6CqpFBtTqpFBd5RcTVckNR85j10X6GHaPqwIMCowj2C8kMif9MwOsX9OYDbj6IulHQxi2D8OqsXIAORc46ebScD8OlpFIRjdcQO000003Hn0XBaC436jiAd28IG884Ygy9df4a804X8-5in93jUhAQ-4tPUjN7sQYhUjIzU0lYAdehAQV2C20lViC2375r6jAp80e2Ts4mvlB9xO2wkMRFzrrpr4khzNI3OgQGogcpdagQ8yOEwwjN28AFyi5cmdw00v687AxFOcCDbkMg2fbkMgoULoOsz9718726D8Oqs7U8YLqHOcH8OhPp722D8Oqs_ijbSWcz9OcAsC1QxPGIH4WwFx9Qk0E1g2w504NG7tHVOD8Oqs_AAO-EULoOsz975E726Bj21z9Fi6x4ml442u8h4CDy5402tAv2GuqFOcCD8YyH9YGUDgsH0sEs2LU8sqqIHdG2P2p21carQMif9MwOsX9OYDbj6Ium60X8qsz9FMrIAOZKz8Osz975p722D8Oqs5QAOZKz8Osz970Xc8qsz9FMvifbY8ULgsH0sEs2wu236CHaPqwZXhg2M442w50eI7qVzcPcoYKD0sHaOI2OGIH8D363F7IGogcpdagQ8yOEwwjN28AQYgEw0jIzUKp1sAdehAQUaFww4-nJQp6jAp8UhgeAmdlmlytgkMB86U5gawl0I0Cch3HxMfekGogcpdagQukG884YhVjjN2y01a8cF0MfA3jTlehAQVWC20iVuThwMp0dRnofiFx0NAQF3hUOEwwjN28AQYgEw0jIPU6bP64uaoOpte0VmlBo5BlpmgaoPp0N7SFz7BQY0VmkFwwRCGg8drmRUO00ecc3TtfspdezGo81tBZhNuNAZjA2C1Na1h8x83wao851O0sgaHy584w4ua9l2h0I5gGqcw7cwOwp8cA2gA3IwQc50cA2K229mQ3q1AwE1AwOgrihC3Noeb1g391NqkEeGQccw7EsB3BFgjOD31d0ao8e9Mo23NE61s1ixxTL7t4A06b4AgoSgn0kMgbOgkwkMho1Pq94ag90gIHk44uL1PM5s44jJE6Q391g390A9T5F6irjdoPk2UCvD1mucue2OI_vYv5PG8cr8942C21-i2A2C2b0erY8Yf7q5PwcA5vsrg4FvRiBA1hVa6M4E9ZeitkMgsjwI87Bgc_gu6WeU3N30-g85vG2A23yC31Ci6Z1iFgMwVUkErFa2ujAD5c455e2Mw9wk3fQ7o7E3Kwi031g390Hwwy0XgdE6i3NXv6skUo9HL7v6wwtQ30Z1UXG0XEf0c50cA78aA23ikL-FiO0tOkd-B1fFOi1Tys5wwYq1wmwkEouDNT0901wE1AwlMghfiBXugvZi11Za7biwDBe62q0kMgkkUc21Vk30-1UrO0XE4w0Mk0Ogga8c1SwrgcA7zS-cVUPnue-d10XE61W3NTk1iEOMu8geu0Hwwy0XgdE6i2w6i18gfyQz95FmCqx7e4G2l18q2l1awBgi5FmYplgwypO85AxpmNvzYfYI9tYbqYv4DAYmiUImRNoXhaF4yekgao851O0sgaHy1zAwT0k0OgtkDb-aQccwa279gVqk4YFMMjg2C23ys60wYq1wn0kEotXNTh901yN946dA5M5c42YA585c4m0sSyAgbaTQ4l843Be6193Rs44j_30tQ391g390A87NqhAyFwwODby2A23KTJTJFiE9GQccwif89gxZiyFMMRa2sDPUkFwwjDO0J8Rz0dbyigxY1410Iypeii7DRe47A4FdXsTcqk8fUwDbyalBE9MQ0D1fJca438YbOLLbqo8dQP5CNj0Iig0oIJ46dA4C1j10L91jgFwyM3CQi8i43VA0Yk3c1g390HwwylJ0Swp8a0p8cA2C29ge87ywsk2w6i3qSwrgcA50cA6i1n118E2A230Ykbyxpi8c1T0roAEpVa2rkUo9HBc474UaU7l0MfgakceWwbiJVz48ga000000000000000000000";
    var zShovel = "5sbk9l0ce0_t9m0a3g1bj_i9r1w3353313335333433333304500001110111011111f0003000003000300000000000000000000000000d1210011000100011010011111301111111111111c2000000200002200022000000000000000000000h0000001000111001000101100660000000000000v1100103100000000000000000000002000100000o3310b20M05K22xwUwia5z1EUuocCzpMWufC39ESsg8kid8B5z1EUuocCzpMWufC39ESsg8mOBkHkaliJoJnbS35APqdkyk221x0Eoe84yxoEoa6zxV0yi9B2FoKocCzpMWufE4a96AiFAV0yi9B2FoKocCzpMWukaliJoJnbS35APqdmPtMa5yw88641x0okc742NgIg763hMYwh94OxkInc6jhIU742NgIg76aBqNqKnI2xkInc6mb8Utf7Q24YvhF4GpeEkJ6Esgb0wg84210wwoga62xwEoa42x0Ega42x0Ega42x0Ega42x0Ega42x0Ega42x0Ega42x0Ega43y0Ege82x0Uwa9510Egp2MTiC5l3ca4o6IGjFGj6SGKEapOQECb2osQYj95p6FkCj0d3kNxpW17N1way9xvNCKs1l9nlRRRMRsz8RRRRPi1KKKJ46WWWQgbHHHhKjoSIPY5uOV2lJO1KGsQvX3pxjr8apqCmzAjymlioUlGoouZC9cwWEePdcQPjbCceHryb5kVDyvrCfdkP3wzwi8bSs0gWAP2KU4wHK_WpHKKWXHKK-fn32VDllj7leqcw27QCjg9e7EFo0ZUOLVhiGnGHsKXAwK9cjigbgC4d3SSYxakWoMOZkvzEa-CyC-1LFwEa1B86E0000003KgaDGk99IwrG1OKYOrGFuGHGGWGKGQGIO3IqCGHBiCGf1TtcTjamkgSAlcRTjc6gQP8A5cO11jdtQOtO2iMbqGGqiECKbGGFEFuxwi15eKXKh7hjfAlOk3hkV3hupBt5kMlr6vVWXKWVGYSCGCOOKLqGJyq3eWggaofYRmRlnlnunttNnsgkD8mkRtNM9YKij1L8Mb8OszcOc_8Nb8OYw-tApehCV6jApKhCV6rAsmLj9-RwHWGIGGDEaHKYyWUyKoJAV2OCHI3ceA56ywxAxGKOU6OXcLfOA5EZY11Mk3lpr0QlkncgqAaojr0OJ3Cf8wmngVD3nLxJrc8DRC638nIXAi85P6E8akGGrKKXJKQNAwF0Wy03VaQfoYxwXCkepTx191v0WmM8nI9CQ8dP2148cMwkQACeOumoO1kMWy5HW1wXEnM7m-oaEffOWCcsdQg92AucjQh8XoaexcCz0RcoqdCx-xoJhwGgQpt68pbQhoUCztFkPxJRax-X9-gm4I58Lkgg8UpGd6Oqe1c-weAec56zqzG28cr8uoUSzqOqc3HKwT-4cMV1UyY2pR9wPprh8O0tgEHEIEAaarHWaGaG0MJ5t41hlhwShAp6hAp6g6qa8iyWy2EAWbWbW8iwcBh1QgB49h9kgt4dh2k1xcz7gEsNNx0IKxPe7Jh8bqT8oDMkX87NkwswU23wE6GOS1EGEkwouliyoCn00000004NFzYC7O8c9FW9lc9qx4O9xVoeoOYzaO4Qp5cbo4apU7cgddnyB9lmP7bVvkt8Xk2fw14m4OFpxjaoOnB5vlkBWzJfNz9OcT8kPPJ2CugepWMtg51Uhxiex8m4tphAmA29U0FzNVsy16pA9E_rk25cI058ekJI5gcAeTP74mkRYpDr6Rq7zdzapxjf6sNnBkxi0-To1lR6vAo3As98yhM90Fwe8UTgtz1szksw6jN4kPMszBnCegr6ooeaUsosqZdfxh1cw7skNQ1g20zF2-8G1S36z9Y8OcxcJk6PI92hPskQe4gm18maQNEVFee4f68FFYt9tbtlR2fkhS4wma2wEg479nQOkD9IwuCCoVZc5ln0Ms99ikz9OsEC5DfNVWxh20zth1zwaNC63yK7676NjjUkhi81UNUj7w1h10zJ2-8Gh0zN1zIr61ukp6gCmxN75YhAp7ehjgURyi5y2j6zCAUUgXyaqv7iniPccu-oWysyfsi_0RaossqCn731MgkHxNxMx5h10zx7xd3K5d3yhLlM5cu41i8u1QgoW3Qrojfhh5zzo5Wpo7ctjP69sTN6lArb-8P-fUzeOchOf12tDyYSV_g7cr43jlMB9lmNiBxzQCUz1cz1IzMhY8j2SV_o6NUjUPf2nx5uli_Cd_MzfOeeR6gO-8SanZlP6Nn0RsR9RSNjnUkhh8yfpXz8wczczgEx0MC0R9wxgs11Mn13P6v6xC61ips9EWfcasor3QuEjf1Gj6Bg11zazR0usOcy0Oc-d2y4AgPz000YweczhLtSZy6EowP3k1Oe5oQs0w0pGosqxG7270c30hEGAU3Ak3gdWKfc8xhNmhM1hiEx4h582W5ccbF6DMTBcsbtjWWd7zzca4aA93kRtqa8IsEGooa7sFBYy37endWzaOc0O5sucI5ufc9I73ltbKMEkn0000000GpL9yMC96gA96hA5UzoScz8O4NEaAb56NN6hAp6gnwpi21z0sz4szdJiFx5thgD4jckgIisEqWlebyhQneqDcnHGogkZNAp6hAp3sz8Ocz8x863qY06k201m1BRTu80lBPtws0bKS05RBjodyqLoKGMr4TnBHVtCxc8xwcynMqH0FpLx2DxeNAp6hAp3sly2CC-SO7raaogcakohyi5cu87aTcqDiCR0kEMssHN2EwqaacK-OxI3cmpe8QMmne0Jh4oczrD4qqRac2YO6OB6RerjvJVCdEFSFOUezrLervjJK3B1j3WHrTsqDbH5BrCUd9g6oSVPpizbAfz5_BmsoReF9F1PC-mQmQkkptY2Jpx0091hJYpe8QTVsUyQcfBRPR6TjF5KgSjEPFNiC1OT0O6QmVlV5tYMirq8jLHOAh8VSzyVU6qFN0-NpfmjBGokiada6WRZc2oa3uoEUJOcyGxiz0GImrhnJTAasgglV75TCdy1eadWDH7aUlExKrLdrrlJPBkaosQ8wM9GA554Vf6enAlksRma1g0dZU0i00L81BTtI08GGMe04lmnmldwS9GZyJCG0Rc9RGeA_0PGOadx8achOchO6FPgHIQaksejmjh457cGko5PwrrbKY_2ccHBKs5GoKQpmX4bhBk5EsLaDeKC3cPcq7BAEST6Nu0Qu6TuO6xEOpMww8bcsrow6WHhPrxFwGYrNk2FhxoUbcc07y6F3hzjhUp-0Qg57mXzBoESC2OVMeK7PcVw7y6Yhc75PGd6PxhhUnuAzl8aa678VKugo62ETutH1mGokkjAsRfeQX6n0XzwW2Rjy28SLaWPsEaovlsTSUSKHbP8Hy7FDLM5J4cFhxuU-ppc6oVC3wro6wd0q0JBaaaaa5seoa50000000000kMb0y00391A0O0p0cw6i1eihMax82dgAbXsgA0Anj22Vbtg18k9M0EpdJ0p47c0jAHR802ea1T0eaH807q1AQrkV56Q381JlJ03g3C09yjR74wWw74V00X8cCzGFOadE2D41B1FA8sE75RR6Q3C0slmg0eQ3K0p0cw6g381A0O01O0p0cw6g1c6tyKySySw000000000000000000000000000000000000000000000";
    var zNecro32virt = "5sbk7l1le00tfm0q0u1a7g1lj_i9r0w1h311234214214343442222211411205h11111111111111111f30403002002000020210000000200010500000000000000000d10001000000010000000001000000010100000001000000000c03010101011001310110010111111000011111110111111111h00001102102007000220000000200100600000000000000000v33302100101130000010111100000120200000002000000004o33300b0wg88210wwoga63y18Emc94OzwGme639IUobDiV0Yvg8kid8Bj9R2BkHmblOZwZ73O8QyqpcSzlITteg88220ww88220ww89SY00088642xwUwia02NwQsf84ihcElb5P1AQre7jNZ0xh8QylcCjFR2xiFlaBqJoJnbS35APpd6HpKUsKw000000001_000001SYuLw00221x0Eoe84yxoMqe7A294Aia52FoKocCzpMWuwfPVY-wgEki96zi9kOtgEkGBo0000b2r9CRrdT3BQXu0wogaZvblOZwN00000000wwoga63y088642xwUAkb63hMUugw3i98CkaByVwYvg8kid8Bj9R2BkHmbnqVuMnIlX1uOpJ6HpCTsf0886-2xwUw221LgEoe_0008843fwwggGw18gic4k3xwW8e63Bx1t8o65P9Ewf76PxUSrdJzqlcDkaliISImxm8Qia4yROZwimHS39C2qJ0g842pwCHg4214O80p31O_2DaMGAQUhkw9QAz0k3KW6ChXKwTt1JU7ri1mA0qqamFCG9yEW3kdh98zbGG7lNf5WbmczhIFzjy6ifdStD0ZPr6AyhN74YPCsOfyHGWhRkMBFlcE5OeoV2j2A61V8ewRc443A8LdYMw36XIwPsA7mF2XRHkMP1h1z6f8Osz1Iz6b8Osz4cz678OszcOcT8OsybFEoaTlllR0xiEtNvd31HtWKXJQQc845i0R8LALSFwujBpaCcq95P755kshqCDcKGFN1GGsMWGIGGOGHaGIGGt44iGHGGHyGE5lk2GG0nNokMEg1xC421E42y32o8egCa06zyAyGSiFytjN8f57ydg1TocA72f7BN7oYoRfo1BV0cPyyFzvAsm3p3CucsPJ0E1g3MELnkkil572eacOyKwcNh9bIkh1NLl0Mj91BX9rUayjWH4ZL8GUE6ingld11Xzwq5Nu8VrR4dqcld61w2Gp8fYtjjtl0kROdxulsyHM1OtD8FXE61BFELGEOwrui3bShFD4WoOqCEAyq1J3jhqHR7pSNX6FsnJXoYHyGtGgWAv5siFH95zbVv2fqEQRkj9UKEtRaCcbePEERdloh0qqV2iF78g_01cq-MOew9ykfakQkmIDCYP97BpLdXiCAwQfsGT4QShUFUhVpPMWqK4uVR8uQAb2CCCRN0WqmIAAy5X6JjmS1rg9Xx4m4xEYrYoV3VzCdDoS4Xn7reRIW3KrCPKsjIFTebStHpTdPm7sUzwb8jw28Qp6hAp6pAp6hAp2sPxj9wsH9wcFcmsBj21LKnFbFgCzhglja1s5c8460U039N2JcH0p87FHNkFGMGzRdq25Q0ateI04VpAqscF0QAna16D4lH0jCBr4RwkO1eEly0D6hc0cBD1Nj35PmP6n2s0pCDct04dN5GGOGHaGIGGOGE001cy6mE65jNSnywFIz6w21lXS7hEQaI5zID00kBS557h_3T20ld2py1L03K0w0lwpttTy05psTrw1tSM0KIKrSGGZCJyqHO-bUysOKXLyWHLyaHbHaCZyqLoBccT4go658a190Mboc0OWpGOpag4y80caoQxE2yb6g6wehA33AeoiUte8dljCsxgjc97Aw9uPIP4-LLuECCoolaogM2C440dj2e_Mz4sxigq64E6cqs0OE4V9nN5g6iKCdO0I9xgy32pOfa1Q35lcc65suJwWIWps90MC77z2C7722A23asYiBbcFzNN2D6n5cMYDNAWCzB8-kaooiaCm3aNzNNDRADWGIagcQzkMMoFSJD8Osz9OcBj3zP3GspsjPioYIMGTG4QZ58m6osx9xhUitj30CyBj32Dgo9ce5ucc60sBD704sPnotj75BjlNoXCCFj3zM4WoYaUsoYOHNNzMxaPxNBTPRdkC7tBHkQmlcuKpS6so04u68wNNqpspy0cpegBC6CxIt8ozN6PGq0kaoWdmOA16jR7l9Rb0dxj3azsUgUzpStxjz3j0kMNFh2xcq4F2MHxNxY3N2L766xlp6RehBjAtPfzeNyegBcHM9zzEzhwegCm0A375sgFPxRns9YwgeEWDGcH8kMOIStzai5xaC7702osglddddddddddddddddddaokFN62FFFFFFFFFFFFFFFFFFGFpxM3walcEetCtGgJLAp2hA99j62gp1ltCIw-_Ag212wweoiHHVkQ0cMHgJXHQp95A2yyA2A1rE8bcGb1bsmJ1GBMcQKSqmYJrKsEKI6Xn8x0YKhTRBO08iGTNq4xfggnKaXtkEzaNr5AqhOD4SHExkDdj7LbXClmkCcTMapSghRz7LkYc451ceGQNYeCHOFxwOFzylhBkDlMUMUPGqGRccGuVj2CGK2woaCGBA75p42toMUMME1kMUVDCv6GRcI6sFjf4EWqf2NxNBxju8lDjjEhoO3ZVTejCu4FxPjJucLjqWnSfjpUhcma7FHMkw-ONWqfOCxxsCzgAyZdN4s4gdQwgqGwLC62zgazO9sTrV0wTlm5V8KXI75TtYndTNtlsMYntS3yXK-bKXUKXIf5TtwUKXLyXK-bKXC7yVKMeC62w25TllTlk5N8GG1NllNllNllcf5lge9D-aGKaGwYll4xClWhxkrj6Z3hdmYyNdmP6T68IOVzldK8JjjCtlkC5Py3tTyy8cpmgC3KgkyWoo6O4UylleA23lk5QghaGwsllsllsll53Nlk3yGHyGHyGEf5lg7j31021GGGp1bJTtcSW885TuZTsRlsll1VGG1NllNllNlkkf5lgeaGKaGKaGwYll0USGGGDj32LtbNKXrKZrKY8lnlln5lguGGwsllsllsll53Nlk3yGHyGHyGEf5lge9DGaHE4bNKCm1lwVllRllRllU01nUperBo5XhNfL1LqdtTr8a4Cgaqj45hdy4FdlYpP8cw4xMARq0GgQc0cMUBcd546kNURbpOIHpStDdOAPUSJAa8I90Owjf4wh0A58AMGw4NHYbpxNf4ruMBI1jeD491cS-AcgN79pxhqgk1SK4IhNb9j9A294025ck3Mgh1DoStD4IHKJHpSdHpOIHq254mee0CsxDYPIreOP350ja0X06Cx0YNymgH8lpP2k1kwxUS6gqoa80bca9i2xcaKFPMuienIV04PAe4gLoj684EZ0ntTBTtVtTuntSYwntTBTtVtTuntTBTtVtTuntTBTtVtTuntTBTtVtTuntTBTtVtTuntTBTtVtTuntS5P20GT42GHaGIGGOGHaGIGGOGHaGIGGOGHaGIGGOGHaGIGGOGHaGIGGOGHaGIGGOGHaGCIBQD0hhokgAa0YJg8ndlmllpllBlmllpllBlmllpllBlmllpllBlmllpllBljA1lkVxRlpllBlmllpllBlgnIdgp55W0KHLbKHOXKYKXLbKXOXKYKXLbKXOXKYKXLbKXOXKYKXLbKXOXKYKXLbKXOXKYKXLbKXOXKYKXLbKX3NG8zy3llBlmllpllBlmllpllBlmllplkUxllplvBlmllpllBlmllpllBlmllpllBlmll1sNYN5N5GqOGHyGHMGGOGHaGIGGOGFX7GGZV5KXLbKXYHKXugrKXOXKYKXLbKXOXKMVtnvdRullnBTullnBTvllmllpllBlmllpllPllvlTtVtTvdTtZntTBTtVtTuntTBTtxQ7gvUKXLbKXUKXJW0KXLbKXOXKYKXLbKXOXJjbKXOXKYKXLaKXOHKYKXnOHKYGXLbKXOXLcKXIeTtW-g8dTtVtTuntTBTtLA25tTvdTtYTtTBTtVtTultTBntVtTCltTUG2begdln7-IgLgdTtxsOYUdN1GGsNWGJCvSGHqGJCgD4aGHqGJCgJGGSGEeP8f5lmRle8JlnzllNllBlmllsTtVllBlmllsPdKgJlgkM_i2zKa3YqGIGGOGHMGGOGHaGIGGSGHaGIGGOGHqGIGGXGG3URlfooweFf8kjtVlluhtSZEtllV5TrSnlluhtTBTtVtTrVzzntSky-oojc68AYyntS-g8dTtxv44iXKMsntTNtTv5TtB8XtTosGGIbUwwhtm-pgdTtRTtB8Y0S4FPtTvdTtxWKXI75TtYntTNtTpieTodXtTuTtS7yXKMsntTNtTv5TtB8WxvwrtTuRtS7yHKMsntTNtTv5TtB3NtTo7j32Xwn4iGFQwgqGwKy29lk3yGHyGHyGEEuaGwsllsllsll1UGG1Nl1Yllsll53Nlk3MTqXMKXLMKXIfxtToebKXUKXLyXKOxUKXI3CntSUxlleotk3BlrFzxllVllClCllrBpBlmjuegclhifzm0w-dTt-dllxYoKX1Nllv4ntYllmnybKNslZpNtTv4RtxUyqI75llYntTNtTpQAkO7P22PcPyXK-9GXlMUNOg5j31Bcd5C6K5EtsTdqocJM1GGsRKsPaGFKoWUOzybkQVBRle8dljC7llBlmllpllBljEwylltllsll0GGwllg0FES9xtiCczvC9AEoyy3eNAcMUJc62FBk3LTj30kCD4iGFQwgqGwK95lgeaGKaGKaGyK85lgeaGD8iGHaGIGGN0c7dTsCGPtTcTsGGPtQLdlndlgtTtSGHqGwZll0UGGUGGUGGa7yGE75ln5ln5lguaGweptljy3llQw5Enc_c3t886GFPgWGD86GFQNPF5jtd32IawLCm2JT9Lr3ndSZxTtSZ0TtTBTtL8dTtVtTuntS0bCOMdkVxRlullmlle8dlmllplk5ZRUEJ2G2Sp2UGGOGHyGHaGIGG2VBwQ5NllBlmllpllBljSncxnVntTBTtVtTv5Tv5lhkNMAhog6zoSdzoOcz8OcwKjIr6NIr6wr6NEa9I1uRZfb2v48WXKTE2XKTJ3KXJW1KXILfrgjQyTtSZxTtTNtTuntTRtTuntTBTtBvcura11huNYPctcc5F42v847KXDi11XKv44jKXwf8BTtYZTe8BlndlhgKy20xl1tccaGEeRl1SGEf85llls0y8xvcI0f4ruMXKXYFCH1ntSZzToexOXKQMgAMw4Qs0bQztSZlg5MJRtcS85WqVw_-2CvaoZ8wg183g9xRI9Bzp0kQuMQag82UurUzM5Tdxjz7ykwokMMI3RqoYZg183gu5r2pup0kQuMQao86xVI7w5BExgFNBEErDs1VDOLo1VcgeqSf8t4i09EZxEO0YRP7xfw3AGooi0sXrWx8id4Sa0-4xEO0Xs2Cd6ll3m1ULMwmTUpUNN74nmSxjeFca40oSZA61p8c2j5EelEL4rCQ3bOgpD51NnhK8TeWXztStzrWEelRnkrvlthJXeNJ-kxM7ErGdjWHGdTpSd_GwVLnthLZlR6ZIX6VRosiW5Wzk-GWzrStzpXAelTu9YRP6_IX6TNEsHaGEUHye0tDoS-e3DUBCVe2pe2VwkPWOJjOcLCuoSKb3Dp-9Vm1VenAxxa8AFEExaas7OgVTmV6hD-4wMnl0VelCpe1perABjbmh1xcu4gEh5w2C21qqfcEnCqGl4kicz8Ocxce4wEbVgw17kthAp2C656NjTfs007Kgsgdc4gBAxVM0u91I3U51IwS4Qew1YF7OeiVA7l03AwWwv103pi1zyf6BcIa0YxwUwvn4cAqok03UMfzg9DPAwOYI0uBAwEXwv0Vb92C6C0fcYNN0-q1Nf4sgCxU0f0agcsgfEw1Nf4shGmNT00XeNN0-q1Nf4shUlAxPc3u03l100H0OWXL40aOVKT02XJw1tpkTIjlXdr4RnmtrQ44Gwb6E9xO39UEeao6581C1Ng4OY0CzO4fmsi39Ogpea0SwY190NT0QMgyntx3Pge87M83GkQew1VA7c3V70FBwGGoocpmglj32oqqkgEh5w6NIr0dzoS0r1qdx46dzoUw6NIr0eoEFFbMD4ddddcL45cgP1imoUuCCCCmy2CCCAIH45ddddddddd9pwy2CCCCCCCCCAIMMZddddddddd9pi7FFFFC68aqqqiRRQQQQOYfj4cLimpowFFFFFFFFFFb8gZddddddddd9nw0Qwg0aMcKKXN02IKrJM0KXo0nmldX4RuPmNdlRD5YhmpBV5Tv5Rnv4lmnmldX4RuNmPl1jhTo6C2g4AOV0C6E0LyNQQQQQOYhkQQQxVNj10m3Mi8wgCk7Aaoo5ZUFx08ow7MLMUfw7T2p-rq8kaspsErvc1X1h4wao_MaoQp5cgaooiokPKU6NjMHMzuStzrj5EaC21Mkw0MaU8840O0pocA6g3807q3AwS0p0cE6i1n114x8l0fdxUE7c0O0pocA6MA8zPwtMf5wVw7cdck7e0PBgZ5emkkUqA2C230kMf1U-390QUwcTZM2gIso3p1A0UPcSMsg7z0r8cA76pCU3yec1IwO0spCroe83NwagkwUPcUM74so3p1A0UPcSMr00JcoR83ztTw47cs-3p1A0UPcSMr00ZoFgwmwD8zrj11Lle03A5a62FVj10RajqOKqPCYkE09Mfz7zBufnRuZtTzkZUrUXmlPmsTCnomD41ewu6uFMwnOsITRc-fjrjy1LIYHSLmoKsP4CsygJc910FFN0vK900wi5xc186O381NCpJwS01I1wocA6XKXwe8qUg8cY1Fx0EqFx0SCbdElc43Age1Ug1i10D90Fg0riC23H42V1N8eE1A0O01j9x464xoj5z8h5xCbfkPhasK8M7pCxqp9cPPR7cap8cr2Cij4SCCIgA00bj65CmpIPUEwkPBTjentcxkMgf2A1E5s4420p0cY6i1j19zOg3PokxakUq8HAFagjAx1j110tc4290jBF1FN0jg5lk7KQ44w0MaU8840O0pwBs44ikxk0Jc87_FCCkUkfHHNggpO-xXCbl8Y-1jepC9yVq5c3w90xwOgde82XZ83092NNwdA6g3zcPr1N0uc1IwOgspCrw5c46dKXGGCB43lkFx0SQUwkryyU3TEf70p8eJPdM6M3rKZI6M3rKZI2oc03PtTVnBTumFMwQxVhVpmsRlcVgtgjBR5FMwxpHjy0P_2Fww98ws1820p0cw2B00BiC23r42V1N8eo1A0O01WH91I0O0p0eHHG-HA74wVw6g1i11E8nw07KRM0KWOKKMlTu80lBPtwSXJw1tpkS3oCHSVHI6PdlVoMGo86-70Y81A0O092gCbvB6PIX6O7GwYO1n110wlgBs44ikxk0YS7C0sQ381BwOgsNPour2C105c46AU9Q7u0Y81BwY8iAPMZW2I586D41TZPwf2ec1IwO0du8k3cNFN0Rl1kMgc3N0fb0tg3a1AwYEi5Ufdwi1A6i1FN0rKZo3Cec1IwO0spCrodw0v34gd1N0cw6g1aidj5Nj11yxejk4UrA2D216xYoYd0AbTB8dw6OHwwws3q0C10cw2gA1XLp1RvswS0rftwSgtQ381T0uXSgtlT8IBj11Lywk0Xw6k3y0ZnJ0SKF1I0Sv2Mr8eG1A0UAflZk3y0p0cw50eXowj8dA740O0udxWLywsg381A0E1RvkO3p1N0cw7txWLywsgB1G7tivxasGlIVg04aqJHONgQ1i0bjy1zt2QNzt0qsg6pDA418m4Me1IwO0spCrodw0mC4wYxNKXNEeoVU2gAGo84tpCruM7z0pei3zcPzeoUM6PP7epCTP0us1Pei3DcPDeoUM6PP7epCTI1XXKdTuZ1T7v0Sgp0ecPdI6M0fztSC9untFOmzCpC09ask8nlwcFOPdOdALC206zDxqoNI0aU8860YE1C0OgaU88A92E1kMge3Ng5c4i0slRoea1N0ea3Poua1P0cw6m391I8yhI03J8wi3o1A0O09gvg5c46S85O3ygsM38k1gs000000000";
    var zTest = "5n51s0kbl01e00tem0a7g0fj7i0r3w000001f444440d222221c000000h000000v000010o333330b414h4h4h4h4g4h4h4h4h4h0h4h4h4h4h414h4h4h4h4g4h4h4h4h4h0h4h4h4h4hp1PGq2IgjkQ5kwS09djglM4Vg2nkQ5sAUM2oRdwm0EQw9MRdpq3000";
    var zEmpty = "";
    //spooktune
    var zSecret1 = "5n31sbk3l00e0btam0a5g0fj7i0r1w3011f0000d2111c1300h0000v0001o2310b4xci4QhmtTsi4N8jhmu8y18i4x94lDtTghd14O8zllkp261FzW6C23mCuw6i3wgOgkQ_xYEc6701Zi38i0qARuwYAddEp6g38O0pb83x1M1l2Yg4222dk8kxwaGgOA8agOpgKwe4588iMwGGOk491IE8nmEoxrs0SagChGQ25dfBcvqI5OoiCLNGePnjhWAecFEI3UxdagiMI5GRSQF01I7wgcz8xHA0Ocw6hFz83AxGqdzE2apI9zhwmhyKhBp7fOcP8OIxcnaHlc_iaoY9E-Aqr48yjhgaqNhjI21h8gg0Ygha5wp00c0CK0ogho5lk1Mw0CMc0M3aKX1Ei25wr5wr5q0hFws230C95mi38OwkwOaIA6hjILsGLp1Apwagp5mi38Vgagp5mi38OwpKi39i4L8Fm0RClYi38P0kwOaIA6g0";
    //fallen down
    var zSecret2 = "5n31sbk9l00e0vtbm0a5g0vjyi2r0w333211111111f200000200000d010111011111c321000000000h600000000000v200000100100o0430blmnopqrsbcdefghu1234567812345k9a1123456711234567112345671123456811223415112234151122341511223411161616151616161592729293429cdef8p2glaqDiCzRPhjnUjhWaCMu6ACkSnwGWfmFwmlzzhVQt6kkNZj3AGsr9PNY8lQed7Q4-2xkRKebkQca6CjR2ocgs5wyoI9x1GoEsJjy522Vyxj3Bwhj9bxGsgwP0Fx2hhVh1gltdkbnm-ZJj21zoOcxcmcxjz5yRecqrqD4p074ship8mliCa7jYkpkMxgo63wU5GYgP400dj212HB9emB9ajj6oOnjhBOIsqfezE08FzG9xEdc8Sg90NyO8cXexrePGSPIXmPIWLIXbT0p6lIXeVIXeVIXeRIXeVlmU46hCrePJ0OckStDqStDldDpuU38NyStDvStDrStDlqWWXHD00OcLpSt2StDldDpSJDpRnqSnF838PdDpTJDpRjpStHpSt1StBW638OJDpTdDpRk6hBrePGKPILywp0dw2D64GEAb2gAaYoFiOw9td6n001j53h1z4Yz9OcD8Osz9O3yehyehBp294reNBp1kMwgIzkcz9OcT8OIzbO3Jp6PApehAV6jApegtD8Rb8Osz9Oc2Oe8eRIozApehAV6tApmgsD8SdHoSdgSdwX6NIruNIreNI00000000000000FBh1RkQQClwGGqqjaRSQQQCG2HFFFc30gtdd9u07j100H0OMlTu80lAllws08KS05RBjodyqLoKGMr4TnBwf1Ov2g05V0cKXLyaGI74lmnmldwS9GZyJCG400000000000000kMe3u6E20epg4waOMGU80d7931wFkMg0glpmlNmOy151OwR0FUE5mlB90NkC2Dklam3FXD0mRwYsOMu5pocxn102EX9p35Q4VgrMTxF1Nmk3aOguk7a1CV0arwtvBwUHb1AtktY7ep0cDf3k2CMa1a1OgrKg2CU7mVoeGOMp7l4202cw1U0R12Wa-MmntV6hdm2GGJw1dK04Tgeb23Sy6TND8kMhbjAHtJe43kooSzICszqeal85ao80fausw3unJlwEkN0Gei3ODydCF83p7sTcPqj1DCa3PgcHCdCE7uXvlsm2xjxAXA00000000000";
    //Pathetic House
    var zSecret3 = "5n31sbk7l00e0kt5m0a3g0kj8i0r1w1151f3000d1131c0030h0000v0000o2210b4zcN94gicP5mu04zcN94gicP5mu94zcN94gicP5mu04h4h4h4h4h4h4hp25aBkMxwl0F1F59yH5ubkaE42kR2wgl5dEHNlyI5F1iaAxi2A601i2ElMHNo840aIFu8aA03abLG1lBwkx1lp4w0i1Mwyg9og0Q1B8nodKg0aQ2gaHHg9I2CMcBkNtwE2CprFyyq5-rDVD5Tckcfcl8X7Ikgk4bd8UdQMyf12NyOkXUPeC21t9oPe2dW0v6dP8LwwoOptx0-bfGcA5c4Q1hF0giE5aF2B5Bd8OpeSTlBo2hRo3B4tI7npOsCAejjwasGW_wm0lAq40a3N15nBp50OA4fFx14Riyw1Mwh0J39KYCQ91G85SxJpCNdO2y1MAw0wp0ahp8w0";
    //Ghouliday
    var zSecret4 = "5n31sbk8l00e04t9m0a7g0fj7i1r1w88111111f00000000d20111111c44000000h00000000v00001000o3100b4zhh4h4h4h4id04h4h4h4h8Q0h4h4h4h4Ak14h4h4h4p260les1445cwlWWM94i3Bm2CgpdSxOH1lo5eY1sg2NVue68Dv8dWwkO2CgkO2Cgm00FA5cU5mec2rE5BS2GG0GhNMllu1gzHKMleI240Gctus2D726FPwNFM05cQNW4Qi1p56g13AgmaFz0Vpd1E56hIr5d6gC52y374lkkYOdd1Nu07t100H0OMlTu80lBPtws0bKS05RBjodyqLoKGMrtlnm0UPyaPcI6htTNtlS3yaHbHaCMr4RuN82Cek1sO28c86cMsKX3C1OGI6o79KQeo7bKMpx6Md0o4c2ww0Ugx10PwVtS3b3x06236oentEcIe4MdwNG3BTocMDg80hEw14G2t1awahE9k4G1k2E092wBg2wxgiE2Aa2l0G2ya100";
    //Puzzle Plank Galaxy
    var zSecret5 = "5n31sbk9l01e0ht8m0a5g0Pjti5r1w181111333813210111111111f000000000000300000000000d221111111212113121111111c100000010000000000000000h000000000000600000000000v010000021100101000300000o4220b5VPUhB6taSLzeJYW000000000000Lev2cEPFmRYpRLDgtY1H7cv2cFQHq-cw000000000003LwdoVzUhBeBrnNAVPDGxa5boRPUhBew000000000007esZk9gFr6Kv2cFQkx2l38gx248gx248000000000002A8iEp248gx248gx0p2vV5ckdc7I1OY1OYLbkMwHjw00UHyYNn513QjeC56Pw8VoaMm0F0FN2ZWoSaoE8jc46uAHbxWQ58bMkwW_eIWXHVW-OMuFYeM7bM7N0XaS_asTtOILbOY17b1m2M585e8bL1UUFyE8gY0YPyepDVK90tsQ49gaTcmGEpX0agm0F0FN2ysFwwVw83c457tXQQhoP-wlck6JHqOI1jw0XaSYNcTjWHyuaj9Hp3nLp6jJWFKVFYnBrn5r8rdT8OtIpYhND6slIxHTcz9SZTtPh2HN0wzwV6O2w4w2xj9dh4f2of4si2w4w2zx4gYhf4si2w4w2zB7pOhjhkqs0UIA8BDz2yy5DaDb1o2i93nUNA0HWIKetP6NKwEH9Rw6PoSJA58awmzIO1Oc4Osz8OsD8OcD9O5cAmg2FN2PGD4jcxVQ5LcpF8lcm4zlj4wnwgYFsS3yOgxPMr-i2A5UbOgMT4r6EwE1o2M58aw3UW3qSu91AwE1wffw7CwsNPvcwPwsx0P0l06A5oagkwkNEqD81o2A0ymcom8aVOMkAuLPcYurlUwghgtzygk0A0kap9G8ysO9Ecll1yGGNllpEIJqid9FcJKiGCa2Un9rKVum7unBVunBVpYhNHEHL4QMoj41M5uTaXbMMILbKYrsbwwsLbKRPY__PY__lMwgmD30i_bOqI_6v00R9uhq8DghIjYUokk8JjvEoZyItVM7cmGM3cmG0Fww4o6gBk0kQkAEj9xcm2l-3c5vLpJTtVtTo98vduMkgwgNaocF6h-c3LxI31iuOrKXVKrJP5KC03C95lw0v4U4405So2VARleodlSRlwHKMcNka19QdcnAMoL8Mr9Ocz9Osz8OsD9kNio1vuXXFAyRd0XGv1jLu5lmhnAxLj70P4D1foF3x3Eea6iUGZ0VyvvAH3MG6261X1KXLbKX18zpE97MgMsntAHM8859X9KXLyVK-bFo55k2_-1q242Tt1o3EbsPsA87slKVdSRgo02wnvg4Oipci0nOPvoeqGKuFdP9GH1D10wV9woOS42GI1t_W2iKMgkU2OX0P90T9Cwg5a0GGMmP48e0WpIck6wVxhtY0s62Tt0ChdA20L03Eww0lwpttTy05psTrw1tSM0KIGrS9GZyWHS9KLbULy9PcL8KXUKGXUyGOWOFLoCHS90tcw03x2KD9KMsjlTNcVdnoa9GYyYCHI54RuhtlwGCGWHwgaYIQgpdRunltV5luhujlTntTN6hdnhdnBlpkRt4RuNtlVkRuNAjlQjlXtsjt05cnAMoMc40211nApoaMiU1HO7czL3TgptxVKNJTKW3bLlj29l406c6OcB06cDoOoyOcHoMvoOEnoMikj8cUjgoYr-ws1JehGqxQOeChQOckOh7cgF431CptS3cYrKYPbKNNwSBgwoPplm36rfHMoRVtS0spDIjB0N0oRVtVwcqdaMH1zdBTo1NGMFY46nBTocrsYh86dmnnw76n9KMpCntwPIHH1CVtq0sqIbkr1BVlS36re5Y6dentw7cPqh1DptS36TeKMpKlJw76r2tg86nBlocpI9W31BVtS0spJRg8g6dunuo36ziIaMp-ntw76zb221zhB19wNGUXeNCOXIsptW_1zbBS636j2o486c-5BU0sqs6411y-m5ococ8eI6bUgno1j8s5d261MNaoE5pc30TU61EWp7j84y8Op1wo000000Cx424w8j0EkO8O0FyhIs89wPhAYjg1e2aEg2aC4bWg8nyB8ua6jlJVdmTARrujlJVdmTAR3JVdmTARrujlJVdmTARrujlJVdmTAR3NCTJRYpARrujTT6rCRNCVnNCjlJVf63NCVnNCjlJVdmTAYpNCVJspKlYpARrujNwYpKlYpARrujlJVf6spKrn6rBv6pdmTAR3TU4Uks1LJck3ZYqI2p6FwNUw0OmoKqO0yub0A1oFyg1ebJ0y1rj50TkUeM2p79wNUW39pyVH829kUwe1UMuEjBGLa4NqVzO_MulshA9MVg5ck6KEUyyw0000000000000";
    //tension
    var zSecret6 = "5n31sbkal00e01t7m0a7g01j2i0r1w1331f0000d1111c0020h0000v2013o4210bpCop26IFwpnhhjjhhjjhhjjhhjjhhjjhhjjhhjjhhyeoqaaqqaaqqaaqqaaqqaaqqaaqqaaqqaddd55dd55dd55dd55dd55dd55dd55dd55824M0GEimGJwqGGEeGG3IB8aG4GGxE1Ig8NM7nRyQ62xpqG4wqGGEiGG3IB8aG4GGj16weeKY0eK201m1BwHKYg0HbCX0U0ntI0bHaCMr4RuNtlwS9KKI1Nv5VBV0cKXLyaGI74lmnmldwS9GZyqoY0kMM02e2wHH1m1oMUUQcc30Yi1E170wi5oaM9FZ1L01Dww0lwpoaXL40aOVKMe05Tr02WOFI6NdnInlodyrHH0snNupug3bKXUyGH1N5lBRBjodyqLoCC9ag7wE1g1cycwd0dD91g2w2Ca10cw50ePAwE1g1j24zp0A96hN8a0k0Vz83g0";
    //home
    var zSecret7 = "5n31sbk2l00e0st3m0a7g0tjri2r0w444441441111f112220220000d101101101110c000000000000h000000000000v000000000102o3010b288MAaoW4GmNHDMzataSLzeJw288MAaoW4GmNHDLzataSLzeJw288MAaoW4GmNHDMzataSLzeJwakFiBak8gx248jGewUjdoVY00p2jAGq0SFEx8Cj6b9CNu4ZGwBsnMzG5GdTdGGm1s_bUTfjc7L7XDc0j5zoaq3yqihFHyxR5d5FdwbehlJ9F09StPr8DcWLGPJwGWIZhlJtotDsSObT4OrAHbf539j2FF8Is2O4wCCudFEyLkOlRWoQVnqjih8VHyaWGnUFpJJJDxKjRjYoU5A93NYpXlWCiKLFGe9lp5tlbjk4ye8QFB8J9gwmEQ-ihhi84AKg5YM998x91xEEA6k4aq9qpA9Eaiqai9xa4fdQ9AgCAkgWLhF9BsaAeoCrioH5PmYCj93P6NU_UVUqgYTP69lAeRUnTKPB1MfrTdDa8AQ13oUk5wCvNKIC34e1VBDzgK0tHysAyAtP85KsOCp13IYPPuPB1PdLhdDqNgxVU6hGwI3PueREMx8szwb9WlUaf2ws9aogH2v4MeSsn6p_z15N557s5U0skc01M0g20FGIU03wmVCn00mw16tTntfs2XKTuWS04tARuVuY2yIXrDuXwkRltVll4nhwQt21E0hp0E6AyAqacxEAhIkkr1O2d94Q4qGmCEkhjhpjaBFa42VgUMEF42in4gLI4iihii3jhh8cFu075300s040waqHe00U5KpBM05E0hDtRTjT0KXJTKJw17pdnKnL0EHeSVTKU6PJZCrJlkh9E50E0CygCh15I0S4Qy0AmM3oMx0CiKhpgdD9TkMF8Jw50e8U28JA52pI9EKBdgwiqo6cFEa4g0YC3IbOw-mAlcpkQVL6udY-CixsvaNun3eZTUv7O9P2fzxM3NLNLN8eQ9pYXhhP2ovfoEAa7vhoCb0Kw6AyghU0GtR57kss-8UyWwT4r29jke5Dudfu8VapkJ9gwncYikky19bD1vv2iieiglCyygpiY0dg805o6m2KXN02IyXI3w1lSM0KIGr1IjlX5Rm3oCWYIAkwe11O8aH4g8OWYGhPaX4EcR60158iQh8E0kMe1R5w4yaSJE5mk1A1IXoebUHq1ksE6hk3GKEYo8si3GuGSwl7a7h0xOsSUmlBllA3BzUz97AV0sweigd8sw56if9O0V0sAwqsWz4cDaKOGcL9EOYD9GOIGLaEOYCwVujhBpekFiQ1EtUPOA0b5_25lGl229Xg1Euo2GT8HO-WPbaXb09yMA97c8jm0sDGWcgOsGPaFOYCHbOsCLaOGYGzbOq2pkcq_aAjA0sghhbh80fkxWw560zOsweg79gMFQB-sF9l5o04ktMfksyahM8Y000000";
    //alphys
    var zSecret8 = "5n31sbk1l00e0Ktbm0a5g0Kjvi1r1w11434111f00303000d01101111c10000000h60000000v00001000o2200b000wv123412341234u56789abc56789abcdefghijklmnop1213412131213121348989898989898989abcdefghijklm12345123412341234567676767676767679abcdefghijkl80000000000000000011111111111111115673456734567p2ehkNW8FDwzM4c05jn-bKohT1U26IaCRUaCngawn0G1o2E3a0J1o2Q5EawdEagaWfmzSa1jovgXgaMd8agmwF1q2U3m2Y4w2A5gbgfexG3AwG1s2Y2CRt0v3V5UYz84kQ_TNzx7w8yR4sHsu8UIzmhubHsAzkhTDyeeUMyT4sPtu8UUzkhuaIsIzmhSTyeb9w6CcNxL38xw0O8kPl_d3q6QdErgR1W0R1G3k6i3k56CbEq32zE3gomg3i6h3k6i3k5BgMUr0SxI3k4nw0PMg0aMcKKXN02IyGJMwyXCyrL8KXo0htlK04jtum3C-8DcOYyXLyWHLCaGqWGtKGLoHCqF6AbUq33KwLHx049M88uW2ez90SVbLluPcVkswIdQ4stfXTcW9Hx6GU7Ev9mfD9ZWeGGhT9dKXURw7mM3-00w-vIbSRNMaU-YTfK9HwaHU3m7O2E-k_JOe2G_KGHwuxOlz-cDTFuGGhZXxTqfMhjj_29HMjI8C000aoJ1xgQ5kPHsEc66wHBek6Id1n5D0MSxI3k6Idgmj3q6MdEr0FCYTINiM8dcxAgwQO7xM7gZE4dcxKUdcAlcxC0Aaa6wHOKY_PGoqp38ExFAdi8nHgN47pwe0e2Zgbj8p6gQO6ji3NEoz2QxRyx6oNy-6CgOcxqp39G1TgN47miFwdcp0da8qAwQO6GgKe4C8j1NAMD3BWoOomCgKoOat1GGwV4xT4Ny8bAM41Ka1FAcyC5EAdagtQchxSptwtclcdcxAp3j8q4MKU68wXRk1Fzu5FAcwG6CgRbxWpwM8g000kEdIBj9aCh8Mj8B42il1awAFwsax4Ccwig0oa09490F0QwOhrhawl74egbp0A97d0F1i3p4Ykb95AyEVz85IwEWxVE58agr8Ka5g9Edg00000000";
    //love
    var zSecret9 = "5n31sbkbl00e1_t7m0a3g1_jgi6r1w1218431111111111111111111111f0000000000000000000000000000d2111110111011111111111111111c0001001101100000000000000000h0060060000000006000000000000v0000001102100010000004000000o2420b008xAaoFQ9kJznfx40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008h34gFyDgxalboRPM000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000x4ch2Cat24FkFr6K000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000288wy288wy288wy2c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000p29H5cUNV9co4e92C6y2i18yI5C3L1K3m6I8Ti58qy9Pcy10ciO0o3A0Nb80u8OkzA0Pcw6pA0fcAasw6tA0Pcw2Go81p9QQMJldaMRllcfmdQNS6ji5kOoiIelqoJkid5t4zpbj545mwYwuw62QPeBU605cgeC4FGFGFRC6j0FBinJcbQg8Ocz8O4NETdz8Ocz8OcyYD8Psz4sz9OcX82A8kx4qA29N2w1Go81aF0wlAVe0UzAV8Vm8VejBVujAzBVujAVunAV8UHDpejwe8VeielyejAVunAV8VunAVejAVumev9MBdldl8Mcznjljliab7xaCDyg3IMMM5cIShGgpq8FybTMJd0kx92e8Qk9zhAQkk3DnnkTAg0hGg8xagE0aC21JJdc7jjic39kQRRQQznnjjnnjicFakQMtdd8McBjjnnjidttddddtoTF2XAVejAVeie1VejAVejAV9VkDj8QRkR2CbZBtdldl8QnnkR1i4E8Fxs1c60p0a0l0E1g2w0QwA0m0F0CdN400mo84F0qC1ejCR9Mkxjbc3bUKzaHyeaKOu97DcPe9OqYHyIFDDbh0LCepUGuqKOu97HcPepOsKHyIFDDb90000000000";
    //chicken
    var zSecret10 = "5n31sbkal0te0st9m0a7g0WjDi4r1w31131331114111110111f00000300000000000000d10011011112111111111c22000120000200000000h06600000002600000000v00005130000300012000o3310be12131213x567458912131213abcdfghgighgiuklmuknoghgighgipqrs0e12191219343634361219121b7874fghgighgijkjljkjmghgighginonp0e1112111234353435111211126668fwvwhgvwhijikijikwvwhgvghlllm0e1111111111111111111111111111fgccjgcopmcccgccngccjgcopgckl0p2Xo5n3z7E9j31B0m4NQlcsmkMYw4PMeEP4QuhYcTyv2f2_2v2aL07E39Ya7MKu9Y8YcY9pxxAtF3sgn44ygih18A5KSXrIygih1rJKSX8A3caXpwTqF0E8wU5D7w4aoE82C63nyyA92pWf2aK6a3daoZ7gFxxoFGqzzcaNFb97mgeXyV1CXyh1CXCXCWGgcEwS5D7o4aoE82C63iCebEkPN5cc0dn351hAkNXexj32BjlQTCoiJOlO92O1Tsn8cTsi8cTsTsTji1B46MIUX0xj510kMMtkOMABdbagkMQbAMM80RdbkEpx49794kygRTnsAglTnsygcwrL9CKV4wHKKV8w5n3z7yL6k1oj7hkNNpjfTrGlPUMXX8whj3GKOGGFn3zhZ1V2UCJoMUQuubl763gob9GjlR4Qtrghjsdwlz3y11aMkNFj5iVD93ywoaDKxV01VDB3B740Jcc5j0INMKA_qsqDcWaovwjzXkMoS4woOguekYn0o1hUMFwwgCvyoAV0GUso-2-0y0k9EXaC4AC1aD6n_F0NN7q04NVUzy4UQw4wEWL8OcwkNgf2WO4PYVA3ccw8V4yAi6i894wAy2h80mXrJKO91nr86XN8wAi2KWXfOgI2HxNzU2FxwOCeyAb2oAaspoEf4Of4VKbpFRasoeoCzPVseA5eoeO2CmD6BjerYOmifcMtT5O3dT4y3dT4i3dRkwpH2PzU25ck41j31Fcvkxoj3-Bc-KpkMMGVDfOCD678R6P5GCoZzVwSsfCXwoXcrtqUsqf_-P3oFwKwi1y1tUCgcwrLfZC3KUygpKCA3dUmsvwgFywwaoomGpon9zgHxNEU02qewCfpQtiFHoibccszAyah8qXHKi8aXHKh86glTAPnsyglTnsAgeFNBzjjassOC7tJY31bev676643fyDnrls-JA50QQMldc3jj0QQYw0W8CaACvKZN2rUB1RV6o3kRNUORNM6oU0Xd70_29wBy0mrxIO2IMC2Cg8h05D7M4aoEfaoodaoUIFzFsz0gCm1PiC64yAbetBts06fF2UY0eGY4Ax8jfhUhlMNgpFYa0000AjSeaBO0qXKMKoZTosGGIdtToqXKMRTty5C7glBcMGGGCgllllllllj86GGFy3llllnaYMJsRllsRlllllllsRllsRllllllllllgYPBBsRllsRlllllndllllsRllllOHdtsRllsRlllllndllndllllllllllllgYwX1RPlllPllllllsRllsRllllliovZq3RkRjRlllllltllllllnllllllllll3PuSRPlllPllllllsRllsRlllllnmZm3RlllRllllnlllnllP7llPlllPllllndkf2uSRNlllNllllllslllsRlllllnnZpLlllnllllltllltlncljLdjlndllllsRgYplJslllslllllln5llndllllllRvmrRlllRllllnlllnllP5nlPlllPllllndkf7tvn5lln5llllllln5llndllllsGjvndllndlllllllndllndllllllllllkfcVpndllndllllllPllllndlllls_dtsRllsRlllllndllndllllllllllllgYQ3rndllndllllllPlllPllllllt9ZnDlllnllllltllltlncrlndllndllllsRgEK6dgYXJRsRllsRlllllndllnlllllllTDlXRlllRllllnlllnllP7llPlllPllllndkh65oMUwgrFcqkNsj7D93yorakQ-z3O01Pfa7ae81qooaC1pz1j9ZTgIMU-5FC5llkO2GGGGGGGGp0RllcgqGGGGVmC4HCGGHCGGFeldHUPEiKeGGAUFqbCzrPhqGHGG7kpxqSGGHDCDr1IHqGGKGGGK4S_yXLHyGGHyGGHz_UPbaUGGGOGo0jelmlmlmlgFPiNXdgJslllqMcKBmmlJllmIpeC6zNEf5llntllndJD5wSRNlllGXpNt-mllll3Pwkbndlln5llllllNlllURlllllnr3Q45RkRjRlllllltllllllnllllllllll3PuSRPlllPllllllsRllsRlllllnmZm3RlllRllllnlllnllP7llPlllPllllndkf2CSRNlllNllllllslllsRlllllnnZpLlllnllllltllltlncljLdjlndllllsRgYplJslllslllllln5llndllllllRvmrRlllRllllnlllnllP5nlPlllPllllndkf0Mkbn5lln5llllllln5llndllllsHP2RPlllPllllllllPlllPlllllllllll3PemlPlllPllllllsRllllPllllnaIRRPlllPllllllsRllsRllllllllllll3PcRRPlllPllllllsRllsRlllllnlZnDlllnllllltllltlnc1llPlllPllllndk0000000002of1xg3901AM2UFEY9zQ5j20C94Rtt8209xllOJmflVwuFIlRs81fCbKdAhVgMofeg7o7s0WWLCWNW_28fkM7g7k0WyPDrxWz1wZjkHGU85YVjNloYGoa7CowkRsi-qGUOIurlMMwc1RdDBTkntr8zRKs7CrBtm20ouvLU-Yy8Tw0PMg0aMcI5tTy05psTo702XJw1tpkS3oCHSq1JllCm3ze8DbOMp5Tv5Rnoe8GIKIGr1IjlX5rdk0C_DE4jvcs4fy3x25cegggd1O0qg1OEwNuMsI2p-VMGgl0U4O0r6g3zaxUgMoeG0w09GU0sE6Rkf7Uh1Sgg0e00V5CZ8zNe31Sgg0ec3CQXtEY9oa7p1k1dfLv3JgSaS3NKs7p1q3Aceh9rJoZ9X0cP910wVL81E-l3YaS000fyU8805o6m2KXPOHbCX1UTt-lRBPodGGLoKGZyrHOMsnN4VCm38KXUKGX1N5lBRBjodyqLoHpGw7MaKy4fswwwu0asoEqkc0sgA37k1T8wNqUuLQs6hAwJ1BVwawoDA0SGNXPd3IwJ1JV0dYelvDm000009Dg0oL600aGHa9CjuNdWLuibKXbptTuntS8kNa2A9SgP4Y14iea3NosD8UK-8OFUAub3AV6TuNk7r3AV6TuNIM0Sp6VmPBU6G-8Te8UGJDcMdlYgeVN75lIVC1GLydPyeaHpPcOsyZwtP8TaSsL0RnN6VN75lIVCpehuudKNKTIVCxGLy4RPdCK01HVyH8TtVzywYTPtFATP40AaAj1jtmg7c8TsNPwtEeplBX6O41kMgbi0M505842nIiGTnN10KqLgutVE6jAwj0T4eJHITg9yOQMgqMuH7T7mpuu5PlXOgc-a4xn8i5ZZttsxlll8i4wpLV0DgGXKNdZMqekTlyQMA3eVXtPKWKqLtXTGwpei3OTfWSKPt1VjVlwZm5ci_2uYGYYrCHTBc4zgZlRfmXK1Y8YaEusYH1g3MDHaLf6VGQxtvc8zaPeZTnP54HsTORYNpHGY17Dvb0k0YFYJHdYHCHTAwpVgAaV2giAZbbHHA95443aFKH7Mz0Mk0WDMOA-SG4V9NFNkwwWzLkrTdeabKgVX5g01hUCzykK0wtg5FgwTdss2w7xLxZnXUwwndnLumxE2C1LifmRTrE4Npqo8dobj2g0LYdWXJXNKqLtYtYq1AV8f7s_HqXdQ7zfzm3RvlwE1Tfuluu5PlXOC35EvcmidAxvpp8kQlO5dcyfko62w74ZrnrRsRuwsXPgcD91UXy7mRSrE5847Kp7Cwpei3zcXCqXKXCHi5VYMycHcXXtvckiJPkNtvcmqWL0g0000000000";
    //anticipation UT7
    var zSecret11 = "5n31sbk4l00e07tam0a3g0fj5i0r1w0301f0000d1111c0000h0000v0502o3300basat0000aasK0000abac0000hb9c0000p24-FzOyb6jA1OIz4JuhBV0sD8N78kkRlV60V7cO2_aO2WFNxx09zQyb2osimPhIr5fpEScz8kVOMrh1zN74pKhydc31kQe544idWyWDsCni9cr5nkpeFc_R4Ay1QMW1g1cucw50cz81g3Ap0a0p6g38O0k0UL2MqpWSpwvdJJNn1c2L03c00zg1BwHKYg0HbCX0U0ntI09LaGMr4RuNtlXtlpmucUyILb1ARtYhllwUyGOWOFI6NdnIlIRgao70h031AwOgp8cA6i391jNfgOwrocA6i391j5HqEE0Ch8cBc6e9VE79UGyw7cwPaqqqqg";
    //temshop
    var zSecret12 = "5n31sbk5l00e0ftbm0a7g0fj7i0r1w1111f0000d1001c0000h0000v0000o3440b4xci4Ql6hkoi4N8jhkp5hx8j4xd1hk5540000O8y8y8p2anEK6NhoQiGyCPiyrdaaplcREsP9Ib6XbKYPbKYPbK-mZCm7TUQpCpCrCpCpKpupPdbIjNMYCHPcKXPcKZ8SspcMwaspz1K2Hwasp2U0c3m0jzn03wYwoK1wWU2D6cL-1b0qK1wYwoK1x2M0oM0hUcI1OK1x0K1z01w_tLq7aHILI890kUQ1w05Mxo0do0c7XIXs6n0NvMVCpCpwGM6b_wyM6bw1PcPcMe42U6c00sPcTc17wOM72U6pCpCpCpNC1Mwn0Nw0MvKkUNuT1BMdn_1lwcn_1V0Ns2f15Me5McPcPcMlo3l_3wYwoK1Bk1No6tTrSUcK1y_xzMBoge60316035Mc8lMdo00UgI86c06vU6H_wOTstFj3rE0c501BE0dtorrgRRxJJ3nm6P3Cs03w8601Nk300VKVEsU3c3Bwo07f0M0erKq79g0oaQcz01LL3uCj-rCVC0oHw7gwd03Dwo074Mc03CXCxN4300VKVEsj0M0erKq7D0pwsI300VU601PtPgUy1w0sTsQe9wo07dTd2L81yww0f05wpoaXL40aOVKMe45TsRRkwOWGS04nlo7029KKI1Pv4lCpocyXLyWHI74lmnmldwS9GZyD06qFhUiFcJc3x901wE0FwA9p8a0rgIA50dH91g2pQ3s9w";
    //flowey
    var zSecret13 = "5n31sbk3l00e0bt4m0a3g0fjai1r0w00318111f00003000d00011111c01100000h00000000v33000000o3300b000id19m000h4h8Q5ms0014h8QwFGM00yogh4N8j000p27-kMOkaoYo1q6Ebk78OF8dEmMehCm1L3FEqjceMdMwSxUzbL391u0e0Me01w0Fwgy10c3O0pSg39O0e8V0cP81BV0cD80VCg3cO0pug39O0ebV0cL81CV0c_8KsP81BV0chO0ofA0sL81wug34sw6pA0s0Oa0IMx-Q3o60aoR90g5c64MGh0wrPfc1VzpS0X3EGgc0UzGe9S0QelAmSYRJX68p2Y0cU805o6m2KXN02IyXI3w1lSM0KIGr2XdluPdtwSpGKI1Nv5VBV0n9CHUCGH1NdRBRBjodyqLoHpGwfh9UNVgC0EC4hOSMdVDC0uk9wNNf4oxAepN0dzyuaScocxMAO0sMN280f03xaP9OrB83wTwh0Xc3k5H3i3bOMRpcyVwqMpCoB1O6Eq3y68J0o868U0xwTyY0jSnm1BwHKYg0HbCX0U0ntI0bHaCMr4RrIQ3oCGYI75YhepBwOqK-8GGQ74lmnmldwS9GZyJCG6Zm6U7upN1H3m3bONp5o0";
    //once upon a time
    var zSecret14 = "5n31sbk6l0oe00t5m0a7g0ojvi7r1w21333111222221110011111111111111f03000000000000000000000000000000d01000111000101110011111111111111c00111000011010001100000000000000h00000000000000000000000000000000v02024000404030001100000040000000o2320b1234123457895789ababacde01234123567896789ababacde012131213467846789a9a000004567456822222222333300000p2e-5j5hryak9ztlmj6yGG16COICqorx0h1w6s381w8cw6i381B0O0p8cw6k381AwO02Y0eg201m1BwHKYg0H8GH0U0htI0bHaCMr4RuNtlwS9KOI1Nv4lBVocCHLyaGI74lmnmldwS9GZyjWbgtg3e1A0PMp0cA6g35Mp0cA6g3a1A0Ogp03Ns6g391A0Owp0cA6g350p0cA6g3a1A0Ogp03Pgp0cA6g3a1A0Ogp0ci1A0Ogp0cg1A0Pgp05j8cs4I211i2l1i2E585BgkwG110A0l0H1a0mQ5gaMmwJ1k18yMmwvf1k2I6i2Y58awkwDf1i2E5U4xf3k6Iag7y0000000000004qoAxhdzb3AoE7868YMehB1OcIegchV0sza3Apgsz0gzAp8szc3Aposwrzh4EzkhG9ExIY0qy6e01g11w20c8z-38N86hy8cxh77hAajk1NWVx0m50sYrNgA54tnZg19wR4ctk20k0g1w2w678cz4wp6s38k0O_FGdh3bik0goEOIyz8HGFl4kBj7z8Nr8M78Osz5cz9OcH8OlOclOcD8OIz0Iz4czaOcL8NhsDdOcD8OYzdOcT8OIx8qMSOy9-hApmhBV2gIV77xF3k6CgTxF3k6Yeu6Ea85yL0000000000000ar7N1z8i0QFGYEyMckT3RNu03d100H0OMlTu80lAllws08KS05RBjodyqLoKGMr4Tpm0ULyaOYI6jlTN5lm3yaHbHaCMr4RuN8-3Fi0O44dqqu7ke4Y2cLk000000000000000Eys6wd0q0Q1E3g6w8FyrAp-hDV0YH8OIzaO1yC1g4g81wgcwBIX0dw6i381y8cwwtd0Gaaaaaaa1Qkkk0E3hhhhhg0Ol0aaaa0kk0E3hhhhhhhgcMQkkk0E3hhhgjEEEE5hhgt51uyywd5555518Wa2t1mwG0000000000000000";
    //empty lolz
    var zSecret15 = "";
    var zTestt = "5sbkbl00e01t0m0a7g0fj7i0r1w1111f0000d1111c0000h0000v0000o3210b4x4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4h4p1lFDMewt8VssqwLHB300000";

    //!------Ultimate Button Press Code--------------
    //*If you press a "button", then:
    //If you press a "button", then:
    function playSound(button, name) {
        sanspeaker = false;
        //reset "setTimeout", so songs with those using setTimeout won't overlap over other songs
        var id = window.setTimeout(function () { }, 0);
        while (id--) {
            window.clearTimeout(id); // will do nothing if no timeout with id is present
        }
        //var scrollIntoView = require('scroll-into-view');
        //$(".poop").scrollIntoView();
        //$('.poop').scrollIntoView();
        var moskauRand = Math.random() < 0.5;
        //transparent-star-overlay randomizer, plus reset its style:
        $("#songPop").attr({'src':'img/tran.png', 'height':'95px'});
        $('#randomImage').css({'background-image': 'none', 'opacity':'1'});
        $('#randomImage').css({
        //'transition' : 'opacity 0s linear',
        'animation' : 'opacityStill 1s',
        //'-webkit-animation' : 'superStill 0s',
        'background-image': 'none',
        //'background-image': 'url(' + images[Math.floor(Math.random() * images.length)] + ')',
        'opacity': '0.8 !important',
        'background-position':'0% 0%',
        'width':'200%',
        'height': '200%',
        'top': '0', 'left': '0', 'right': '0', 'bottom': '0',
        'background-repeat': 'repeat',
        'background-size': 'auto',
        'transition':'scale 1s ease',
        'transform': 'none',
        '-webkit-transform': 'none',
        'transform':'scale(1)',
        'background-color':'#00000000',
        });
        $('#randomImage').css({
        // 'animation-name' : 'none',
        // 'animation-duration' : '0s',
        // 'animation-timing-function' : 'ease',
        // 'animation-delay' : '0s',
        // 'animation-iteration-count' : '1',
        // 'animation-direction' : 'normal',
        // 'animation-fill-mode' : 'none',
        // 'animation-play-state' : 'running',
        })
        //Reset star-overlay animation to:
        //Reset body settings to:
        $('h1').css({'color': '#64d962',});
        $('body').css({
            'background-attachment' : 'fixed',
            'background-color': '#000000', 
            'background-image':'none',
            'background-repeat': 'repeat',
            'background-size' : 'auto',
            'image-rendering': 'auto', 
            'background-position' : '50% 50%',
            'animation' : 'bgStill 0s',
            '-webkit-animation' : 'bgStill 0s',
            'transform': 'none',
            '-webkit-transform': 'none',
            'transition':'background-color 1s ease',
            'transition':'scale 1s ease',
            'box-shadow': 'inset 0 0 15em rgb(0, 0, 0),inset 0 0 30em rgb(0, 0, 0)',
            })
            if (underline == false){
            $('.underline').css({
                'animation':'fadeOut 3s forwards'
            });
            underline = true;
            }
        //Reset secret filter-flash animation:
        $('table').css({ 'animation': 'bgStill 0s', '-webkit-animation': 'bgStill 0s', })
        //Randomize the Website icon:
        // function randomizeIcoButton() {
        //     if ($(button).hasClass('bUT')) {
        //         link.href = 'img/ico/ut.ico'
        //     }
        //     if (!$(button).hasClass('bUT')) {
        //         //link.href = 'img/ico/59.ico'
        //         link.href = 'img/ico/0.ico'
        //         setTimeout(function () {
        //             //link.href = icoimages[Math.floor(Math.random() * icoimages.length)];
        //             //link.href = 'img/ico/0.ico'
        //         }, 200);
        //     }
        // }
        randomizeIcoButton();
        //reset gifs
        var flowey0 ="img/flowey.gif";
        var flowey = "url(" + flowey0 + "?ts=" + Date.now() + ")";
        var flower0 ="img/flowey.gif";
        var flower = flower0 + "?ts=" + Date.now() + ")";
        var vimno0 ="img/Foxbeep.gif";
        var vimno = "url(" + vimno0 + "?ts=" + Date.now() + ")";
        //Orange color play-animation:
        $( button, name.target ).closest( "tr" ).addClass('poop').siblings().removeClass('poop');
        $(".poop").closest('tr').css({'filter':'grayscale(0%)'});
        $(".poop").css("animation-play-state", "running");
        scrollIntoView(".poop");
        //autoload next tooltip if tooltip is active:
        // if ($(".active").length) {
        //     setTimeout(function () {
        //         $(".poop").find('.myTooltip').click();
        //     }, 800);
        // }
        // cell = $(this).parent().prev();
        // cell.text(parseInt(cell.text()) + 1);
        //window focus must be true since you selected a new song:
        windowFocus = true;
        //Reseting webpage title to the new song name:
        var webTitle = $(".poop").text();
        document.title = webTitle
        //Reset the secret events:
        secret1 = secret2 = secret3 = secret4 = secret5 = secret6 = secret7 = secret8 = secret9 = secret10 = secret11 = secret12 = secret13 = secret14 = secret15 = secret16 = secret = false;
        secretToggle = true;
        sansSound.pause();
        document.getElementById("sanspeak").style.display = "none";
        document.getElementById("brodypeak").style.display = "none";
        //Change to the new song:
        beep.snapToStart();
        beep.setSong(window[name]);
        beep.play();
        isPlaying = true;
        $("#pButtonID").html("▶");
        $(button).blur();
        
        //-----IF/ELSE BUTTON PRESS STATEMENTS------
        // Show the bottom lumitrap gif when playing the shovel knight song
        if ($(button).hasClass('showLumiPeakkk')) {
            if (lumipeaker == false) {
                console.log("Lumipeak true");
                var gifSource = $('#lumipeak').attr('src'); //get the source in the var
                $('#lumipeak').attr('src', ""); //erase the source     
                $('#lumipeak').attr('src', gifSource + "?" + new Date().getTime()); //add the date to the source of the image...
                document.getElementById("lumipeak").style.display = "block";
                document.getElementById("thanks").style.display = "block";
                lumipeaker = true;
            }
            else if (lumipeaker == true) {
                console.log("lumipeaker is already true, therefore don't run the script again");
            }
        }
        if ($(button).hasClass('showSansPeak')) {
            if (sanspeaker == false) {
                console.log("sanspeak true");
                var gifSource = $('#sanspeak').attr('src'); //get the source in the var
                $('#sanspeak').attr('src', ""); //erase the source     
                $('#sanspeak').attr('src', gifSource + "?" + new Date().getTime()); //add the date to the source of the image...
                document.getElementById("sanspeak").style.display = "block";
                sansSound.play();
                sansSound.currentTime = 0;
                sanspeaker = true;
            }
            else if (sanspeaker == true) {
                console.log("sanspeaker is already true, therefore don't run the script again");
            }
        }
        //Show the Adrien Brody GIF when playing the BRODYQUEST song
        if ($(button).hasClass('showBrodyPeakk')) {
            if (brodypeaker == false) {
                console.log("brodypeak true");
                var gifSource = $('#brodypeak').attr('src'); //get the source in the var
                $('#brodypeak').attr('src', ""); //erase the source     
                $('#brodypeak').attr('src', gifSource + "?" + new Date().getTime()); //add the date to the source of the image... :-) 
                document.getElementById("brodypeak").style.display = "block";
                brodypeaker = true;
            }
            else if (brodyspeaker == true) {
                console.log("brodypeaker is already true, therefore don't run the script again");
            }
        }
        //----Activate secrets if the right song is played-----
        if ($(button).hasClass('sUT38')) {
                console.log("A secret lies within thiS tune...");
                // secret1();
                secret1 = true;
        }
        if ($(button).hasClass('sUT4')) {
                console.log("A secret lies within thiS tune...");
                // secret1();
                secret2 = true;
        }
        if ($(button).hasClass('sUT37')) {
                console.log("A secret lies within thiS tune...");
                // secret1();
                secret3 = true;
        }
        if ($(button).hasClass('sUT40')) {
                console.log("A secret lies within thiS tune...");
                // secret1();
                secret4 = true;
        }
        if ($(button).hasClass('sPuzzlePlank')) {
                console.log("A secret lies within thiS tune...");
                // secret1();
                secret5 = true;
        }
        if ($(button).hasClass('sUT8')) {
                console.log("A secret lies within thiS tune...");
                // secret1();
                secret6 = true;
        }
        if ($(button).hasClass('sUT12')) {
                console.log("A secret lies within thiS tune...");
                // secret1();
                secret7 = true;
        }
        if ($(button).hasClass('sUT48')) {
                console.log("A secret lies within thiS tune...");
                // secret1();
                secret8 = true;
        }
        if ($(button).hasClass('sPangolin')) {
                console.log("A secret lies within thiS tune...");
                // secret1();
                secret9 = true;
        }
        if ($(button).hasClass('sChickenInvaders')) {
                console.log("A secret lies within thiS tune...");
                // secret1();
                secret10 = true;
        }
        if ($(button).hasClass('sUT7')) {
                console.log("A secret lies within thiS tune...");
                // secret1();
                secret11 = true;
        }
        if ($(button).hasClass('sUT44')) {
                console.log("A secret lies within thiS tune...");
                // secret1();
                secret12 = true;
        }
        if ($(button).hasClass('sUT3')) {
                console.log("A secret lies within thiS tune...");
                // secret1();
                secret13 = true;
        }
        if ($(button).hasClass('sUT1')) {
                console.log("A secret lies within thiS tune...");
                // secret1();
                secret14 = true;
        }
        if ($(button).hasClass('unknown')) {
                console.log("A secret lies within thiS tune...");
                // secret1();
                secret15 = true;
        }
        if ($(button).hasClass('s3dGalax')) {
            console.log("A secret lies within thiS tune...");
            // secret1();
            secret16 = true;
    }
        $('.playlist').css({'animation': 'none','transform': 'rotateX(0deg) rotateY(0deg)'});
        $('body').css({'transition':'transform 1s ease'});
        $('body').css('transition', 'background 1s ease');
        $('#randomImage').css({'transition':'transform 1s ease'});
        $('#randomImage').css('transition', 'background 1s ease');
        $('#randomImage').css({'transition':'scale 1s ease'});
        $('*.jBox').remove()
        //*---------BACKGROUND VISUALS----------
        $('body').css({'box-shadow':'inset 0 0 15em rgb(0, 0, 0),inset 0 0 30em rgb(0, 0, 0)'});
        if ($(button).hasClass('but1')) {
            $('h1').css({'color': '#FEFEFE',});
            $('body').css('transition', 'background-size 0s ease');
            $('body').css({'background-image': 'none',
                             'background-repeat' : 'no-repeat',
                             'image-rendering': 'pixelated',
                             'background-size': 'cover'}),
                             $('#randomImage').css({'background-image': 'none', 'opacity':'1'});
                             setTimeout(function(){
                             $('#randomImage').css({'animation' : 'blackIn 1s ease-in forwards',});//Fade to black
                             }, 29000);

                             setTimeout(function(){
                             $('#randomImage').css({'animation' : 'blackOut 1s ease-out forwards',});//reveal first image
                             $('body').css({'background-image' : 'url("img/00.png")',});
                             }, 29500);
                             
                             setTimeout(function(){
                             $('#randomImage').css({'animation' : 'blackIn 1s ease-in forwards',});//Fade to black
                             }, 33000);

                             setTimeout(function(){
                            $('#randomImage').css({'animation' : 'blackOut 1s ease-out forwards',});//reveal second image
                            $('body').css({'background-image' : 'url("img/07.png")',});
                            }, 34000);
                            setTimeout(function(){
                             $('#randomImage').css({'animation' : 'blackIn 1s ease-in forwards',});//Fade to black
                             }, 40200);

                             setTimeout(function(){
                             $('#randomImage').css({'animation' : 'blackOut 1s ease-out forwards',});//reveal third image
                             $('body').css({'background-image' : 'url("img/08.png")',});
                             }, 41200);

                             setTimeout(function(){
                            $('#randomImage').css({'animation' : 'blackIn 1s ease-in forwards',});//Fade to black
                            }, 45200);
                            
                            setTimeout(function(){
                             $('#randomImage').css({'animation' : 'blackOut 1s ease-out forwards',});//reveal fourth image
                             $('body').css({'background-image' : 'url("img/09.png")',});
                             }, 46200);

                             setTimeout(function(){
                            $('#randomImage').css({'animation' : 'blackIn 1s ease-in forwards',});//Fade to black
                            }, 51200);

                            setTimeout(function(){
                             $('#randomImage').css({'animation' : 'blackOut 1s ease-out forwards',});//reveal fourth image
                             $('body').css({'background-image' : 'url("img/10.png")',});
                             }, 52200);

                             setTimeout(function(){
                            $('#randomImage').css({'animation' : 'blackIn 1s ease-in forwards',});//Fade to black
                            }, 57500);

                             setTimeout(function(){
                             $('#randomImage').css({'animation' : 'blackOut 1s ease-out forwards',});//reveal fourth image
                             $('body').css({
                                 'background-position':'50% 100%',

                                 'background-image' : 'url("img/11.png")',});
                             }, 58500);

                             setTimeout(function(){
                                $('#randomImage').css({'animation' : 'blackOut 1s ease-out forwards',});//reveal fourth image
                                $('body').css({
                                    'background-position':'50% 100%',
                                    'animation' : 'onceUpon 8s linear forwards',
                                    // '-webkit-animation' : 'onceUpon 8s linear forwards',
                                    '-webkit-animation' : 'onceUpon 18.3s linear forwards',
                                    //'animation-delay': '3s',
                                    });
                                }, 62700);

                            setTimeout(function(){
                                $('#randomImage').css({'animation' : 'blackIn 7.3s linear forwards',});//Fade to black
                                }, 81000);
        }
        if ($(button).hasClass('but2')) {
            $('h1').css({'color': '#FEFEFE',});
            $('body').css({'background-image': 'url("img/menu.png")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover contain',
                            'background-position' : '50% 10%'}),

                            $('#randomImage').css({'background-image': 'none'});
        }
        if ($(button).hasClass('but3')) {
            $('h1').css({'color': '#FEFEFE',});
            $("#songPop").attr("src", flower);
            $('body').css('transition', 'background-size 0s ease');
            $('body').css({'background-image': flowey,
                            'image-rendering' : '-moz-crisp-edges',
                            'image-rendering' : '-o-crisp-edges',
                            'image-rendering' : '-webkit-optimize-contrast',
                            'image-rendering': 'crisp-edges',
                            'image-rendering':'pixelated',
                            '-ms-interpolation-mode' : 'nearest-neighbor',
                            'background-repeat' : 'no-repeat',
                            'background-size': '90px auto',
                            'background-position' : 'center top 108px',
                            'background-attachment' : 'scroll'}),

                            $('#randomImage').css({'background-image': 'none'});
        }
        if ($(button).hasClass('but4')) {
            // $('#randomImage').css({'background-image': 'none', 'opacity':'0', 'animation' : 'blackOut 1s ease-in forwards'});
            $('body').css({'background-image': 'url("img/fallen.png")',
                            'background-repeat' : 'no-repeat',
                            'background-position' : '50% 0%',
                            'background-size': 'cover',
                            'animation' : 'fallenDown 26s ease-in-out forwards',
                            '-webkit-animation' : 'fallenDown 26s ease-in-out forwards',
                            'animation-delay' : '0.5s',
                            '-webkit-animation-delay' : '0.5s',})
                            setTimeout(function(){
                            $('#randomImage').css({'opacity':'0', 'transition':'opacity 1s ease'});
                        }, 10000);
                            setTimeout(function(){
                            $('#randomImage').css({
                                'background-image': 'url('+ yellowStars +')',
                                'transition' : 'opacity 6s ease',
                                'animation':'overlayMoveDown 25s linear infinite',
                                'webkit-animation':'overlayMoveDown 25s linear infinite',
                                })
                            }, 26000);
                            setTimeout(function(){
                                $('#randomImage').css({
                                    'opacity':'1'
                                })
                            }, 27000);
        }
        if ($(button).hasClass('but5')) {
            // $('#randomImage').css({'background-image': 'none', 'opacity':'1', 'animation' : 'blackOut 1s ease-in forwards'});
            $('body').css({'background-image': 'url("img/ruins.gif")',
                            'background-repeat' : 'no-repeat',
                            'image-rendering': 'pixelated',
                            'background-size': 'cover'});
                            setTimeout(function(){
                            $('#randomImage').css({
                                'opacity':'0',})
                            }, 8000);
                            setTimeout(function(){
                            $('#randomImage').css({
                                'background-image': 'url('+ purpleStars +')',
                                'animation' : 'overlayMoveRight 23s linear infinite',
                                '-webkit-animation' : 'overlayMoveRight 23s linear infinite',
                                'transition' : 'opacity 7s ease',
                                'opacity':'1',})
                            }, 24900);
                            //$('#randomImage').css({'background-image': 'url('+ purpleStars +')'});
                            //randomImage.style.animation = "overlayMoveRight 23s linear infinite";
                            //randomImage.style.webkitAnimation = "overlayMoveRight 23s linear infinite";
        }
        if ($(button).hasClass('but6')) {
            

            $('body').css({'background-image': 'url("img/temperate.png")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover'})

                            //$('#randomImage').css({'background-image': 'none'});
            //setTimeout(function(){$('#randomImage').css({'background-image': 'none', 'opacity':'1', 'animation' : 'blackOut 1s ease-in forwards'});}, 0);
        }
        if ($(button).hasClass('but7')) {
            $('body').css({'background-image': 'url("img/grid.png")'})

                            //$('#randomImage').css({'background-image': 'none'});
        }
        if ($(button).hasClass('but8')) {
            $('body').css({'background-image': 'url("img/tension.gif")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'auto',
                            // 'background-position' : 'center top',
                            'background-position' : '50% 2.15%',
                            'background-attachment' : 'scroll'})

                            $('#randomImage').css({'background-image': 'url('+ purpleStars +')'});
                            randomImage.style.animation = "overlayMoveLeft 1s linear infinite";
                            randomImage.style.webkitAnimation = "overlayMoveLeft 1s linear infinite";
        }
        if ($(button).hasClass('but9')) {
            $('body').css({'background-image': 'url("img/grid.png")'})

                            $('#randomImage').css({'background-image': 'url('+ greenStars +')'});
                            randomImage.style.animation = "overlayMoveUp 10s linear infinite";
                            randomImage.style.webkitAnimation = "overlayMoveUp 10s linear infinite";
        }
        if ($(button).hasClass('but10')) {
            $('#randomImage').css('transition', 'background-size 0s ease');
            $('body').css('transition', 'background-size 0s ease');
            $('body').css({'background-image': 'url("img/blook.gif")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'auto',
                            'background-position' : '50% 2%',
                            'image-rendering':'pixelated',
                            'background-attachment' : 'scroll'})
                            

                            $('#randomImage').css({'background-image': 'url('+ tearStars +')'});
                            randomImage.style.animation = "overlayMoveDownTears 20s linear infinite";
                            randomImage.style.webkitAnimation = "overlayMoveDownTears 20s linear infinite";
        }
        if ($(button).hasClass('but11')) {
            $('body').css({'background-image': 'url("img/gameover.png")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'auto 100%',
                            'image-rendering': 'pixelated',
                            'background-position' : 'left 0px top 0px',
                            // 'background-position' : 'left -60px top -100px'
                        })

                            $('#randomImage').css({'background-image': 'none'});
        }
        if ($(button).hasClass('but12')) {
            $('#randomImage').css({'background-image': 'none', 'opacity':'1', 'animation' : 'blackOut 7s ease-in forwards'});
            $('body').css({'background-image': 'url("img/home.png")',
                            'background-color': '#7c6038',
                            'background-repeat' : 'no-repeat',
                            'image-rendering': 'pixelated',
                            'background-size': 'cover'})
        }
        if ($(button).hasClass('but15')) {
            $('#randomImage').css({
                'background-image': 'url('+ stars +')',
                'animation': 'overlayMoveDown 15s linear infinite',
                '-webkit-animation': 'overlayMoveDown 15s linear infinite',})
            $('body').css({'background-image': 'url("img/sans.png")',
                            //'background-color': '#162b3d',
                            'background-color': '#273b55',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover'})
        }
        if ($(button).hasClass('but16')) {
            $('body').css({'background-image': 'url("img/papyrus.gif")',
                            'background-color':'#0c142c',
                            'background-repeat' : 'no-repeat',
                            'image-rendering': 'pixelated',
                            'background-size': 'cover'})

                            $('#randomImage').css({'background-image': 'url('+ stars +')'});
                            randomImage.style.animation = "overlayMoveDown 10s linear infinite";
                            randomImage.style.webkitAnimation = "overlayMoveDown 10s linear infinite";
                            $('#randomImage').css({'background-image': 'none'});
        }
        if ($(button).hasClass('but18')) {
            $('body').css({'background-image': 'url("img/holiday.png")',
                            'background-color': '#4e5673',
                            'background-color': '#4e5673',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover',
                            'background-position' : '50% 80%'})

                            $('#randomImage').css({'background-image': 'url('+ stars +')'});
                            randomImage.style.animation = "overlayMoveDown 15s linear infinite";
                            randomImage.style.webkitAnimation = "overlayMoveDown 15s linear infinite";
        }
        if ($(button).hasClass('but20')) {
            $('body').css({'background-image': 'url("img/mysterious.png")',
                            'background-repeat' : 'no-repeat',

                            //'background-color': '#ff8df4',//pink
                            //'background-color': '#198abb',//ceiling
                            'background-color': '#224170',//wall
                            //'background-color': '#68dcff',//lightblue
                            'background-size': 'cover'}),

                            $('#randomImage').css({'background-image': 'url('+ blueStars +')'});
                            randomImage.style.animation = "overlayMoveLeft 23s linear infinite";
                            randomImage.style.webkitAnimation = "overlayMoveLeft 23s linear infinite";
        }
        if ($(button).hasClass('but22')) {
            $('#randomImage').css({'background-image': 'none', 'opacity':'1', 'animation' : 'blackOut 1.5s ease-out forwards'});
            $('body').css({'background-image': 'url("img/snowdin.png")',
                            'background-color':'#778db1',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover'})
                            setTimeout(function(){
                            $('#randomImage').css({
                                'opacity':'0',})
                            }, 1500);
                            setTimeout(function(){
                            $('#randomImage').css({
                                'background-image': 'url('+ stars +')',
                                'animation': 'overlayMoveDown 15s linear infinite',
                                '-webkit-animation': 'overlayMoveDown 15s linear infinite',
                                'transition' : 'opacity 7s ease',
                                'opacity':'1',})
                            }, 2000);
        }
        if ($(button).hasClass('but23')) {
            $('body').css('transition', 'background 1s ease')
            $('#randomImage').css({'background-image': 'none', 'opacity':'1', 'animation' : 'blackOut 1s ease-out forwards'});
            $('body').css({'background-image': 'url("img/shop.png")',
                            'background-color':'#CA3B07',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'contain',
                            'background-position': '50% 0%',
                            'image-rendering': 'pixelated',})
        }
        if ($(button).hasClass('but30')) {
            $('body').css('transition', 'background 1s ease')
            $('body').css({'background-image': 'url("img/undyne.gif")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'auto',
                            'background-position' : '15% 50%'})

                            $('#randomImage').css({'background-image': 'none'});
        }
        if ($(button).hasClass('but32')) {
            $('body').css({'background-image': 'url("img/tension.gif")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'auto',
                            'background-position' : '100% 70%'})

                            $('#randomImage').css({'background-image': 'url('+ blueStars +')'});
                            randomImage.style.animation = "overlayMoveLeft 0.7s linear infinite";
                            randomImage.style.webkitAnimation = "overlayMoveLeft 0.7s linear infinite";
        }
        if ($(button).hasClass('but35')) {
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({
                            //'background-color': '#181842',
                            'background-color': '#085988'})
            $('body').css({'background-image': 'url("img/birdcarry.gif")',
                            'background-repeat' : 'no-repeat',
                            'image-rendering': 'pixelated',
                            'background-size': 'cover'})
        }
        if ($(button).hasClass('but37')) {
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/napstahouse.png")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'contain',
                            'background-position' : '50% 50%',})
        }
        if ($(button).hasClass('but38')) {
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/napstahouse2.png")',
                            'background-repeat' : 'no-repeat',
                            'background-position' : '50% 50%',
                            'background-size': 'contain',})
        }
        if ($(button).hasClass('but39')) {
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/napstahouse3.png")',
                            'background-repeat' : 'no-repeat',
                            'background-position' : '50% 50%',
                            'background-size': 'contain'})
        }
        if ($(button).hasClass('but40')) {
            $(['img/napstahouse42.png']).preload();
            $('#randomImage').css({'background-image': 'none', 'opacity':'1', 'animation' : 'blackOut 0.8s ease-out forwards'});
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/napstahouse4.png")',
                            'background-repeat' : 'no-repeat',
                            'image-rendering': 'pixelated',
                            'background-position' : '50% 95%',
                            'background-size': 'contain'});

                                                        setTimeout(function(){
                            $('body').css('transition', 'background 0.1s ease')
                            $('body').css({'background-image' : 'url("img/napstahouse42.png")',});
                            }, 4100);
                            setTimeout(function(){
                            $('body').css({'animation' : 'woshua-aron-exit 6.1s linear forwards'});
                            }, 10500);
        }
        if ($(button).hasClass('but42')) {
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/thundersnail.png")',
                            'background-repeat' : 'no-repeat',
                            'image-rendering': 'pixelated',
                            'background-size': 'cover'})
        }
        if ($(button).hasClass('but43')) {
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/Temvillage.png")',
                            'background-repeat' : 'no-repeat',
                            'image-rendering': 'pixelated',
                            'background-size': 'cover'})
        }
        if ($(button).hasClass('but44')) {
            link.href = 'img/ico/bob.ico'
            //$('#randomImage').css({'background-image': 'none', 'opacity':'1', 'animation' : 'blackOut 0.5s ease-out forwards'});
            $('body').css({'background-image': 'url("img/temshop.png")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'contain',
                            'background-position': '50% 0%',
                            'background-color': 'black', 
                            'image-rendering': 'pixelated',})
        }
        if ($(button).hasClass('but48')) {
            //$('#randomImage').css({'background-image': 'none', 'opacity':'1', 'animation' : 'blackOut 0.5s ease-out forwards'});
            $('body').css({'background-image': 'url("img/alphys.gif")',
                            'background-repeat' : 'no-repeat',
                            'image-rendering': 'pixelated',
                            'background-position': '0% 100%',
                            'background-size': 'cover'})
                            $('body').css('transition', 'background-size 0s ease');
                            $('#randomImage').css('transition', 'background-size 0s ease');
                            setTimeout(function(){
                            $('body').css({'animation' : 'alphys 49s linear forwards'});
                            }, 31300);   
                            

                            setTimeout(function(){
                            $('#randomImage').css({'background-image': 'url("img/alphysL.gif")',
                            'opacity': '1',
                            'background-position' : '100.5% 100%',
                            'background-size':'cover',
                            'image-rendering': 'pixelated',
                            'background-repeat' : 'no-repeat',
                            'width': '100%',
                            'height': '100%',
                            })
                            },90000); 
        }
        if ($(button).hasClass('but49')) {
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/mettaton.gif")',
                            'background-repeat' : 'no-repeat',
                            'background-size': '30%',
                            'background-position' : '100% 50%'})
        }
        if ($(button).hasClass('but67')) {
            $('body').css('transition', 'background 0s ease')
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/Metrance.png")',
                            'background-repeat' : 'no-repeat',
                            'background-size': '100%',
                            'background-position' : '50% 0%',
                            'image-rendering': 'pixelated',
                            'animation': 'oh-my 3s linear forwards',
                            })
        }
        if ($(button).hasClass('but68')) {
            $('#randomImage').css({'background-image': 'none', 'opacity':'0'});
            $('body').css({'background-image': 'url("img/ratings.gif")',
                            'background-repeat' : 'no-repeat',
                            'background-position' : '4% 4%',
                            'background-size': '25%',
                            'image-rendering': 'pixelated'})

                            setTimeout(function(){
                            $('#randomImage').css({
                                            'opacity': '1',
                                            'animation' : 'overlayMoveUp 8s linear infinite',
                                            'background-image':'url('+ yellowStars +')'});
                            }, 19000);
        }

        if ($(button).hasClass('bVimNo')) {
                $('body').css({'background-image': vimno,
                'background-attachment' : 'scroll',
                'background-repeat' : 'no-repeat',
                // 'background-position' : '50% -3.1%',
                'background-position' : '50% -2.3%',
                }),
                $('#randomImage').css({'background-image': 'none'});
        }
        if ($(button).hasClass('bCastlevania')) {
                //$('body').css({'background-color': '#383838'})
                $('body').css({'background-color': '#1f1f1f'})
                $('body').css({'background-image': 'url("img/castle.png")'})
                $('#randomImage').css({'background-image': 'none'});
        }
        if ($(button).hasClass('bBirbday')) {
                $('body').css({'background-image': 'url("img/groovy.png")'})
                $('#randomImage').css({'background-image': 'none'});
        }
        if ($(button).hasClass('bSubboss')) {
                $('body').css({'background-image': 'url("img/subboss.png")',
                'background-size': 'cover',
                'background-position' : '50% 100%',})
                $('#randomImage').css({'background-image': 'none'});
        }
        if ($(button).hasClass('bSnapshot')) {
            $('#randomImage').css({'background-image': 'none', 'opacity':'1', 'animation' : 'blackOut 2s ease-out forwards'});
            $('body').css({'background-image': 'url("img/snapshot.png")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover'})
        }
        if ($(button).hasClass('bCantina')) {
                $('#randomImage').css({'background-image': 'none'});
                $('body').css({'background-image': 'url("img/cantina.gif")'})
        }
        if ($(button).hasClass('bPangolin')) {
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/pangolin.gif")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover'})
        }
        if ($(button).hasClass('bCortex')) {
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/cortex.jpg")',
                            'background-position' : '50% 0%',
                            'background-repeat' : 'no-repeat',
                            'image-rendering': 'pixelated',
                            'background-size': 'cover'})
        }
        if ($(button).hasClass('bSpore')) {
            $('body').css({'background-image': 'url("img/spore.jpg")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover'})

                            $('#randomImage').css({'background-image': 'url('+ blueStars +')'});
                            randomImage.style.animation = "overlayMoveLeft 23s linear infinite";
                            randomImage.style.webkitAnimation = "overlayMoveLeft 23s linear infinite";
        }
        if ($(button).hasClass('bCrash1')) {
            $('body').css({'background-image': 'url("img/bandicoot.gif")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover'})
                            $('#randomImage').css({'background-image': 'none'});
        }
        if ($(button).hasClass('bHexagon')) {
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-color': '#624520'})
            $('body').css({'background-image': 'url("img/hexagon.gif")',
                            'background-repeat' : 'no-repeat',
                            'image-rendering': 'pixelated', 
                            'background-size': 'cover'})
        }
        if ($(button).hasClass('bIsaac')) {
            link.href = 'img/ico/isaac.ico'
            $('body').css({'background-image': 'url("img/isaac.jpg")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover'})

                            $('#randomImage').css({'background-image': 'url('+ redStars +')', 'opacity':'0'});
                            randomImage.style.animation = "overlayMoveUp 11s linear infinite";
                            randomImage.style.webkitAnimation = "overlayMoveUp 11s linear infinite";
                            setTimeout(function(){
                            $('#randomImage').css({
                                'transition' : 'opacity 15s ease',
                                'opacity':'0.8',})

                            }, 1);
        }
        if ($(button).hasClass('bDubmood')) {
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/ascii.gif")',
                            'background-repeat' : 'repeat',
                            'image-rendering': 'pixelated', 
                            'background-size': 'auto'})
        }
        if ($(button).hasClass('bMiasSong')) {
                $('html, body').animate({ scrollTop: $('#middle').offset().top}, 1);
                

            $('.wrapper').css({'perspective': '500px'});
            $('.playlist').css({'animation': 'threeDee 15s linear infinite'});
            $('#randomImage').css({'background-image': 'url('+ yellowStars +')', 'animation':'overlayMoveRight 0.5s linear infinite', 'top':'-1200px'});
            $('body').css({'background-image': 'url("img/ascii.gif")',
                            'transform': 'scale(.35)',
                            'box-shadow':'none',
                            'background-repeat' : 'repeat',
                            'background-color': 'black',
                            'image-rendering': 'pixelated', 
                            'background' : 'linear-gradient(-90deg, #EE7752, #E73C7E, #23A6D5, #E73C7E, #EE7752)',
                            'background-size': '300% 300%',
                            'animation' : 'Gradient 4s linear infinite',
                            '-webkit-animation': 'Gradient 4s linear infinite',
                            '-moz-animation': 'Gradient 4s linear infinite',})
        }
        if ($(button).hasClass('bCrashRockslide')) {
            //$('#randomImage').css({'background-image': 'none', 'opacity':'1', 'animation' : 'blackOut 0.5s ease-out forwards'});
            $('body').css({'background-image': 'url("img/crash.png")',
                            // 'transition' : 'background-color 0s',
                            'background-repeat' : 'no-repeat',
                            'background-position' : '50% 10%',
                            'background-size': 'contain',
                            'animation':'twinsanity 0.5s forwards ease-out',
                            '-webkit-animation':'twinsanity 0.5s forwards ease-out',
                            })
        }
        if ($(button).hasClass('bLinusAndLucy')) {
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/lucy.gif")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover',
                            'background-position' : '50% 40%',})
        }
        if ($(button).hasClass('bAllStar')) {
            beep.beat = 6;
            //beep.part = 3;
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/shrek.jpg")',
                            'background-repeat' : 'no-repeat',
                            'background-size': '100%',
                            'background-position':'64.7% 25%'})

                            setTimeout(function(){
                            $('body').css({
                            'animation' : 'shrek 9.5s forwards ease-in',
                            '-webkit-animation' : 'shrek 9.5s forwards ease-in',})
                            }, 9690);
                            
        }
        if ($(button).hasClass('bChickenInvaders')) {
            $('body').css({'background-image': 'url("img/chickeninvaders.png")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover'})

                            $('#randomImage').css({'background-image': 'url('+ blueStars +')'});
                            randomImage.style.animation = "overlayMoveRight 0.7s linear infinite";
                            randomImage.style.webkitAnimation = "overlayMoveRight 0.7s linear infinite";
        }
        if ($(button).hasClass('bFatRatTimeLapse')) {
            beep.beat = 4;
            $('body').css({'background-image': 'url("img/timelapse.jpg")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover'})

                            $('#randomImage').css({'background-image': 'url('+ yellowStars +')'});
                            randomImage.style.animation = "overlayMoveDown 15s linear infinite";
                            randomImage.style.webkitAnimation = "overlayMoveDown 15s linear infinite";
        }
        if ($(button).hasClass('bMachine')) {
            beep.beat = 7;
            beep.part = 3;
            $('#randomImage').css({'background-image': 'none', 'opacity':'1', 'animation' : 'blackOut 2s ease-out forwards'});
                            setTimeout(function(){
                                $('body').css({'background-image': 'url("img/machine.gif")',
                            'transition': 'none',
                            'background-size': 'contain',
                            'image-rendering': 'pixelated',
                            'animation' : 'machine 5000s linear infinite',
                            'background-position': '50% 50%'})
                                $('#randomImage').css({'background-color':'#000000','animation' : 'dullBlackOut 0.1s forwards',})
                                }, 6300);
                           

        }
        if ($(button).hasClass('bFezKnowledge')) {
            $('body').css({'background-image': 'url("img/fez.gif")',
                            'background-repeat' : 'no-repeat',
                            'image-rendering': 'pixelated',
                            'background-size': 'cover',
                            'animation':'knowledge 7s forwards ease-out'})
            $('#randomImage').css({'background-image': 'none'});
        }
        if ($(button).hasClass('bNecroLobby')) {
            $('body').css({'background-image': 'url("img/necro3.gif")',
                            'background-repeat' : 'no-repeat',
                            'background-position':'50% 50%',
                            'image-rendering': 'pixelated',
                            'background-size': '300%',
                            // 'animation':'Cryptlobby0 2s forwards linear'
                        })
                            $('#randomImage').css({'background-image': 'none', 'opacity':'1', 'animation' : 'blackOut 5s ease forwards'});
                            setTimeout(function(){
                                $('body').css({
                                    'background-size':'100%',
                                })}, 14750);
                            setTimeout(function(){
                                $('body').css({
                                    'background-size': '300%',
                                    'animation':'Cryptlobby1 14.750s forwards linear',
                                })}, 29500);
                            setTimeout(function(){
                                $('body').css({
                                    'animation':'Cryptlobby2 14.750s forwards linear',
                                })}, 44250);
                            setTimeout(function(){
                                $('body').css({
                                    'animation':'none',
                                    'background-position':'50% 50%',
                                    'backgroud-size':'100%',
                                })}, 59000);
                                
        }
        if ($(button).hasClass('bBowser')) {
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/bowser.gif")',
                            'background-color': 'rgb(84, 22, 0)',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'auto',
                            'image-rendering': 'pixelated',
                            'background-position' : '95% 50%',})
                            
                            $('#randomImage').css({'background-image': 'none'});
        }
        if ($(button).hasClass('bCaveStory')) {
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/cavestory.gif")',
                            'background-color': '#030C15',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover',
                            'image-rendering': 'pixelated',})
                            
                            $('#randomImage').css({'background-image': 'none'});
        }
        if ($(button).hasClass('bDiscord')) {
            $('body').css({'background-color': '#26018e'})
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/livingtombstone.png")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'contain',
                            'image-rendering': 'pixelated',
                            'background-position' : 'center top',})

                            $('#randomImage').css({'background-image': 'none'});
        }
        if ($(button).hasClass('bPuzzlePlank')) {
            beep.beat = 5;
            $('body').css({'background-color': '#26018e'})
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/mariogalaxy.jpg")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover',
                        })
        }
        if ($(button).hasClass('bRiddle')) {
            $('body').css({'background-color': '#0aaa0a'})
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/riddle.gif")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover',
                        })
        }
        if ($(button).hasClass('bJMJFields2')) {
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/jmj2.gif")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover',
                        })
        }
        if ($(button).hasClass('bvvvvvv')) {
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/vvvvvv.png")',
            
                            'background-color': '#000',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover',
                            'image-rendering': 'pixelated',
                            'animation' : 'vvvvvv 410s infinite linear',
                            '-webkit-animation' : 'vvvvvv 410s infinite linear',
                        })
        }
        if ($(button).hasClass('bRick')) {
            beep.beat = 1;
            beep.part = 1;
            $('body').css({'box-shadow':'none','background-color': '#eee'})
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/rick.gif")',
                            'background-repeat' : 'repeat',
                            'animation': 'rickroll 2s forwards ease-in-out',
                        })
        }
        if ($(button).hasClass('bRicklovania')) {
            $('body').css({'background-color': '#000','transition':'background-color 0s linear'})
            $('#randomImage').css({'background-image': 'url('+ stars +')'});
        randomImage.style.animation = "overlayMoveLeft 8s linear infinite";
        randomImage.style.webkitAnimation = "overlayMoveLeft 8s linear infinite";
            $('body').css({ 'background-image': 'none',
                            'background-repeat' : 'repeat',
                            })
        
        
                        setTimeout(function(){
                        $('body').css({'background-image' : 'url("img/rick.gif")',});
                        $('#randomImage').css({'background-image':'none'})
                        }, 19400);
                    
        }
        if ($(button).hasClass('bHappyHogwarts')) {
            $('body').css({'background-color': '#000'})
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/hogwarts.jpg")',
                            'background-size': 'cover',
                            'background-position' : '50% 100%',
                        })
        }
        if ($(button).hasClass('bAVGNTheme')) {
            $('body').css({'background-color': '#210046'})
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/AVGN.gif")',
                            'background-position' : '12% 50%',
                            'image-rendering': 'pixelated',
                            'background-repeat' : 'no-repeat',
                        })
        }
        if ($(button).hasClass('bRickNMorty')) {
            $('body').css({'background-color': '#222222'})
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/RicknMorty.gif")',
                            'background-position' : '94% 50%',
                            'image-rendering': 'pixelated',
                            'background-repeat' : 'no-repeat',
                            
                        })
        }
        if ($(button).hasClass('bUT70')) {
            $('body').css({'background-color': '#000'})
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'none',
                            'background-repeat' : 'no-repeat',
                            'background-size': '240px 240px',
                            'image-rendering': 'pixelated',
                            'background-position' : '92% 50%',

                        })
                        setTimeout(function(){
                        $('body').css({
                            'animation' : 'shake 0.5s infinite',
                            '-webkit-animation' : 'shake 0.5s infinite',
                                        });
                        }, 2600);
                        setTimeout(function(){
                        $('body').css({
                            'animation' : 'veryStill 0.5s infinite',
                            '-webkit-animation' : 'veryStill 0.5s infinite',
                                        });
                        }, 16700);
        }
        if ($(button).hasClass('bHPAuntMarge')) {
            $('body').css({'background-color': '#000'})
            $('#randomImage').css({'background-image': 'none', 'opacity':'1', 'animation' : 'blackOut 1s ease-out forwards'});
            $('body').css({'background-image': 'url("img/whompingWillow.png")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover',
                            'background-position' : '50% 100%',
                        })
        }
        if ($(button).hasClass('bLoZRidingNight')) {
            $('body').css({'background-color': '#000'})
            $('#randomImage').css({'background-image': 'none', 'opacity':'1', 'animation' : 'blackOut 3s ease-out forwards'});
            $('body').css({'background-image': 'url("img/zelda.jpg")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover',
                        })
        }
        if ($(button).hasClass('bElectroman')) {
            $('body').css({'background-color': '#000'})
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/waterflame.jpg")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover',
                            'background-position' : '50% 0%',
                        })
        }
        if ($(button).hasClass('bIdle')) {
            $('body').css({'background-color': '#000'})
            $('body').css({'background-image': 'url("img/kickit2.png")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover',
                            'background-position' : '50% 0%',});
            $('#randomImage').css({'background-image': 'url("img/idleTree.gif")',
                            'opacity': '1',
                            'background-position' : '92% 80%',
                            'image-rendering': 'pixelated',
                            'background-repeat' : 'no-repeat',
                            // 'background-size': '248px 232px',
                            'background-size': '248px 232px',
                            'animation':'bgStill 0s',
                            'webkit-animation':'bgStill 0s',
                            'width': '100%',
                            'height': '100%',
                            
                        })
        }
        if ($(button).hasClass('bShovel')) {
            $('body').css({'background-color': '#000'})
                        $('#randomImage').css({'background-image': 'none', 'opacity':'1', 'transition' : 'opacity 0s','animation' : 'blackOut 3s ease-out forwards'});
            // $('body').css({'background-image': 'url("img/shovel.gif")',
            //                 'background-position' : '8% 50%',
            //                 'image-rendering': 'pixelated',
            //                 'background-repeat' : 'no-repeat',
            //             })
            $('body').css({'background-image': 'url("img/shovel.png")',
                            'background-size': 'cover',
                            'background-attatchment': 'scroll',
                            'background-repeat' : 'no-repeat',
                            'background-position':'50% 0%',
                            'image-rendering': 'pixelated',
                        })
                        
        }
        if ($(button).hasClass('bOneyPlays')) {
            $('body').css({'background-color': '#000'})
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/oneyplays.jpg")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover',
                            'background-position' : '0% 0%',
                            'position':'initial',
                        })
        }
        
        if ($(button).hasClass('bCrypt32')) {
        $('#randomImage').css({'background-image': 'url('+ yellowStars +')'});
        randomImage.style.animation = "overlayMoveLeft 8s linear infinite";
        randomImage.style.webkitAnimation = "overlayMoveLeft 8s linear infinite";
            $('body').css({'background-image': 'url("img/necrosprites2.gif")',
                            'background-color': '#380800',
                            'background-position' : '50% 50%',
                            'image-rendering': 'pixelated',
                            '-moz-image-rendering': 'crisp-edges',
                            'background-repeat' : 'no-repeat',
                            'background-size': '100%',
                            
                        })
        }
    if ($(button).hasClass('bNecro52')) {
        $('#randomImage').css({'background-image': 'url('+ yellowStars +')'});
        randomImage.style.animation = "overlayMoveLeft 8s linear infinite";
        randomImage.style.webkitAnimation = "overlayMoveLeft 8s linear infinite";
            $('body').css({'background-image': 'url("img/necrosprites.gif")',
                            'background-color': '#170426',
                            'background-position' : '50% 50%',
                            'image-rendering': 'pixelated',
                            'background-repeat' : 'no-repeat',
                            'background-size': '100%',
                        })
        }
        if ($(button).hasClass('but76')) {
            $('#randomImage').css({'background-image': 'none'});
            $('body').css({'background-image': 'url("img/asgore.gif")',
                            'background-position' : '114% 15%',
                            'image-rendering': 'pixelated',
                            'background-repeat' : 'no-repeat',
                            'background-size': '660px auto',
                            'animation': 'asgore 3s ease-in reverse'
                        })
                        setTimeout(function(){
                            $('body').css({'animation' : 'superStill 0s',});
                            }, 17000);
                        setTimeout(function(){
                            $('body').css({'animation' : 'asgore 3s ease-in forwards',});
                            }, 18000);
        }
        if ($(button).hasClass('bBrody')) {
            $('#randomImage').css({'background-image': 'url('+ stars +')'});
            var gifSource = $('#brodypeak').attr('src'); //get the source in the var
                document.getElementById("brodypeak").style.display = "block";
                randomImage.style.animation = "overlayMoveLeft 12s linear infinite";
                randomImage.style.webkitAnimation = "overlayMoveLeft 12s linear infinite";
                $('body').css({'background-image': 'url("img/space.jpg")',})

        }
        if ($(button).hasClass('b3Dgalax')) {
            $('#randomImage').css({'background-image': 'url('+ stars +')'});
            $('body').css({'background-image': 'url("img/galax.png")',
                            'background-repeat' : 'no-repeat',
                            'image-rendering': 'pixelated',
                            'background-size': 'cover',
                            'background-position' : '100% 0%',
                        })
                            randomImage.style.animation = "overlayMoveDown 12s linear infinite";
                            randomImage.style.webkitAnimation = "overlayMoveDown 12s linear infinite";
        }
        if ($(button).hasClass('bP2CauseOfScience')) {
            $('#randomImage').css({'background-image': 'url('+ stars +')'});
            $('body').css({'background-image': 'url("img/portal 2.png")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover',
                            'background-position' : '50% 40%',
                        })
                            randomImage.style.animation = "overlayMoveDown 12s linear infinite";
                            randomImage.style.webkitAnimation = "overlayMoveDown 12s linear infinite";
        }
        if ($(button).hasClass('bAmpPlains')) {
            $('#randomImage').css({'background-image': 'none', 'opacity':'1', 'transition' : 'opacity 0s','animation' : 'blackOut 3s ease-out forwards'});
            $('body').css('transition', 'background-size 0s ease');
            $('body').css({ 'image-rendering': 'pixelated',
                            'background-image': 'url("img/MysteryDungeon.png")',
                            'image-rendering': 'pixelated',
                            'background-repeat' : 'no-repeat',
                            'background-position' : '50% 0%',
                            'background-size': 'cover',
                            'animation' : 'ampPlains 31s ease-in-out forwards',
                            '-webkit-animation' : 'ampPlains 31s ease-in-out forwards',
                            'animation-delay' : '0.5s',
                            '-webkit-animation-delay' : '0.5s',
                        })
                            $('#randomImage').css({'background-image': 'none'});
                            randomImage.style.animation = "overlayMoveDown 23s linear infinite";
                            randomImage.style.webkitAnimation = "overlayMoveDown 23s linear infinite";
        }
        if ($(button).hasClass('bElectric')) {
            $('#randomImage').css({'background-image': 'none', 'opacity':'1', 'transition' : 'opacity 0s','animation' : 'blackOut 3s ease-out forwards'});
            $('body').css({'background-image': 'url("img/winds.gif")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover',
                        })

                        
                        setTimeout(function(){
                            $('#randomImage').css({'background-image':'url('+ stars +')'})
                            }, 41900);
        }
        if ($(button).hasClass('bMoskau')) {
            if (moskauRand) {
            $('#randomImage').css({'background-image': 'url("img/moskau2.gif")',
            'background-size': '100%',
            'background-repeat':'no-repeat',
            'width': '100%',
            'height': '100%',
            'animation':'bgStill 0s',
            'background-position' : '50% 100%',
            '-webkit-transform': 'scaleY(-1)',
                            'transform': 'scaleY(-1)',
                            'webkit-animation':'bgStill 0s',});
            $('body').css({'background-image': 'url("img/moskau.gif")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'contain',
                            'background-position' : '50% 150%',

                        })
            } else {
                $('#randomImage').css({'background-image': 'none', 'opacity':'1', 'animation' : 'blackOut 3s ease-out forwards'});
                $('body').css({'background-image': 'url("img/arsotzdragon.gif")',
                            'background-repeat' : 'no-repeat',
                            'background-size': 'cover',});
            }
        }
        if ($(button).hasClass('bDetectivePenguin')) {
            $('#randomImage').css({'background-image': 'none', 'opacity':'1', 'transition' : 'opacity 0s','animation' : 'blackOut 3s ease-out forwards'});
            $('body').css({'background-image': 'url("img/penguin.png")',
                            'transition' : 'background-color 0s ease',
                            'background-repeat' : 'no-repeat',
                            'background-color': '#f1f1f1',
                            'background-size': 'auto',
                            'image-rendering': 'pixelated',
                            'background-position' : '100% 100%',})
        }
        if ($("#poopActive").length) {
            beep.pause();
}
        //Don't load or preload any body images if you're on mobile:
                function myFunction(screeziz) {
                    if (screenziz.matches) { // If media query matches
                        //document.body.style.backgroundColor = "yellow";
                        document.body.style.backgroundImage = null;
                        document.body.style.backgroundColor = '#1d212b';
                        randomImage.style.animation = "superstill 0s linear infinite";
                    } else {
                        //document.body.style.backgroundColor = "pink";
                        var images = [];
                        function preload() {
                            for (var i = 0; i < arguments.length; i++) {
                                images[i] = new Image();
                                images[i].url = preload.arguments[i];
                            }
                        }

                        //-- usage --//
                        preload(
                            "img/penguin.png",
                            "img/arsotzdragon.gif",
                            "img/penguin.png"
                        )
                    }
                }
            
            var screenziz = window.matchMedia("(max-width: 700px)")
            myFunction(screenziz) // Call listener function at run time
            screenziz.addListener(myFunction) // Attach listener function on state changes
        }



    //The top white play/pause button:
    function pauseButton() {
        if (isPlaying == true){
        beep.pause();
        $(".poop").css("animation-play-state", "paused");
        $( ".h1" ).removeClass( "poopActive" );
        isPlaying = false;
        $("#pButtonID").html("⏹");

    }
    else if (isPlaying == false){
        beep.play();
        $(".poop").css("animation-play-state", "running");
        $(".h1").addClass("poopActive");
        isPlaying = true;
        $("#pButtonID").html("▶");
    }
}

//!Last part of the code

//-----Stop playing BeepBox if directed to a new tab--------
var $links = $('.newTab').click(function () {
    beep.pause();
    isPlaying = false;
    windowFocus = false;
    $(".poop").css("animation-play-state", "paused");
    $("body").css("animation-play-state", "paused");
});

window.onblur = function () {
    //document.title = 'NOT FOCUSED'
}
window.onfocus = function () {
    //document.title = 'FOCUSED'
    //console.log("window just focused again, and windowFocus is: " + windowFocus);
    if (windowFocus == false) {
        //console.log("playing beep and setting window focus to true after this message");
        beep.play();
        $("#pButtonID").html("▶");
        $(".poop").css("animation-play-state", "running");
        isPlaying = true;
        //document.title = 'SHOULD PLAY NOW';
        windowFocus = true;
        //console.log("Did I make it? " + windowFocus);
    }
}
// too make it complete, also add onblur to document.
// For browsers using tabs (like firefox)
document.onblur = window.onblur;
document.focus = window.focus;