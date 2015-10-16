(function() {
	var miles, milesPerMonth, numberOfMonth, inputMiles, years, startMonth, startDay;
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
	var monthsStart		= ['Starting Month', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var daysStart		= ['Select a month first'];
	var monthTerm		= ['Select length of term', '12', '24', '36', '48', '60', '72', '84', '96', '108', '120'];
	var months			= [];
	var d 				= new Date();
	var year 			= d.getFullYear();
	var button 			= $('button');
	

	function milesFunction() {
		inputMiles 		= $('#miles').val();
		years 			= $('#year option:selected').index();	
		startMonth 		= $('#month').val();
		startDay 		= $('#day').val();	
		miles				= 0; // to reset the miles and not keep incrementing them as you click the generate miles button
		numberOfMonth		= 0; // to reset the miles and not keep incrementing them as you click the generate miles button
		milesPerMonth		= 0; // to reset the miles and not keep incrementing them as you click the generate miles button
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
		for (var j = 0; j < years; j++) {
			$('#miles-months').append('<h1>Year #' + (j + 1) + '</h1>');
			if (j > 0) {
				$('#miles-months').append('<hr></hr>');
			}
			for (var i = 0; i < months.length; i++) {
				miles += milesPerMonth;
				var days;
				var endDay;
				var milesPerDay = 0;
				if (i < 1) {
					days = daysPerMonth(months[11], 2015 + j);
					if (startDay === '31st' || startDay === '30th' ) {
						if (startDay === '31st') {
							endDay = '30th';
						} else {
							endDay = '31st';
						}
					} else {
						endDay = startDay;
					}
					$('#miles-months').append('<p>Miles total to drive from ' + months[11] + ' ' + startDay + ' to ' + months[0] + ' ' + endDay + ': <strong>' + numberWithCommas(miles) + '</strong></p>');
					milesPerDay += (milesPerMonth / days);
				} else {
					days = daysPerMonth(months[i-1], 2015 + j);
					if (startDay === '31st' || startDay === '30th') {
						if (days === 31) {
							endDay = '30th';
							startDay = '31st';
						} else {
							endDay = '31st';
							startDay = '30th';
						}
					} else {
						endDay = startDay;
					}
					$('#miles-months').append('<p>Miles total to drive from ' + months[i-1] + ' ' + startDay + ' to ' + months[i] + ' ' + endDay + ': <strong>' + numberWithCommas(miles) + '</strong></p>');
					milesPerDay += (milesPerMonth / days);
				}
				
				$('#miles-months').append('<p class="day">And a total of <strong>' + numberWithCommas(milesPerDay) + '</strong> miles per day.</p>');			
			}
			
			$('#miles-months').append('<p class="text-center total">Total for this year is: <strong>' + numberWithCommas(miles) + '</strong></p>');
		}
	}

	function daysPerMonth(month,year) {
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
		for (var i = 0; i < monthTerm.length; i++) {
			$('#year').append('<option>' + monthTerm[i] + '</option>');
		}
	}

	function monthsDropDown() {
		for (var i = 0; i < monthsStart.length; i++) {
			$('#month').append('<option>' + monthsStart[i] + '</option>');
		}
	}

	function daysDropDown() {		
		for (var i = 0; i < daysStart.length; i++) {
			$('#day').append('<option>' + daysStart[i] + '</option>');
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
		$('#miles-months').html('');
		$('#message').html('');
	}

	function invalidInputs(input) {
		inputMiles	= $('#miles');
		years 		= $('#year');
		startMonth	= $('#month');
		if (isNaN(inputMiles.val()) || inputMiles.val() == '') {
			inputMiles.focus().addClass('error');
			$('#message').html( '<div class="alert alert-danger"><h4 class="text-center"><i class="fa fa-exclamation-circle"></i> "' + input + '" is not a valid number</h4></div>');
		} else if (isNaN(years.find('option:selected').val())) {
			years.focus().addClass('error');
			$('#message').html( '<div class="alert alert-danger"><h4 class="text-center"><i class="fa fa-exclamation-circle"></i> Select a valid term length</h4></div>');
		} else if (startMonth.find('option:selected').val() === 'Starting Month') {
			startMonth.focus().addClass('error');
			$('#message').html( '<div class="alert alert-danger"><h4 class="text-center"><i class="fa fa-exclamation-circle"></i> Select a valid starting month</h4></div>');
		} else {
			return false;
		}
		
	}

	function totalMiles() {
		inputMiles	= $('#miles').val();
		years		= $('#year option:selected').index();
		var totalMiles	= inputMiles * years;
		if (!isNaN(totalMiles)) {
			$('#total').html('<p>Total Miles allowed after ' + years + ' years is: <strong>' + numberWithCommas(totalMiles) + ' Miles.</strong></p>');
		}
	}

	function numberWithCommas(x) {
	    var parts = x.toString().split(".");
	    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	    if (parts[1]) {
	    	var substr = parts[1].substr(0,1);
	    	parts[1] = parts[1].replace(parts[1], substr);
	    	return parts.join(".");
	    } else {
	    	parts = parts + '.0'
	    	return parts;
	    }
	    
	    
	}

	yearsDropdown();
	monthsDropDown();
	daysDropDown();
	button.on('click', function() {
		inputMiles 		= $('#miles').val();
		years 			= $('#year option:selected').index();	
		startMonth 		= $('#month').val();
		startDay 		= $('#day').val();	
		milesPerMonth	= inputMiles / 12;
		clearOutput();
		$('.form-control').removeClass('error');
		if (isNaN(milesPerMonth) || milesPerMonth == 0 || isNaN(years) || startMonth === 'Starting Month') {
			invalidInputs(inputMiles);
		} else {
			totalMiles();
			milesFunction();
		}
		
	});
	$('footer').append('<p>Created by Amir5000 &copy ' + year + '</p>')
})();
