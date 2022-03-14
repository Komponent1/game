import * as PIXI from 'pixi.js';
import { tMove } from '.';

export type tComponent = {
  /* object's name */
  sprite: PIXI.Sprite,
  attr: {
    name: string
    src: string[],
    animate: boolean,
    animateInterval?: number,
  },
  state: {
    /* positon */
    position: { x: number, y: number },
    /* size */
    size: { w: number, h: number, }
    /* scale */
    scale?: { x: number, y: number },
    /* rotation */
    rotation: number,
    /* pivot */
    pivot: { x: number, y: number }
  }

  /* default animation of objs, This work in ticker */
  move?: tMove
  /* event binder, binding Event */
  collision?: Object,

  setPositionX: Function,
  setPositionY: Function,
  setPosition: Function,
  setVelocityX: Function,
  setVelocityY: Function,
  setVelocity: Function,
}

export default tComponent;
