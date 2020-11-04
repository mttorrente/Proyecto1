class Wall {
    constructor(ctx, wallPosX, wallPosY,  wallWidth, wallHeight, wallImage) {
        this.ctx = ctx;
        this.wallPos = {
          x: wallPosX,
          y: wallPosY
        },
        this.wallSize = {
            w: wallWidth,
            h: wallHeight
        },
          this.imageName = wallImage
          this.imgeInstance = undefined
          this.init()
          
    }
    
    init() {
          this.imageInstance = new Image()
          this.imageInstance.src = `img/${this.imageName}`
    }
      
    draw() {
        this.ctx.drawImage(this.imageInstance, this.wallPos.x, this.wallPos.y, this.wallSize.w, this.wallSize.h) 
    }
}
