function Grid(length, height) {
    var forbidden = [];

    if (length > 50 || height > 50)
        throw new Error("Grid size cannot be greater than 50");
    else if (length < 0 || height < 0)
        throw new Error("Grid size cannot be smaller than 1");

    this.length = (length === undefined ? 0 : length);
    this.height = (height === undefined ? 0 : height);
    this.addForbidden = (position) => forbidden.push(position);
    this.hasForbidden = (position) => forbidden.indexOf(position) > -1

}

module.exports = Grid;