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
  keys: {
    top: 'ArrowUp',
    bottom:'ArrowDown',
    left: 'ArrowLeft',
    right: 'ArrowRight'
  },
  player: undefined,
  popino: undefined,
  enemy: [],
  wall:[],

  init(id) {
    this.canvasTag = document.getElementById(id);
    this.ctx = this.canvasTag.getContext('2d');
    this.setDimensions()
    this.createPlayer()
    this.createPopino()
    this.createChest()
    this.drawAll() 
    this.setEventListeners()
    this.generateEnemy()
    this.createWall()
    
    
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
    let trackSpeed = this.player.playerSpeed
    
    
    document.onkeydown = e => {
      switch (e.key) {
        case this.keys.top:
              
              trackPosY = this.player.playerPos.y  
          if (!this.touchesWalls({ ...this.player, playerPos:{x:this.player.playerPos.x , y: trackPosY - trackSpeed }})) {
            console.log("top")
            this.player.move('top')
                    
          } 
          break;
        case this.keys.left:
          trackPosX = this.player.playerPos.x    
          if (!this.touchesWalls({ ...this.player, playerPos:{x:trackPosX - trackSpeed , y: this.player.playerPos.y }})) {
            console.log("left")
            this.player.move('left')
            
          }
          break;
        case this.keys.right:
          trackPosX = this.player.playerPos.x       
          if (!this.touchesWalls({ ...this.player, playerPos:{x:trackPosX + trackSpeed , y: this.player.playerPos.y }})) {

            this.player.move('right')
                       
          }
          break;
        case this.keys.bottom:
          trackPosY = this.player.playerPos.y          
          if (!this.touchesWalls({ ...this.player, playerPos:{x:this.player.playerPos.x , y: trackPosY + trackSpeed }}))  {
            this.player.move('bottom')
                        
          }
          break;
              
      }
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
  createPopino() {

    this.popino = new Popino (this.ctx, 950, 20, 50, 50, "popino.png");
  },
  createChest() {

    this.chest = new Chest (this.ctx, 950, 500, 50, 50, "chest.png");
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
    this.popino.draw()
    this.chest.draw()
    this.enemy.forEach(elm => elm.draw())
    this.wall.forEach(elm => elm.draw())
    this.moveEnemyWall(this.enemy)
  
    }, 70)
  },
  
  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
},
  touchesWalls(player) {
  
     return this.wall.some(wall => this.isCollision(player, wall));
  },

  isCollision(player, wall) {
    return (
    
      player.playerPos.x + player.playerSize.w >= wall.wallPos.x &&
      player.playerPos.x < wall.wallPos.x + wall.wallSize.w &&
      player.playerPos.y + player.playerSize.h >= wall.wallPos.y &&
      player.playerPos.y < wall.wallPos.y + wall.wallSize.h
    );
  },
  
  moveEnemyWall(enemies) {
    enemies.some(enemy => enemy.moveEnemy(this.touchesWallsEnemy(enemy)));
  },

  touchesWallsEnemy(enemy) {
    return this.wall.some(wall => this.isCollisionEnemy(enemy, wall));
  },

  isCollisionEnemy(enemy, wall) {
    return (
    
      enemy.enemyPos.x +enemy.enemySize.w >= wall.wallPos.x &&
      enemy.enemyPos.x < wall.wallPos.x + wall.wallSize.w &&
      enemy.enemyPos.y + enemy.enemySize.h >= wall.wallPos.y &&
      enemy.enemyPos.y < wall.wallPos.y + wall.wallSize.h
    );
  }

} 