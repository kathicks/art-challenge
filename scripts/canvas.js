function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  square(topLeftPoint().x, topLeftPoint().y, gridDimension());

  const divisions = gridDimension() / 10

  for (let i = 1; i < 10; i++) {
    const increment = divisions * i;

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
