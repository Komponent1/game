import * as PIXI from 'pixi.js';
import imgs from '../resource';
import { tComponent } from './type'

const engine = (parent: HTMLElement) => {
  const app = new PIXI.Application({ resizeTo: window });
  const loader = PIXI.Loader.shared;
  const resource = PIXI.Loader.shared.resources;

  const setObj = ({ name, src, animate, position, size, scale, rotation, pivot, move }: tComponent)  => {
    const setup = () => {
      let sprite: PIXI.Sprite = null;

      if (!animate) {
        sprite = PIXI.Sprite.from(imgs[src].texture);
      } else {
        sprite = PIXI.AnimatedSprite.fromFrames(imgs[src]);
        sprite.animationSpeed = 0.1;
        sprite.play();
      }

      sprite.position.set(position.x, position.y);
      sprite.width = size.w;
      sprite.height = size.h;
      sprite.pivot.set(pivot.x, pivot.y);
      sprite.rotation = rotation;
      scale? sprite.scale.set(scale.x, scale.y) : null;

      app.stage.addChild(sprite);

      const gameLoop = (delta, sprite) => {
        sprite.x += sprite.velocity.x;
        sprite.y += sprite.velocity.y;
        move?.event(delta, sprite);
      }

      const setMove = () => {
        sprite.velocity = move.velocity;
        move.keybind ? move.keybind(sprite) : null;
        app.ticker.add(delta => gameLoop(delta, sprite));
      };

      if (move) {
        move.src? loader.add(imgs[move.src]).load(setMove) : setMove();
      }      
    }

    

    loader
      .add(imgs[src])
      .load(setup);
  };

  parent.appendChild(app.view);

  return { app, loader, resource, setObj }
};

export default engine;
