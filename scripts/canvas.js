function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  frameRate(1);

  square(topLeftPoint().x, topLeftPoint().y, gridDimension());

  const divisions = gridDimension() / 10

  let possibleXCoordinates = [topLeftPoint().x + (divisions / 2)]
  let possibleYCoordinates = [topLeftPoint().y + (divisions / 2)]

  for (let i = 1; i < 10; i++) {
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

  for (let i = 1; i < 20; i++) {
    circle(
        possibleXCoordinates[Math.floor((Math.random() * (10 - 1)) + 1)],
        possibleYCoordinates[Math.floor((Math.random() * (10 - 1)) + 1)],
        divisions / 2
    );
  }
}

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
