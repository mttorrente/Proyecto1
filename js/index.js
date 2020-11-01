const Game = {
    name: 'Drawing app',
    description: 'Canvas app for basic shapes drawing',
    version: '1.0.0',
    license: undefined,
    author: 'Isabel Pérez / Teresa Torrente',
    canvasTag: undefined,
    ctx: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    frames: 0,
    player: undefined,
    keys: {
      top: 'ArrowUp',
      bottom:'ArrowDown',
      left: 'ArrowLeft',
      right: 'ArrowRight'
    },
    enemy: [],
    wall:[],

    init(id) {
      this.canvasTag = document.getElementById(id);
      this.ctx = this.canvasTag.getContext('2d');
      this.setDimensions()
      this.createPlayer()
      this.drawAll() 
      this.setEventListeners()
      this.generateEnemy()
      this.createWall()
      this.isCollision()
      
    },

    setDimensions() {
      this.canvasSize.w = 1050
      this.canvasSize.h = 700
      this.canvasTag.setAttribute('width', this.canvasSize.w)
      this.canvasTag.setAttribute('height', this.canvasSize.h)
    },
    
    setEventListeners() { 
      document.onkeydown = e => {
        console.log(this.isCollision()) 
       e.key === this.keys.top ? this.player.move('top'): null 
       e.key === this.keys.bottom ? this.player.move('bottom'): null
       e.key === this.keys.left ? this.player.move('left') :null
       e.key === this.keys.right && !this.isCollision() ? this.player.move('right') : null
      
      }

    },
     
    createWall() {
      const wall1 = new Wall(this.ctx, 0, 0, 70, 70, 'bricks.png')
      const wall2 = new Wall(this.ctx, 200, 300, 70, 70, 'bricks.png')
      const wall3 = new Wall(this.ctx, 700, 500, 70, 70, 'bricks.png')

      this.wall.push(wall1, wall2, wall3)
      
   },

    createPlayer() {

      this.player = new Player (this.ctx, 210, 500, 70, 70, "player.png");
    },
    
    generateEnemy() {
      const enemy1 = new Enemy(this.ctx, this.canvasSize, 0, 0, 70, 70, 4, 'enemy.png')
      const enemy2 = new Enemy(this.ctx, this.canvasSize, 0, 300, 70, 70, 7, 'enemy.png')
      const enemy3 = new Enemy(this.ctx, this.canvasSize, 0, 500, 70, 70, 3, 'enemy.png')

      this.enemy.push(enemy1, enemy2, enemy3)
    },
    
    drawAll() {
      setInterval(() => {
      this.frames++
      this.clearScreen()
      this.player.draw()
      this.enemy.forEach(elm => elm.draw())
      this.wall.forEach(elm => elm.draw())
    
      }, 70)
    },
    
    clearScreen() {
      this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    isCollision() {
      return this.wall.some(wall => {
        console.log("MURO: " + wall.wallPos.x)
        console.log("PLAYER PSUMA: " + (this.player.playerPos.x + this.player.playerSize.w))
        console.log("PLAYER Y: " + this.player.playerPos.y)
        console.log("MURO SUMA: " +  (wall.wallPos.x + wall.wallSize.w))
        return (
        
          this.player.playerPos.x + this.player.playerSize.w >= wall.wallPos.x &&
          this.player.playerPos.x < wall.wallPos.x + wall.wallSize.w
        );   
      });
    }
  
} 