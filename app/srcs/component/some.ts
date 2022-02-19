import PIXI from 'pixi.js';
import Component from './component';
import { Keyboard, Move } from '../move';

const some = Component();

some.src = 'cha'
some.position.x = 15;
some.position.y = 20;

some.move = Move();
some.move.keybind = (sprite) => {
  const right = Keyboard('ArrowRight');
  right.press = () => {
    sprite.vx = 1;
  };
  right.release = () => {
    sprite.vx = 0;
  }
};

some.move.event = (delta, sprite) => {
  sprite.position.x += sprite.vx;
}

export default some;
