import * as PIXI from 'pixi.js';

export type tMove = {
  src?: string,
  velocity: { x: number, y: number },
  keybind?: (sprite: PIXI.Sprite) => void,
  event: (delta: number, sprite: PIXI.Sprite) => void
}
export type tComponent = {
  /* object's name */
  name: string,
  src: string,
  animate: boolean,

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
  /* default animation of objs, This work in ticker */
  move?: tMove
  /* event binder, binding Event */
  
};

export { Component } from './component';
export { Move, Keyboard } from './move';
