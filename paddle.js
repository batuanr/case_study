class Paddle {
    constructor(game) {
        this.game = game;
        this.x = 250;
        this.y = 600;
    }
    drawPaddle(){
        this.game.context.fillStyle='blue'
        this.game.context.fillRect(this.x,this.y,100,5)
    }
    run(){
        document.addEventListener('keydown',(e)=>{
            switch (e.keyCode) {
                case 37:this.x-=20;
                break;
                case 39:this.x+=20;
                break;
            }
        })
    }
}
let p = new Paddle()