(function() {
	function milesFunction() {
		var janmonths		= ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
		var febmonths		= ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];
		var marmonths		= ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
		var aprmonths		= ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];
		var maymonths		= ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];
		var junmonths		= ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
		var julmonths		= ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
		var augmonths		= ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
		var sepmonths		= ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
		var octmonths		= ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
		var novmonths		= ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
		var decmonths		= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

		var months			= [];
		var miles			= 0;
		var milesPerMonth 	= 0;
		var inputMiles 		= $('#miles').val();
		var years 			= $('#year').val();
		var startMonth 		= $('#month').val();
		var startDay 		= $('#day').val();
		milesPerMonth 		= inputMiles / 12;

		switch (startMonth) {
			case janmonths[11]:
				months = janmonths;
				break;
			case febmonths[11]:
				months = febmonths;
				break;
			case marmonths[11]:
				months = marmonths;
				break;
			case aprmonths[11]:
				months = aprmonths;
				break;
			case maymonths[11]:
				months = maymonths;
				break;
			case junmonths[11]:
				months = junmonths;
				break;
			case julmonths[11]:
				months = julmonths;
				break;
			case augmonths[11]:
				months = augmonths;
				break;
			case sepmonths[11]:
				months = sepmonths;
				break;	
			case octmonths[11]:
				months = octmonths;
				break;
			case novmonths[11]:
				months = novmonths;
				break;
			case decmonths[11]:
				months = decmonths;
				break;
			default:
				milesPerMonth = 0;
				break;
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
					$('#miles-months').append('<p>' + months[i] + ' ' + startDay + ' ' + miles.toFixed(1) + ' Miles' + '</p>');
					var days = daysPerMonth(i, 2015);
					var milesPerDay = 0;
					milesPerDay += (milesPerMonth / days);					
					$('#miles-months').append('<p class="day">Miles total per day to drive in ' + months[i] + ': ' + milesPerDay.toFixed(1) + '</p>');
				}
				
				$('#miles-months').append('<p class="text-center total">Total for this year is: ' + miles.toFixed(1) + '</p>');
			}

		} else {
			alert('Please enter valid miles and year');
		}
	}

	function daysPerMonth(month,year) {
		return new Date(year, month, 0).getDate();
	}

	function yearsDropdown() {
		var yearsDropdown	= ['Total years', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

		for (var i = 0; i < yearsDropdown.length; i++) {
			$('#year').append('<option>' + yearsDropdown[i] + '</option>');
		}
	}

	function monthsDropDown() {
		var monthsDropDown	= ['Starting Month', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

		for (var i = 0; i < monthsDropDown.length; i++) {
			$('#month').append('<option>' + monthsDropDown[i] + '</option>');
		}
	}

	function daysDropDown() {
		var thirtyOneDays	= ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', 
		'18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];
		var thirtyDays	= ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', 
		'18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th'];
		var twentyNineDays	= ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', 
		'18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th'];

		var daysDropDown = ['Select a month first'];

		for (var i = 0; i < daysDropDown.length; i++) {
			$('#day').append('<option>' + daysDropDown[i] + '</option>');
		}

		$('#month').on('change', function () {
			var dayValue = $('#month').val();
			switch (dayValue) {
				case 'Jan':
				case 'Mar':
				case 'May':
				case 'Jul':
				case 'Aug':
				case 'Oct':
				case 'Dec':
				default:
					daysDropDown = thirtyOneDays;
					$('#day').html("");
					for (var i = 0; i < daysDropDown.length; i++) {
						$('#day').append('<option>' + daysDropDown[i] + '</option>');
					}
					break;
				case 'Apr':
				case 'Jun':
				case 'Sep':
				case 'Nov':
					daysDropDown = thirtyDays;
					$('#day').html("");
					for (var i = 0; i < daysDropDown.length; i++) {
						$('#day').append('<option>' + daysDropDown[i] + '</option>');
					}
					break;
				case 'Feb':
					daysDropDown = twentyNineDays;
					$('#day').html("");
					for (var i = 0; i < daysDropDown.length; i++) {
						$('#day').append('<option>' + daysDropDown[i] + '</option>');
					}
					break;
			}
		});
	}

	function clearOutput() {
		$('#miles-months').html("");
	}

	function totalMiles() {
		var inputMiles = $('#miles').val();
		var years = $('#year').val();
		var totalMiles = inputMiles * years;
		if (!isNaN(totalMiles)) {
			$('#total').html('<p>The total Miles after ' + years + ' years is: ' + totalMiles);
		}
	}

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
})();