import { CircleCollision } from "../type/collision";

const someCollision = (initial) => {
  const collision = CircleCollision(initial);
  collision.tag = 'player';
  collision.name = 'some';
  collision.r = 50;

  return collision;
};

export default someCollision;
