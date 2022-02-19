import { tMove } from './';

export const Move = (src?: string): tMove => {
  return {
    src,
    velocity: {x : 0, y: 0},
    event: (delta, sprite) => {}
  }
}

export const Keyboard = (value: string | number) => {
  const key = {
    value: value,
    isDown: false,
    isUp: true,
    press: undefined,
    release: undefined,
    downHandler: null,
    upHandler: null,
    remove: null,
  };
  
  key.downHandler = (event: KeyboardEvent) => {
    if (event.key === key.value) {
      if (key.isUp && key.press) {
        key.press();
      }
    }
    key.isDown = true;
    key.isUp = false;
    event.preventDefault();
  };
  key.upHandler = (event: KeyboardEvent) => {
    if (event.key === key.value) {
      if (key.isDown && key.release) {
        key.release();
      }
      key.isDown = false;
      key.isUp = true;
      event.preventDefault();
    }
  }

  window.addEventListener('keydown', key.downHandler, false);
  window.addEventListener('keyup', key.upHandler, false);

  key.remove = () => {
    window.removeEventListener('keydown', key.downHandler);
    window.removeEventListener('keyup', key.upHandler);
  }

  return key;
};


