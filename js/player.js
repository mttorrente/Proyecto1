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
    this.playerSpeed = 20
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

      dir === 'top' ? this.playerPos.y -= this.playerSpeed : null; 
      dir === 'bottom' ? this.playerPos.y += this.playerSpeed  : null;
      dir === 'left' ? this.playerPos.x -= this.playerSpeed  : null;
      dir === 'right' ? this.playerPos.x += this.playerSpeed : null;

    }
  
}