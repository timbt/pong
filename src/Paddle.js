const PADDLE_HEIGHT = 60;
const PADDLE_WIDTH = 10;

export default class Paddle {
    constructor(xPosition, yPosition) {   
        // Specifies top left corner of paddle
        this.xPosition = xPosition;
        this.yPosition = yPosition;

        this.height = PADDLE_HEIGHT;
        this.width = PADDLE_WIDTH;
    }
}