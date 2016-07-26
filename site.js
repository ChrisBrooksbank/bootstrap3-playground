(function () {
	"use strict";

    // Set the button text to what was selected on the dropdown
	var $pickButton = $("#pickButton");
	$("#reasonDropdown li a").on("click", function() {
		var reason = $(this).text();
		$pickButton.text(reason);

		/* this hasnt put the selected value into the form data
      	how to do that is up to us
      	Common approach is to add a hidden field and set its value here
   		*/
	});

	$('#theCarousel').carousel();



})();