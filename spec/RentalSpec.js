describe("rental", function() {

    var movie1;
    var rental;
    var rentalMoreDays;

    beforeEach(function() {
        movie1 = new Movie();
        rental = new Rental(movie1);
        rentalMoreDays = new Rental(movie1, 45);
    });

	it("has a movie", function() {
		expect(rental.movie).toBeDefined();
	});
    it("has days rented", function() {
        expect(rental.days).toBeDefined();
    });
    it("has days rented default of 1", function() {
        expect(rental.days).toBe(1);
    });
    it("has days rented be passed value", function() {
        expect(rentalMoreDays.days).toBe(45);
    });
    it("has points for a one-day regular type", function() {
        var points = rental.calcPoints();
        expect(points).toBe(19);
    });
    it("has points for a 45 day regular type", function() {
        var points = rentalMoreDays.calcPoints();
        expect(points).toBe(19*45);
    });
});
