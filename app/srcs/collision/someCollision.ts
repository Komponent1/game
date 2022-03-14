import { SquareCollision } from "../origin/collision";

const someCollision = (initial) => {
  const collision = SquareCollision(initial);
  collision.tag = 'player';
  collision.name = 'some';
  collision.size = { w: 25, h: 25 };

  return collision;
};

export default someCollision;
