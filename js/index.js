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
     // this.isCollision()
      
    },

    setDimensions() {
      this.canvasSize.w = 1050
      this.canvasSize.h = 700
      this.canvasTag.setAttribute('width', this.canvasSize.w)
      this.canvasTag.setAttribute('height', this.canvasSize.h)
    },
    
  setEventListeners() {
     let trackPosX = this.player.playerPos.x
    let trackPosY = this.player.playerPos.y
    console.log(this.player.playerPos.x)
    document.onkeydown = e => {
      //console.log(this.isCollision())
      switch (e.key) {
        case this.keys.top:
                  
          if (!this.touchesWalls({ ...this.player, playerPos:{x:trackPosX, y: this.player.playerPos.y }})) {
            this.player.move('top')
                        
          }
          break;
        case this.keys.left:
                    
          if (!this.touchesWalls({ ...this.player, playerPos:{x:this.player.playerPos.x, y: trackPosY }})) {
            this.player.move('left')
                        
          }
          break;
        case this.keys.right:
                    
          if (!this.touchesWalls({ ...this.player, playerPos:{x:this.player.playerPos.x, y: trackPosY }})) {
            this.player.move('right')
                       
          }
          break;
        case this.keys.bottom:
                   
          if (!this.touchesWalls({ ...this.player, playerPos:{x:trackPosX, y: this.player.playerPos.y }})) {
            this.player.move('bottom')
                        
          }
          break;
              
      }
    }
  },
    //    e.key === this.keys.top && !this.touchesWalls() ? this.player.move('top'): null 
    //    e.key === this.keys.bottom && !this.touchesWalls() ? this.player.move('bottom'): null
    //    e.key === this.keys.left && !this.touchesWalls() ? this.player.move('left') :null
    //    e.key === this.keys.right && !this.touchesWalls() ? this.player.move('right') : null
      
    //  }

  
     
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
  touchesWalls(player) {
       console.log("touche-player", player)
       return this.wall.some(wall => this.isCollision(player, wall));
    },

    isCollision(player, wall) {
    console.log("isCollision- Player", player)
      return (
      
        player.playerPos.x + player.playerSize.w >= wall.wallPos.x &&
        player.playerPos.x < wall.wallPos.x + wall.wallSize.w &&
        player.playerPos.y + player.playerSize.h >= wall.wallPos.y &&
        player.playerPos.y < wall.wallPos.y + wall.wallSize.h
      );
    }
  
  
  
} 