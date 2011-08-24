(function(outer) {
	outer.Rental = function(movie, days) {
		this.movie = movie;
        this.days = days || 1;
	}
    
    outer.Rental.prototype.calcPoints = function() {
        return 19 * this.days;
    }
	
})(this);
