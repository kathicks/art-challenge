class Line {

    withStartPoint(xCoordinate, yCoordinate) {
        this.startPoint = {
            x: xCoordinate,
            y: yCoordinate
        };

        return this;
    }

    withEndPoint(xCoordinate, yCoordinate) {
        this.endPoint = {
            x: xCoordinate,
            y: yCoordinate
        };

        return this;
    }

    draw() {
        line(
            this.startPoint.x,
            this.startPoint.y,
            this.endPoint.x,
            this.endPoint.y,
        )
    }

}