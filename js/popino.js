class Popino {
    constructor(ctx, popinoPosX, popinoPosY, popinoWidth, popinoHeight, popinoImage, speed, direction) {
      this.ctx = ctx
      this.popinoPos = {
        x: popinoPosX,
        y: popinoPosY
      },
      this.popinoSize = {
        w: popinoWidth,
        h: popinoHeight
      },
      this.popinoInstance = undefined
      this.popinoSpeed = 20
      this.image = new Image();
      this.image.src = popinoImage;
      this.image.framesIndex = 0
      this.image.frames = 3
      this.image.width = 136
      this.image.height = 42
      this.width = popinoWidth;
      this.height = popinoHeight;
      
      this.speed = speed
      this.direction = direction
      
    }
    init() {
      this.popinoInstance = new Image()
      this.popinoInstance.src = `img/${this.imageName}`
      
    }
  
    draw(frames) {
        const dx = this.image.framesIndex * Math.floor(this.image.width / this.image.frames)
        const dy = 0
        const dwidth = Math.floor(this.image.width / this.image.frames)
        const dheight = this.image.height
        const sx= this.popinoPos.x
        const sy= this.popinoPos.y
        const swidth = this.popinoSize.w
        const sheight = this.popinoSize.h
    
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
  move(x, y) {
    setTimeout(() => {
      if (this.popinoPos.y < y) {
        this.popinoPos.y += this.speed;
      }
      if (this.popinoPos.y >= y && this.popinoPos.x < x) {
        this.popinoPos.x += this.speed;
      }
    }, 20);
    if (this.popinoPos.x > (x-10) && this.popinoPos.y > (y-10)) {
        return true
        
      //alert("Has rescatado a Popino!");
    }
  }
    
  }