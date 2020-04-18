function setup() {
    createCanvas(windowWidth, windowHeight);
}

const colours = getRandomColours();

function draw() {
    frameRate(0.5);

    clear()
    noFill();

    const grid = new Grid()
    grid.setExtent(windowWidth, windowHeight)
    grid.setPosition(windowWidth / 2 - grid.pixelExtent / 2, windowHeight / 2 - grid.pixelExtent / 2)
    grid.setGridLines(config.gridDivisions)
    grid.draw()

    for (let i = 1; i < config.circles; i++) {
        new Circle()
            .withColour(
                colours[i])
            .withCoordinates(
                grid.getPossibleCoordinates()
                    .possibleXCoordinates[getRandomInt(config.gridDivisions)],
                grid.getPossibleCoordinates()
                    .possibleYCoordinates[getRandomInt(config.gridDivisions)])
            .withDiameter(
                grid.pixelExtent / grid.gridDivisions / 2)
            .draw()
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomColours() {
    let colours = [];

    const generateRandomHexCode = () => `#${Math.floor(Math.random()*16777215).toString(16)}`

    for (let i = 0; i < config.circles; i++) {
        colours.push(generateRandomHexCode())
    }

    return colours;
}
