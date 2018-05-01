describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });


  it("2 + 3 should be equal to 5", function() {
    var result = sum(2,3);
    expect(result).toBe(5);
  });
});