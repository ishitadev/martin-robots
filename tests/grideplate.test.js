var Grid = require("../GridPlate");

describe("Given a new Grid", () => {
    test("with a height of 51 then throw an error", () => {
        expect(function () { new Grid(2, 54) }).toThrow(new Error("Grid size cannot be greater than 50"));
    });
    test("with a width of 51 then throw an error", () => {
        expect(function () { new Grid(51, 1) }).toThrow(new Error("Grid size cannot be greater than 50"));
    });
    test("with a negative height then throw an error", () => {
        expect(function () { new Grid(45, -1) }).toThrow(new Error("Grid size cannot be smaller than 1"));
    });
    test("with a negative width then throw an error", () => {
        expect(function () { new Grid(-1, 30) }).toThrow(new Error("Grid size cannot be smaller than 1"));
    });
});