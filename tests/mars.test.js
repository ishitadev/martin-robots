var Mars = require("../index");

describe("send instructions to Mars ", () => {
    test("get information about robots position", () => {
        var mars = new Mars();
        var instructions = "5 3\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL";
        var result = mars.send(instructions);
        expect(result).toEqual("1 1 E\n3 3 N LOST\n2 3 S");
    });
});
