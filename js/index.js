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
    bottom: 'ArrowDown',
    left: 'ArrowLeft',
    right: 'ArrowRight'
  },
  player: undefined,
  popino: undefined,
  chest: undefined,
  door: undefined,
  enemy: [],
  randomEnemy: [],
  wall: [],
  key: false,
  lock: false,

  init(id) {
    
    this.canvasTag = document.getElementById(id);
    this.ctx = this.canvasTag.getContext('2d');
    this.setDimensions()  
    this.start()  
  },
  start(){
    this.reset()
    this.createPlayer()
    this.createPopino()
    this.createChest()
    this.createWall() 
    this.createDoor() 
    this.drawAll()
    this.setEventListeners()
    this.generateEnemy()  
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
          if (!this.touchesWalls ({ ...this.player, playerPos: { x: this.player.playerPos.x, y: trackPosY - trackSpeed } })) {
            
            !this.lock ? this.player.move('top'): null
          
          }
      
          break;
        case this.keys.left:
          trackPosX = this.player.playerPos.x
          if (!this.touchesWalls({ ...this.player, playerPos: { x: trackPosX - trackSpeed, y: this.player.playerPos.y } })) {
            
            this.player.move('left')
            
          }
          break;
        case this.keys.right:
          trackPosX = this.player.playerPos.x
          if (!this.touchesWalls({ ...this.player, playerPos: { x: trackPosX + trackSpeed, y: this.player.playerPos.y } })) {

            this.player.move('right')
                       
          }
          break;
        case this.keys.bottom:
          trackPosY = this.player.playerPos.y
          if (!this.touchesWalls({ ...this.player, playerPos: { x: this.player.playerPos.x, y: trackPosY + trackSpeed } })) {
            this.player.move('bottom')
                        
          }
          break;
              
      }
    }
  },

  createWall() {
    const wall1 = new Wall(this.ctx, 0, 0, 1050, 70, 'bricks1.png')
    const wall2 = new Wall(this.ctx, 0, 0, 10, 700, 'bricks1.png')
    const wall3 = new Wall(this.ctx, 1040, 0, 10, 700, 'bricks1.png')
    const wall4 = new Wall(this.ctx, 0, 650, 440, 70, 'bricks1.png')
    const wall5 = new Wall(this.ctx, 610, 650, 440, 70, 'bricks1.png')
    const wall6 = new Wall(this.ctx, 870, 420, 80, 100, 'bricks1.png')
    const wall7 = new Wall(this.ctx, 870, 140, 80, 100, 'bricks1.png')
    const wall8 = new Wall(this.ctx, 110, 150, 80, 250, 'bricks1.png')
    const wall9 = new Wall(this.ctx, 420, 150, 80, 250, 'bricks1.png')
    const wall10 = new Wall(this.ctx, 110, 150, 400, 40, 'bricks1.png')
    const wall11 = new Wall(this.ctx, 110, 310, 150, 80, 'bricks1.png')
    const wall12 = new Wall(this.ctx, 370, 310, 80, 80, 'bricks1.png')
    const wall13 = new Wall(this.ctx, 20, 150, 70, 10, 'bricks1.png')
    const wall14 = new Wall(this.ctx, 0, 500, 240, 10, 'bricks1.png')
    const wall15 = new Wall(this.ctx, 360, 500, 400, 10, 'bricks1.png')
    const wall16 = new Wall(this.ctx, 720, 320, 50, 180, 'bricks1.png')
    const wall17 = new Wall(this.ctx, 720, 50, 50, 180, 'bricks1.png')

    this.wall.push(wall1, wall2, wall3, wall4,wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12,wall13,wall14,wall15, wall16,wall17)
    
  },

  createPlayer() {

    this.player = new Player(this.ctx, 500, 590, 70, 70, "player.png");
  },
  createPopino() {

    this.popino = new Popino(this.ctx, 290, 250, 50, 50, "popino.png", 3,'x');
  },
  createChest() {

    this.chest = new Chest(this.ctx, 960, 72, 50, 50, "chest.png");
  },
  createDoor() {

    this.door = new Door(this.ctx, 270, 340, 90, 80, "doors.png");
  },
  
    generateEnemy() {
    const enemy1 = new Enemy(this.ctx, this.canvasSize, 15, 72, 70, 70, 4, 'x', 'enemy.png')
    const enemy2 = new Enemy(this.ctx, this.canvasSize, 600, 240, 70, 70, 7, 'x','enemy.png')
    const enemy3 = new Enemy(this.ctx, this.canvasSize, 15, 400, 70, 70, 7, 'x','enemy.png')
    const enemy4 = new Enemy(this.ctx, this.canvasSize, 15, 510, 70, 70, 3, 'x','enemy.png')
    const enemy5 = new Enemy(this.ctx, this.canvasSize, 790, 72, 70, 70, 3, 'y','enemy.png')
    const enemy6 = new Enemy(this.ctx, this.canvasSize, 590, 72, 70, 70, 2, 'y','enemy.png')
    const enemy7 = new Enemy(this.ctx, this.canvasSize, 960, 570, 70, 70, 7, 'x','enemy.png')
    const enemy8 = new Enemy(this.ctx, this.canvasSize, 960, 72, 70, 70, 2, 'y','enemy.png')
  
    this.randomEnemy.push(enemy1, enemy2, enemy3,enemy4, enemy5, enemy6,enemy7,enemy8)
    this.shuffleArray(this.randomEnemy)
    this.enemy.push(this.randomEnemy[0],this.randomEnemy[1], this.randomEnemy[2], this.randomEnemy[3], this.randomEnemy[4])

  },
  shuffleArray(array){
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random()*(i+1));
      [array[i],array[j]]=[array[j],array[i]];
    }
  },
  
  drawAll() {
    this.interval = setInterval(() => {
      this.frames++
      this.clearScreen()
      this.player.draw()
      this.popino.draw()
      this.chest.draw()
      this.door.draw()
      this.enemy.forEach(elm => elm.draw())
      this.wall.forEach(elm => elm.draw())
      this.moveEnemyWall(this.enemy)
      this.enemyCatchPlayer(this.player) ? this.gameOver(): null
      this.playerGetKey()
      this.playerOpenDoor()
      this.freePopino()
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
    
      enemy.enemyPos.x + enemy.enemySize.w >= wall.wallPos.x &&
      enemy.enemyPos.x < wall.wallPos.x + wall.wallSize.w &&
      enemy.enemyPos.y + enemy.enemySize.h >= wall.wallPos.y &&
      enemy.enemyPos.y < wall.wallPos.y + wall.wallSize.h
    );
  },

  isCollisionPlayer(enemy, player) {
      return (
    
      enemy.enemyPos.x + enemy.enemySize.w >= player.playerPos.x &&
      enemy.enemyPos.x < player.playerPos.x + player.playerSize.w &&
      enemy.enemyPos.y + enemy.enemySize.h >= player.playerPos.y &&
      enemy.enemyPos.y < player.playerPos.y + player.playerSize.h
      );
  },

playerGetChest() {
  return (
    this.chest.chestPos.x + this.chest.chestSize.w >= this.player.playerPos.x &&
    this.chest.chestPos.x < this.player.playerPos.x + this.player.playerSize.w &&
    this.chest.chestPos.y + this.chest.chestSize.h >= this.player.playerPos.y &&
    this.chest.chestPos.y < this.player.playerPos.y + this.player.playerSize.h
    ); 
  
},
playerGetKey() {
     if(this.playerGetChest()){
      this.key=true
    } 
    
},
playerGetDoor() {
  return (
    this.door.doorPos.x + this.door.doorSize.w >= this.player.playerPos.x &&
    this.door.doorPos.x < this.player.playerPos.x + this.player.playerSize.w &&
    this.door.doorPos.y + this.door.doorSize.h >= this.player.playerPos.y &&
    this.door.doorPos.y < this.player.playerPos.y + this.player.playerSize.h
    ); 

  
},
 playerOpenDoor() {
   if (this.playerGetDoor() && this.key === false){
    this.lock = true
   }
  else if(!this.playerGetDoor()){
    this.lock = false
  }
  },
playerGetPopino() {
  return (
    this.popino.popinoPos.x + this.popino.popinoSize.w >= this.player.playerPos.x &&
    this.popino.popinoPos.x < this.player.playerPos.x + this.player.playerSize.w &&
    this.popino.popinoPos.y + this.popino.popinoSize.h >= this.player.playerPos.y &&
    this.popino.popinoPos.y < this.player.playerPos.y + this.player.playerSize.h
    ); 
  },
  freePopino() {
    if (this.playerGetPopino()) {
      this.popino.move(500,570);
    }

  },
  enemyCatchPlayer(player) {
    return this.enemy.some(enemy => this.isCollisionPlayer(enemy, player));
  },
  
  gameOver() {
    clearInterval(this.interval);
    alert('Has perdido')
    this.start()
   },
  
  reset() {
    this.enemy=[]
   }
  
} 