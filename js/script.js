/*........carousel code start....................................................*/
$('#demoSlide').carousel({
    interval: 3000,
	pause: false
});	

$('#demoSlide2').carousel({
    interval: 3000,
	pause: false
});	


/*............carousel code end......................................................*/
/*............https://properprogramming.com/tools/jquery-to-javascript-converter/..............................*/
/*............animation js code start..............................*/
//zoom in code.............
var $fade =  $(".zoomin"); //Calling the class in HTML

$(window).scroll(function () { //Using the scroll global variable
    $fade.each(function () {

        fadeMiddle = $(this).offset().top + (0.4 *$(this).height());
        windowBottom = $(window).scrollTop() + $(window).height();

        if (fadeMiddle < windowBottom) {
          $(this).addClass("zoomIn");
        }
    });
});

/* On Load: Trigger Scroll Once*/
$(window).scroll();

//fadeinup code............
var $fade2 =  $(".fadeinup"); //Calling the class in HTML

$(window).scroll(function () { //Using the scroll global variable
    $fade2.each(function () {

        fadeMiddle = $(this).offset().top + (0.4 *$(this).height());
        windowBottom = $(window).scrollTop() + $(window).height();

        if (fadeMiddle < windowBottom) {
          $(this).addClass("fadeInUp");
        }
    });
});

/* On Load: Trigger Scroll Once*/
$(window).scroll();

//fadeinleft code............
var $fade3 =  $(".fadeinleft"); //Calling the class in HTML

$(window).scroll(function () { //Using the scroll global variable
    $fade3.each(function () {

        fadeMiddle = $(this).offset().top + (0.4 *$(this).height());
        windowBottom = $(window).scrollTop() + $(window).height();

        if (fadeMiddle < windowBottom) {
          $(this).addClass("fadeInLeft");
        }
    });
});

/* On Load: Trigger Scroll Once*/
$(window).scroll();

//fadeindownbig code............
var $fade4 =  $(".slideindown"); //Calling the class in HTML

$(window).scroll(function () { //Using the scroll global variable
    $fade4.each(function () {

        fadeMiddle = $(this).offset().top + (0.4 *$(this).height());
        windowBottom = $(window).scrollTop() + $(window).height();

        if (fadeMiddle < windowBottom) {
          $(this).addClass("slideInDown");
        }
    });
});

/* On Load: Trigger Scroll Once*/
$(window).scroll();


/*............window scroll header color change code end..............................*/

/*.............................sidepanel js code start...............................*/

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
/*.............................sidepanel js code end...............................*/

/*.............................backToTop Button js code start...............................*/

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
/*.............................backToTop Button js code end...............................*/




























