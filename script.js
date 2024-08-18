var icon = document.querySelector("#ic");
var menupage = document.querySelector("#menupage");

var flag = 0;

icon.addEventListener("click", function() {
    if(flag == 0) {
    icon.style.color="white";
        menupage.style.width = "100vw";
        flag = 1;   }
     else {
        icon.style.color="black";
        menupage.style.width = "0vw";
        flag = 0; }
});
menupage.addEventListener("touchstart",function(){
menupage.style.width = "0vw";
icon.style.color="black";
})





var instagram = document.querySelector("#instagram");
var linkedin = document.querySelector("#linkedin");
var dribble = document.querySelector("#dribble");
var github = document.querySelector("#github");
var youtube = document.querySelector("#youtube");
var behance = document.querySelector("#behance");
var twitter = document.querySelector("#twitter");

var upi1 = document.querySelector("#i1");
var upi2 = document.querySelector("#i2");
var upi3 = document.querySelector("#i3");
var upi4 = document.querySelector("#i4");
var upi5 = document.querySelector("#i5");
var upi6 = document.querySelector("#i6");
var upi7 = document.querySelector("#i7");

var igp = document.querySelector("#instagram p");
var lip = document.querySelector("#linkedin p");
var ytp = document.querySelector("#youtube p");
var bhp = document.querySelector("#behance p");
var tp = document.querySelector("#twitter p");
var ghp = document.querySelector("#github p");
var dp = document.querySelector("#dribble p");



instagram.addEventListener("touchstart", function(){
instagram.style.backgroundColor="#fff";
upi1.style.color="black";
igp.style.color="black";
});
instagram.addEventListener("touchend", function(){
instagram.style.backgroundColor="black";
upi1.style.color="white";
igp.style.color="white";
});

youtube.addEventListener("touchstart", function(){
youtube.style.backgroundColor="#fff";
upi5.style.color="black";
ytp.style.color="black";
});
youtube.addEventListener("touchend", function(){
youtube.style.backgroundColor="black";
upi5.style.color="white";
ytp.style.color="white";
});


linkedin.addEventListener("touchstart", function(){
linkedin.style.backgroundColor="#fff";
upi2.style.color="black";
lip.style.color="black";
});
linkedin.addEventListener("touchend", function(){
linkedin.style.backgroundColor="black";
upi2.style.color="white";
lip.style.color="white";
});


github.addEventListener("touchstart", function(){
github.style.backgroundColor="#fff";
upi4.style.color="black";
ghp.style.color="black";
});
github.addEventListener("touchend", function(){
github.style.backgroundColor="black";
upi4.style.color="white";
ghp.style.color="white";
});


twitter.addEventListener("touchstart", function(){
twitter.style.backgroundColor="#fff";
upi7.style.color="black";
tp.style.color="black";
});
twitter.addEventListener("touchend", function(){
twitter.style.backgroundColor="black";
upi7.style.color="white";
tp.style.color="white";
});


behance.addEventListener("touchstart", function(){
behance.style.backgroundColor="#fff";
upi6.style.color="black";
bhp.style.color="black";
});
behance.addEventListener("touchend", function(){
behance.style.backgroundColor="black";
upi6.style.color="white";
bhp.style.color="white";
});


dribble.addEventListener("touchstart", function(){
dribble.style.backgroundColor="#fff";
upi3.style.color="black";
dp.style.color="black";
});
dribble.addEventListener("touchend", function(){
dribble.style.backgroundColor="black";
upi3.style.color="white";
dp.style.color="white";
});




var nav4 = document.querySelector("#nav4 button");
nav4.addEventListener("touchstart", function(){

nav4.style.border ="0px solid white";
nav4.style.boxShadow="0px 0px 100px 1px black";
});
nav4.addEventListener("touchend", function(){
nav4.style.border ="1px solid black";

nav4.style.boxShadow="none";
});



var lastdiv1 = document.querySelector("#lastdiv1");
lastdiv1.addEventListener("touchstart", function(){
lastdiv1.style.backgroundColor="white";
lastdiv1.style.color="black";
});
lastdiv1.addEventListener("touchend", function(){
lastdiv1.style.backgroundColor="transparent";
lastdiv1.style.color="white";
});

var ekdumlast = document.querySelector("#ekdumlast");
ekdumlast.addEventListener("touchstart", function(){
ekdumlast.style.backgroundColor="white";
ekdumlast.style.color="black";
});
ekdumlast.addEventListener("touchend", function(){
ekdumlast.style.backgroundColor="transparent";
ekdumlast.style.color="white";
});


var ekdumlast1 = document.querySelector("#ekdumlast1");
ekdumlast1.addEventListener("touchstart", function(){
ekdumlast1.style.backgroundColor="white";
ekdumlast1.style.color="black";
});
ekdumlast1.addEventListener("touchend", function(){
ekdumlast1.style.backgroundColor="transparent";
ekdumlast1.style.color="white";
});


var hara1 = document.querySelector("#hara1");
hara1.addEventListener("touchstart", function(){
hara1.style.backgroundColor="white";
hara1.style.color="black";
});
hara1.addEventListener("touchend", function(){
hara1.style.backgroundColor="transparent";
hara1.style.color="white";
});


