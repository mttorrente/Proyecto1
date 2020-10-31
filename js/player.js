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

  move(dir) {
    console.log("move");
    dir === 'top' ? this.playerPos.y -= 20 : null; 
    dir === 'bottom' ? this.playerPos.y += 20 : null;
    dir === 'left' ? this.playerPos.x -= 20 : null;
    dir === 'right' ? this.playerPos.x += 20 : null;
  }
}
