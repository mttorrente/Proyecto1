// class wall {
//     constructor(ctx, wallPosX, wallPosY, wallWidth, wallHeight, wallImage) {
//         this.ctx = ctx
//         this.wallPos = {
//             x: wallPosX,
//             y: wallPosY
//         },
//             this.wallSize = {
//                 w: wallWidth,
//                 h: wallHeight
//             },
//             this.imageName = wallImage
//         this.wallInstance = undefined
//         this.init()
    
//     }
//     init() {
//         this.wallInstance = new Image()
//         this.wallInstance.src = `img/${this.imageName}`
//     }

//     draw() {
//         this.ctx.drawImage(this.wallInstance, this.wallPos.x, this.wallPos.y, this.wallSize.w, this.wallSize.h)
//     }
// }