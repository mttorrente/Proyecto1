class Player {
  constructor(ctx, playerPosX, playerPosY, playerWidth, playerHeight, playerImage) {
    this.ctx = ctx
    this.playerPos = {
      x: playerPosX,
      y: playerPosY
    },
    this.playerSize = {
      w: playerWidth,
      h: playerHeight
    },
    this.imageName = playerImage
    this.playerInstance = undefined
    this.init()
    
  }
  init() {
    this.playerInstance = new Image()
    this.playerInstance.src = `img/${this.imageName}`
    
  }

  draw() {
    this.ctx.drawImage(this.playerInstance, this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h)
  }
  
  // move(dir) {
  //   if (dir === 'top' && this.isCollision() === false) {
  //     this.playerPos.y -= 20;
  //   }
  //   if (dir === 'bottom' && this.isCollision() === false) {
  //     this.playerPos.y += 20;
  //   }
  //   if (dir === 'left' && this.isCollision() === false) {
  //     this.playerPos.x -= 20;
  //   }
  //   if (dir === 'right' && this.isCollision() === false) {
  //     this.playerPos.x += 20;
  //   }
  // }
  

  move(dir) {
    
    dir === 'top' ? this.playerPos.y -= 20 : null; 
    dir === 'bottom' ? this.playerPos.y += 20 : null;
    dir === 'left' ? this.playerPos.x -= 20 : null;
    dir === 'right' ? this.playerPos.x += 20 : null;
  }
}
