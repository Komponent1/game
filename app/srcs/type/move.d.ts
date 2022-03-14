import * as PIXI from 'pixi.js';

type tMove = {
  src?: string[],
  acceleration: { x: number, y: number },
  velocity: { x: number, y: number },
  keybind?: (sprite: PIXI.Sprite) => void,
  update: (delta: number) => void,
}

export default tMove;
