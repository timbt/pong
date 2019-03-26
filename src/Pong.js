import Paddle from './Paddle';

function drawPaddle(paddle, context) {
    context.fillStyle = 'black';
        context.fillRect(
            paddle.xPosition, paddle.yPosition, paddle.width, paddle.height
        );
}
 
export function startGame(context) {
    const playerPaddle = new Paddle(20, 210);
    drawPaddle(playerPaddle, context);
}