var hara2 = document.querySelector("#hara2");
hara2.addEventListener("touchstart", function(){
hara2.style.backgroundColor="white";
hara2.style.color="black";
});
hara2.addEventListener("touchend", function(){
hara2.style.backgroundColor="transparent";
hara2.style.color="white";
});






var btn99 = document.querySelector("#btn99");
btn99.addEventListener("touchstart", function(){
btn99.style.backgroundColor="white";
btn99.style.color="black";
});
btn99.addEventListener("touchend", function(){
btn99.style.backgroundColor="transparent";
btn99.style.color="white";
});



 var c1 = document.querySelector("#c1");
 
 var c2 = document.querySelector("#c2");
 
 var c3 = document.querySelector("#c3");
 
 var c4 = document.querySelector("#c4");
 
 var c5 = document.querySelector("#c5");
 
 var c6 = document.querySelector("#c6");
 
 var c7 = document.querySelector("#c7");
 
 var c8 = document.querySelector("#c8");
 
 c1.addEventListener("touchstart", function(){
 c1.style.boxShadow = "0px 0px 10px 1px white";
 });
 c1.addEventListener("touchend", function(){
 c1.style.boxShadow = "0px 0px 0px 0px white";
 });
 
 c2.addEventListener("touchstart", function(){
 c2.style.boxShadow = "0px 0px 10px 1px white";
 });
 c2.addEventListener("touchend", function(){
 c2.style.boxShadow = "0px 0px 0px 0px white";
 });
 
 c3.addEventListener("touchstart", function(){
 c3.style.boxShadow = "0px 0px 10px 1px white";
 });
 c3.addEventListener("touchend", function(){
 c3.style.boxShadow = "0px 0px 0px 0px white";
 });
 
 c4.addEventListener("touchstart", function(){
 c4.style.boxShadow = "0px 0px 10px 1px white";
 });
 c4.addEventListener("touchend", function(){
 c4.style.boxShadow = "0px 0px 0px 0px white";
 });
 
 c5.addEventListener("touchstart", function(){
 c5.style.boxShadow = "0px 0px 10px 1px white";
 });
 c5.addEventListener("touchend", function(){
 c5.style.boxShadow = "0px 0px 0px 0px white";
 });
 
 c6.addEventListener("touchstart", function(){
 c6.style.boxShadow = "0px 0px 10px 1px white";
 });
 c6.addEventListener("touchend", function(){
 c6.style.boxShadow = "0px 0px 0px 0px white";
 });
 
 c7.addEventListener("touchstart", function(){
 c7.style.boxShadow = "0px 0px 10px 1px white";
 });
 c7.addEventListener("touchend", function(){
 c7.style.boxShadow = "0px 0px 0px 0px white";
 });
 
 c8.addEventListener("touchstart", function(){
 c8.style.boxShadow = "0px 0px 10px 1px white";
 });
 c8.addEventListener("touchend", function(){
 c8.style.boxShadow = "0px 0px 0px 0px white";
 });
 
 
 var imgg1 = document.querySelector("#imgg1");

 var imgg2 = document.querySelector("#imgg2");

 var imgg3 = document.querySelector("#imgg3");

 var imgg4 = document.querySelector("#imgg4");

 var imgg5 = document.querySelector("#imgg5");

 var imgg6 = document.querySelector("#imgg6");


imgg1.addEventListener("touchstart", function(){
imgg1.style.boxShadow="0px 0px 10px 1px white";
});
imgg1.addEventListener("touchend", function(){
imgg1.style.boxShadow = "0px 0px 0px 0px white";
});


imgg2.addEventListener("touchstart", function(){
imgg2.style.boxShadow="0px 0px 10px 1px white";
});
imgg2.addEventListener("touchend", function(){
imgg2.style.boxShadow = "0px 0px 0px 0px white";
});


imgg3.addEventListener("touchstart", function(){
imgg3.style.boxShadow="0px 0px 10px 1px white";
});
imgg3.addEventListener("touchend", function(){
imgg3.style.boxShadow = "0px 0px 0px 0px white";
});


imgg4.addEventListener("touchstart", function(){
imgg4.style.boxShadow="0px 0px 10px 1px white";
});
imgg4.addEventListener("touchend", function(){
imgg4.style.boxShadow = "0px 0px 0px 0px white";
});


imgg5.addEventListener("touchstart", function(){
imgg5.style.boxShadow="0px 0px 10px 1px white";
});
imgg5.addEventListener("touchend", function(){
imgg5.style.boxShadow = "0px 0px 0px 0px white";
});


imgg6.addEventListener("touchstart", function(){
imgg6.style.boxShadow="0px 0px 10px 1px white";
});
imgg6.addEventListener("touchend", function(){
imgg6.style.boxShadow = "0px 0px 0px 0px white";
}); 




const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});



const elements = [
  "#c1",
  "#c2",
  "#c3",
  "#c4",
  "#c5",
  "#c6",
  "#c7",
  "#c8",
];

elements.forEach(el => {
  gsap.from(el, {
    y: 50,
    duration: 0.5,
    scrollTrigger: { 
      trigger: el,
      toggleActions: "play none none reset"
    }
  });
});