import * as PIXI from 'pixi.js';
import { tMove } from './';

export const Move = (src?: string[]): tMove => {
  const move = {
    src,
    velocity: {x : 0, y: 0},
    update: (delta) => {},
    fixedUpdate: (delta) => {}
  };

  return move;
}
