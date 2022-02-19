import * as PIXI from 'pixi.js';
import imgs from '../../resource';

const setAnimateTexture = (sprite: PIXI.Sprite, src: string): void => {
  const textures = []

  for (let i = 0; i < imgs[src].length; i++) {
    textures.push(PIXI.Texture.from(imgs[src][i]));
  }

  sprite.textures = textures;
  sprite.play();
}

export default setAnimateTexture;
