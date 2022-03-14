import { tCollision } from '.';

type tSquareCollision = tCollision & {
  size: { w: number, h: number }
}

export default tSquareCollision;
