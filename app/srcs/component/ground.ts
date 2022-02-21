import { Component } from '../type';
import resource from '../../resource';
import { Squrecollision } from '../type/collision';
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
  scale: {x : 10, y : 1}
}
ground.collision = groundCollision(ground.initial)

export default ground;
