import * as PIXI from 'pixi.js';
import imgs from '../resource';
import { tComponent } from './component/component'

const engine = (parent: HTMLElement) => {
  const app = new PIXI.Application({ resizeTo: window });
  const loader = PIXI.Loader.shared;
  const resource = PIXI.Loader.shared.resources;

  const setObj = ({ name, src, position, size, scale, rotation, pivot, move }: tComponent)  => {
    const setup = () => {
      const sprite = PIXI.Sprite.from(resource[name].texture);
      sprite.position.set(position.x, position.y);
      sprite.width = size.w;
      sprite.height = size.h;
      sprite.pivot.set(pivot.x, pivot.y);
      sprite.rotation = rotation;
      scale? sprite.scale.set(scale.x, scale.y) : null;

      
      app.stage.addChild(sprite);

      if (move) {
        sprite.vx = move.velocity.x;
        sprite.vy = move.velocity.y;
        move.keybind ? move.keybind(sprite) : null;
        app.ticker.add(delta => gameLoop(delta, sprite));
      }      
    }

    const gameLoop = (delta, sprite) => {
      sprite.x += sprite.vx;
      sprite.y += sprite.vy;
      move?.event(delta, sprite);
    } 

    loader
      .add(name, imgs[src])
      .load(setup);
  };

  parent.appendChild(app.view);

  return { app, loader, resource, setObj }
};

export default engine;


