import * as PIXI from 'pixi.js';
import { tComponent } from './';

export const Component = (): tComponent => {
  const comp = {
    initial: {
      name: 'object',
      src: ['block'],
      animate: false,
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
        this.collision.position.x = x;
        this.collision.position.y = y;
      }
    }
  }
  comp.setPosition = comp.setPosition.bind(comp);

  return comp;
}
