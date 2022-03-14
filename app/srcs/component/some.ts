import { Component, Move } from '../origin';
import { arrowpad } from '../utils';
import src from '../../resource';
import { someCollision } from '../collision';

const some = Component();

some.attr = {
  ...some.attr,
  name: 'some',
  src: [src.ball1, src.ball2, src.ball3],
  animate: true,
  animateInterval: 0.1,
}
some.state = {
  ...some.state,
  position: { x: 50, y: 200 }
}
some.collision = someCollision(some.state);

some.move = Move([src.ball_move1, src.ball2, src.ball_move3], 0.1);
some.move.keybind = arrowpad(1).bind(some);
some.move.update = function (delta) {
  this.setVelocity();
  this.setPosition();
}.bind(some)
 
export default some;
