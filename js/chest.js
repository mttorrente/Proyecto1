class Chest {
    constructor(ctx, chestPosX, chestPosY, chestWidth, chestHeight, chestImage) {
      this.ctx = ctx
      this.chestPos = {
        x: chestPosX,
        y: chestPosY
      },
      this.chestSize = {
        w: chestWidth,
        h: chestHeight
      },
      this.imageName = chestImage
      this.chestInstance = undefined
      this.init()
      
    }
    init() {
      this.chestInstance = new Image()
      this.chestInstance.src = `img/${this.imageName}`
      
    }
  
    draw() {
      this.ctx.drawImage(this.chestInstance, this.chestPos.x, this.chestPos.y, this.chestSize.w, this.chestSize.h)
    }
    
  }