//Crockpot JavaScript
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
})

/**
 * hide the dropdown once user clicks an element inside the dropdown
 */
$(document).on("click tap", function () {
  $('.navbar-collapse').collapse('hide');
});

/**
 * Set recipe display to flex and the crockpot icon to none.
 * @param {*} ID 
 */
function displayRecipe(ID) {
  document.getElementById(ID).style.display = "flex";
  document.getElementById("cpimg").style.display = "none";
}

