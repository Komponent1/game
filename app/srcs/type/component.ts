import { tComponent } from './';
import { collisions } from '../engine';
import { checkCollision } from '../utils';

export const Component = (): tComponent => {
  const comp = {
    state: {
      name: 'object',
      src: ['block'],
      animate: false,
      animateInterval: 0,
    },
    initial: {
      position: { x: 0, y: 0 },
      size: { w: 100, h: 100 },
      rotation: 0,
      pivot: { x: 50, y: 50 },
    },
    sprite: null,
    
    setPosition: function(x: number, y: number) {
      if (!this.sprite) throw Error('no sprite loaded');

      this.sprite.position.x = x;
      this.sprite.position.y = y;
  
      if (this.collision) {
        this.collision.position.x = x + this.sprite.pivot.x;
        this.collision.position.y = y + this.sprite.pivot.y;
      }
    },
  }
  comp.setPosition = comp.setPosition.bind(comp);

  return comp;
}
