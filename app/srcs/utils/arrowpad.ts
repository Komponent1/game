import { Keyboard } from ".";

function arrowpad() {
  const right = Keyboard('ArrowRight');
  const left = Keyboard('ArrowLeft'); 

  right.press = () => {
    this.move.velocity.x += 1;
    this.sprite.scale.x = 1;
  }
}