class Game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.score =0;
        this.init()
        this.loop()
    }init(){
        this.canvas = document.getElementById('game');
        this.context = this.canvas.getContext('2d');
        this.ball = new Ball(this)
        this.paddle = new Paddle(this)
        this.paddle.run()

    }
    disPlay(){

        this.ball.run()
    }
    draw(){
       this.ball.drawBall()
        this.paddle.drawPaddle()
    }
    loop(){
        this.disPlay()
        this.draw()
        setTimeout(()=>this.loop(),10)
    }
}
let g = new Game();