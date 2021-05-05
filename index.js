var Grid = require("./GridPlate");
var Robot = require("./robot");

var instructions = "5 3\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL";
var mars = new Mars();

function Mars() {

    this.send = function (instructions) {
        var output = "";

        instructions = instructions.split("\n");

        var gridSize = instructions[0].split(" ");
        var grid = new Grid(gridSize[0], gridSize[1]);
        var robot = new Robot(grid);

        for (var i = 1; i < instructions.length; i++) {
            var instruction = instructions[i];

            if (isNewRobot(instruction))
                robot = new Robot(grid);
            else if (isRobotsStartingPosition(instruction))
                robot.setPosition(instruction);
            else
                output += (output.length > 0 ? "\n" : "") + robot.move(instruction);
        }
        return output;
    };
    isNewRobot = (instruction) => instruction === "";
    isRobotsStartingPosition = (instruction) => instruction.indexOf(" ") > -1;
}
console.log(mars.send(instructions));

module.exports = Mars;

