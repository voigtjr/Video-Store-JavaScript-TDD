describe("movies", function() {
	describe("regular movies", function() {
		it("have type", function() {
			var movie = new Movie();
			expect(movie.type).toBeDefined();
		});
		it("should have the regular price", function() {
			var movie = new Movie();
			expect(movie.type).toBe(Type.REGULAR);
		});
	});
	it("can specify type", function() {
		var type = new Type();
		var movie = new Movie(type);
		expect(movie.type).toBe(type);
	});
});
