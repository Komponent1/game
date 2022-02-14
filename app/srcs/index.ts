import * as PIXI from 'pixi.js';
import rsc from '../resource';

const app = new PIXI.Application({ width: 640, height: 360 });
document.body.appendChild(app.view);

const sprite = PIXI.Sprite.from(rsc.cha);
sprite.width = 100;
sprite.height = 100;
app.stage.addChild(sprite);
