import { tSquareCollision } from "../type";
import { SquareCollision } from "../type/collision";

const wallCollision = (initial): tSquareCollision => {
  const collision = SquareCollision(initial);
  collision.tag = 'ground';
  collision.name = 'wall',
  collision.size = { w: 20, h: 500 }

  return collision;
};

export default wallCollision;
