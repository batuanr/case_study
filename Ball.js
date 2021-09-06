class Ball {
    constructor(game) {
        this.game = game
        this.x = 300;
        this.y = 500;
        this.g = 5;
        this.k = 5;

    }
    drawBall(){
        this.game.context.clearRect(0,0,600,700)
        this.game.context.beginPath()
        this.game.context.arc(this.x,this.y,8,0,2*Math.PI);
        this.game.context.fillStyle='red';
        this.game.context.fill();
    }
    run(){
        this.x+=this.g;
        this.y-=this.k;
        if(this.y==600){
            if(this.x>=p.x&&this.x<=p.y+100){
                this.k= -this.k;
            }
        }
        if(this.x+this.g>600||this.x+this.g<13){
            this.g=-this.g;
        }
        if(this.y-this.k<13){
            this.k=-this.k
        }
        if(this.y-this.k>692){
            this.g=0;
            this.k=0;
            alert('game over');
        }

    }
}