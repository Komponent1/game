import { tCircleCollision, tSquareCollision } from '.';

export const CircleCollision = (initial): tCircleCollision => {
  return {
    tag: '',
    name: '',
    state: true,
    type: 'circle',
    position: { 
      x: initial.position.x + initial.pivot.x,
      y: initial.position.y + initial.pivot.y 
    },
    r: 10
  }
};
export const Squrecollision = (initial): tSquareCollision => {
  return {
    tag: '',
    name: '',
    state: true,
    type: 'square',
    position: {
      x: initial.position.x,
      y: initial.position.y
    },
    size: {
      w: 10,
      h: 10
    }
  }
}
