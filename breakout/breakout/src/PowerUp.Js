class PowerUp {

    constructor(x,y){

        this.x=x
        this.y=y

        this.width=16
        this.height=16

        this.dy=2

        this.active=true
    }

    update(){
        if(this.active){
            this.y+=this.dy
        }
    }

    render(){

        if(this.active){

            fill(0,255,0)

            rect(
                this.x,
                this.y,
                this.width,
                this.height
            )
        }
    }

    collides(target){

        return this.active &&

        this.x < target.x + target.width &&
        this.x + this.width > target.x &&
        this.y < target.y + target.height &&
        this.y + this.height > target.y
    }
}
