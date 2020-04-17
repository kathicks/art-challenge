class Grid {

    setExtent(windowWidth, windowHeight) {
        const maxExtent = min([windowWidth, windowHeight])
        this.extent = maxExtent - maxExtent/20
    }

    setPosition(topLeftXCoordinate, topLeftYCoordinate) {
        this.topLeftXCoordinate = topLeftXCoordinate
        this.topLeftYCoordinate = topLeftYCoordinate
    }

    setGridLines(gridDivisions) {
        this.gridDivisions = gridDivisions
        this.horizontalAxes = []
        this.verticalAxes = []
        this.increments = this.extent / this.gridDivisions

        for (let i = 1; i < this.gridDivisions; i++) {
            this.horizontalAxes.push({
                leftXCoordinate: this.topLeftXCoordinate,
                leftYCoordinate: this.topLeftYCoordinate + this.increments * i,
                rightXCoordinate: this.topLeftXCoordinate + this.extent,
                rightYCoordinate: this.topLeftYCoordinate + this.increments * i
            })
            this.verticalAxes.push({
                topXCoordinate: this.topLeftXCoordinate + this.increments * i,
                topYCoordinate: this.topLeftYCoordinate,
                bottomXCoordinate: this.topLeftXCoordinate + this.increments * i,
                bottomYCoordinate: this.topLeftYCoordinate + this.extent
            })
        }
    }

    getPossibleCoordinates() {
        let possibleXCoordinates = [this.topLeftXCoordinate + (this.increments / 2)]
        let possibleYCoordinates = [this.topLeftYCoordinate + (this.increments / 2)]

        for (let i = 1; i < this.gridDivisions; i++) {
            possibleXCoordinates.push(possibleXCoordinates[i - 1] + this.increments)
            possibleYCoordinates.push(possibleYCoordinates[i - 1] + this.increments)
        }

        return { possibleXCoordinates, possibleYCoordinates }
    }

    draw() {
        square(this.topLeftXCoordinate, this.topLeftYCoordinate, this.extent);
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
