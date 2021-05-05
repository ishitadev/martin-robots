var Position = require("../position");
var Grid = require("../GridPlate");

describe("with 2 x 2 grid", () => {
    var grid = new Grid(2, 2);

    test("coordinates are 1,2 then lost", () => {
        var position = new Position();
        position.x = 1;
        position.y = 3;

        var result = position.isOffThe(grid);
        expect(result).toBeTruthy();
        expect(position.lost).toBeTruthy();
    });
    test("coordinates are -1,1 then lost", () => {
        var position = new Position();
        position.x = -1;
        position.y = 1;

        var result = position.isOffThe(grid);
        expect(result).toBeTruthy();
        expect(position.lost).toBeTruthy();
    });
    test("coordinates are 1,-1 then lost", () => {
        var position = new Position();
        position.x = 1;
        position.y = -1;

        var result = position.isOffThe(grid);
        expect(result).toBeTruthy();
        expect(position.lost).toBeTruthy();
    });

    test("facing North and cannot go any further", () => {
        var position = new Position();
        position.x = 1;
        position.y = 4;
        position.orientation = "N";

        position.isOffThe(grid);
        expect(position.y).toBe(2);
    });
    test("facing East and cannot go any further", () => {
        var position = new Position();
        position.x = 3;
        position.y = 1;
        position.orientation = "E";

        position.isOffThe(grid);
        expect(position.x).toBe(2);
    });
    test("facing South and cannot go any further", () => {
        var position = new Position();
        position.x = 3;
        position.y = -2;
        position.orientation = "S";

        position.isOffThe(grid);
        expect(position.y).toBe(0);
    });
    test("facing West and cannot go any further", () => {
        var position = new Position();
        position.x = -1;
        position.y = 0;
        position.orientation = "W";

        position.isOffThe(grid);
        expect(position.x).toBe(0);
    });
});