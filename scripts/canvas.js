function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  frameRate(0.5);

  clear()
  noFill();
  square(topLeftPoint().x, topLeftPoint().y, gridDimension());

  const divisions = gridDimension() / config.gridDivisions

  let possibleXCoordinates = [topLeftPoint().x + (divisions / 2)]
  let possibleYCoordinates = [topLeftPoint().y + (divisions / 2)]

  for (let i = 1; i < config.gridDivisions; i++) {
    const increment = divisions * i;

    possibleXCoordinates.push(possibleXCoordinates[i - 1] + divisions)
    possibleYCoordinates.push(possibleYCoordinates[i - 1] + divisions)

    line(
      topLeftPoint().x + increment,
      topLeftPoint().y,
      topLeftPoint().x + increment,
      topLeftPoint().y + gridDimension()
    )
    line(
      topLeftPoint().x,
      topLeftPoint().y + increment,
      topLeftPoint().x + gridDimension(),
      topLeftPoint().y + increment
    )
  }

  let colors = [];

  for (let i = 0; i < config.circles; i++) {
    colors.push(generateRandomColour())
  }

  for (let i = 1; i < config.circles; i++) {
    new Circle()
        .withColour(
            colors[i])
        .withCoordinates(
            possibleXCoordinates[getRandomInt(config.gridDivisions)],
            possibleYCoordinates[getRandomInt(config.gridDivisions)])
        .withDiameter(
            divisions / 2)
        .draw()
  }
}

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const gridDimension = () => {
  const maxExtent = min([windowWidth, windowHeight])
  const trim = (extent) => extent - extent/20

  return trim(maxExtent);
}

const centralPoint = () => ({
  x: windowWidth/2,
  y: windowHeight/2
})

const topLeftPoint = () => ({
  x: centralPoint().x - gridDimension()/2,
  y: centralPoint().y - gridDimension()/2
})

const generateRandomColour = () => {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}
