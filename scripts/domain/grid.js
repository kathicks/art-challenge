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
            this.horizontalAxes.push({
                leftXCoordinate: this.topLeftXCoordinate,
                leftYCoordinate: this.topLeftYCoordinate + this.pixelIncrement * i,
                rightXCoordinate: this.topLeftXCoordinate + this.pixelExtent,
                rightYCoordinate: this.topLeftYCoordinate + this.pixelIncrement * i
            })
            this.verticalAxes.push({
                topXCoordinate: this.topLeftXCoordinate + this.pixelIncrement * i,
                topYCoordinate: this.topLeftYCoordinate,
                bottomXCoordinate: this.topLeftXCoordinate + this.pixelIncrement * i,
                bottomYCoordinate: this.topLeftYCoordinate + this.pixelExtent
            })
        }
    }

    getPossibleCoordinates() {
        let possibleXCoordinates = [this.topLeftXCoordinate + (this.pixelIncrement / 2)]
        let possibleYCoordinates = [this.topLeftYCoordinate + (this.pixelIncrement / 2)]

        for (let i = 1; i < this.gridDivisions; i++) {
            possibleXCoordinates.push(possibleXCoordinates[i - 1] + this.pixelIncrement)
            possibleYCoordinates.push(possibleYCoordinates[i - 1] + this.pixelIncrement)
        }

        return { possibleXCoordinates, possibleYCoordinates }
    }

    draw() {
        square(this.topLeftXCoordinate, this.topLeftYCoordinate, this.pixelExtent);
        this.horizontalAxes.forEach((axis) => {
            line(
              axis.leftXCoordinate,
              axis.leftYCoordinate,
              axis.rightXCoordinate,
              axis.rightYCoordinate,
            )
        });
        this.verticalAxes.forEach((axis) => {
            line(
              axis.topXCoordinate,
              axis.topYCoordinate,
              axis.bottomXCoordinate,
              axis.bottomYCoordinate,
            )
        })
    }

}
