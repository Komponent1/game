import { Component, Move } from '../type';
import { setAnimateTexture, Keyboard } from '../utils';
import resource from '../../resource';
import { someCollision } from '../collision';

const some = Component();

some.state = {
  ...some.state,
  src: [resource.ball1, resource.ball2, resource.ball3],
  animate: true,
  animateInterval: 0.1,
}
some.initial.position = { x: 50, y: 200 };

some.move = Move([resource.ball_move1, resource.ball2, resource.ball_move3], 1);
some.collision = someCollision(some.initial)

some.move.keybind = function () {
  const right = Keyboard('ArrowRight');
  right.press = () => {
    this.move.acceleration.x += 1;
    setAnimateTexture(this.sprite, some.move.src);
  };
  right.release = () => {
    this.move.acceleration.x -= 1;
    setAnimateTexture(this.sprite, some.state.src);
  }

  const left = Keyboard('ArrowLeft');
  left.press = () => {
    this.move.acceleration.x -= 1;
    setAnimateTexture(this.sprite, some.move.src);
  }
  left.release = () => {
    this.move.acceleration.x += 1;
    setAnimateTexture(this.sprite, some.state.src);
  }

  const space = Keyboard('ArrowUp');
  space.press = () => {
    this.move.acceleration.y -= 10;
  }
}.bind(some);
some.move.update = function (delta) {
  this.setVelocity();
}.bind(some)
some.move.fixedUpdate = function (delta, sprite) {
  this.setPosition();
}.bind(some)
 
export default some;
