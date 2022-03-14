import { Keyboard, setAnimateTexture } from ".";

function arrowpad(velocity: number) {

  return function () {
    const right = Keyboard('ArrowRight');
    const left = Keyboard('ArrowLeft'); 
    const space = Keyboard('ArrowUp');

    right.press = () => {
      if (left.isDown) this.move.velocity.x = 0;
      else {
        this.sprite.scale.x = 1;
        this.move.velocity.x = velocity;
      }
      setAnimateTexture(this.sprite, this.move.src);
    }
    right.release = () => {
      if (left.isDown) {
        this.sprite.scale.x = -1;
        this.move.velocity.x = -1;
      }
      else this.move.velocity.x = 0;

      setAnimateTexture(this.sprite, this.attr.src);
    };

    left.press = () => {
      if (right.isDown) this.move.velocity.x = 0;
      else {
        this.sprite.scale.x = -1;
        this.move.velocity.x = -velocity;
      }
    
      setAnimateTexture(this.sprite, this.move.src);
    };
    left.release = () => {
      if (right.isDown) {
        this.sprite.scale.x = 1;
        this.move.velocity.x = 1;
      }
      else this.move.velocity.x = 0;

      setAnimateTexture(this.sprite, this.attr.src);
    };

    space.press = () => {
      this.move.velocity.y = -4;
    }

  }
}

export default arrowpad;
