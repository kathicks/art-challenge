class Grid {

    setExtent(windowWidth, windowHeight) {
        const maximumExtent = min([windowWidth, windowHeight])
        this.pixelExtent = maximumExtent - maximumExtent/20
    }

    setPosition(topLeftXCoordinate, topLeftYCoordinate) {
        this.topLeftXCoordinate = topLeftXCoordinate
        this.topLeftYCoordinate = topLeftYCoordinate
    }

    setGridLines(gridDivisions) {
        this.gridDivisions = gridDivisions
        this.pixelIncrement = this.pixelExtent / this.gridDivisions
        this.horizontalAxes = []
        this.verticalAxes = []

        for (let i = 1; i < this.gridDivisions; i++) {
            this.horizontalAxes.push(
                new Line()
                    .withStartPoint(
                        this.topLeftXCoordinate,
                        this.topLeftYCoordinate + this.pixelIncrement * i)
                    .withEndPoint(
                        this.topLeftXCoordinate + this.pixelExtent,
                        this.topLeftYCoordinate + this.pixelIncrement * i
                    )
            )
            this.verticalAxes.push(
                new Line()
                    .withStartPoint(
                        this.topLeftXCoordinate + this.pixelIncrement * i,
                        this.topLeftYCoordinate)
                    .withEndPoint(
                        this.topLeftXCoordinate + this.pixelIncrement * i,
                        this.topLeftYCoordinate + this.pixelExtent
                    )
                )
        }
    }

    getPossibleCoordinates() {
        const possibleXCoordinates = [this.topLeftXCoordinate + (this.pixelIncrement / 2)]
        const possibleYCoordinates = [this.topLeftYCoordinate + (this.pixelIncrement / 2)]

        for (let i = 1; i < this.gridDivisions; i++) {
            possibleXCoordinates.push(possibleXCoordinates[i - 1] + this.pixelIncrement)
            possibleYCoordinates.push(possibleYCoordinates[i - 1] + this.pixelIncrement)
        }

        return { possibleXCoordinates, possibleYCoordinates }
    }

    draw() {
        square(this.topLeftXCoordinate, this.topLeftYCoordinate, this.pixelExtent);

        this.horizontalAxes.forEach((line) => line.draw());
        this.verticalAxes.forEach((line) => line.draw())
    }

}
