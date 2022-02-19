import { tMove } from "../move";

export type tComponent = {
  /* object's name */
  name: string,
  src: string,
  
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
  animation?: Function,
  move?: tMove
  /* event binder, binding Event */
  
};
export default (): tComponent => ({
  name: 'object',
  src: 'square',
  position: { x: 0, y: 0 },
  size: { w: 100, h: 100 },
  rotation: 0,
  pivot: { x: 50, y: 50 },
});