import * as PIXI from 'pixi.js';
import { tCollision, tComponent } from './type'

export const components: tComponent[] = [];
export const collisions: tCollision[] = [];

const initSprite = (sprite, state, initial) => {
  sprite.name = state.name;
  sprite.position.set(initial.position.x, initial.position.y);
  sprite.width = initial.size.w;
  sprite.height = initial.size.h;
  sprite.pivot.set(initial.pivot.x, initial.pivot.y);
  sprite.rotation = initial.rotation;
  initial.scale? sprite.scale.set(initial.scale.x, initial.scale.y) : null;

  return sprite;
}

export const setComponents = (app, resource, objs: tComponent[]) => {
  const setup = (obj: tComponent) => {
    let sprite: PIXI.Sprite = null;
    const { state, initial } = obj;

    if (!state.animate) {
      sprite = new PIXI.Sprite(resource[state.src[0]].texture);
    } else {
      sprite = PIXI.AnimatedSprite.fromFrames(state.src);
      sprite.animationSpeed = state.animateInterval;
      sprite.play();
    }
    obj.sprite = initSprite(sprite, state, initial);
    components.push(obj);

    obj.collision? collisions.push(obj.collision) : null;
    app.stage.addChild(obj.sprite);
  }

  for (let i = 0; i < objs.length; i++) {
    setup(objs[i])
  }
}

export const setPhysics = (app, components: tComponent[]) => {
  const setMove = (comp) => {
    const { move } = comp;
    if (!move) return;

    move.keybind ? move.keybind(comp.sprite) : null;
    app.ticker.add(delta => move.update(delta));
    app.ticker.add(delta => move.fixedUpdate(delta));
  };
  for (let i = 0; i < components.length; i++) {
    setMove(components[i]);
  }
}

export const load = (loader, imgs, callback) => {
  loader.add(imgs).load(() => callback(loader))
}

const engine = (parent: HTMLElement) => {
  const app = new PIXI.Application({ resizeTo: window });
  const loader = PIXI.Loader.shared;
  const resource = PIXI.Loader.shared.resources;

  parent.appendChild(app.view);

  return { app, loader, resource }
};

export default engine;
