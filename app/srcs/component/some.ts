import { Component, Keyboard, Move } from '../type';
import { setAnimateTexture } from '../utils';

const some = Component();

some.src = 'ball';
some.animate = true;
some.position.x = 50;
some.position.y = 300;

some.move = Move('ball_move');
some.move.keybind = (sprite) => {
  const right = Keyboard('ArrowRight');
  right.press = () => {
    sprite.velocity.x = 1;
    sprite.scale.x = 1;
    setAnimateTexture(sprite, some.move.src);
  };
  right.release = () => {
    sprite.velocity.x = 0;
    setAnimateTexture(sprite, some.src);
  }

  const left = Keyboard('ArrowLeft');
  left.press = () => {
    sprite.velocity.x = -1;
    sprite.scale.x = -1;
    setAnimateTexture(sprite, some.move.src);
  }
  left.release = () => {
    sprite.velocity.x = 0;
    setAnimateTexture(sprite, some.src);
  }

  const space = Keyboard('ArrowUp');
  space.press = () => {
    sprite.velocity.y = -1;
    const id = setInterval(() => {
      sprite.velocity.y += 0.1
      if (sprite.position.y >= 300) {
        sprite.velocity.y = 0;
        clearInterval(id);
      }
    }, 100);
  }
};


some.move.event = (delta, sprite) => {
  sprite.position.x += sprite.velocity.x;
  sprite.position.y += sprite.velocity.y;
}

export default some;
