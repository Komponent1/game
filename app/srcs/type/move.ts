import * as PIXI from 'pixi.js';
import { tMove } from './';

export const Move = (src?: string[]): tMove => {
  return {
    src,
    velocity: {x : 0, y: 0},
    update: (delta: number) => {},
    fixedUpdate: (delta: number) => {}
  }
}
