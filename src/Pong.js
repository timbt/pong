import Paddle from './Paddle';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from './Canvas';

function drawPaddle(paddle, context) {
    context.fillStyle = 'black';
        context.fillRect(
            paddle.xPosition, paddle.yPosition, paddle.width, paddle.height
        );
}
 
function createFrame(context, playerPaddle) {
    context.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    drawPaddle(playerPaddle, context);
    window.requestAnimationFrame(() => createFrame(context, playerPaddle));
}

export function startGame(context) {
    const playerPaddle = new Paddle(20, 210);
    window.requestAnimationFrame(() => createFrame(context, playerPaddle));
    
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowUp') {
            playerPaddle.move(-8);
        } else if (e.key === 'ArrowDown') {
            playerPaddle.move(8);
        }
    });
}
