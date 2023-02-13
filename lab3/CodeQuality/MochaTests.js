describe("Raises x to power n", function () {
    it("5 in the power of 1 equals 5", function () {
        assert.equal(pow(5, 1), 5);
    });

    // Mocha will run only this block
    it.("5 in the power of 2 equals 25", function () {
        assert.equal(pow(5, 2), 25);
    });

    it("5 in the power of 3 equals 125", function () {
        assert.equal(pow(5, 3), 125);
    });
});