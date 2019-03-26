import { startGame } from './Pong';
import { canvas } from './Canvas';

const container = document.getElementById('container');
container.appendChild(canvas);

const context = canvas.getContext('2d');
startGame(context);

