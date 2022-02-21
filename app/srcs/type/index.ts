import * as PIXI from 'pixi.js';

export type tMove = {
  src?: string[],
  velocity: { x: number, y: number },
  keybind?: (sprite: PIXI.Sprite) => void,
  update: (delta: number) => void,
  fixedUpdate: (delta: number) => void
}
export type tComponent = {
  /* object's name */
  state: {
    name: string
    src: string[],
    animate: boolean,
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

  setPosition: Function
};

export { Component } from './component';
export { Move } from './move';
