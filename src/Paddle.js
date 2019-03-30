import { CANVAS_HEIGHT } from './Canvas';

const PADDLE_HEIGHT = 60;
const PADDLE_WIDTH = 10;

function validatePaddleInBounds(
    canvasHeight, paddleHeight, paddleUpperCorner, movementDistance
    ) {
    
    const paddleLowerCorner = paddleUpperCorner + paddleHeight;
 
    if (paddleUpperCorner + movementDistance < 0) {
        return false; // Paddle beyond top boundary
    } else if (paddleLowerCorner + movementDistance > canvasHeight) {
        return false; // Paddle beyond bottom boundary
    } else {
        return true; // Paddle within bounds
    }
}

export default class Paddle {
    constructor(xPosition, yPosition) {   
        // Specifies top left corner of paddle
        this.xPosition = xPosition;
        this.yPosition = yPosition;

        this.height = PADDLE_HEIGHT;
        this.width = PADDLE_WIDTH;
    }

    move(distance) {
        // Specifies the distance to move the paddle up or down in pixels.
        // Positive values move the paddle downwards, negative values upwards
        if (validatePaddleInBounds(
            CANVAS_HEIGHT, this.height, this.yPosition, distance
        )) {
            this.yPosition += distance;
        }
        
    } 
}