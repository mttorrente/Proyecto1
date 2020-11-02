class Enemy {
  constructor(ctx, canvasSize, enemyPosX, enemyPosY, enemyWidth, enemyHeight, speed, enemyImage) {
    this.ctx = ctx
      
    this.canvasSize = {
      w: canvasSize.w,
      h: canvasSize.h
    },
    this.enemyPos = {
      x: enemyPosX,
      y: enemyPosY
    },
    this.enemySize = {
      w: enemyWidth,
      h: enemyHeight
    },
    this.imageName = enemyImage
    this.imgeInstance = undefined
    this.speed = speed
    this.init()
    
  }
  init() {
    this.imageInstance = new Image()
    this.imageInstance.src = `img/${this.imageName}`
  }

  draw() {
    this.moveEnemy()
    this.ctx.drawImage(this.imageInstance, this.enemyPos.x, this.enemyPos.y, this.enemySize.w, this.enemySize.h)
  }

  moveEnemy(choca) {

    if ((this.enemyPos.x >= this.canvasSize.w - this.enemySize.w || this.enemyPos.x < 0) || (choca)) {
        this.changeDirection()
    }

      this.enemyPos.x += this.speed
      
    }
  changeDirection() {
    this.speed *= -1
        
  }
    
    
}
