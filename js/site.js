function milesFunction() {
	var janmonths		= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var febmonths		= ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
	var marmonths		= ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];
	var aprmonths		= ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
	var maymonths		= ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];
	var junmonths		= ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];
	var julmonths		= ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
	var augmonths		= ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
	var sepmonths		= ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
	var octmonths		= ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
	var novmonths		= ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
	var decmonths		= ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];

	var months			= [];
	var miles			= 0;
	var milesPerMonth 	= 0;
	var inputMiles 		= $('#miles').val();
	var years 			= $('#year').val();
	var startMonth 		= $('#month').val();
	var startDay 		= $('#day').val();
	milesPerMonth 		= inputMiles / 12;

	if (startMonth === janmonths[0]) {
		months = janmonths;
	} else if (startMonth === febmonths[0]) {
		months = febmonths;
	} else if (startMonth === marmonths[0]) {
		months = marmonths;
	} else if (startMonth === aprmonths[0]) {
		months = aprmonths;
	} else if (startMonth === maymonths[0]) {
		months = maymonths;
	} else if (startMonth === junmonths[0]) {
		months = junmonths;
	} else if (startMonth === julmonths[0]) {
		months = julmonths;
	} else if (startMonth === augmonths[0]) {
		months = augmonths;
	} else if (startMonth === sepmonths[0]) {
		months = sepmonths;
	} else if (startMonth === octmonths[0]) {
		months = octmonths;
	} else if (startMonth === novmonths[0]) {
		months = novmonths;
	} else if (startMonth === decmonths[0]) {
		months = decmonths;
	} else {
		milesPerMonth = 0;
	}

	if (milesPerMonth == '' || milesPerMonth == 0 || years == '' || years == 0 ) {
		alert('Please enter valid miles and year');
	} else if (!isNaN(milesPerMonth) && !isNaN(years)) {
		for (var j = 0; j < years; j++) {
			$('#miles-months').append('<h1>Year #' + (j + 1) + '</h1>');
			if (j > 0) {
				$('#miles-months').append('<hr></hr>');
			}
			for (var i = 0; i < months.length; i++) {
				miles += milesPerMonth;
				$('#miles-months').append('<p class="text-center">' + months[i] + ' ' + startDay + ' ' + miles.toFixed(1) + ' Miles' + '</p>');
			}
			$('#miles-months').append('<p class="text-center total">Total for this year is: ' + miles.toFixed(1) + '</p>');
		}
	} else {
		alert('Please enter valid miles and year');
	}
}

function yearsDropdown() {
	var yearsDropdown	= ['Select the number of years for the lease', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

	for (var i = 0; i < yearsDropdown.length; i++) {
		$('#year').append('<option>' + yearsDropdown[i] + '</option>');
	}
}

function monthsDropDown() {
	var monthsDropDown	= ['Starting Month', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec '];

	for (var i = 0; i < monthsDropDown.length; i++) {
		$('#month').append('<option>' + monthsDropDown[i] + '</option>');
	}
}

function daysDropDown() {
	var daysDropDown	= ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', 
	'18th', '19th', '20th', '21th', '22th', '23th', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31th'];

	for (var i = 0; i < daysDropDown.length; i++) {
		$('#day').append('<option>' + daysDropDown[i] + '</option>');
	}
}

function clearOutput() {
	$('#miles-months').html("");
}

function totalMiles() {
	var inputMiles = $('#miles').val();
	var years = $('#year').val();
	var totalMiles = inputMiles * years;
	if (!isNaN(totalMiles)) {
		$('#total').html("").append('<p>The total Miles after ' + years + ' years is: ' + totalMiles);
	}
}



$(function () {
	var d = new Date();
	var year = d.getFullYear();
	var button = $('button');

	yearsDropdown();
	monthsDropDown();
	daysDropDown();
	button.on('click', clearOutput);
	button.on('click', milesFunction);
	button.on('click', totalMiles);

	$('footer').append('<p>Created by Amir5000 &copy ' + year + '</p>')
});