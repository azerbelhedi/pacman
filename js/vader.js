//* darth vader is still a little anakin */ 

class Vader{
    constructor(x , y , color , trajectory){
        this.initx = x ;
        this.inity = y ;
        //this.trajectory = [...trajectory] ;
        //this.moves = trajectory ;
        this.moves = JSON.parse(JSON.stringify( trajectory));
        this.trajectory = JSON.parse(JSON.stringify( trajectory));
        this.step = 0 ;
        this.color = color ;
        this.x = x ;
        this.y = y ;
        this.dx = 0 ;
        this.dy = 0 ;
        this.life = 1 ;
        this.height = 25 ;
        this.width = 25 ;
        this.acceleration = 1 ;
    }

    render(){
        ctx.beginPath() ;
        ctx.rect(this.x , this.y , 25 , 25) ;
        ctx.fillStyle = this.color ;
        ctx.fill() ;
        ctx.closePath() ;

        ctx.beginPath() ;
        ctx.rect(this.x + 2 , this.y + 2 , 8 , 8) ;
        ctx.fillStyle = "black" ;
        ctx.fill() ;
        ctx.closePath() ;

        ctx.beginPath() ;
        ctx.rect(this.x + 15 , this.y + 2 , 8 , 8) ;
        ctx.fillStyle = "black" ;
        ctx.fill() ;
        ctx.closePath() ;

        ctx.beginPath() ;
        ctx.rect(this.x + 5 , this.y + 15 , 15 , 3) ;
        ctx.fillStyle = "black" ;
        ctx.fill() ;
        ctx.closePath() ;

        ctx.beginPath() ;
        ctx.rect(this.x + 4 , this.y + 17 , 4 , 4) ;
        ctx.fillStyle = "black" ;
        ctx.fill() ;
        ctx.closePath() ;

        ctx.beginPath() ;
        ctx.rect(this.x + 17 , this.y + 17 , 4 , 4) ;
        ctx.fillStyle = "black" ;
        ctx.fill() ;
        ctx.closePath() ;
    }

    update(trajectory){
        if(this.step >= this.moves.length){
            this.step = 0 ;
            this.x = this.initx ;
            this.y = this.inity ;
            this.dx = 0 ;
            this.dy = 0 ;
            this.height = 25 ;
            this.width = 25 ;
            //this.moves = this.trajectory.slice(0) ;
            this.moves = JSON.parse(JSON.stringify( this.trajectory));
        }

        else if(this.moves[this.step].direction == "left"){
            if(this.moves[this.step].magnitude > 0){
                this.dx = -1 ;
                this.moves[this.step].magnitude -= 1  ;
            }
            else{
                this.dx = 0 ;
                this.step ++ ;   
            }
        }

        else if(this.moves[this.step].direction == "down"){
            if(this.moves[this.step].magnitude > 0){
                this.dy = 1 ;
                this.moves[this.step].magnitude -= 1  ;
            }
            else{
                this.dy = 0 ;
                this.step ++ ;   
            }
        }

        else if(this.moves[this.step].direction == "up"){
            if(this.moves[this.step].magnitude > 0){
                this.dy = -1 ;
                this.moves[this.step].magnitude -= 1  ;
            }
            else{
                this.dy = 0 ;
                this.step ++ ;   
            }
        } 
        else if(this.moves[this.step].direction == "right"){
            if(this.moves[this.step].magnitude > 0){
                this.dx = 1 ;
                this.moves[this.step].magnitude -= 1  ;
            }
            else{
                this.dx = 0 ;
                this.step ++ ;   
            }
        }

        this.x += this.dx * this.acceleration ;
        this.y += this.dy * this.acceleration;
        this.render() ;
    }

}