$(document).ready(function() {
  $('.menu-toggle').click(function() {
    $('nav').toggleClass('active');

  })
})
console.log("yes");
var navElt = document.getElementById('main-nav');
var menuElt = document.getElementById('iconeMenu');
menuElt.addEventListener('click', (e) => {
  navElt.style.display = "block";
});


var  header = document.getElementById('header');
  
  window.onscroll = function(){

	if (window.pageYOffset >100) {
		
		header.style.background = "#ffffff";
		header.style.boxShadow = "0px 4px 2px red";
	}
	else{
		header.style.background = "#fffdfd21";
		header.style.boxShadow = "none";
	}
  }



// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

