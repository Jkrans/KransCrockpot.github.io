//Crockpot JavaScript
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
})

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 700, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    }
  });
})


const mainHeading = document.getElementById('mainHeading');

window.addEventListener('scroll', () => {
	if(window.scrollY != 0){
		mainHeading.style.webkitTransform = 
		"translate3d(-780px, -155px, 0)" +
		"scale3d(0.4, 0.4, 1)";
		mainHeading.style.color = "white";
		mainHeading.style.textShadow = '-1px 0 lightskyblue, 0 1px lightskyblue, 1px 0 lightskyblue, 0 -1px lightskyblue';
	} else if (window.scrollY == 0) {
		mainHeading.style.webkitTransform = 
		"translate3d(0px, 0px, 0)" +
		"scale3d(1, 1, 1)";
		mainHeading.style.color = "#36454f";
		mainHeading.style.textShadow = '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white';
	}
});

