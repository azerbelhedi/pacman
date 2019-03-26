const collision = (jarjar , block) =>{
    //ifs
    // jarjar : left , right , up , down
    // block : x , y , height , width 
    if( jarjar.right.x >= block.x && jarjar.right.x <= block.x + 5 &&
        (jarjar.up.y >= block.y && jarjar.up.y <= block.y + block.height ||
        jarjar.down.y >= block.y  && jarjar.down.y <= block.y + block.height )){
        console.log("collision type 1 ") ;
        return true ;
    }
    else if(jarjar.down.y >= block.y && jarjar.down.y <= block.y + 5 &&
       ( (jarjar.right.x >= block.x && jarjar.right.x <= block.x + block.width) ||
        jarjar.left.x >= block.x && jarjar.left.x <= block.x + block.width)){
        console.log("collision type 2 ") ;
        //console.log(jarjar.down.y > block.y && jarjar.down.y < block.y + 5) ;
        return true ;
    }
    else if(jarjar.up.y <= block.y + block.height && jarjar.up.y >= block.y + block.height - 5 &&
        ( jarjar.right.x >= block.x && jarjar.right.x <= block.x + block.width || 
        jarjar.left.x >= block.x && jarjar.left.x <= block.x + block.width)){
        console.log("collision type 3 ") ;
        return true ;
    } 
    else if(jarjar.left.x <= block.x + block.width && jarjar.left.x >= block.x + block.width - 5 && 
        (jarjar.up.y >= block.y && jarjar.up.y <= block.y + block.height ||
        jarjar.down.y >= block.y  && jarjar.down.y <= block.y + block.height )){
        console.log("collision type 4 ") ;
        return true ; 
    }
    else{
        return false ;
    }
} 

class JarJar{
    constructor(x , y , color){
        this.y = y ;
        this.x = x ;
        this.color = color ;
        this.state = 1 ;
        this.dx = 0 ;
        this.dy = 0 ;
    }

    render(){
        ctx.beginPath() ;
        ctx.arc(this.x , this.y , 15 , 0 , Math.PI * 2 * this.state , true ) ;
        ctx.fillStyle = this.color ;
        ctx.fill() ;
        ctx.closePath() ;

        ctx.beginPath() ;
        ctx.rect(this.x - 10 , this.y   , 20 , 10) ;
        ctx.fillStyle = "black" ;
        ctx.fill() ;
        ctx.closePath() ;

        ctx.beginPath() ;
        ctx.arc(this.x - 5 , this.y - 5 , 4 , 0 , Math.PI * 2 * this.state , true ) ;
        ctx.fillStyle = "black" ;
        ctx.fill() ;
        ctx.closePath() ;

        ctx.beginPath() ;
        ctx.arc(this.x + 5 , this.y - 5 , 4 , 0 , Math.PI * 2 * this.state , true ) ;
        ctx.fillStyle = "black" ;
        ctx.fill() ;
        ctx.closePath() ;

    }
    
    update(dx , dy){
        this.dx = dx ;
        this.dy = dy ;
        this.x += dx ;
        this.y += dy ;
        if(this.x < -10){
            this.x = canvas.width -10 ;
        }
        else if(this.x > canvas.width){
            this.x = 0 ;
        }
        this.render() ;
    }
    
    border(mapBlocks){
        let edges = {
            left : {x : this.x - 15 , y : this.y} ,
            right : {x : this.x + 15 , y : this.y} ,
            up : {x : this.x , y : this.y -15} ,
            down : {x : this.x , y : this.y + 15} 
        } ;
        mapBlocks.map(x => {
            if(collision(edges , x)){
                // make something
                this.update(-2 * this.dx , -2 * this.dy) ; // this could cause a position problem 
                this.render() ;
            }
        })
    }
}