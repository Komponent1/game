import { tMove } from '../type';

export const Move = (src?: string[], gravity = 0): tMove => {
  const move = {
    src,
    acceleration: {x: 0, y: gravity},
    velocity: {x : 0, y: 0},
    update: (delta: number) => {},
  };

  return move;
}
