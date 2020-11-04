class Door {
    constructor(ctx, doorPosX, doorPosY, doorWidth, doorHeight, doorImage) {
      this.ctx = ctx
      this.doorPos = {
        x: doorPosX,
        y: doorPosY
      },
      this.doorSize = {
        w: doorWidth,
        h: doorHeight
      },
      this.imageName = doorImage
      this.doorInstance = undefined
      this.init()
      
    }
    init() {
      this.doorInstance = new Image()
      this.doorInstance.src = `img/${this.imageName}`
      
    }
  
    draw() {
      this.ctx.drawImage(this.doorInstance, this.doorPos.x, this.doorPos.y, this.doorSize.w, this.doorSize.h)
    }
    
  }