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
					var days;
					var milesPerDay = 0;
					if (i < 1) {
						$('#miles-months').append('<p>Miles total to drive from ' + months[11] + ' ' + startDay + ' to ' + months[0] + ' ' + startDay + ': <strong>' + miles.toFixed(1) + '</strong></p>');
						days = daysPerMonth(months[11], 2015 + j);	
						milesPerDay += (milesPerMonth / days);	
					} else {
						$('#miles-months').append('<p>Miles total to drive from ' + months[i-1] + ' ' + startDay + ' to ' + months[i] + ' ' + startDay + ': <strong>' + miles.toFixed(1) + '</strong></p>');
						days = daysPerMonth(months[i-1], 2015 + j);
						milesPerDay += (milesPerMonth / days);
					}
					
					$('#miles-months').append('<p class="day">And a total of <strong>' + milesPerDay.toFixed(1) + '</strong> miles per day.</p>');			
				}
				
				$('#miles-months').append('<p class="text-center total">Total for this year is: <strong>' + miles.toFixed(1) + '</strong></p>');
			}

		} else {
			alert('Please enter valid miles and year');
		}
	}

	function daysPerMonth(month,year) {
		var numberOfMonth = 0;
		switch (month) {
			case 'Jan':
			default:
				numberOfMonth = 1;
				break;
			case 'Feb':
				numberOfMonth = 2;
				break;
			case 'Mar':
				numberOfMonth = 3;
				break;
			case 'Apr':
				numberOfMonth = 4;
				break;
			case 'May':
				numberOfMonth = 5;
				break;
			case 'Jun':
				numberOfMonth = 6;
				break;
			case 'Jul':
				numberOfMonth = 7;
				break;
			case 'Aug':
				numberOfMonth = 8;
				break;
			case 'Sep':
				numberOfMonth = 9;
				break;
			case 'Oct':
				numberOfMonth = 10;
				break;
			case 'Nov':
				numberOfMonth = 11;
				break;
			case 'Dec':
				numberOfMonth = 12;
				break;	
		}
		return new Date(year, numberOfMonth, 0).getDate();
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
		var daysDropDown = ['Select a month first'];
		for (var i = 0; i < daysDropDown.length; i++) {
			$('#day').append('<option>' + daysDropDown[i] + '</option>');
		}

		$('#month').on('change', function () {
			var monthValue	= $('#month').val();
			var days	= daysPerMonth(monthValue, 2015);
			var add;
			$('#day').html("");
			for (var i = 0; i < days; i++) {
				switch (i) {
					case 0:
					case 20:
					case 30:
						add = 'st';
						break;
					case 1:
					case 21:
						add = 'nd';
						break;
					case 2:
					case 22:
						add = 'rd';
						break;
					default:
						add = 'th';
						break;
				}
				$('#day').append('<option>' + (i + 1) + add + '</option>');
			}
		});
	}

	function clearOutput() {
		$('#miles-months').html("");
	}

	function totalMiles() {
		var inputMiles	= $('#miles').val();
		var years	= $('#year').val();
		var totalMiles	= inputMiles * years;
		if (!isNaN(totalMiles)) {
			$('#total').html('<p>The total Miles after ' + years + ' years is: <strong>' + totalMiles + ' Miles.</strong></p>');
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
