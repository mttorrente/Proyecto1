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
      top: 'w',
      bottom: 's',
      left: 'a',
      right: 'd'
  },

    init(id) {
        this.canvasTag = document.getElementById(id);
        this.ctx = this.canvasTag.getContext('2d');
        this.setDimensions()
        this.createPlayer()
        this.drawAll() 
        this.setEventListeners()
    },

    setDimensions() {
        this.canvasSize.w = window.innerWidth
        this.canvasSize.h = window.innerHeight
        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)
    },
     setEventListeners() { 
       document.onkeydown = e => {
       e.key === this.keys.top ? this.player.move('top'): null 
       e.key === this.keys.bottom ? this.player.move('bottom'): null
       e.key === this.keys.left ? this.player.move('left') :null
       e.key === this.keys.right ? this.player.move('right') : null
      
    }

  },

    createPlayer() {

    this.player = new Player (this.ctx, 210, 500, 70, 70, "player.png");
  },
    drawAll() {
      setInterval(() => {
      this.frames++
      this.clearScreen()
      this.player.draw()
        
      }, 70)
    },
    clearScreen() {
      this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }
    
}