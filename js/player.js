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
    this.playerInstance = undefined
    this.playerSpeed = 20
    this.image = new Image();
    this.image.src = playerImage;
    this.image.framesIndex = 0
    this.image.frames = 3
    this.image.width = 382
    this.image.height = 132
    this.width = playerWidth;
    this.height = playerHeight;
  
    
  }
  init() {
    this.playerInstance = new Image()
    this.playerInstance.src = `img/${this.imageName}`
    
  }

  draw(frames) {
    const dx = this.image.framesIndex * Math.floor(this.image.width / this.image.frames)
    const dy = 0
    const dwidth = Math.floor(this.image.width / this.image.frames)
    const dheight = this.image.height
    const sx= this.playerPos.x
    const sy= this.playerPos.y
    const swidth = this.playerSize.w
    const sheight = this.playerSize.h

    this.ctx.drawImage(this.image, dx, dy ,dwidth, dheight, sx, sy, swidth, sheight)
    this.animate(frames)

   

  }
  animate(frames) {
    if (frames % 5 == 0) {
      this.image.framesIndex++;
    }
    if (this.image.framesIndex > this.image.frames - 1) {
      this.image.framesIndex = 0;
    }
  }
  move(dir) {

      dir === 'top' ? this.playerPos.y -= this.playerSpeed : null; 
      dir === 'bottom' ? this.playerPos.y += this.playerSpeed  : null;
      dir === 'left' ? this.playerPos.x -= this.playerSpeed  : null;
      dir === 'right' ? this.playerPos.x += this.playerSpeed : null;

    }
  
}
