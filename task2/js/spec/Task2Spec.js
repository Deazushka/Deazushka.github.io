describe("Task2", function() {
	var a = [7, 3, 19, 5, 42, 10, 15, 22];
	var b = [3, 5, 7, 10, 15, 19, 22, 42];
	it("sort", function(){
		expect(sort(a)).toEqual(b);
	});
});

describe("Task2", function() {
	var a = [7, 3, 19, 5, 42, 10, 15, 22];
	it("bSearch", function(){
		expect(binarySearch(199,a)).toBe(-1);
	});
	it("bSearch", function(){
		expect(binarySearch(19,a)).toBe(1);
	});
});

describe("Task2", function() {
	var a = [7, 3, 19, 5, 42, 10, 15, 22];
	it("sumTwoElements", function(){
	expect(find(a,3)).toEqual(false);
	});
	it("sumTwoElements", function(){
		expect(find(a,25)).toEqual(true);
	});
});