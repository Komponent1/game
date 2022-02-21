import * as PIXI from 'pixi.js';
import imgs from '../resource';
import { tComponent } from './type'

const engine = (parent: HTMLElement, objs: tComponent[]) => {
  const app = new PIXI.Application({ resizeTo: window });
  const loader = PIXI.Loader.shared;
  const resource = PIXI.Loader.shared.resources;

  const setup = (obj: tComponent) => {
    let sprite: PIXI.Sprite = null;
    const { state, initial, move } = obj;

    if (!state.animate) {
      sprite = PIXI.Sprite.from(resource[state.src[0]].texture);
    } else {
      sprite = PIXI.AnimatedSprite.fromFrames(state.src);
      sprite.animationSpeed = 0.1;
      sprite.play();
    }
    sprite.name = name;
    sprite.position.set(initial.position.x, initial.position.y);
    sprite.width = initial.size.w;
    sprite.height = initial.size.h;
    sprite.pivot.set(initial.pivot.x, initial.pivot.y);
    sprite.rotation = initial.rotation;
    initial.scale? sprite.scale.set(initial.scale.x, initial.scale.y) : null;
    obj.sprite = sprite;

    app.stage.addChild(sprite);
    
    const setMove = () => {
      move.keybind ? move.keybind(sprite) : null;
      app.ticker.add(delta => move.update(delta));
      app.ticker.add(delta => move.fixedUpdate(delta));
    };
    if (move) {
      setMove();
    }      
  }

  const setObjs = () => {
    for (let i = 0; i < objs.length; i++) {
      setup(objs[i])
    }
  }

  loader
    .add(Object.entries(imgs).map(([key, value]) => value))
    .load(setObjs);

  parent.appendChild(app.view);

  return { app, loader, resource }
};

export default engine;
