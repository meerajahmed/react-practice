/*
 * Refactor the Program to use Arrow Function to simulate the movement of Ball
 * */

class Ball {

  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }

  move(deltaX, deltaY, speed = 1000) {
    setInterval(() => {
      this.posX += deltaX;
      this.posY += deltaY;
      console.log(this.posX, this.posY);
    }, speed);
  }

}

const ball = new Ball(4, 8);
ball.move(1, 2);