import * as PIXI from 'pixi.js';

export type tMove = {
  src?: string[],
  velocity: { x: number, y: number },
  acceleration: { x: number, y: number },
  keybind?: (sprite: PIXI.Sprite) => void,
  update: (delta: number) => void,
  fixedUpdate: (delta: number) => void,
}
export type tComponent = {
  /* object's name */
  state: {
    name: string
    src: string[],
    animate: boolean,
    animateInterval: number,
  },
  initial: {
    /* positon */
    position: {
      x: number, y: number
    },
    /* size */
    size: {
      w: number, h: number,
    }
    /* scale */
    scale?: {
      x: number, y: number
    },
    /* rotation */
    rotation: number,
    /* pivot */
    pivot: {
      x: number, y: number
    }
  }
  sprite: PIXI.Sprite,
  
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
export type tCollision = {
  tag: string,
  name: string,
  state: boolean,
  type: string,
  position: { x: number, y: number },
  sprite: null
}
export type tCircleCollision = tCollision & {
  r: number
};
export type tSquareCollision = tCollision & {
  size: { w: number, h: number }
}

export { Component } from './component';
export { Move } from './move';
