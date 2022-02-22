import { Component } from '../type';
import resource from '../../resource';
import { groundCollision } from '../collision';

const ground = Component();

ground.state = {
  ...ground.state,
  name: 'ground',
  src: [resource.ground],
  animate: false,
}
ground.initial = {
  ...ground.initial,
  position: { x: 0, y: 325 },
  size: {w : 500, h : 50}
}
ground.collision = groundCollision(ground.initial)

export default ground;
