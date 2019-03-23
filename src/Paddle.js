const PADDLE_HEIGHT = 60;
const PADDLE_WIDTH = 10;

export default class Paddle {
    constructor(xPosition, yPosition) {
        // Specifies top left corner of paddle
        this.xPosition = xPosition;
        this.yPosition = yPosition;
    }

    // Draws the paddle using the Canvas API
    draw(context) {
        context.fillStyle = 'black';
        context.fillRect(
            this.xPosition, this.yPosition, PADDLE_WIDTH, PADDLE_HEIGHT
        );
    }
}