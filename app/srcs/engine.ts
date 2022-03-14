import * as PIXI from 'pixi.js';
import { tCollision, tComponent, tSquareCollision, tCircleCollision } from './type'

const DEV = false;

export const components: tComponent[] = [];
export const collisions: tCollision[] = [];

export const option = {
  collide: true,
}

const initSprite = (sprite, attr, state) => {
  sprite.name = attr.name;
  sprite.position.set(state.position.x, state.position.y);
  sprite.width = state.size.w;
  sprite.height = state.size.h;
  sprite.pivot.set(state.pivot.x, state.pivot.y);
  sprite.rotation = state.rotation;
  state.scale? sprite.scale.set(state.scale.x, state.scale.y) : null;

  return sprite;
}

export const setComponents = (app, resource, objs: tComponent[]) => {
  const setup = (obj: tComponent) => {
    let sprite: PIXI.Sprite = null;
    const { attr, state } = obj;

    if (!attr.animate) {
      sprite = new PIXI.Sprite(resource[attr.src[0]].texture);
    } else {
      sprite = PIXI.AnimatedSprite.fromFrames(attr.src);
      sprite.animationSpeed = attr.animateInterval;
      sprite.play();
    }
    obj.sprite = initSprite(sprite, attr, state);
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
  };
  for (let i = 0; i < components.length; i++) {
    setMove(components[i]);
  }
}

export const setColliders = (app, collisions: tCollision[], renderer) => {
  if (!option.collide) return;

  for (let i = 0; i < collisions.length; i++) {
    const graphic = new PIXI.Graphics();
    graphic.lineStyle(2, 0x00FF00);
    
    if (collisions[i].type === 'circle') {
      graphic.drawCircle(0, 0, (collisions[i] as tCircleCollision).r);
    } else if (collisions[i].type === 'square') {
      graphic.drawRect(0, 0,
        (collisions[i] as tSquareCollision).size.w, (collisions[i] as tSquareCollision).size.h);
    }
    const texture = app.renderer.generateTexture(graphic);
    const collide = new PIXI.Sprite(texture);
    collide.position.set(collisions[i].position.x, collisions[i].position.y);
    app.stage.addChild(collide);
    collisions[i].sprite = collide;
  }
}

export const load = (loader, imgs, callback) => {
  loader.add(imgs).load(() => callback(loader))
}

const engine = (parent: HTMLElement) => {
  const app = new PIXI.Application({ resizeTo: window });
  const loader = PIXI.Loader.shared;
  const resource = PIXI.Loader.shared.resources;
  const renderer = PIXI.Renderer;

  parent.appendChild(app.view);

  return { app, loader, resource, renderer }
};

export default engine;
