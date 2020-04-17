function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    frameRate(0.5);

    clear()
    noFill();

    const grid = new Grid()
    grid.setExtent(windowWidth, windowHeight)
    grid.setPosition(windowWidth / 2 - grid.extent / 2, windowHeight / 2 - grid.extent / 2)
    grid.setGridLines(config.gridDivisions)
    grid.draw()

    const colours = getRandomColours();

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
                grid.extent / grid.gridDivisions / 2)
            .draw()
    }
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const getRandomColours = () => {
    let colours = [];

    for (let i = 0; i < config.circles; i++) {
        colours.push(`#${Math.floor(Math.random()*16777215).toString(16)}`)
    }

    return colours;
}
