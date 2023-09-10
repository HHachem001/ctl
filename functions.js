function federalpovertyguideline(household,incomeamount,percentage){

		var line = NaN;

		if (household == 1) {
			line = 16038;
		} else if (household == 2) {
			line = 21692;
		} else if (household == 3) {
			line = 27346;
		} else if (household == 4) {
			line = 33000;
		} else if (household == 5) {
			line = 38654;
		} else if (household == 6) {
			line = 44308;
		} else if (household == 7) {
			line = 49962;
		} else if (household == 8) {
			line = 55616;
		} else if (household > 8) {
			line = 55616+ (household-8)*5056;
		}

		if (incomeamount <= (line*(percentage/100))) {
			return true;
		} else {
			return false;
		}
	}