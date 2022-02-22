import engine, { components, setComponents, load, setPhysics, setColliders, collisions } from './engine';
import imgs from '../resource';
import comps from './component';

import '../public/style.css';

const { app, loader, resource, renderer } = engine(document.getElementById('root'));
load(loader, Object.entries(imgs).map(([key, value]) => value), () => {
  setComponents(app, resource, comps);
  setPhysics(app, components);
  setColliders(app, collisions, renderer);
});


/*
const setMove = () => {
  move.keybind ? move.keybind(sprite) : null;
  app.ticker.add(delta => move.update(delta));
  app.ticker.add(delta => move.fixedUpdate(delta));
};
if (move) {
  setMove();
}
*/