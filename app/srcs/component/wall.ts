import { Component } from '../type';
import resource from '../../resource';
import { wallCollision } from '../collision';

const wall = Component();

wall.state = {
  ...wall.state,
  name: 'wall',
  src: [resource.ground],
  animate: false,
}
wall.initial = {
  ...wall.initial,
  position: { x: 250, y: 105 },
  size: { w : 20, h : 500 },
  
}
wall.collision = wallCollision(wall.initial)

export default wall;
