import Paddle from './Paddle';

export function startGame(context) {
    const playerPaddle = new Paddle(20, 210);
    playerPaddle.draw(context);
}