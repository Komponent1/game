import { Component, Move } from '../type';
import { setAnimateTexture, Keyboard } from '../utils';
import resource from '../../resource';

const some = Component();

some.state = {
  ...some.state,
  src: [resource.ball1, resource.ball2, resource.ball3],
  animate: true,
}
some.initial.position = { x: 50, y: 300 };

some.move = Move([resource.ball_move1, resource.ball2, resource.ball_move3]);
some.move.keybind = function () {
  const right = Keyboard('ArrowRight');
  right.press = () => {
    this.move.velocity.x = 1;
    this.sprite.scale.x = 1;
    setAnimateTexture(this.sprite, some.move.src);
  };
  right.release = () => {
    this.move.velocity.x = 0;
    setAnimateTexture(this.sprite, some.state.src);
  }

  const left = Keyboard('ArrowLeft');
  left.press = () => {
    this.move.velocity.x = -1;
    this.sprite.scale.x = -1;
    setAnimateTexture(this.sprite, some.move.src);
  }
  left.release = () => {
    this.move.velocity.x = 0;
    setAnimateTexture(this.sprite, some.state.src);
  }

  const space = Keyboard('ArrowUp');
  space.press = () => {
    this.move.velocity.y = -5;
  }
}.bind(some);
some.move.update = function (delta) {
  let x = this.sprite.position.x + this.move.velocity.x;
  if (x < 0 || x > 500) {
    x = this.sprite.position.x;
    this.move.velocity.x = 0;
  }
  let y = this.sprite.position.y + this.move.velocity.y;
  if (y < 0 || y > 400) {
    y = this.sprite.position.y;
    this.move.velocity.y = 0;
  }
  some.setPosition(x, y);
}.bind(some)
some.move.fixedUpdate = function (delta, sprite) {
  this.move.velocity.y += 0.1;
}.bind(some)
 
export default some;
