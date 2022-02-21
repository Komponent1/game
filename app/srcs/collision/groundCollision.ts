import { tSquareCollision } from "../type";
import { Squrecollision } from "../type/collision";

const groundCollision = (initial): tSquareCollision => {
  const collision = Squrecollision(initial);
  collision.tag = 'ground';
  collision.name = 'ground',
  collision.size = { w: 500, h: 100 }

  return collision;
};

export default groundCollision;
