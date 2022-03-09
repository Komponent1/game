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
    setVelocityX: function(max = 2) {
      if (!this.sprite) throw Error('no sprite loaded');
      
      const x = this.move.velocity.x + this.move.acceleration.x;
      this.move.velocity.x = Math.abs(x) > Math.abs(max) ? max : x;
    },
    setVelocityY: function(max = 10) {
      if (!this.sprite) throw Error('no sprite loaded');

      const y = this.move.velocity.y + this.move.acceleration.y;
      this.move.velocity.y = Math.abs(y) > Math.abs(max) ? max * Math.abs(y)/y : y;
      this.move.acceleration.y = 1;
    },
    setVelocity: function() {
      this.setVelocityX();
      this.setVelocityY();
    },
    setPositionX: function() {
      if (!this.sprite) throw Error('no sprite loaded');

      const x = this.sprite.position.x + this.move.velocity.x;
      if (this.collision) {
        const _x = this.collision.x;
        this.collision.position.x = x;

        if (collisions.some(col => checkCollision(this.collision, col, 'ground'))) {
          this.collision.position.x = _x;
          this.velocity.x = 0;
          return;
        }
        if (this.collision.sprite) this.collision.sprite.x = x;
      }

      this.sprite.position.x = x;
    },
    setPositionY: function() {
      if (!this.sprite) throw Error('no sprite loaded');

      const y = this.sprite.position.y + this.move.velocity.y; 
      if (this.collision) {
        const _y = this.collision.y;
        this.collision.position.y = y;

        if (collisions.some(col => checkCollision(this.collision, col, 'ground'))) {
          this.collision.position.y = _y;
          return;
        }
      }
      if (this.collision.sprite) this.collision.sprite.y = y;

      this.sprite.position.y = y;
    },
    setPosition: function() {
      if (!this.sprite) throw Error('no sprite loaded');

      this.setPositionX();
      this.setPositionY();
    },
  }
  comp.setPosition = comp.setPosition.bind(comp);
  comp.setPositionX = comp.setPositionX.bind(comp);
  comp.setPositionY = comp.setPositionY.bind(comp);
  comp.setVelocityX = comp.setVelocityX.bind(comp);
  comp.setVelocityX = comp.setVelocityX.bind(comp);
  

  return comp;
}
