import { Component } from '../origin';
import resource from '../../resource';
import { groundCollision } from '../collision';

const ground = Component();

ground.attr = {
  ...ground.attr,
  name: 'ground',
  src: [resource.ground],
  animate: false,
}
ground.state = {
  ...ground.state,
  position: { x: 0, y: 325 },
  size: {w : 500, h : 50}
}
ground.collision = groundCollision(ground.state)

export default ground;
