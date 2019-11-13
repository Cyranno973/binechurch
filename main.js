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




