function milesFunction() {
	var months 			= ["1st Month: ", "2nd Month: ", "3rd Month: ", "4th Month: ", "5th Month: ", "6th Month: ", "7th Month: ", "8th Month: ", "9th Month: ", "10th Month: ", "11th Month: ", "12th Month: "];
	var miles			= 0;
	var milesPerMonth 	= 0;
	var inputMiles 		= $('#miles').val();
	var years 			= $('#year').val();
	milesPerMonth 		= inputMiles / 12;

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
				$('#miles-months').append('<p class="text-center">' + months[i] + miles.toFixed(1) + ' Miles' + '</p>');
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
	button.on('click', clearOutput);
	button.on('click', milesFunction);
	button.on('click', totalMiles);

	$('footer').append('<p>Created by Amir5000 &copy ' + year + '</p>')
});