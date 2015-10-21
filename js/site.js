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
	var startYear		= ['Starting Year'];
	var currentDate 	= new Date();
    var currentYear 	= currentDate.getFullYear();
    startYear.push(currentYear - 3, currentYear - 2, currentYear - 1, currentYear );

	function addToIndex(days) {
		var add;
		switch (days) {
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
		return add;
	}

	function addTo(days) {
		var add;
		switch (days) {
			case 1:
			case 21:
			case 31:
				add = 'st';
				break;
			case 2:
			case 22:
				add = 'nd';
				break;
			case 3:
			case 24:
				add = 'rd';
				break;
			default:
				add = 'th';
				break;
		}
		return add;
	}

	function getMonthName(month) {
		switch (month) {
			case 1:
			default:
				monthName = 'Jan';
				break;
			case 2:
				monthName = 'Feb';
				break;
			case 3:
				monthName = 'Mar';
				break;
			case 4:
				monthName = 'Apr';
				break;
			case 5:
				monthName = 'May';
				break;
			case 6:
				monthName = 'Jun';
				break;
			case 7:
				monthName = 'Jul';
				break;
			case 8:
				monthName = 'Aug';
				break;
			case 9:
				monthName = 'Sep';
				break;
			case 10:
				monthName = 'Oct';
				break;
			case 11:
				monthName = 'Nov';
				break;
			case 12:
				monthName = 'Dec';
				break;	
		}
		return monthName;
	}

	function milesFunction() {
		inputMiles 			= $('#miles').val();
		years 				= $('#year option:selected').index();	
		startMonth 			= $('#month').val();
		startDay 			= $('#day').val();	
		miles				= 0; // to reset the miles and not keep incrementing them as you click the generate miles button
		numberOfMonth		= 0; // to reset the miles and not keep incrementing them as you click the generate miles button
		milesPerMonth		= 0; // to reset the miles and not keep incrementing them as you click the generate miles button
		milesPerMonth 		= inputMiles / 12;
		var end 			= true;
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
				var currentDate = new Date();
	    		var currentMonth = currentDate.getMonth() + 1;
	    		var currentDay = currentDate.getDate();
	    		var compareDate = getMonthName(currentMonth);
	    		
				miles += milesPerMonth;
				if (months[i] == compareDate && days > currentDay && end == true) {
	    			$('#total').append('<p>You are currently allowed to drive up to ' + numberWithCommas(miles) + '</p>');
	    			end = false;

	    		} else if (months[i - 1] == compareDate && end == true) {
	    			$('#total').append('<p>You are currently allowed to drive up to ' + numberWithCommas(miles) + '</p>');
	    			end = false;
	    		}
				var days;
				var endDay;
				var daysStart;
				var daysEnd;
				var milesPerDay = 0;
				if (i < 1) {
					if (startDay === '31st') {
						daysStart = daysPerMonth(months[11], 2015 + j);
						daysEnd = daysPerMonth(months[0], 2015 + j);
						var addedStartDays = addTo(daysStart);
						var addedEndDays = addTo(daysEnd);
						days = daysStart + addedStartDays;
						endDay = daysEnd + addedEndDays;
						milesPerDay += (milesPerMonth / daysEnd);
					} else if (months[11] === 'Jan') {
						daysStart = daysPerMonth(months[11], 2015 + j);
						days = startDay;
						endDay = days;
						milesPerDay += (milesPerMonth / daysStart);
					} else {
						daysEnd = daysPerMonth(months[0], 2015 + j);
						days = startDay;
						endDay = days;
						milesPerDay += (milesPerMonth / daysEnd);
					}
					$('#miles-months').append('<p class="col-sm-9"><strong>' + numberWithCommas(miles) + '</strong> Miles total to drive from ' + months[11] + ' ' + days + ' to ' + months[0] + ' ' + endDay + '</p>');
				} else {
					if (startDay === '31st') {
						daysStart = daysPerMonth(months[i-1], 2015 + j);
						daysEnd = daysPerMonth(months[i], 2015 + j);
						var addedStartDays = addTo(daysStart);
						var addedEndDays = addTo(daysEnd);
						days = daysStart + addedStartDays;
						endDay = daysEnd + addedEndDays;
						milesPerDay += (milesPerMonth / daysEnd);
					} else if (months[i-1] === 'Feb') {
						daysStart = daysPerMonth(months[i-1], 2015 + j);
						days = startDay;
						endDay = days;
						milesPerDay += (milesPerMonth / daysStart);
					} else {
						daysEnd = daysPerMonth(months[i], 2015 + j);
						days = startDay;
						endDay = days;
						milesPerDay += (milesPerMonth / daysEnd);
					}
					$('#miles-months').append('<p class="col-sm-9"><strong>' + numberWithCommas(miles) + '</strong> Miles total to drive from ' + months[i-1] + ' ' + days + ' to ' + months[i] + ' ' + endDay + '</p>');					
				} 
				$('#miles-months').append('<p class="col-sm-3">Driving<strong> ' + numberWithCommas(milesPerDay) + '</strong> miles / day</p>');			
			}
			$('#miles-months').append('<p class="col-sm-12 text-center total">Total this year: <strong>' + numberWithCommas(miles) + '</strong></p>');
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

	function getStartYear() {
		for (var i = 0; i < startYear.length; i++) {
			$('#startYear').append('<option>' + startYear[i] + '</option>');
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
			$('#day').html("");
			for (var i = 0; i < days; i++) {
				var add = addToIndex(i);
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
		startYear 	= $('#startYear')
		startMonth	= $('#month');
		if (isNaN(inputMiles.val()) || inputMiles.val() == '') {
			inputMiles.focus().addClass('error');
			$('#message').html( '<div class="alert alert-danger"><h4 class="text-center"><i class="fa fa-exclamation-circle"></i> "' + input + '" is not a valid number</h4></div>');
		} else if (isNaN(years.find('option:selected').val())) {
			years.focus().addClass('error');
			$('#message').html( '<div class="alert alert-danger"><h4 class="text-center"><i class="fa fa-exclamation-circle"></i> Select a valid term length</h4></div>');
		} else if (startYear.find('option:selected').val() === 'Starting Year') {
			startYear.focus().addClass('error');
			$('#message').html( '<div class="alert alert-danger"><h4 class="text-center"><i class="fa fa-exclamation-circle"></i> Select a valid starting year</h4></div>');
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
	    	parts = parts + '.0';
	    	return parts;
	    }
	}

	yearsDropdown();
	getStartYear();
	monthsDropDown();
	daysDropDown();
	button.on('click', function() {
		inputMiles 		= $('#miles').val();
		years 			= $('#year option:selected').index();
		startYear 		= $('#startYear').val();
		startMonth 		= $('#month').val();
		startDay 		= $('#day').val();	
		milesPerMonth	= inputMiles / 12;
		clearOutput();
		$('.form-control').removeClass('error');
		if (isNaN(milesPerMonth) || milesPerMonth == 0 || isNaN(years) || startYear === 'Starting Year' || startMonth === 'Starting Month') {
			invalidInputs(inputMiles);
		} else {
			totalMiles();
			milesFunction();
		}
		
	});
	$('footer').append('<p>Created by Amir5000 &copy ' + year + '</p>')
})();
