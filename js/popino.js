class Popino {
    constructor(ctx, popinoPosX, popinoPosY, popinoWidth, popinoHeight, popinoImage) {
      this.ctx = ctx
      this.popinoPos = {
        x: popinoPosX,
        y: popinoPosY
      },
      this.popinoSize = {
        w: popinoWidth,
        h: popinoHeight
      },
      this.imageName = popinoImage
      this.popinoInstance = undefined
      this.init()
      
    }
    init() {
      this.popinoInstance = new Image()
      this.popinoInstance.src = `img/${this.imageName}`
      
    }
  
    draw() {
      this.ctx.drawImage(this.popinoInstance, this.popinoPos.x, this.popinoPos.y, this.popinoSize.w, this.popinoSize.h)
    }
    
  }