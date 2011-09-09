describe("customer", function() {
	var cust = null;
	var r1;
	
	beforeEach(function() {
		cust = new Customer();
		r1 = new Rental(new Movie());
	});
	
	it("to be defined", function() {
		expect(cust).toBeDefined();
	});
	
	it("to have rentals", function() {
		expect(cust.rentals).toBeDefined();
	});
	
	describe("rentals", function() {
		
		it("can add 1 rental", function() {
			cust.addRental(r1); // when
			expect(cust.rentals).toEqual([r1]); //then
		});
		
		it("can add multiple rentals at once", function() {
			var multipleRentals = [r1, r1];
			cust.addRentals(multipleRentals);
			expect(cust.rentals).toEqual(multipleRentals);
		});
					
	});
	
	describe("computing cost of a customer's rentals", function() {
		
		it("no cost if there are no rentals", function() {
			expect(cust.getRentalCost()).toEqual(0);
		});
		
		it("cost if there more than one rental", function(){
			cust.addRentals([r1, r1]);
			expect(cust.getRentalCost()).toBe(50);
		});
		
		
	});
	
	
    describe("computing customer points", function() {
		
		it("number of points if there are no rentals", function() {
			expect(cust.getRentalPoints()).toEqual(0);
		});
		
		it("cost if there more than one rental", function(){
			cust.addRentals([r1, r1]);
			expect(cust.getRentalPoints()).toBe(46);
		});

		
	});
	
	
	
});
