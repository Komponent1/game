import { Component } from '../origin';
import resource from '../../resource';
import { wallCollision } from '../collision';

const wall = Component();

wall.attr = {
  ...wall.attr,
  name: 'wall',
  src: [resource.ground],
  animate: false,
}
wall.state = {
  ...wall.state,
  position: { x: 250, y: 105 },
  size: { w : 20, h : 500 },
  
}
wall.collision = wallCollision(wall.state)

export default wall;
