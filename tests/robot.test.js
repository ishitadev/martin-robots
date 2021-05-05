var Robot = require("../robot");
var Grid = require("../GridPlate");


describe("with 4 x 4 grid and 3,2 East position", () => {
    var grid = new Grid(3, 3);
    var robot = new Robot(grid);
    robot.setPosition("3 2 E");
    test("then it is facing East", () => {
        var positionOutput = robot.getPosition().orientation;
        expect(positionOutput).toBe("E");
    });
    test("then it is positioned at 3,2", () => {
        var positionOutput = robot.getPosition().toString();
        expect(positionOutput).toContain("3 2");
    });
});


describe("with 1 x 1 grid and 2 robot", () => {
    var grid = new Grid();
    var robot1 = new Robot(grid);
    var robot2 = new Robot(grid);

    test("robot 1 falls of the grid it is lost", () => {
        robot1.moveForwards();
        robot1.moveForwards();

        var positionOutput = robot1.getPosition().toString();
        expect(robot1.isLost()).toBeTruthy();
        expect(positionOutput).toBe("0 0 N LOST");
    });
    test("robot 1 can no longer move around", () => {
        robot1.moveForwards();
        robot1.moveForwards();

        var positionOutput = robot1.getPosition().toString();
        expect(positionOutput).toBe("0 0 N LOST");
    });
    test("robot 2 tries get lost in the same place it is not lost", () => {
        robot2.moveForwards();
        robot2.moveForwards();

        var positionOutput = robot2.getPosition().toString();
        expect(robot2.isLost()).toBeFalsy();
    });
    test("robot 2 cannot move forwards in that direction", () => {
        robot2.moveForwards();

        var positionOutput = robot2.getPosition().toString();
        expect(positionOutput).toBe("0 0 N");
    });
});