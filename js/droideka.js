// droideka is an upgrade of vader
// need to add "nodes" so droideks will choose every node a random direction to go to the next node

const nodeToTrajectory = (node , x , y ) => {
    let tox = node.x ;
    let toy = node.y ;
    let direction ; 
    let magnitude ;

    if(tox == x){
        // work on y :
        if(y>toy){
            direction = "up" ;
            magnitude = y - toy ;
        }
        else{
            direction = "down" ;
            magnitude = toy - y ;
        }
    }else if(toy == y){
        // work on x :
        if(x>tox){
            direction = "left" ;
            magnitude = x - tox ;
        }
        else{
            direction = "right" ;
            magnitude = tox - x ;
        }
    }else{
        console.log("node path error") ;
        console.log({x : x , tox : tox , y : y , toy : toy}) ;
    }
    //console.log([{direction : direction , magnitude : magnitude}]) ;
    return [{direction : direction , magnitude : magnitude}] ;
}

const randomNeigh = (node) => {
    return Math.floor(Math.random() * node.length);
}

class Droideka{
    constructor(x , y , node ,color1 , color2){
        this.initx = x ;
        this.inity = y ;
        this.x = x ;
        this.y = y ;
        this.color1 = color1 ;
        this.color2 = color2 ;
        this.node = node ;
        //this.moves = JSON.parse(JSON.stringify(trajectory));
        //this.trajectory = JSON.parse(JSON.stringify( trajectory));

        //
        //console.log("x : " + this.x) ;
        //console.log("y : " + this.y ) ;
        this.moves = JSON.parse(JSON.stringify(nodeToTrajectory(node , this.x , this.y ))) ;
        this.trajectory = JSON.parse(JSON.stringify(nodeToTrajectory(node , this.x , this.y) )) ;
        //

        this.step = 0 ;
        this.dx = 0 ;
        this.dy = 0 ;
        this.life = 1 ;
        this.height = 25 ;
        this.width = 25 ;

        this.acceleration = 1
    }

    render(){
        let localColors = ["rgb(0, 0, 95)" , "#101c66"]
        let localColor = localColors[Math.floor(Math.random() * 2)]

        ctx.beginPath() ;
        ctx.rect(this.x , this.y + 5 , 25 , 15) ;
        ctx.fillStyle = localColor ;
        ctx.fill() ;
        ctx.closePath() ;

        ctx.beginPath() ;
        ctx.rect(this.x + 3 , this.y , 19 , 5) ;
        ctx.fillStyle = localColor ;
        ctx.fill() ;
        ctx.closePath() ;

        ctx.beginPath() ;
        ctx.rect(this.x , this.y + 20 , 5 , 5) ;
        ctx.fillStyle = localColor ;
        ctx.fill() ;
        ctx.closePath() ;

        ctx.beginPath() ;
        ctx.rect(this.x + 10 , this.y + 20 , 5 , 5) ;
        ctx.fillStyle = localColor ;
        ctx.fill() ;
        ctx.closePath() ;

        ctx.beginPath() ;
        ctx.rect(this.x + 20, this.y + 20 , 5 , 5) ;
        ctx.fillStyle = localColor ;
        ctx.fill() ;
        ctx.closePath() ;

        ctx.beginPath() ;
        ctx.rect(this.x + 5 , this.y + 5 , 5 , 5) ;
        ctx.fillStyle = this.color2 ;
        ctx.fill() ;
        ctx.closePath() ;

        ctx.beginPath() ;
        ctx.rect(this.x + 15 , this.y + 5 , 5 , 5) ;
        ctx.fillStyle = this.color2 ;
        ctx.fill() ;
        ctx.closePath() ;

        ctx.beginPath() ;
        ctx.rect(this.x + 5 , this.y + 14 , 15 , 3) ;
        ctx.fillStyle = this.color2 ;
        ctx.fill() ;
        ctx.closePath() ;
    }

    update(trajectory){
        if(this.step >= this.moves.length){
            this.step = 0 ;
            //this.x = this.initx ;
            //this.y = this.inity ;
            this.dx = 0 ;
            this.dy = 0 ;
            this.height = 25 ;
            this.width = 25 ;
            //this.moves = this.trajectory.slice(0) ;
            //this.moves = JSON.parse(JSON.stringify( this.trajectory));
            //console.log(this.node) ;
            let neigh //= 0 ; // give node 
            neigh = randomNeigh(this.node.neigh) ;
            this.node = nodes[this.node.neigh[neigh]] ; 
            //console.log(this.node) ;
            this.moves = JSON.parse(JSON.stringify(nodeToTrajectory(this.node , this.x , this.y)));
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

        this.x += this.dx * this.acceleration;
        this.y += this.dy * this.acceleration;
        this.render() ;
    }

}