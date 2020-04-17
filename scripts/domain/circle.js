class Circle {

    withColour(hexCode) {
        this.colour = hexCode;

        return this;
    }

    withCoordinates(xCoordinate, yCoordinate) {
        this.x = xCoordinate;
        this.y = yCoordinate;

        return this;
    }

    withDiameter(diameter) {
        this.diameter = diameter

        return this;
    }

    draw() {
        fill(
            this.colour
        );
        circle(
            this.x,
            this.y,
            this.diameter
        );
    }

}