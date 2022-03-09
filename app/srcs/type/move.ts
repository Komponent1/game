import * as PIXI from 'pixi.js';
import { tMove } from './';

export const Move = (src?: string[], gravity = 0): tMove => {
  const move = {
    src,
    velocity: {x : 0, y: 0},
    acceleration: { x: 0, y: gravity },
    update: (delta) => {},
    fixedUpdate: (delta) => {},
  };

  return move;
}
