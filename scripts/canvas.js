function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  frameRate(0.5);

  clear()
  noFill();
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
    fill(colors[i])
    circle(
        possibleXCoordinates[getRandomInt(10)],
        possibleYCoordinates[getRandomInt(10)],
        divisions / 2
    );
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

const colors = [
    '#4098b3',
    '#4091b5',
    '#408bb6',
    '#4084b7',
    '#407db8',
    '#4076b9',
    '#406fba',
    '#4068bb',
    '#4060bc',
    '#4059bd',
    '#4051be',
    '#4049bf',
    '#4142c0',
    '#4841c0',
    '#5042c1',
    '#5942c1',
    '#6143c2',
    '#6a43c2',
    '#7244c3',
    '#7b44c3',
    '#8345c4',
    '#8b45c4',
    '#9446c5',
    '#9c47c5'
]
