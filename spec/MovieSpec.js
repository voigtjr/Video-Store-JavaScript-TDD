describe("movies", function() {
	describe("regular movies", function() {
		it("have type", function() {
			var movie = new Movie();
			expect(movie.type).toBeDefined();
		});
		xit("have type of type type", function() {
			var movie = new Movie();
			alert(movie.type.constructor);
			expect(movie.type.constructor).toBe(Type);
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
