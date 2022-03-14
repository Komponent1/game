import { tSquareCollision } from "../type";
import { SquareCollision } from "../origin/collision";

const groundCollision = (initial): tSquareCollision => {
  const collision = SquareCollision(initial);
  collision.tag = 'ground';
  collision.name = 'ground',
  collision.size = { w: 500, h: 100 }

  return collision;
};

export default groundCollision;
