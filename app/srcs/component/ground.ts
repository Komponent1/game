import { Component } from '../type';
import resource from '../../resource';

const ground = Component();

ground.state = {
  name: 'ground',
  src: [resource.ground],
  animate: false,
}
ground.initial = {
  ...ground.initial,
  position: { x: 0, y: 325 },
  scale: {x : 10, y : 1}
}

export default ground;
