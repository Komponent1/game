import { tCircleCollision, tSquareCollision } from "../type";

const pointCircleCollision = (cir: tCircleCollision, x: number, y: number): boolean => {
  const deltaX = cir.position.x - x;
  const deltaY = cir.position.y - y;

  const len = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  
  return len <= cir.r;
};
const squareCircleCollision = (sq: tSquareCollision, cir: tCircleCollision): boolean => {
  if ((sq.position.x <= cir.position.x && cir.position.x <= sq.position.x + sq.size.w)
    || (sq.position.y <= cir.position.y && cir.position.y <= sq.position.y + sq.size.h)) {
    const left = sq.position.x - cir.r;
    const top = sq.position.y - cir.r;
    const right = sq.position.x + sq.size.w + cir.r;
    const bottom = sq.position.y + sq.size.h + cir.r;

    if ((left < cir.position.x && cir.position.x < right)
      && (top < cir.position.y && cir.position.y < bottom)) {
      return true;
    }
  } else {
    if (pointCircleCollision(cir, sq.position.x, sq.position.y)) return true;
    if (pointCircleCollision(cir, sq.position.x, sq.position.y + sq.size.h)) return true;
    if (pointCircleCollision(cir, sq.position.x + sq.size.w, sq.position.y)) return true;
    if (pointCircleCollision(cir, sq.position.x + sq.size.w, sq.position.y + sq.size.h)) return true;
  }

  return false;
};
const circlesCollision = (cir1: tCircleCollision, cir2: tCircleCollision): boolean => {
  const d = 
    Math.sqrt(
      Math.pow(cir2.position.x - cir2.position.y, 2)
      + Math.pow(cir2.position.y - cir2.position.y, 2)
    );
  return !(d > cir1.r + cir2.r);
};
const squaresCollision = (sq1: tSquareCollision, sq2: tSquareCollision): boolean => {
  /* https://m.blog.naver.com/winterwolfs/10165506488 */
  let vertical = false;
  let horizontal = false;

  if (sq1.position.x < sq2.position.x + sq2.size.w
      && sq1.position.x + sq1.size.w > sq2.position.x)
  { horizontal = true; }
  
  if (sq1.position.y < sq2.position.y + sq2.size.h
      && sq1.position.y + sq1.size.h > sq2.position.y)
  { vertical = true; }

  return vertical && horizontal;
};
const checkCollision = (obj1, obj2, tags): boolean => {
  let collide = false;
  if (obj1.name === obj2.name) return collide;
  if (!tags.includes(obj2.tag)) return collide;
  
  switch (obj1.type) {
    case 'square':
      if (obj2.type === 'square') {
        collide = squaresCollision(obj1, obj2);
      } else if (obj2.type === 'circle') {
        collide = squareCircleCollision(obj1, obj2);
      }
      break;
    case 'circle':
      if (obj2.type === 'square') {
        collide = squareCircleCollision(obj2, obj1);
      } else if (obj2.type === 'circle') {
        collide = circlesCollision(obj1, obj2);
      }
      break;
  }
  
  return collide;
}

export default checkCollision;
