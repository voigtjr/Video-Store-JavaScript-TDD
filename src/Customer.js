(function(outer) {
	outer.Customer = function() {
		this.rentals = [];
		
	};

	outer.Customer.prototype.addRental = function(rental) {
		this.rentals.push(rental);
	};
	
	outer.Customer.prototype.addRentals = function(rentals) {
		this.rentals = this.rentals.concat(rentals);
	};
	
	outer.Customer.prototype.getRentalCost = function(){
		
		return this.calc("Cost");
	};
	
	outer.Customer.prototype.getRentalPoints = function(){
		return this.calc("Points");

	};
	
	outer.Customer.prototype.calc = function(metric) {
		var total = 0;
		for (var i=0; i < this.rentals.length; i++) {
			total += this.rentals[i]["calc" + metric]();
		}
		return total;
		
	};
	
	
})(this);
