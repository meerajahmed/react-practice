/*
 * Write the Program which simulate the movement of Ball using regular function
 * */

class Ball {

  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }

  move(deltaX, deltaY, speed = 1000) {
    const _self = this;
    setInterval(function () {
      _self.posX += deltaX;
      _self.posY += deltaY;
      console.log(_self.posX, _self.posY);
    }, speed);
  }

}

const ball = new Ball(4, 8);
ball.move(1, 2);