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
    
    setPositionX: function(x: number) {
      if (!this.sprite) throw Error('no sprite loaded');

      if (this.collision) {
        const _x = this.collision.x;
        this.collision.position.x = x;

        if (collisions.some(col => checkCollision(this.collision, col, 'ground'))) {
          this.collision.position.x = _x;
          this.move.velocity.x = 0;
          return;
        }
        if (this.collision.sprite) this.collision.sprite.x = x;
      }

      this.sprite.position.x = x;
    },
    setPositionY: function(y: number) {
      if (!this.sprite) throw Error('no sprite loaded');

      if (this.collision) {
        const _y = this.collision.y;
        this.collision.position.y = y;

        if (collisions.some(col => checkCollision(this.collision, col, 'ground'))) {
          this.collision.position.y = _y;
          this.move.velocity.y = 0;
          return;
        }
      }
      if (this.collision.sprite) this.collision.sprite.y = y;

      this.sprite.position.y = y;
    },
    setPosition: function(x: number, y: number) {
      if (!this.sprite) throw Error('no sprite loaded');
      this.setPositionX(x);
      this.setPositionY(y);
    },
  }
  comp.setPosition = comp.setPosition.bind(comp);
  comp.setPositionX = comp.setPositionX.bind(comp);
  comp.setPositionY = comp.setPositionY.bind(comp);

  return comp;
}
