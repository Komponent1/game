import engine, { components, setComponents, load, setPhysics } from './engine';
import imgs from '../resource';
import comps from './component';

import '../public/style.css';

const { app, loader, resource } = engine(document.getElementById('root'));
load(loader, Object.entries(imgs).map(([key, value]) => value), () => {
  setComponents(app, resource, comps);
  setPhysics(app, components);
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