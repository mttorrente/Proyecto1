class Enemy {
  constructor(ctx, canvasSize, enemyPosX, enemyPosY, enemyWidth, enemyHeight, speed, direction, enemyImage) {
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
    this.direction = direction
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

  moveEnemy(crash) {

    if ((crash)) {
        this.changeDirection()
    }
    if (this.direction === 'x'){
      this.enemyPos.x += this.speed
    }
    else {
      this.enemyPos.y += this.speed
    }
    }
    
  changeDirection() {
    this.speed *= -1
        
  }
    
    
}